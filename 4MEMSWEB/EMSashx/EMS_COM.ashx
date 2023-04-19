<%@ WebHandler Language="C#" Class="EMS_COM" %>

using System;
using System.Web;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using System.Net.Sockets;
using System.IO;
using System.Threading;
using System.Data.SqlClient;

public class EMS_COM : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.Write("Hello World");

        String select = context.Request.Form["select"];
        String start = context.Request.Form["start"];
        String SET_P = context.Request.Form["SET_P"];
        String SET_Q = context.Request.Form["SET_Q"];
        String SOC_H_limit = context.Request.Form["SOC_H_limit"];
        String SOC_L_limit = context.Request.Form["SOC_L_limit"];
        String P_ref = context.Request.Form["P_ref"];
        String stop = context.Request.Form["stop"];
        if (select == "PCS_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return ;
        }
        else if (select == "COM_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return ;
        }
        else if (select == "STEP_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SCANDOWN_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SCANUP_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SCANDOWN_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SCANUP_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "FULLIN_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "FULLOUT_SET_ON")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "TEST_SET_OFF")
        {
            TcpSendMessage(select, start);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SET_PQ")
        {
            var msg = SET_P + ',' + SET_Q;
            TcpSendMessage(select, msg);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SET_SOC")
        {
            var msg = SOC_H_limit + ',' + SOC_L_limit;
            TcpSendMessage(select, msg);
                context.Response.Write("成功");
            return;
        }
        else if (select == "SET_P_ref")
        {
            TcpSendMessage(select, P_ref);
                context.Response.Write("成功");
            return;
        }
    }

    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
    public void TcpSendMessage(String select, String msg)
    {

        try
        {
            TcpClient TcpAc = new TcpClient("127.0.0.1", 22222);
            NetworkStream ns = TcpAc.GetStream();
            StreamWriter sw = new StreamWriter(ns);
            sw.Write(string.Format("Web,{0},{1}", select, msg));
            sw.Flush();
            TcpAc.Close();
        }
        catch (Exception ex)
        {
            //Label1.Text = Request.Params["SelectValue"] + "傳送錯誤..！";
            //Response.Write("<script>alert('傳送錯誤！')</script>");
            //ClientScript.RegisterStartupScript(GetType(), "Can not open connection ! ", "<script>alert('" + ex + "');</script>");
        }
    }


}