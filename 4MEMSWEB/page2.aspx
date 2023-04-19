<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page2.aspx.cs" Inherits="page2" %>

<asp:Content ID="page2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript" src="/EMSscript/page2script.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            show_page2_data();
            var Timer = setInterval(function () {
                show_page2_data();
            }, 1000)

        });
    </script>
    <div class=" col-md-12 ">

        <div class="panel panel" style="text-align: center; height: 800px">
            <div class="panel-heading text-center" style="background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 24px; font-family: Microsoft JhengHei;">盤體資訊</div>
            <div class="panel-body text-center" style="font-weight: bold; font-size: 20px;">
                <ul id="myTab" class="nav nav-pills">
                    <li class="active"><a href="#MVCB_div" data-toggle="tab" onclick="TabValue=0">MVCB盤</a></li>
                    <li><a href="#VCB1_div" data-toggle="tab" onclick="TabValue = 1">VCB盤1</a></li>
                    <li><a href="#VCB2_div" data-toggle="tab" onclick="TabValue = 2">VCB盤2</a></li>
                    <li><a href="#VCB3_div" data-toggle="tab" onclick="TabValue = 3">VCB盤3</a></li>
                    <li><a href="#AUX_div" data-toggle="tab" onclick="TabValue = 4">AUX盤</a></li>
                    <li><a href="#ModuleTabA" data-toggle="tab" onclick="TabValue = 5">其他</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <br />
                    <div class="tab-pane fade in active" id="MVCB_div"></div>
                    <div class="tab-pane fade" id="VCB1_div"></div>
                    <div class="tab-pane fade" id="VCB2_div"></div>
                    <div class="tab-pane fade" id="VCB3_div"></div>
                    <div class="tab-pane fade" id="AUX_div"></div>
                    <div class="tab-pane fade" id="ModuleTabA"></div>
                </div>
            </div>

        </div>

    </div>







</asp:Content>

