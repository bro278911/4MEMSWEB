<%@ WebHandler Language="C#" Class="getAlarm_Comm_Data" %>

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

public class getAlarm_Comm_Data : IHttpHandler {
    
    string connetionString = null;
    SqlConnection connection;
    String str1;
    public void ProcessRequest(HttpContext context)
    {
        connetionString = "Data Source = MSI;Persist Security Info = True; User ID = test; Password = qwer123";/*資料庫連接字串*/
        connection = new SqlConnection(connetionString);
        str1 = "SELECT TOP (1000) * FROM [2M_History_Data].[dbo].[Alarm_Comm_list] ORDER BY [datatime]";
        //      "select * from [TCP_Immediately].[dbo].[Module_data] a where (Module_id = '" + cellID + "') and (datatime=(select max(datatime) from[TCP_Immediately].[dbo].[Module_data] where [Module_id]=a.[Module_id]))"; 
        context.Response.ContentType = "text/plain";

        context.Response.Write(this.GetData());


    }

    public String GetData()
    {
        string str_json = null;
        try
        {
            connection.Open();
            SqlDataAdapter data = new SqlDataAdapter(str1, connection);
            DataTable datatable = new DataTable();
            data.Fill(datatable);

            //將DataTable轉成JSON字串
            str_json = JsonConvert.SerializeObject(datatable, Formatting.Indented);

            connection.Close();
            data.Dispose();
            datatable.Dispose();
        }
        catch (Exception ex)
        {

        }


        return str_json;
    }



    public bool IsReusable
    {
        get
        {
            return false;
        }
    }

}