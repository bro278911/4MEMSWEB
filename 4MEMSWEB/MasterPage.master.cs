using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Net;

public partial class MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        this.cmdSignOut.ServerClick += new System.EventHandler(this.cmdSignOut_ServerClick);
    }
    private void cmdSignOut_ServerClick(object sender, System.EventArgs e)
    {
        //清除cookies，清除方法為設定目前日期-1天過期
        Response.Cookies["4mwebcookie"].Expires = DateTime.Now.AddDays(-1);
        //Session.RemoveAll();
        FormsAuthentication.SignOut();
        Response.Redirect("Loginpage.aspx", true);
    }
}
