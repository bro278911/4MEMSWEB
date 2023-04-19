<%@ WebHandler Language="C#" Class="getSystem_data" %>

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

public class getSystem_data : IHttpHandler {

    public void ProcessRequest(HttpContext context)
    {
        string str_json = null;
        try
        {
            //呼叫以定義類別
            Method_4M method = new Method_4M();
            //使用類別內function將資料轉為DataTable
            DataTable re_ = method.getSystem_data();
            //將DataTable轉成JSON字串
            str_json = JsonConvert.SerializeObject(re_, Formatting.Indented);
            context.Response.Write(str_json);//印出回傳資料 
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