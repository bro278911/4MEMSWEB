<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page1.aspx.cs" Inherits="page1" %>

<asp:Content ID="page1" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
        <script type="text/javascript" src="/EMSscript/page1script.js"></script>
        <script type="text/javascript" src="/EMSscript/EMS_Command.js"></script>
        <script type="text/javascript">
            $(document).ready(function () {
                //v呼叫新表格系統警告方法
                New_Warning('#NewWarning');
                var Timer = setInterval(function () {
                    New_Warning('#NewWarning');
                }, 1000)

            });
        </script>
        <div class="col-md-12 text-center" id="NewWarning"></div>
        <div class=" col-md-12">
            <div class="panel panel " style="text-align: center;">
                <div class="panel-heading " style="background-color: #1B8CDE;">
                    <div class="text-center">
                        <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">系統單線圖</span>
                    </div>
                </div>
                <div class="panel-body " style="text-align: center;">
                    <div style="background-image: url(/sys_single_4M_B.svg); width: 1515px; height: 1561px;">
                        <div class="col-sm-1 col-xs-1" id="MVCB" style="position: relative; top: 359px; left: 235px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB1" style="position: relative; top: 615px; left: 108px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB2" style="position: relative; top: 1120px; left: -15px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB3" style="position: relative; top: 365px; left: 545px;"></div>
                        <div class="col-sm-1 col-xs-1" id="MVCB_Relay" style="position: relative; top: 362px; left: -500px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB1_Relay" style="position: relative; top: 620px; left: -628px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB2_Relay" style="position: relative; top: 1125px; left: -760px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB3_Relay" style="position: relative; top: 368px; left: -200px;"></div>
                        <div class="col-sm-1 col-xs-1" id="MVCB_Meter" style="position: relative; top: 340px; left:-590px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB1_Meter" style="position: relative; top: 600px; left:-720px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB2_Meter" style="position: relative; top: 1100px; left:-830px;"></div>
                        <div class="col-sm-1 col-xs-1" id="VCB3_Meter" style="position: relative; top: 350px; left:-290px;"></div>
                        <div class="col-sm-1 col-xs-1" id="TR1" style="position: relative; top:620px; left: 250px;"></div>
                        <div class="col-sm-1 col-xs-1" id="TR2" style="position: relative; top:1120px; left: 125px;"></div>
                        <div class="col-sm-1 col-xs-1" id="AUX_Meter" style="position: relative; top: 540px; left: 840px;"></div>
                        <%-- 在空白處新增一個系統狀態表格 --%>
                        <div class="col-sm-3 col-xs-3" id="sys_status" style="position: relative; top: -170px; left: 700px;"></div>
                    </div>
                </div>
            </div>
        </div>
</asp:Content>

