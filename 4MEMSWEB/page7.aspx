<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page7.aspx.cs" Inherits="page7" %>

<asp:Content ID="page7" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript">
        $(document).ready(function () {
            controlstatus('#AFCoperating');
            var Timer = setInterval(function () {
                controlstatus('#AFCoperating');
            }, 5000)

        });
    </script>
    <div class=" col-md-6">
        <div class="panel panel " style="text-align: center; height: 300px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;">控制模式設置區</a>
                </div>
            </div>
            <div class="panel-body">
                <br />
                <div class="col-md-12 text-center">
                    <form name="select_setting" id="select_setting">
                        <select class="form-control" id="controlmode" onclick="selectcontrolmode()">
                            <option value="Manual">手動調度設定</option>
                            <option value="dReg0.25">AFCdReg0.25調度設定</option>
                            <option value="AFCTEST">能力測試設定</option>
                        </select>
                    </form>
                    <br />
                </div>
                <div id="AFCoperating">
                    
                </div>

            </div>
        </div>
    </div>
    <div class=" col-md-6" id="controlarea">
    </div>
    <div class=" col-md-6">
        <div class="panel panel-info" style="text-align: center;">
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">系統趨勢圖</span>
            </div>
            <div class="panel-body " style="text-align: center;">
                <div id="AFCoperating_chart">
                    
                </div>
            </div>
        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel-info" style="text-align: center;">
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">系統趨勢圖</span>
            </div>
            <div class="panel-body " style="text-align: center;">
                <div id="AFCoperating_chart2">
                    
                </div>
            </div>
        </div>
    </div>
</asp:Content>
