<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="page5.aspx.cs" Inherits="page5" %>

<asp:Content ID="page5" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class=" col-md-6">
        <div class="panel panel " style="text-align: center; height: 400px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">儲能系統</a>
                </div>

            </div>

            <table style="text-align: center;" class="table">
                <tr class="default">
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">狀態</span></th>
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">設備名稱</span></th>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">電池管理系統</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">空調系統#1</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">空調系統#2</span></td>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">電池櫃UPS</span></td>
                </tr>

            </table>

        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel " style="text-align: center; height: 400px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">儲能系統控制盤</a>
                </div>
            </div>

            <table style="text-align: center;" class="table">
                <tr class="default">
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">狀態</span></th>
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">設備名稱</span></th>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">儲能控制器</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">電網控制器</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">資料收集器</span></td>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">監控櫃UPS</span></td>
                </tr>
            </table>

        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel " style="text-align: center; height: 400px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">電力設備</a>
                </div>
            </div>

            <table style="text-align: center;" class="table">
               <tr class="default">
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">狀態</span></th>
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">設備名稱</span></th>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">MVCB電表</span></td>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">MVCB保護電驛</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">VCB1電表</span></td>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">VCB1保護電驛</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">VCB2電表</span></td>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">VCB2保護電驛</span></td>
                </tr>
                <tr>
                    <td><span class="label label-danger"style="font-weight: bold; font-size: 18px;">異常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">AUX電表</span></td>
                </tr>
                
            </table>

        </div>
    </div>
    <div class=" col-md-6">
        <div class="panel panel " style="text-align: center; height: 400px">
            <div class="panel-heading col-md-12 text-center" style="background-color: #1B8CDE;">
                <div class="text-center">
                    <a style="color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;" href="">變壓器</a>
                </div>
            </div>

            <table style="text-align: center;" class="table">
                <tr class="default">
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">狀態</span></th>
                    <th style="text-align: center;"><span style="font-weight: bold; font-size: 18px;">設備名稱</span></th>
                </tr>
                <tr>
                    <td><span class="label label-success"style="font-weight: bold; font-size: 18px;">正常</span></td>
                    <td><span style="font-weight: bold; font-size: 20px;">油溫檢測表</span></td>
                </tr>
                
            </table>

        </div>
    </div>

</asp:Content>
