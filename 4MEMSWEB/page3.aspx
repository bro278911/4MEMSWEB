<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page3.aspx.cs" Inherits="page3" %>

<asp:Content ID="page3" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <script type="text/javascript" src="/EMSscript/page3script.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            show_page3_data();
            var Timer = setInterval(function () {
                show_page3_data();
            }, 1000)

        });
    </script>
    <div class=" col-md-2 ">
        <div class="panel panel " style="text-align: center; height: 320px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">電池管理系統</span>
                </div>
            </div>
            <div class=" col-md-12" >
                 <img src="/Cube.svg" width="245" height="235" />
            </div>
        </div>
    </div>

    <div class=" col-md-10 ">
        <div class="panel panel" style="text-align: center; height: 320px">
            <div class="panel-heading text-center" style="background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 24px; font-family: Microsoft JhengHei;">電池系統狀態</div>
            <div class="panel-body text-center" style="font-weight: bold; font-size: 20px;">
                <ul id="myTab" class="nav nav-pills">
                    <li class="active"><a href="#Core1_BESS_Status" data-toggle="tab" onclick="TabValue=0">Core1 BMS</a></li>
                    <li><a href="#Core2_BESS_Status" data-toggle="tab" onclick="TabValue = 1">Core2 BMS</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="Core1_BESS_Status"></div>
                    <div class="tab-pane fade" id="Core2_BESS_Status"></div>
                </div>
            </div>
        </div>
    </div>

    <div class=" col-md-12 ">
        <div class="panel panel" style="text-align: center; height: 800px">
            <div class="panel-heading text-center" style="background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 24px; font-family: Microsoft JhengHei;">Cube資訊</div>
            <div class="panel-body text-center" style="font-weight: bold; font-size: 20px;">
                <ul id="myTab1" class="nav nav-pills">
                    <li class="active"><a href="#Core1_Cube1" data-toggle="tab" onclick="TabValue=0">Core1 Cube1</a></li>
                    <li><a href="#Core1_Cube2" data-toggle="tab" onclick="TabValue = 1">Core1 Cube2</a></li>
                    <li><a href="#Core1_Cube3" data-toggle="tab" onclick="TabValue = 2">Core1 Cube3</a></li>
                    <li><a href="#Core1_Cube4" data-toggle="tab" onclick="TabValue = 3">Core1 Cube4</a></li>
                    <li><a href="#Core2_Cube1" data-toggle="tab" onclick="TabValue = 4">Core2 Cube1</a></li>
                    <li><a href="#Core2_Cube2" data-toggle="tab" onclick="TabValue = 5">Core2 Cube2</a></li>
                    <li><a href="#Core2_Cube3" data-toggle="tab" onclick="TabValue = 6">Core2 Cube3</a></li>
                    <li><a href="#Core2_Cube4" data-toggle="tab" onclick="TabValue = 7">Core2 Cube4</a></li>
                </ul>
                <div id="myTab1Content" class="tab-content">
                    <div class="tab-pane fade in active" id="Core1_Cube1"></div>
                    <div class="tab-pane fade" id="Core1_Cube2"></div>
                    <div class="tab-pane fade" id="Core1_Cube3"></div>
                    <div class="tab-pane fade" id="Core1_Cube4"></div>
                    <div class="tab-pane fade" id="Core2_Cube1"></div>
                    <div class="tab-pane fade" id="Core2_Cube2"></div>
                    <div class="tab-pane fade" id="Core2_Cube3"></div>
                    <div class="tab-pane fade" id="Core2_Cube4"></div>
                </div>
            </div>

        </div>
    </div>

</asp:Content>
