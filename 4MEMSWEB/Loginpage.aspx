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
    <link rel="stylesheet" href="/css/style.css" />
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <link rel="shortcut icon" href="logo/TECO_icon.ico" />
    <script type="text/javascript" src="/EMSscript/systemscript.js"></script>
    <title>雲端監管平台</title>
    <script type="text/javascript"> 
        $(document).ready(function () {
            loder();
            myTimer();
            
            var Timer = setInterval(function () {
                myTimer();
                
            }, 1000)

        });
    </script>
</head>
<body>
    <%-- loder --%>
    <div id="preloader">
        <div id="status"></div>
    </div>
    <%-- loder end --%>
    <div class="container-fluid">
        <div class="col-sm-8 img" ></div>
        <div class="col-sm-4 right" style="background-color:gainsboro">
                <nav class="navbar navbar-fixed-top">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse navbar-collapse-center row" id="bs-example-navbar-collapse-1">
                            <p id="pagename" class=" navbar-right"></p>
                            <p class="navbar-text navbar-right" style="font-weight: bold; font-size: 24px; color: black" id="demo"></p>
                        </div>
                        <!-- /.navbar-collapse -->
                    </div>
                    <!-- /.container-fluid -->
                </nav>
            <div class="col-sm-12" style="margin-top:40%" >
                <div class="text-center">
                    <img src="/logo/TECO_logo.svg" width="150" height="40" alt='TECO' />
                </div>
                <div class="">
                    <h4 class="modal-title text-center" id="" style="font-weight: bold">4M儲能系統</h4>
                    <%--<h4 class="modal-title text-center" id="" style="font-weight: bold">登入</h4>--%>
                </div>
                <form id="form1" runat="server">
                    <div>
                        <div class="form-group">
                            <label for="username">使用者名稱</label>
                            <span id="user" class="error"></span>
                            <div class="input-group">
                                <div class="input-group-addon"><image src="svgicon/person.svg"></image></div>
                                <input type="text" style="width: 90%;"  class="form-control" name="username" id="txtUserName" runat="server" placeholder="使用者名稱" />
                                <asp:RequiredFieldValidator ControlToValidate="txtUserName" Display="Static" ErrorMessage="*" runat="server" ID="RequiredFieldValidator1" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">密碼</label>
                            <span id="psword" class="error"></span>
                            <div class="input-group">
                                <div class="input-group-addon"><image src="svgicon/lock.svg"></image></div>
                                <input type="password" style="width: 90%;" class="form-control" name="password" id="txtUserPass" runat="server" placeholder="密碼" />
                                <asp:RequiredFieldValidator ControlToValidate="txtUserPass" Display="Static" ErrorMessage="*" runat="server" ID="RequiredFieldValidator2" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="cav_place">
                                <input class="form-control"   id="myvad" type="text" name="vad" placeholder="請輸入驗證碼" runat='server'/>
                            </div>   
                            <div class="cav_place">
                                <canvas  class="" id="mycanvas"  width='150' height='45'></canvas>
                            </div>
                              <input type="hidden" id="myvad_ans" runat='server' />
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
                            <div>
                                <button type="submit" style="width: 90%;" value="Logon" runat="server" id="cmdLogin" class="btn btn-primary" data-dismiss="modal">登入</button>
                            </div>
                    </div>
                    <div class="footer">
                        <div class="text-center">Copyright &copy; 2023 東元電機股份有限公司</div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
<%-- 驗證碼js --%>
<script type="text/javascript" src="/EMSscript/check.js"></script>
<%-- 驗證碼js end --%>
</html>
