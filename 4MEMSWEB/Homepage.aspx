<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Homepage.aspx.cs" Inherits="Homepage" %>

<asp:Content ID="Homepage" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">


    <div class=" col-md-2">
        <div class="panel panel" style="text-align: center;">
            <div class="col-md-6text-center" id="sbspm_div"></div>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel" style="text-align: center;">
            <div class="col-md-6text-center" id="sys_p_div"></div>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel" style="text-align: center;">
            <div class="col-md-6text-center" id="sys_q_div"></div>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel" style="text-align: center;">
            <div class="col-md-6text-center" id="sys_Hz_div"></div>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel" style="text-align: center;">
            <div class="col-md-6text-center" id="sys_soc_div"></div>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel" style="text-align: center;">
            <div class="col-md-6text-center" id="sys_temp_div"></div>
        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel-info" style="text-align: center; height: 330px">
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">系統執行率趨勢圖</span>
            </div>
            <div class="panel-body " style="text-align: center;">
                <div id="sbspm_chart">
                    <script type="text/javascript">
                        window.onload = startInterval;
                        function startInterval() {
                            setInterval("startTime();", 5000);
                        }

                        function startTime() {
                            chart2.clearChart();  
                        }
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel-info" style="text-align: center; height: 330px">
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">系統趨勢圖</span>
            </div>
            <div class="panel-body " style="text-align: center;">
                <div id="sys_chart">
                    <script type="text/javascript">
                        window.onload = startInterval;
                        function startInterval() {
                            setInterval("startTime();", 5000);
                        }

                        function startTime() {
                            document.getElementById('sys_chart').innerHTML.reload; // reload div    
                        }
                    </script>
                </div>
            </div>
        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel-info" style="text-align: center; height: 370px">
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">殘電量圖</span>
            </div>
            <div class="panel-body " style="text-align: center;">
                <ul id="myTab" class="nav nav-tabs">
                    <li class="active"><a href="#Core1_Chart" data-toggle="tab" onclick="TabValue=0">Core1</a></li>
                    <li><a href="#Core2_Chart" data-toggle="tab" onclick="TabValue = 1">Core2</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="Core1_Chart">
                    <script type="text/javascript">
                        window.onload = startInterval;
                        function startInterval() {
                            setInterval("startTime();", 5000);
                        }

                        function startTime() {
                            document.getElementById('Core1_Chart').innerHTML.reload; // reload div    
                        }
                    </script>
                </div>
                <div class="tab-pane fade" id="Core2_Chart">
                    <script type="text/javascript">
                        window.onload = startInterval;
                        function startInterval() {
                            setInterval("startTime();", 5000);
                        }

                        function startTime() {
                            document.getElementById('Core2_Chart').innerHTML.reload; // reload div    
                        }
                    </script>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel " style="text-align: center; height: 170px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">系統資訊</a>
                </div>
            </div>
            <table id="tb_sys" class="table" style="font-size: 16px; font-weight: bold;">
            </table>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel " style="text-align: center; height: 170px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">高壓資訊</a>
                </div>
            </div>
            <table id="tb_HV" class="table" style="font-size: 16px; font-weight: bold;">
            </table>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel " style="text-align: center; height: 170px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">輔助電源資訊</a>
                </div>
            </div>
            <table id="tb_AUX" class="table" style="font-size: 16px; font-weight: bold;">
            </table>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel " style="text-align: center; height: 170px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">電力轉換系統資訊</a>
                </div>
            </div>
            <table id="tb_PCS" class="table" style="font-size: 16px; font-weight: bold;">
            </table>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel " style="text-align: center; height: 170px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">電池貨櫃資訊</a>
                </div>
            </div>
            <table id="tb_BESS" class="table" style="font-size: 16px; font-weight: bold;">
            </table>
        </div>
    </div>
    <div class=" col-md-2">
        <div class="panel panel " style="text-align: center; height: 170px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">電池組資訊</a>
                </div>
            </div>
            <table id="tb_BESS1" class="table" style="font-size: 16px; font-weight: bold;">
            </table>
        </div>
    </div>
</asp:Content>

