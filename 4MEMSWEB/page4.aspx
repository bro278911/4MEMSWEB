<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page4.aspx.cs" Inherits="page4" %>

<asp:Content ID="page4" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript" src="/EMSscript/page4script.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            show_page4_data();
            google.charts.setOnLoadCallback(PCSchart);
            var Timer = setInterval(function () {
                show_page4_data();
                google.charts.setOnLoadCallback(PCSchart);
            }, 1000)

        });
    </script>
    <div class=" col-md-4 ">
        <div class="panel panel " style="text-align: center; height: 480px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">功率轉換系統</span>
                </div>
            </div>
            <div class=" col-md-12">
                <img src="/PCS.svg" width="450" height="342" />
            </div>
        </div>
    </div>
    <div class=" col-md-8">
        <div class="panel panel " style="text-align: center; height: 480px"">
            <div class="panel-heading text-center" style="background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 24px; font-family: Microsoft JhengHei;">PCS系統狀態</div>
            <div class="panel-body text-center" style="font-weight: bold; font-size: 20px;">
                <ul id="myTab" class="nav nav-pills">
                    <li class="active"><a href="#Core1_PCS1" data-toggle="tab" onclick="TabValue=0">Core1 PCS1</a></li>
                    <li><a href="#Core2_PCS1" data-toggle="tab" onclick="TabValue = 1">Core2 PCS1</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="Core1_PCS1_Status"></div>
                    <div class="tab-pane fade" id="Core2_PCS1_Status"></div>
                </div>
            </div>
        </div>
    </div>
    <div class=" col-md-12">
        <div class="panel panel-info" style="text-align: center; height: 360px">
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">PCS系統趨勢圖</span>
            </div>
            <div class="panel-body " style="text-align: center;">
                <div id="PCS_chart">
                    <script type="text/javascript">
                        window.onload = startInterval;
                        function startInterval() {
                            setInterval("startTime();", 5000);
                        }

                        function startTime() {
                            document.getElementById('PCS_chart').innerHTML.reload; // reload div    
                        }
                    </script>
                </div>
            </div>
        </div>
        
    </div>

</asp:Content>
