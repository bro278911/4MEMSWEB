<%@ WebHandler Language="C#" Class="logincheck" %>

using System;
using System.Web;
/*要引用以下的命名空間*/
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.IO;
/*Json.NET相關的命名空間*/
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Web.SessionState;

public class logincheck : IHttpHandler
{

    string connetionString = null;
    SqlConnection connection;

    String str = null;

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        //context.Response.Write("Hello World");

        String Username = context.Request.Form["username"];
        String Password = context.Request.Form["password"];
        //String stop = context.Request.Form["stop"];
        connetionString = "Data Source = NB286;Persist Security Info = True; User ID = sa; Password = Yatec86386334";
        //connetionString = "Data Source = DESKTOP-COO7FH2;Persist Security Info = True; User ID = sa; Password = Yell7811049";
        connection = new SqlConnection(connetionString);
        //str = context.Request.Form["sqlstr"];

        context.Response.ContentType = "text/plain";
        string str = "SELECT [Password] FROM [test].[dbo].[User_List] WHERE [User_name] ='" + Username + "'";
        //string str = "SELECT [Password] FROM [TECO_EMS].[dbo].[User_List] WHERE [User_name] ='" + Username + "'";
        string str_json = null;
        DataSet dt = new DataSet();
        try
        {
            connection.Open();
            SqlDataAdapter data = new SqlDataAdapter(str, connection);
            DataTable datatable = new DataTable();
            data.Fill(datatable);
            //將DataTable轉成JSON字串
            //str_json = JsonConvert.SerializeObject(datatable, Formatting.Indented);
            //context.Response.Write(str_json);

            //Console.WriteLine(dt.Tables);
            data.Fill(dt);
            string psd = null;
            string username = null;
            username = Username + "";
            psd = dt.Tables[0].Rows[0][0].ToString();
            //context.Response.Write(psd+","+username);
            //context.Response.Write(username);
            if (Password == psd)
            {
                context.Response.Write("成功!!!");

            }
            else
            {
                context.Response.Write("失敗!!!");

            }
            connection.Close();
            data.Dispose();
            dt.Dispose();
        }
        catch (Exception ex)
        {

        }

    }


    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}