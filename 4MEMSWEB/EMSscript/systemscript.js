var islogin;
//取cookie登入者帳號(作為查詢權限用)
function getCookie_username() {
    var all_data = document.cookie.split(';');
    var data = all_data[0].split('=');
    return data[2];
}
function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString('en-GB');
    document.getElementById("demo").innerHTML = d.toLocaleDateString() + " " + t;
}
function myrefresh() {
    window.location.reload();
}
function pageselect() {
    var page = location.pathname.toString();
    //console.log(page);
    $('#pagename').empty();
    switch (page) {
        case '/':
        case '/Homepage.aspx':
        //case '/Homepage_1.aspx':
            $('#pagename').append('4M儲能管理系統');
            //getNexusdata();
            setTimeout('myrefresh()', 160000);
            break;
        case '/page1.aspx':
            $('#pagename').append('4M儲能系統單線圖');
            break;
        case '/page2.aspx':
            $('#pagename').append('4M儲能盤體資訊');
            break;
        case '/page3.aspx':
            $('#pagename').append('4M儲能電池資訊');
            break;
        case '/page4.aspx':
            $('#pagename').append('4M儲能PCS資訊');
            break;
        case '/page5.aspx':
            $('#pagename').append('4M儲能通訊狀態');
            break;
        case '/page6.aspx':
            $('#pagename').append('4M儲能事件紀錄');
            break;
        case '/page7.aspx':

            selectcontrolmode();
            $('#pagename').append('4M儲能控制模式');
            break;
        case '/page8.aspx':
            $('#pagename').append('4M儲能歷史資料');
            break;

    }
}
function show_default_div() {
    showdata('#sbspm_div');
    showdata('#sys_p_div');
    showdata('#sys_q_div');
    showdata('#sys_Hz_div');
    showdata('#sys_soc_div');
    showdata('#sys_temp_div');
}
function show_default_table() {
    showdata('#tb_BESS');
    showdata('#tb_PCS');
    showdata('#tb_BESS1');
    showdata('#tb_sys');
    showdata('#tb_HV');
    showdata('#tb_AUX');
}
function show_sys_single() {
    showdata('#MVCB');
    showdata('#VCB1');
    showdata('#VCB2');
    showdata('#VCB3');
    showdata('#MVCB_Relay');
    showdata('#VCB1_Relay');
    showdata('#VCB2_Relay');
    showdata('#VCB3_Relay');
    showdata('#MVCB_Meter');
    showdata('#VCB1_Meter');
    showdata('#VCB2_Meter');
    showdata('#VCB3_Meter');
    showdata('#TR1');
    showdata('#TR2');
    showdata('#PCS');
    showdata('#PCS_info');
    showdata('#BESS');
    showdata('#AUX_Meter');
    showdata('#sys_status');
}
function showdata(selector) {
    var page = location.pathname.toString();
    $(selector).empty();
    switch (page) {
        case '/':
        case '/Homepage.aspx':
        //case '/Homepage_1.aspx':
            //$('#pagename').append('雲端儲能管理系統');
            buildList_div(selector);
            break;
        case '/page1.aspx':
            //$('#pagename').append('系統單線圖');
            syssinglelist(selector);
            switch (selector) {
                case '#sbspm_div':
                    $(selector).append(
                        '<table style="text-align: center;" class="table">' +
                        '<tr><td rowspan="2"><img src="/svgicon/meter1.svg"></td>' +
                        '<td><span class="sys-text" >VCB用電量</span></td></tr>' +
                        '<tr><td><span class="sys-text">' + getsbspmRandom(3).toFixed(3) + '%</span></td></tr></table>');
                    break;
                case '#sys_p_div':
                    $(selector).append(
                        '<table style="text-align: center;" class="table">' +
                        '<tr><td rowspan="2"><img src="/svgicon/meter2.svg"></td>' +
                        '<td><span class="sys-text" >ACB用電量</span></td></tr>' +
                        '<tr><td><span class="sys-text">' + getpRandom(3).toFixed(3) + 'Mw</span></td></tr></table>');
                    break;
                case '#sys_q_div':
                    $(selector).append(
                        '<table style="text-align: center;" class="table">' +
                        '<tr><td rowspan="2"><img src="/svgicon/temp1.svg"></td>' +
                        '<td><span class="sys-text" >變壓器油溫</span></td></tr>' +
                        '<tr><td><span class="sys-text">' + gettempRandom(1).toFixed(3) + '°C</span></td></tr></table>');
                    break;
                case '#sys_Hz_div':
                    $(selector).append(
                        '<table style="text-align: center;" class="table">' +
                        '<tr><td rowspan="2"><img src="/svgicon/temp1.svg"></td>' +
                        '<td><span class="sys-text" >貨櫃溫度</span></td></tr>' +
                        '<tr><td><span class="sys-text">' + gettempRandom(1).toFixed(3) + '°C</span></td></tr></table>');
                    break;
                case '#sys_soc_div':
                    $(selector).append(
                        '<table style="text-align: center;" class="table">' +
                        '<tr><td rowspan="2"><img src="/svgicon/wet1.svg"></td>' +
                        '<td><span class="sys-text" >貨櫃濕度</span></td></tr>' +
                        '<tr><td><span class="sys-text">' + gettempRandom(1).toFixed(3) + '°C</span></td></tr></table>');
                    break;
                case '#sys_temp_div':
                    $(selector).append(
                        '<table style="text-align: center;" class="table">' +
                        '<tr><td rowspan="2"><img src="/svgicon/batt1.svg"></td>' +
                        '<td><span class="sys-text" >電池殘電量</span></td></tr>' +
                        '<tr><td><span class="sys-text">' + getsocRandom(10).toFixed(3) + '%</span></td></tr></table>');
                    break;
            }
            break;
        case '/page2.aspx':
            //$('#pagename').append('貨櫃資訊');
            break;
        case '/page3.aspx':
            //$('#pagename').append('電池資訊');
            
            break;
        case '/page4.aspx':
            //$('#pagename').append('PCS資訊');
            break;
        case '/page5.aspx':
            //$('#pagename').append('通訊狀態');
            break;
        case '/page6.aspx':
            //$('#pagename').append('警報紀錄');
            break;
        case '/page7.aspx':
            //$('#pagename').append('控制模式');
            break;
        case '/page8.aspx':
            //$('#pagename').append('控制模式');
            buildList(selector);
            break;

    }

}
function CubeList(selector) {
    $(selector).empty();
    var battdata = null;
    for (var index = 1; index < 5; index++)
    {
        battdata = "'#batt_data"+index+"'";
        console.log(battdata);
        $(selector).append('<div class=" col-md-12"><div class="panel panel-info  table-responsive scroll" style=""><div id= "Rack' + index + '"class="panel-heading col-md-12 text-center" data-toggle="modal" data-target="#RackModal" style="background-color: #1B8CDE;" onclick="rackdata(' + battdata + ')">' +
            '<span style="ont-weight: bold; font-size: 18px; color: #ffffff" >Cube' + index + '</span></div><table style="text-align: center;" class="table">' +
            '<tr class="default"><th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">V_C0' + index + '</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">I</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">Vmax</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">Vmin</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">SOC</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">SOH</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">Tmax</span></th>' +
            '<th style="text-align: center;"><span style="font-weight: bold;font-size: 16px;">Tmin</span></th></tr>' +

            '<tr class="default"><td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">926.25</span></td>' +//Vt
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">3.258</span></td>' +//I
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">3.357</span></td>' +//Vmax
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">3.324</span></td>' +//Vmin
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">85.25</span></td>' +//SOC
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">92.52</span></td>' +//SOH
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">26.25</span></td>' +//Tmax
            '<td><span class="label label-success" style="color: black; font-weight: bold; font-size: 20px;">25.54</span></td></tr></table></div></div>');//Tmin
    }
        
}
function rackdata(selector) {
    //console.log(battdata);
    $('#batt_data1').empty();
    $('#batt_data2').empty();
    $('#batt_data3').empty();
    $('#batt_data4').empty();
    $(selector).append('<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title" id="myModalLabel" style="font-weight: bold">詳細資料</h4></div>' +
        '<div class="modal-body" ><table id="tb_batt_data"  class="table text-center">' +
        '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最大電芯電壓模組</span></th>' +
        '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最大電芯電壓模組位置</span></th>' +
        '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最小電芯電壓模組</span></th>' +
        '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最小電芯電壓模組位置</span></th></tr>' +
        '<tr><td><span style="font-weight: bold;font-size: 20px;">' + selector +'</span></td>' +
        '<td><span style="font-weight: bold;font-size: 20px;">0</span></td>' +
        '<td><span style="font-weight: bold;font-size: 20px;">0</span></td>' +
        '<td><span style="font-weight: bold;font-size: 20px;">0</span></td></tr>' +
        '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最大電芯溫度模組</span></th>' +
        '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最大電芯溫度模組位置</span></th>' +
        '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最小電芯溫度模組</span></th>' +
        '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最小電芯溫度模組位置</span></th></tr>' +
        '<tr><td><span style="font-weight: bold;font-size: 20px;">0</span></td>' +
        '<td><span style="font-weight: bold;font-size: 20px;">0</span></td>' +
        '<td><span style="font-weight: bold;font-size: 20px;">0</span></td>' +
        '<td><span style="font-weight: bold;font-size: 20px;">0</span></td></tr></table></div>' +
        '<div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">關閉</button></div>');
}
function syssinglelist(selector) {
    getPermissiondata()
    permission = Permission_data[0].permission; 
    //$(selector).empty();
    switch (selector) {

        case '#MVCB':
            //判斷是否為限制帳戶來顯示span或button
            if (permission == 'Level3_limit') {
                $(selector).append('<span class="label label-success" style="font-weight: bold; font-size: 18px;">起斷</span>');
                //根據span修改頂部距離
                $(selector).css('top', '367px');
            } else {
                $(selector).append('<button  type="button" class="btn btn-danger btn-sm" style="font-weight: bold; font-size: 18px;" onclick="Set_MVCB_OFF()" >投入</button>');
            }

            break;
        case '#VCB1':
            if (permission == 'Level3_limit') {
                $(selector).append('<span class="label label-success" style="font-weight: bold; font-size: 18px;">起斷</span>');
                //根據span修改頂部距離
                $(selector).css('top', '623px');
            } else {
                $(selector).append('<button  type="button" class="btn btn-danger btn-sm" style="font-weight: bold; font-size: 18px;" onclick="Set_VCB1_OFF()" >投入</button>');
            }

            break;
        case '#VCB2':
            if (permission == 'Level3_limit') {
                $(selector).append('<span class="label label-danger" style="font-weight: bold; font-size: 18px;">投入</span>');
                //根據span修改頂部距離
                $(selector).css('top', '1130px');
            } else {
                $(selector).append('<button  type="button" class="btn btn-success btn-sm" style="font-weight: bold; font-size: 18px;" onclick="Set_VCB2_ON()" >起斷</button>');
            }

            break;
        case '#VCB3':
            if (permission == 'Level3_limit') {
                $(selector).append('<span class="label label-danger" style="font-weight: bold; font-size: 18px;">投入</span>');
                //根據span修改頂部距離
                $(selector).css('top', '373px');
            } else {
                $(selector).append('<button  type="button" class="btn btn-success btn-sm" style="font-weight: bold; font-size: 18px;" onclick="Set_VCB3_ON()" >起斷</button>');
            }

            break;
        case '#MVCB_Relay':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">50/50N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">51/51N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59N</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody>' +
                '<tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81H</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81L</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">27</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">67</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success">正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody></table >');

            break;
        case '#VCB1_Relay':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">50/50N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">51/51N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59N</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody>' +
                '<tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81H</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81L</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">27</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">67</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success">正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody></table >');

            break;
        case '#VCB2_Relay':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">50/50N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">51/51N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59N</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody>' +
                '<tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81H</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81L</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">27</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">67</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success">正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody></table >');

            break;
        case '#VCB3_Relay':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">50/50N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">51/51N</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">59N</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody>' +
                '<tr>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81H</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">81L</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">27</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 14px;">67</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 14px;">' +
                '<tr><td><span class="label label-success">正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success" >正常</span></td>' +
                '<td><span class="label label-success">正常</span></td></tr></tbody></table >');

            break;
        case '#MVCB_Meter':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Hz</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>60.025Hz</td></tr></tbody></table > ');

            break;
        case '#VCB1_Meter':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Hz</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>60.025Hz</td></tr></tbody></table > ');

            break;
        case '#VCB2_Meter':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Hz</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>60.025Hz</td></tr></tbody></table > ');

            break;
        case '#VCB3_Meter':
            $(selector).append(
                '<table id="VCB_Meter_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Hz</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>60.025Hz</td></tr></tbody></table > ');

            break;
        case '#TR1':
            $(selector).append(
                '<table id="tb_TR" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">油溫</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>35.2°C</td></tr></tbody></table > ');


            break;
        case '#TR2':
            $(selector).append(
                '<table id="tb_TR" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">油溫</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>35.2°C</td></tr></tbody></table > ');


            break;
        case '#ACB':
            $(selector).append('<span class="label label-success"style="font-weight: bold; font-size: 20px;">搭接</span>');

            break;
        case '#ACB_Meter':
            $(selector).append(
                '<table id="ACB_Meter_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Hz</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>60.025Hz</td></tr></tbody></table > ');

            break;
        case '#PCS':
            $(selector).append('<span class="label label-success" style="font-weight: bold; font-size: 20px;">啟動</span>');

            break;
        case '#PCS_info':
            $(selector).append(
                '<table id="tb_PCS_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">PF</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td>' +
                '<td>0.92</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Q</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">S</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>0kvar</td>' +
                '<td>2.7kva</td></tr></tbody></table > ');

            break;
        case '#BESS':
            $(selector).append(
                '<table id="tb_BESS" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">SOC</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">SOH</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Tmax</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td>' +
                '<td>92.52%</td>' +
                '<td>98.56%</td>' +
                '<td>25.6°C</td></tr></tbody></table>');

            break;
        case '#AUX_Meter':
            $(selector).append(
                '<table id="AUX_Meter_info" class="table table-striped"><tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">V</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">I</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>925.25V</td>' +
                '<td>3.52A</td></tr></tbody>' +
                '<tr class="info">' +
                '<th style="text-align: center;"><span style="font-size: 17px;">P</span></th>' +
                '<th style="text-align: center;"><span style="font-size: 17px;">Hz</span></th></tr>' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 16px;">' +
                '<tr><td>2.725kW</td>' +
                '<td>60.025Hz</td></tr></tbody></table > ');

            break;
        //新增一個Ccase為生成系統狀態表格並append
        case '#sys_status':
            $(selector).append(
                '<table id="sys_status_info" class="table table-striped">' +
                '<tr class= "info" > ' +
                '<th colspan="2" style="text-align: center;"><span style="font-size: 17px;">PCS</span></th>' +
                '<th colspan="2" style="text-align: center;"><span style="font-size: 17px;">電池組</span></th>' +
                '</tr> ' +
                '<tr>' +
                '<th  style="text-align: center; font-weight: bold; font-size: 16px;">警告</th > ' +
                '<th  style="text-align: center; font-weight: bold; font-size: 16px;">報警</th>' +
                '<th  style="text-align: center; font-weight: bold; font-size: 16px;">系統模式</th > ' +
                '<th  style="text-align: center; font-weight: bold; font-size: 16px;">SOC</th>' +
                '</tr > ' +
                '<tbody style="text-align: center; font-weight: bold; font-size: 12px;">' +
                '<td>1</td> ' +
                '<td>2</td>' +
                '<td>3</td> ' +
                '<td>4</td>' +
                '</tbody > ' +
                '</table>');

            break;
    }
}
function buildList_div(selector) {
    switch (selector) {
        case '#sbspm_div':
            $(selector).append(
                '<table style="text-align: center;" class="table">' +
                '<tr><td rowspan="2"><img src="/svgicon/gear-1.svg"></td>' +
                '<td><span class="sys-text">系統執行率</span></td></tr>' +
                '<tr><td><span class="sys-text">' + SBPSPM_data[0].SBPSPM.toFixed(3) + '%</span></td></tr></table>');
            break;
        case '#sys_p_div':
            $(selector).append(
                '<table style="text-align: center;" class="table">' +
                '<tr><td rowspan="2"><img src="/svgicon/gear-2.svg"></td>' +
                '<td><span class="sys-text">系統總實功率</span></td></tr>' +
                '<tr><td><span class="sys-text">' + Nexus_Hs_data[0].HS_W.toFixed(3) + 'kW</span></td></tr></table>');
            break;
        case '#sys_q_div':
            $(selector).append(
                '<table style="text-align: center;" class="table">' +
                '<tr><td rowspan="2"><img src="/svgicon/gear-3.svg"></td>' +
                '<td><span class="sys-text">系統總虛功率</span></td></tr>' +
                '<tr><td><span class="sys-text">' + Nexus_Hs_data[0].HS_VAR.toFixed(3) + 'MVAR</span></td></tr></table>');
            break;
        case '#sys_Hz_div':
            $(selector).append(
                '<table style="text-align: center;" class="table">' +
                '<tr><td rowspan="2"><img src="/svgicon/meter1.svg"></td>' +
                '<td><span class="sys-text">系統頻率</span></td></tr>' +
                '<tr><td><span class="sys-text">' + Nexus_Hs_data[0].HS_Freq.toFixed(3) + 'Hz</span></td></tr></table>');
            break;
        case '#sys_soc_div':
            $(selector).append(
                '<table style="text-align: center;" class="table">' +
                '<tr><td rowspan="2"><img src="/svgicon/batt1.svg"></td>' +
                '<td><span class="sys-text">系統殘電量</span></td></tr>' +
                '<tr><td><span class="sys-text">' + getsocRandom(15).toFixed(3) + '%</span></td></tr></table>');
            break;
        case '#sys_temp_div':
            $(selector).append(
                '<table style="text-align: center;" class="table">' +
                '<tr><td rowspan="2"><img src="/svgicon/temp1.svg"></td>' +
                '<td><span class="sys-text">電池溫度</span></td></tr>' +
                '<tr><td><span class="sys-text">' + gettempRandom(10).toFixed(3) + '°C</span></td></tr></table>');
            break;
        case '#tb_BESS':
            $(selector).append(
                '<tr><td>溫度：</td>' +
                '<td>' + gettempRandom(10).toFixed(3) + '°C</td> </tr>' +
                '<tr><td>濕度：</td>' +
                '<td>25%</td></tr>' +
                '<tr><td>SOC：</td>' +
                '<td>' + getsocRandom(15).toFixed(3) + '%</td></tr>');
            break;
        case '#tb_PCS':
            $(selector).append(
                '<tr><td>實功：</td>' +
                '<td>1052.62kW</td></tr>' +
                '<tr><td>虛功：</td>' +
                '<td>0.00kvar</td></tr>' +
                '<tr><td>電流：</td>' +
                '<td>500.00A</td></tr>');
            break;
        case '#tb_BESS1':
            $(selector).append(
                '<tr><td>功率：</td>' +
                '<td>1052.62kW</td></tr>' +
                '<tr><td>電壓：</td>' +
                '<td>1066.00V</td></tr>' +
                '<tr><td>電流：</td>' +
                '<td>986.86A</td></tr>');
            break;
        case '#tb_sys':
            $(selector).append(
                '<tr><td>模式：</td>' +
                '<td>' + EMS_data[0].Running_Mode + '</td> </tr>' +
                '<tr><td>狀態：</td>' +
                '<td><span class="label label-success"style="font-weight: bold; font-size: 20px;">' + EMS_data[0].COM_Status + '</span></td></tr>' +
                '<tr><td>電網：</td>' +
                '<td>併網</td></tr>');
            break;
        case '#tb_HV':
            $(selector).append(
                '<tr><td>實功：</td>' +
                '<td>1052.66kW</td></tr>' +
                '<tr><td>虛功：</td>' +
                '<td>0.00kvar</td></tr>' +
                '<tr><td>電流：</td>' +
                '<td>500.00A</td></tr>');
            break;
        case '#tb_AUX':
            $(selector).append(
                '<tr><td>功率：</td>' +
                '<td>500kW</td></tr>' +
                '<tr><td>電壓：</td>' +
                '<td>220V</td></tr>' +
                '<tr><td>電流：</td>' +
                '<td>220A</td></tr>');
            break;
    }
}
function buildList(selector) {
    //$(selector).empty();
    //console.log(selector);
    switch (selector) {
        case '#select':
            console.log("select");
            $(selector).append(
                '<select class="form-control" id="searchselect" onclick="selectsetting()">' +
                '<option value=' + 'sys_poewer' + '>系統功率</option>' +
                '<option value=' + 'sys_voltage' + '>系統電壓</option>' +
                '<option value=' + 'sys_frequency' + '>系統頻率</option>' +
                '<option value=' + 'AFCoperating' + '>AFC操作</option>' +
                '<option value=' + 'PCS' + '>PCS轉換器</option>' +
                '<option value=' + 'Bess' + '>儲能電池組</option>' +
                '</select></br>');
            break;
        case 'Bess':
            selector = '#BESSMaster';
            $(selector).append(
                '<select class="form-control" id="BESSMasterSelect">' +
                '<option value=' + 'MasterA' + '>MasterA</option>' +
                '<option value=' + 'MasterB' + '>MasterB</option>' +
                '</select></br>');
            selector = '#BESSSlave';
            $(selector).append(
                '<select class="form-control" id="BESSSlaveSelect">' +
                //'<option value=' + 'ALL' + '>ALL</option>' +
                '<option value=' + 'M01' + '>M01</option>' +
                '<option value=' + 'M02' + '>M02</option>' +
                '<option value=' + 'M03' + '>M03</option>' +
                '<option value=' + 'M04' + '>M04</option>' +
                '<option value=' + 'M05' + '>M05</option>' +
                '<option value=' + 'M06' + '>M06</option>' +
                '<option value=' + 'M07' + '>M07</option>' +
                '<option value=' + 'M08' + '>M08</option>' +
                '<option value=' + 'M09' + '>M09</option>' +
                '<option value=' + 'M10' + '>M10</option>' +
                '<option value=' + 'M11' + '>M11</option>' +
                '<option value=' + 'M12' + '>M12</option>' +
                '<option value=' + 'M13' + '>M13</option>' +
                '<option value=' + 'M14' + '>M14</option>' +
                '<option value=' + 'M15' + '>M15</option>' +
                '<option value=' + 'M16' + '>M16</option>' +
                '<option value=' + 'M17' + '>M17</option>' +
                '<option value=' + 'M18' + '>M18</option>' +
                '<option value=' + 'M19' + '>M19</option>' +
                '<option value=' + 'M20' + '>M20</option>' +
                '<option value=' + 'M21' + '>M21</option>' +
                '<option value=' + 'M22' + '>M22</option>' +
                '<option value=' + 'M23' + '>M23</option>' +
                '<option value=' + 'M24' + '>M24</option>' +
                '<option value=' + 'M25' + '>M25</option>' +
                '<option value=' + 'M26' + '>M26</option>' +
                '<option value=' + 'M27' + '>M27</option>' +
                '<option value=' + 'M28' + '>M28</option>' +
                '<option value=' + 'M29' + '>M29</option>' +
                '<option value=' + 'M30' + '>M30</option>' +
                '</select></br>');
            break;
        case 'sys_voltage':
            selector = '#BESSMaster';
            $(selector).append(
                '<select class="form-control" id="sys_voltageSelect">' +
                '<option value=' + 'RST_L' + '>R、S、T線電壓</option>' +
                '<option value=' + 'RST_P' + '>R、S、T相電壓</option>' +
                '</select></br>');
            break;
        case 'Schedule1':

            break;
    }
}
function selectsetting() {
    $('#BESSMaster').empty();
    $('#BESSSlave').empty();
    $('#select_sys_voltage').empty();
    var searchselectvalue = document.getElementById("searchselect").value;
    //console.log(searchselectvalue);
    buildList(searchselectvalue);
}
function loginstatus()
{
    $('#login').empty();
    if (islogin == 0) {
        $('#login').append('<button type = "button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" style = "background-color: #004584; font-weight: bold" > 登入</button>');
    }
    else
    {
        $('#login').append('<button type = "button" class="btn btn-danger btn-lg"  style = "font-weight: bold" onclick="logout()" > 登出</button>');
    }
    
    
}
function login()
{
    var login_form = document.getElementById('login_info');
    var username = login_form.username.value;
    var password = login_form.password.value;
    //console.log("login_form:" + login_form);
    //console.log("username:" + username);  
    //console.log("password:" + password); 
    //var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    //    keyboard: false
    //})
    $.ajax(
        {
            url: '/EMSashx/logincheck.ashx',
            type: 'post',
            async: false,
            
            data: 'username=' + username + '&password=' + password ,

            success: function initialize(data) {
                //alert("成功!!");
                console.log(data);
                if (data == "成功!!!") {
                    islogin = 1;
                    //myModal.hide();
                    localStorage.setItem('islogin', islogin);
                    loginstatus();
                }
                else { }
            }
        });
            
}
function logout() {
    islogin = 0;
    localStorage.setItem('islogin', islogin);
    loginstatus();
}
//----------取得即時資料----------
function getESSdata()
{
    geEMSdata();
    getNexusdata();
    getFLNCubedata();
    getFLNbmspcsdata();
    //new_add
    getPermissiondata();
    getSBSPM_data();
    get_Systemdata();
/*    getNewWarningdata()*/
}