<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page8.aspx.cs" Inherits="page8" %>

<asp:Content ID="page8" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <div class=" col-md-12 ">
        <form name="search" id="search">
            <div class="panel panel">
                <div class="panel-heading text-center" style="background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;">搜尋條件</div>
                <div class="panel-body">
                    <div class="col-md-12text-center" id="select" onclick="selectsetting()">
                        </br>
                    </div>
                    <div class="col-md-12text-center" id="BESSMaster">
                    </div>
                    <div class="col-md-12text-center" id="BESSSlave">
                    </div>
                    <div class="col-md-12text-center" id="select_sys_poewer">
                    </div>
                    <div class="col-md-12text-center" id="select_sys_voltage">
                    </div>
                    <div class="col-md-12text-center" id="select_PCS">
                    </div>
                    <div class='col-md-6'>
                        <div class="form-group">
                            <span style="font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;">起始時間</span>
                            <div class='input-group date' id='datetimepicker2'>
                                <input type='text' class="form-control" />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class='col-md-6'>
                        <div class="form-group">
                            <span style="font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;">結束時間</span>
                            <div class='input-group date' id='datetimepicker3'>
                                <input type='text' class="form-control" />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <script type="text/javascript">
                        $(function () {
                            $('#datetimepicker2').datetimepicker({
                                locale: 'zh-tw'
                            });
                        });
                        $(function () {
                            $('#datetimepicker3').datetimepicker({
                                locale: 'zh-tw'
                            });
                        });
                    </script>
                    <div class="col-md-12text-center">
                        <button id="btPause" type="button" class="btn btn-primary " onclick="searchdata()"><span class="glyphicon glyphicon-search" aria-hidden="true"></span>搜尋</button>
                        <button id="btPause1" type="button" class="btn btn-primary " onclick="searchdata_download()"><span class="glyphicon glyphicon-save" aria-hidden="true"></span>下載</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class=" col-md-12">
        <div class="panel panel " style="text-align: center;" >
            <div class="panel-heading " style="background-color: #1B8CDE;">
                <div class="text-center">
                    <span style="color: #ffffff; font-weight: bold; font-size: 20px; font-family: Microsoft JhengHei;">查詢結果</span>
                </div>
            </div>
            <div class="panel-body " style="text-align: center;">
                <div id="his_chart">
                </div>
            </div>
        </div>
    </div>

</asp:Content>
