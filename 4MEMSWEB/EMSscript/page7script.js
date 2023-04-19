function controlstatus(selector) {
    //console.log("aa");
    $(selector).empty();
    $(selector).append('<div class="col-md-12 text-center"><table id="table" class="table">'
        + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">通訊狀態</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">目前模式</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">運轉模式</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">電網頻率</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">電網實功</span></th></tr>'
        //----------資料行一--------- 
        + '<tr><td><span class="label label-success" style="font-weight: bold; font-size: 20px;">' + EMS_data[0].COM_Status + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + EMS_data[0].Running_Mode + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + EMS_data[0].PCS_Status + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + '60.00' + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + '1000' + '</span></td></tr>'
        + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">儲能系統SOC(%)</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最高SOC限制</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">最低SOC限制</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">實功設定值</span></th>'
        + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">虛功設定值</span></th></tr>'
        //----------資料行二---------
        + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + '75' + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + EMS_data[0].SOC_H_limit + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + EMS_data[0].SOC_L_limit + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + '0.00' + '</span></td>'
        + '<td><span style="font-weight: bold; font-size: 20px;">' + '0.00' + '</span></td></tr></table> </div>');
    enablebtn("AFCTEST");
}


//----------控制模式選擇----------
function selectcontrolmode() {
    //使用if 判斷是否有值如為空則預設手動模式，如選擇則抓select_setting.controlmode.value值判斷
    var controlmode = select_setting.controlmode.value;
/*    console.log(controlmode)*/
    if (controlmode == "") {
        $("#controlmode").val("Manual");
        controlmode = 'Manual';
    } else {
        controlmode = select_setting.controlmode.value;
    }   

    localStorage.setItem('Controlmode', controlmode);
    $('#controlarea').empty();
    switch (controlmode) {
        case 'Manual':
            $('#controlarea').append('<div class="panel panel" style="text-align: center; height: 300px">'
                + '<div class= "panel-heading" style = "background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;"> 手動調度設置區</div >'
                + '<div class="panel-body"><div class="col-md-12"><div class="col-md-4">'
                + '<span id="lable1" style="font-weight: bold; font-size: 16px;">PCS開關機：</span></div>'
                + '<div class="col-md-4"><button id="PCS_SET_ON" type="button" class="btn btn-success" onclick="PCS_SET_ON()" value="PCS_ON">啟動</button></div>'
                + '<div class="col-md-4"><button id="PCS_SET_OFF" type="button" class="btn btn-danger" disabled="false" onclick="PCS_SET_OFF()">停止</button></div></div><br/><br/>'
                + '<div class="col-md-12"><div class="col-md-4"><span id="lable2" style="font-weight: bold; font-size: 16px;">調度命令控制：</span></div>'
                + '<div class="col-md-4"><button id="COM_SET_ON" type="button" class="btn btn-success" onclick="COM_SET_ON()" value="Manual">啟動</button></div>'
                + '<div class="col-md-4"><button id="COM_SET_OFF" type="button" class="btn btn-danger" disabled="disabled" onclick="COM_SET_OFF()">停止</button></div></div><br/><br/>'
                + '<form name="ParameterText" id="ParameterText"><div class="col-md-12"><div class="col-md-3">'
                + '<span id="lable13" style="font-weight: bold; font-size: 16px;">SOC上限設定值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="SOC_H_limit" value="90"/></div>'
                + '<div class="col-md-3"><span id="lable14" style="font-weight: bold; font-size: 16px;">SOC下限設定值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="SOC_L_limit" value="10"/></div></div><br/><hr/>'
                + '<div class="col-md-12"><div class="col-md-3"><span id="lable15" style="font-weight: bold; font-size: 16px;">實功設定值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="Set_P" value="0"/></div>'
                + '<div class="col-md-3"><span id="lable16" style="font-weight: bold; font-size: 16px;">虛功設定值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="Set_Q" value="0"/></div></div><br/><br/>'
                + '<div class="col-md-12"><div class="col-md-6"><button id="btn_Set_PQ" type="button" class="btn btn-primary" onclick="SET_PQ()" value="SET_PQ">功率參數設定</button></div>'
                + '<div class="col-md-6"><button id="btn_Set_SOC" type="button" class="btn btn-primary" onclick="SET_PQ_limit()" value="SET_SOC">SOC限制設定</button></div></div></form></div></div >');
            enablebtn(controlmode);
            break;
        case 'dReg0.25':
            $('#controlarea').append('<div class="panel panel" style="text-align: center; height: 300px">'
                + '<div class= "panel-heading" style = "background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;"> dReg0.25模式設置區</div >'
                + '<div class="panel-body"><div class="col-md-12"><div class="col-md-4">'
                + '<span id="lable1" style="font-weight: bold; font-size: 16px;">PCS開關機：</span></div>'
                + '<div class="col-md-4"><button id="PCS_SET_ON" type="button" class="btn btn-success" onclick="PCS_SET_ON()" value="PCS_ON">啟動</button></div>'
                + '<div class="col-md-4"><button id="PCS_SET_OFF" type="button" class="btn btn-danger" disabled="disabled" onclick="PCS_SET_OFF()">停止</button></div></div><br/><br/>'
                + '<div class="col-md-12"><div class="col-md-4"><span id="lable2" style="font-weight: bold; font-size: 16px;">調度命令控制：</span></div>'
                + '<div class="col-md-4"><button name ="COMdReg0dot25_SET_ON"  id="COMdReg0.25_SET_ON" type="button" class="btn btn-success" onclick="COM_SET_ON()" value="Reg0.25">啟動</button></div>'
                + '<div class="col-md-4"><button name ="COMdReg0dot25_SET_OFF" id="COMdReg0.25_SET_OFF" type="button" class="btn btn-danger" disabled="disabled" onclick="COM_SET_OFF()">停止</button></div></div><br/><br/>'
                + '<form name="ParameterText" id="ParameterText"><div class="col-md-12"><div class="col-md-3">'
                + '<span id="lable13" style="font-weight: bold; font-size: 16px;">SOC上限設定值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="SOC_H_limit"/></div>'
                + '<div class="col-md-3"><span id="lable14" style="font-weight: bold; font-size: 16px;">SOC下限設定值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="SOC_L_limit"/></div></div><br/><hr/>'
                + '<div class="col-md-12"><div class="col-md-3"><span id="lable15" style="font-weight: bold; font-size: 16px;">實功參考值：</span></div>'
                + '<div class="col-md-3"><input type="text" name="Parameter1" id="P_ref"/></div>'
                + '<div class="col-md-3"><span id="lable16" style="font-weight: bold; font-size: 16px;">基準頻率：</span></div>'
                + '<div class="col-md-3"><span id="lable16" style="font-weight: bold; font-size: 16px;">60.000Hz</span></div></div><br/><br/>'
                + '<div class="col-md-12"><div class="col-md-6"><button id="btn_Set_P_ref" type="button" class="btn btn-primary" onclick="Set_P_ref()" value="SET_P_ref">功率參數設定</button></div>'
                + '<div class="col-md-6"><button id="btn_Set_SOC" type="button" class="btn btn-primary" onclick="SET_PQ_limit()" value="SET_SOC">SOC限制設定</button></div></div></form></div></div >');
            enablebtn(controlmode);
            break;
        case 'AFCTEST':
            $('#controlarea').append('<div class="panel panel" style="text-align: center; height: 300px">'
                + '<div class= "panel-heading" style = "background-color: #1B8CDE; color: #ffffff; font-weight: bold; font-size: 18px; font-family: Microsoft JhengHei;"> 能力測試設置區</div >'
                + '<div class="panel-body"><div class="col-md-12"><div class="col-md-4">'
                + '<span id="lable1" style="font-weight: bold; font-size: 16px;">PCS開關機：</span></div>'
                + '<div class="col-md-4"><button id="PCS_SET_ON" type="button" class="btn btn-success " onclick="PCS_SET_ON()" value="PCS_ON">啟動</button></div>'
                + '<div class="col-md-4"><button id="PCS_SET_OFF" type="button"  disabled="disabled" class="btn btn-danger " onclick="PCS_SET_OFF()">停止</button></div></div><br/><br/>'
                + '<div class="col-md-12"><div class="col-md-4"><span id="lable2" style="font-weight: bold; font-size: 16px;">儲能系統預充電：</span></div>'
                //----------預充電----------
                + '<div class="col-md-4"><button id="PRECHR_SET_ON" type="button" class="btn btn-success " onclick="PRECHR_SET_ON()" value="Manual">啟動</button></div>'
                + '<div class="col-md-4"><button id="PRECHR_SET_OFF" type="button" disabled="disabled" class="btn btn-danger " onclick="TEST_SET_OFF()">停止</button></div></div><br/><br/>'
                //----------步階測試----------
                + '<div class="col-md-12"><div class="col-md-4"><span id="lable2" style="font-weight: bold; font-size: 16px;">步階測試：</span></div>'
                + '<div class="col-md-4"><button id="STEP_SET_ON" type="button" class="btn btn-success " onclick="STEP_SET_ON()" value="Manual">啟動</button></div>'
                + '<div class="col-md-4"><button id="STEP_SET_OFF" type="button" disabled="disabled" class="btn btn-danger " onclick="TEST_SET_OFF()">停止</button></div></div><br/><br/>'
                //----------掃頻測試----------
                + '<div class="col-md-12"><div class="col-md-3"><span id="lable2" style="font-weight: bold; font-size: 16px;">掃頻測試：</span></div>'
                + '<div class="col-md-3"><button id="SCANUP_SET_ON" type="button" class="btn btn-success" onclick="SCANUP_SET_ON()" value="Manual">向上掃頻</button></div>'
                + '<div class="col-md-3"><button id="SCANDOWN_SET_ON" type="button" class="btn btn-success" onclick="SCANDOWN_SET_ON()" value="Manual">向下掃頻</button></div>'
                + '<div class="col-md-3"><button id="SCAND_SET_OFF" type="button" class="btn btn-danger" disabled="disabled" onclick="TEST_SET_OFF()">停止</button></div></div><br/><br/>'
                //----------全功率輸入輸出測試----------
                + '<div class="col-md-12"><div class="col-md-3"><span id="lable2" style="font-weight: bold; font-size: 16px;">全功率輸入/出測試：</span></div>'
                + '<div class="col-md-3"><button id="FULLIN_SET_ON" type="button" class="btn btn-success" onclick="FULLIN_SET_ON()" value="Manual">輸入測試</button></div>'
                + '<div class="col-md-3"><button id="FULLOUT_SET_ON" type="button" class="btn btn-success" onclick="FULLOUT_SET_ON()" value="Manual">輸出測試</button></div>'
                + '<div class="col-md-3"><button id="FULL_SET_OFF" type="button" class="btn btn-danger" disabled="disabled" onclick="TEST_SET_OFF()">停止</button></div></div><br/><br/>'
                //----------上線測試----------
                + '<div class="col-md-12"><div class="col-md-4"><span id="lable2" style="font-weight: bold; font-size: 16px;">上線測試：</span></div>'
                + '<div class="col-md-4"><button id="COM_SET_ON" type="button" class="btn btn-success" onclick="COM_SET_ON()" value="Manual">啟動</button></div>'
                + '<div class="col-md-4"><button id="COM_SET_OFF" type="button" class="btn btn-danger" disabled="disabled" onclick="TEST_SET_OFF()">停止</button></div ></div > <br/> <br/></div></div></form></div></div >');
            enablebtn(controlmode);
            break;
    }
}
