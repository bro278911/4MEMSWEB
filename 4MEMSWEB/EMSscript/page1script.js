function New_Warning(selector) {
    //抓newwarning資料
    getNewWarningdata();
    //宣告空字串
    var cssString = "";
    //清空所選表格
    $(selector).empty();
    //迴圈生成表格<td>部分
    for (var i = 0; i < New_Warning_data.length; i++) {
        cssString +=
            '<tr class="success"><td><span style="font-weight: bold; font-size: 15px;">' + New_Warning_data[i].COM_Status + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 15px;">' + New_Warning_data[i].Device +'</span></td>'
        + '<td><span style="font-weight: bold; font-size: 15px;">' + New_Warning_data[i].ALM_msg +'</span></td>'
        + '<td><span style="font-weight: bold; font-size: 15px;">' + New_Warning_data[i].datatime +'</span></td></tr>';
    }
    //apeend最新警告前三筆資料
    $(selector).append(
        '<table id="table" class="table success col-md-12">'
        + '<tr class="info"><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">COM狀態</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">裝置</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">ALM訊息</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">時間</span></th>' 
        + cssString + '</table>'
    );
/*    console.log(selector)*/
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