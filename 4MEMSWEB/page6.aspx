<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page6.aspx.cs" Inherits="page6" %>

<asp:Content ID="page6" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript" src="/EMSscript/page6script.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            getAlarm_Comm_data();
            getOperation_log_data();
            getAlarm_Comm_data_his();
            buildHtmlTable('#tb_Alarm_Imd');
            buildHtmlTable1('#tb_Operation');
            buildHtmlTable2('#tb_Alarm_his');
            var Timer = setInterval(function () {
                getAlarm_Comm_data();
                getOperation_log_data();
                getAlarm_Comm_data_his();
                buildHtmlTable('#tb_Alarm_Imd');
                buildHtmlTable1('#tb_Operation');
                buildHtmlTable2('#tb_Alarm_his');
            }, 1000)

        });
    </script>
    <div class=" col-md-12">
        <div class="panel panel" style="text-align: center; height: 800px">
            <div class="panel-heading text-center" style="background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 24px; font-family: Microsoft JhengHei;">事件紀錄列表</div>
            <div class="panel-body text-center" style="font-weight: bold; font-size: 20px;">
                <ul id="myTab" class="nav nav-pills">
                    <li class="active"><a href="#Operation_div" data-toggle="tab" onclick="TabValue=0">操作事件</a></li>
                    <li><a href="#Alarm_div_Imd" data-toggle="tab" onclick="TabValue = 1">系統即時報警</a></li>
                    <li><a href="#Alarm_div_His" data-toggle="tab" onclick="TabValue = 1">系統歷史報警</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <br />
                    <div class="tab-pane fade in active" id="Operation_div"> <table id="tb_Operation" border="1" class="table table-bordered table-hover table-responsive"></table> </div>
                    <div class="tab-pane fade" id="Alarm_div_Imd"><table id="tb_Alarm_Imd"  border="1" class="table table-bordered table-hover table-responsive"></table></div>
                    <div class="tab-pane fade" id="Alarm_div_His"><table id="tb_Alarm_his"  border="1" class="table table-bordered table-hover table-responsive"></table></div>
                </div>
            </div>

        </div>
    </div>
</asp:Content>
