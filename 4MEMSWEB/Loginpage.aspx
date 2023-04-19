<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Loginpage.aspx.cs" Inherits="Loginpage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!-- Bootstrap CSS -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/yatecstyle.css" />
    <link rel="stylesheet" href="/css/dashboard.css" />
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <link rel="shortcut icon" href="logo/TECO_icon.ico" />
    <script type="text/javascript" src="/EMSscript/systemscript.js"></script>
    <title>雲端監管平台</title>
    <script type="text/javascript"> 
        $(document).ready(function () {
            myTimer();
            
            var Timer = setInterval(function () {
                myTimer();
                
            }, 1000)

        });
    </script>
</head>
<body style="background-image: url(/login.svg);">
    <nav class="navbar navbar-fixed-top">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    </button>
                    <a class="navbar-brand" href="Homepage.aspx">
                        <img src="/logo/TECO_logo.svg" width="150" height="40" alt='TECO' /></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse navbar-collapse-center row" id="bs-example-navbar-collapse-1">

                    <p id="pagename" class=" navbar-center">4M儲能系統</p>
                    <p class="navbar-text navbar-right" style="font-weight: bold; font-size: 24px; color: black" id="demo"></p>
                    <%--<button type = "button" class="btn btn-primary btn-lg navbar-btn navbar-right" data-toggle="modal" data-target="#myModal" style = "background-color: #004584; font-weight: bold" > 登入</button>--%>
                </div>


                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    <div style="text-align: center;">
        <button type="button" class="btn btn-primary btn-lg " data-toggle="modal" data-target="#myModal" style="background-color: #004584; font-weight: bold">登入</button>
    </div>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel" style="font-weight: bold">登入頁面</h4>
                </div>
                <form id="form1" runat="server">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="username">使用者名稱</label>
                            <span id="user" class="error"></span>
                            <input type="text" class="form-control" name="username" id="txtUserName" runat="server" placeholder="使用者名稱" />
                            <asp:RequiredFieldValidator ControlToValidate="txtUserName" Display="Static" ErrorMessage="*" runat="server" ID="RequiredFieldValidator1" />
                        </div>
                        <div class="form-group">
                            <label for="password">密碼</label>
                            <span id="psword" class="error"></span>
                            <input type="password" class="form-control" name="password" id="txtUserPass" runat="server" placeholder="密碼" />
                            <asp:RequiredFieldValidator ControlToValidate="txtUserPass" Display="Static" ErrorMessage="*" runat="server" ID="RequiredFieldValidator2" />
                        </div>
                        <div class="form-group">
                            <table>
                                <tr>
                                    <td>Persistent Cookie:</td>
                                    <td>
                                        <asp:CheckBox ID="chkPersistCookie" runat="server" AutoPostBack="false" /></td>
                                    <td></td>
                                </tr>
                            </table>
                            <asp:Label ID="Label1" ForeColor="red" Font-Name="Verdana" Font-Size="10" runat="server" />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="submit" value="Logon" runat="server" id="cmdLogin" class="btn btn-primary" data-dismiss="modal">登入</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
