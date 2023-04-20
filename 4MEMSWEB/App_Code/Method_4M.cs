using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

/// <summary>
/// Method_Fish 的摘要描述
/// </summary>
public class Method_4M
{
    string web_sql = WebConfigurationManager.ConnectionStrings["4M_WEB"].ConnectionString;
    SqlConnection conn;
    public Method_4M()
    {
        conn = new SqlConnection(web_sql);
    }

    #region 登入確認
    public DataTable login_check(string account,string password)
    {
        SqlCommand cmd = new SqlCommand(@"Select [pwd] from [2M_Web_Data].[dbo].[Users] where (uname = @account) AND (pwd = @password)");
        cmd.Parameters.Add("@account", SqlDbType.NVarChar, 50).Value = account;
        cmd.Parameters.Add("@password", SqlDbType.NVarChar, 50).Value = password;
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region  取所有資料

    #region get_AFC0.25
    public DataTable getAFC0()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT * FROM [test].[dbo].[AFCTEST] order by [datatime] DESC");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region get_Alarm_Comm_Data
    public DataTable get_getAlarm_Comm_Data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT *  FROM [2M_Web_Data].[dbo].[Alarm_Comm_list] WHERE [ALM_msg]  != 'Normal' or [COM_Status] != 'Normal'");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region get_EMS_data
    public DataTable get_EMS_data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT * FROM [2M_Web_Data].[dbo].[EMS] ORDER BY datatime DESC");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getFLNBMS_PCS_data
    public DataTable getFLNBMS_PCS_data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT * FROM [2M_Web_Data].[dbo].[FLN_bms1_pcs1_data_list]");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getFLNCubedata
    public DataTable getFLNCubedata()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT * FROM [2M_Web_Data].[dbo].[FLN_Cube_data_list]");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getNewWarning_data
    public DataTable getNewWarning_data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT * FROM [2M_History_Data].[dbo].[Alarm_Comm_list] Order By datatime DESC OFFSET 0 ROWS FETCH NEXT 3 ROWS ONLY");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getNexus_Hs_Data
    public DataTable getNexus_Hs_Data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT * FROM [2M_Web_Data].[dbo].[Nexus_High_Speed_Data]");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getOperation_log_Data
    public DataTable getOperation_log_Data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT TOP (1000)*  FROM [2M_Web_Data].[dbo].[Operation_log]");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getPcs_data
    public DataTable getPcs_data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT [datatime],[P_ref],[Base_Freq] FROM [2M_Web_Data].[dbo].[EMS] WHERE  datediff(s,convert(varchar(100),[datatime],111),convert(varchar(100),[datatime],120)) % 10 = '0'");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getPermission_data
    public DataTable getPermission_data(string loginname)
    {
        SqlCommand cmd = new SqlCommand(@"Select [permission] from [2M_Web_Data].[dbo].[Users] where uname= @loginname ");
        cmd.Parameters.Add("@loginname", SqlDbType.NVarChar, 50).Value = loginname;
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getSBSPM_data
    public DataTable getSBSPM_data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT [datatime],[SBPSPM] FROM [2M_Web_Data].[dbo].[EMS] WHERE  datediff(s,convert(varchar(100),[datatime],111),convert(varchar(100),[datatime],120)) % 10 = '0'");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #region getSystem_data
    public DataTable getSystem_data()
    {
        SqlCommand cmd = new SqlCommand(@"SELECT [datatime],[P_ref],[Base_Freq] FROM [2M_Web_Data].[dbo].[EMS] WHERE  datediff(s,convert(varchar(100),[datatime],111),convert(varchar(100),[datatime],120)) % 10 = '0'SELECT TOP 7200 [datatime],[P_ref],[Base_Freq] FROM ( SELECT ROW_NUMBER() OVER (PARTITION BY [datatime] ORDER BY [datatime] DESC) AS ROWNUM,*FROM [2M_Web_Data].[dbo].[EMS]) AS TempM WHERE ROWNUM = 1 ORDER BY [datatime] DESC");
        DataTable dt = FourM_WEB.SqlHelper.cmdTable(cmd);
        return dt;
    }
    #endregion

    #endregion
}