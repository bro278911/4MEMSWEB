using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Web.Security;
/*Json.NET相關的命名空間*/
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.SessionState;

public partial class Loginpage : System.Web.UI.Page
{

    protected void Page_Load(object sender, EventArgs e)
    {
        UnobtrusiveValidationMode = UnobtrusiveValidationMode.None;
        this.cmdLogin.ServerClick += new System.EventHandler(this.cmdLogin_ServerClick);
    }
    private bool ValidateUser(string userName, string passWord, string myvad, string myvad_ans)
    {
        string lookupPassword = null;
        string lookupmyVad = null;
        // Check for invalid userName.
        // userName must not be null and must be between 1 and 15 characters.
        if ((null == userName) || (0 == userName.Length) || (userName.Length > 15))
        {
            System.Diagnostics.Trace.WriteLine("[ValidateUser] Input validation of userName failed.");
            return false;
        }

        // Check for invalid passWord.
        // passWord must not be null and must be between 1 and 25 characters.
        if ((null == passWord) || (0 == passWord.Length) || (passWord.Length > 25))
        {
            System.Diagnostics.Trace.WriteLine("[ValidateUser] Input validation of passWord failed.");
            return false;
        }
        if ((null == myvad) || (0 == myvad.Length) || (myvad.Length > 25))
        {
            System.Diagnostics.Trace.WriteLine("[ValidateUser] Input validation of passWord failed.");
            return false;
        }
        try
        {
            //呼叫以定義類別
            Method_4M method = new Method_4M();
            //使用類別內function將資料轉為DataTable
            DataTable re_ = method.login_check(userName, passWord);
            //將DataTable轉成JSON字串
            //str_json = JsonConvert.SerializeObject(re_, Formatting.Indented);
            //context.Response.Write(str_json);

            //Console.WriteLine(re_);

            string psd = null;
            string username = null;
            username = userName;
            psd = re_.Rows[0][0].ToString();
            //使用session儲存登入者帳號名稱，需要時再用資料庫找權限因應伺服器端及用戶端不可互相取用故放棄(未啟用)
            //Session["login_username"] = username;

            //使用者名稱使用cookie存儲以備使用
            HttpCookie cookie = new HttpCookie("4mwebcookie");//初始化並設置Cookie的名稱
            cookie.Values.Add("username", username);
            Response.AppendCookie(cookie);
            //輸出該Cookie的所有內容
            //Response.Write(cookie.Value);

            //context.Response.Write(psd+","+username);
            //context.Response.Write(username);
            if (passWord == psd && myvad == myvad_ans)
            {

                Console.WriteLine("成功!!!");
                lookupPassword = psd;
                lookupmyVad = myvad_ans;
            }
            else
            {
                Console.WriteLine("失敗!!!");

            }
            re_.Dispose();
        }
        catch (Exception ex)
        {
            // Add error handling here for debugging.
            // This error message should not be sent back to the caller.
            System.Diagnostics.Trace.WriteLine("[ValidateUser] Exception " + ex.Message);
        }

        // If no password found, return false.
        if (null == lookupPassword || null == lookupmyVad)
        {
            // You could write failed login attempts here to event log for additional security.
            return false;
        }

        // Compare lookupPassword and input passWord, using a case-sensitive comparison.
        return (0 == string.Compare(lookupPassword, passWord, false));
    }
    private void cmdLogin_ServerClick(object sender, System.EventArgs e)
    {
        if (ValidateUser(txtUserName.Value, txtUserPass.Value, myvad.Value, myvad_ans.Value))
        {
            FormsAuthenticationTicket tkt;
            string cookiestr;
            HttpCookie ck;
            tkt = new FormsAuthenticationTicket(1, txtUserName.Value, DateTime.Now,
            DateTime.Now.AddMinutes(30), chkPersistCookie.Checked, "your custom data");
            cookiestr = FormsAuthentication.Encrypt(tkt);
            ck = new HttpCookie(FormsAuthentication.FormsCookieName, cookiestr);
            if (chkPersistCookie.Checked)
                ck.Expires = tkt.Expiration;
            ck.Path = FormsAuthentication.FormsCookiePath;
            Response.Cookies.Add(ck);

            string strRedirect;
            strRedirect = Request["ReturnUrl"];
            if (strRedirect == null)
                strRedirect = "Homepage.aspx";
            Response.Redirect(strRedirect, true);
        }
        else
            Response.Redirect("Loginpage.aspx", true);
    }
}