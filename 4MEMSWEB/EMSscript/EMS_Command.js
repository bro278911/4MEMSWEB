function enablebtn(controlmode)
{
    geEMSdata();
    //呼叫取得權限方法
    getPermissiondata();
/*    console.log(Permission_data[0].permission)*/
    if (Permission_data[0].permission == "Level3_limit") {
        //使用jquery更改按鈕名稱為"禁用"以及更改為disabled
        $('#PCS_SET_ON').text('禁用');
        $('#PCS_SET_ON').attr('disabled', true);
        $('#PCS_SET_OFF').text('禁用');
        $('#PCS_SET_OFF').attr('disabled', true);
        $('#COM_SET_ON').text('禁用');
        $('#COM_SET_ON').attr('disabled', true);
        $('#COM_SET_OFF').text('禁用');
        $('#COM_SET_OFF').attr('disabled', true);
        $('#SCANUP_SET_ON').text('禁用');
        $('#SCANUP_SET_ON').attr('disabled', true);
        $('#SCANDOWN_SET_ON').text('禁用');
        $('#SCANDOWN_SET_ON').attr('disabled', true);
        $('#STEP_SET_ON').text('禁用');
        $('#STEP_SET_ON').attr('disabled', true);
        $('#FULLIN_SET_ON').text('禁用');
        $('#FULLIN_SET_ON').attr('disabled', true);
        $('#FULLOUT_SET_ON').text('禁用');
        $('#FULLOUT_SET_ON').attr('disabled', true);
        $('#STEP_SET_OFF').text('禁用');
        $('#STEP_SET_OFF').attr('disabled', true);
        $('#SCAND_SET_OFF').text('禁用');
        $('#SCAND_SET_OFF').attr('disabled', true);
        $('#FULL_SET_OFF').text('禁用');
        $('#FULL_SET_OFF').attr('disabled', true);
        $('#PRECHR_SET_ON').text('禁用');
        $('#PRECHR_SET_ON').attr('disabled', true);
        $('#PRECHR_SET_OFF').text('禁用');
        $('#PRECHR_SET_OFF').attr('disabled', true);
        /*ID命名關係有點.怕改ID有影響因此取name做設定*/
        $('button[name="COMdReg0dot25_SET_ON"]').text('禁用');
        $('button[name="COMdReg0dot25_SET_ON"]').attr('disabled', true);
        $('button[name="COMdReg0dot25_SET_OFF"]').text('禁用');
        $('button[name="COMdReg0dot25_SET_OFF"]').attr('disabled', true);
        $('button[name="COMdReg0dot5_SET_ON"]').text('禁用');
        $('button[name="COMdReg0dot5_SET_ON"]').attr('disabled', true);
        $('button[name="COMdReg0dot5_SET_OFF"]').text('禁用');
        $('button[name="COMdReg0dot5_SET_OFF"]').attr('disabled', true);
        /*ID命名關係有點.怕改ID有影響因此取name做設定*/
        $('#COMdReg0.btn_Set_P_ref').text('禁用');
        $('#COMdReg0.btn_Set_P_ref').attr('disabled', true);
        $('#btn_Set_SOC').text('禁用');
        $('#btn_Set_SOC').attr('disabled', true);
        $('#btn_Set_PQ').text('禁用');
        $('#btn_Set_PQ').attr('disabled', true);
        $('#btn_Set_P_ref').text('禁用');
        $('#btn_Set_P_ref').attr('disabled', true);
    }else {
        if (EMS_data[0].COM_Status == "Normal") {
            switch (controlmode) {
                case 'Manual':
                    if (EMS_data[0].PCS_Status == "OFF") {
                        document.getElementById("PCS_SET_ON").disabled = false;
                        document.getElementById("PCS_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].PCS_Status == "ON") {
                        document.getElementById("PCS_SET_ON").disabled = true;
                        document.getElementById("PCS_SET_OFF").disabled = false;
                    }
                    if (EMS_data[0].Running_Mode == "PQ_Mode") {
                        document.getElementById("COM_SET_ON").disabled = false;
                        document.getElementById("COM_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].Running_Mode == "OFF") {
                        document.getElementById("COM_SET_ON").disabled = true;
                        document.getElementById("COM_SET_OFF").disabled = false;
                    }
                    break;
                case 'dReg0.25':
                    if (EMS_data[0].PCS_Status == "OFF") {
                        document.getElementById("PCS_SET_ON").disabled = false;
                        document.getElementById("PCS_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].PCS_Status == "ON") {
                        document.getElementById("PCS_SET_ON").disabled = true;
                        document.getElementById("PCS_SET_OFF").disabled = false;
                    }
                    if (EMS_data[0].Running_Mode == "AFC25_Mode") {
                        document.getElementById("COM_SET_ON").disabled = false;
                        document.getElementById("COM_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].Running_Mode == "OFF") {
                        document.getElementById("COM_SET_ON").disabled = true;
                        document.getElementById("COM_SET_OFF").disabled = false;
                    }
                    break;
                case 'dReg0.5':
                    if (EMS_data[0].PCS_Status == "OFF") {
                        document.getElementById("PCS_SET_ON").disabled = false;
                        document.getElementById("PCS_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].PCS_Status == "ON") {
                        document.getElementById("PCS_SET_ON").disabled = true;
                        document.getElementById("PCS_SET_OFF").disabled = false;
                    }
                    if (EMS_data[0].Running_Mode == "AFC50_Mode") {
                        document.getElementById("COM_SET_ON").disabled = false;
                        document.getElementById("COM_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].Running_Mode == "OFF") {
                        document.getElementById("COM_SET_ON").disabled = true;
                        document.getElementById("COM_SET_OFF").disabled = false;
                    }
                    break;
                case 'AFCTEST':
                    if (EMS_data[0].PCS_Status == "OFF") {
                        document.getElementById("PCS_SET_ON").disabled = false;
                        document.getElementById("PCS_SET_OFF").disabled = true;
                    }
                    else if (EMS_data[0].PCS_Status == "ON") {
                        document.getElementById("PCS_SET_ON").disabled = true;
                        document.getElementById("PCS_SET_OFF").disabled = false;
                    }

                    if (EMS_data[0].Running_Mode == "STOP") {
                        document.getElementById("SCANUP_SET_ON").disabled = false;
                        document.getElementById("SCANDOWN_SET_ON").disabled = false;
                        document.getElementById("SCANUP_SET_ON").disabled = false;
                        document.getElementById("SCANDOWN_SET_ON").disabled = false;
                        document.getElementById("STEP_SET_ON").disabled = false;
                        document.getElementById("FULLIN_SET_ON").disabled = false;
                        document.getElementById("FULLOUT_SET_ON").disabled = false;
                        //----------
                        document.getElementById("STEP_SET_OFF").disabled = true;
                        document.getElementById("SCAND_SET_OFF").disabled = true;
                        document.getElementById("FULL_SET_OFF").disabled = true;

                    }
                    else if (EMS_data[0].Running_Mode == "STEPTEST_25") {
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("STEP_SET_ON").disabled = true;
                        document.getElementById("FULLIN_SET_ON").disabled = true;
                        document.getElementById("FULLOUT_SET_ON").disabled = true;
                        //----------
                        document.getElementById("STEP_SET_OFF").disabled = false;
                        document.getElementById("SCAND_SET_OFF").disabled = false;
                        document.getElementById("FULL_SET_OFF").disabled = false;
                    }
                    else if (EMS_data[0].Running_Mode == "SCANUP_25") {
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("STEP_SET_ON").disabled = true;
                        document.getElementById("FULLIN_SET_ON").disabled = true;
                        document.getElementById("FULLOUT_SET_ON").disabled = true;
                        //----------
                        document.getElementById("STEP_SET_OFF").disabled = false;
                        document.getElementById("SCAND_SET_OFF").disabled = false;
                        document.getElementById("FULL_SET_OFF").disabled = false;
                    }
                    else if (EMS_data[0].Running_Mode == "SCANDOWN_25") {
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("STEP_SET_ON").disabled = true;
                        document.getElementById("FULLIN_SET_ON").disabled = true;
                        document.getElementById("FULLOUT_SET_ON").disabled = true;
                        //----------
                        document.getElementById("STEP_SET_OFF").disabled = false;
                        document.getElementById("SCAND_SET_OFF").disabled = false;
                        document.getElementById("FULL_SET_OFF").disabled = false;
                    }
                    else if (EMS_data[0].Running_Mode == "FULLIN_25") {
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("STEP_SET_ON").disabled = true;
                        document.getElementById("FULLIN_SET_ON").disabled = true;
                        document.getElementById("FULLOUT_SET_ON").disabled = true;
                        //----------
                        document.getElementById("STEP_SET_OFF").disabled = false;
                        document.getElementById("SCAND_SET_OFF").disabled = false;
                        document.getElementById("FULL_SET_OFF").disabled = false;
                    }
                    else if (EMS_data[0].Running_Mode == "FULLOUT_25") {
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("SCANUP_SET_ON").disabled = true;
                        document.getElementById("SCANDOWN_SET_ON").disabled = true;
                        document.getElementById("STEP_SET_ON").disabled = true;
                        document.getElementById("FULLIN_SET_ON").disabled = true;
                        document.getElementById("FULLOUT_SET_ON").disabled = true;
                        //----------
                        document.getElementById("STEP_SET_OFF").disabled = false;
                        document.getElementById("SCAND_SET_OFF").disabled = false;
                        document.getElementById("FULL_SET_OFF").disabled = false;
                    }
                    break;
            }
        }
    }
}
//----------啟動PCS----------
function PCS_SET_ON()
{
    //console.log("成功");
    var start = '1';
    var select = 'PCS_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });
}
//----------停止PCS----------
function PCS_SET_OFF() {
    //console.log("成功");
    var start = '1';
    var select = 'PCS_SET_OFF';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });

}
//----------停止調度----------
function COM_SET_OFF() {
    //console.log("成功");
    var start = '1';
    var select = 'PCS_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });

}
//----------啟動調度----------
function COM_SET_ON() {
    //console.log("成功");
    var start = '1';
    var select = 'COM_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
}

//----------啟動步階測試----------
function STEP_SET_ON() {
    //console.log("成功");
    var start = '1';
    var select = 'STEP_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                //console.log("成功");
                //enablebtn(controlmode);
                
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
    
}
//----------啟動向上掃頻測試----------
function SCANUP_SET_ON() {
    //console.log("成功");
    var start = '1';
    var select = 'SCANUP_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
}
//----------啟動向下掃頻測試----------
function SCANDOWN_SET_ON() {
    //console.log("成功");
    var start = '1';
    var select = 'SCANDOWN_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
}
//----------啟動全功率輸出測試----------
function FULLOUT_SET_ON() {
    //console.log("成功");
    var start = '1';
    var select = 'FULLOUT_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
}
//----------啟動全功率輸入測試----------
function FULLIN_SET_ON() {
    //console.log("成功");
    var start = '1';
    var select = 'FULLIN_SET_ON';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                
                //console.log("成功");
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
}
//----------停止測試----------
function TEST_SET_OFF() {
    //console.log("成功");
    var start = '1';
    var select = 'TEST_SET_OFF';
    $.ajax(
        {
            url: '/EMSashx/EMS_COM.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: 'start=' + start + '&select=' + select,

            success: function initialize(data) {
                enablebtn(controlmode);
                //console.log("成功");
            }
        });
    setTimeout(function () {
        enablebtn("AFCTEST");
    }, 200);
}


//----------設定PQ----------
function SET_PQ()
{
    var Parameter = document.getElementById("ParameterText");
    var SET_P = '';
    var SET_Q = '';
    var select = 'SET_PQ';
    var ErrorParameter_P = 1;
    var ErrorParameter_Q = 1;
    select = Parameter.btn_Set_PQ.value;
    SET_P = Parameter.Set_P.value;
    SET_Q = Parameter.Set_Q.value;
    SET_P = parseFloat(SET_P);
    SET_Q = parseFloat(SET_Q);
    if (SET_P <= 1250 && SET_P >= -1250 && SET_P != null) ErrorParameter_P = 0;
    if (SET_Q <= 1250 && SET_Q >= -1250 && SET_Q != null) ErrorParameter_Q = 0;
    if (ErrorParameter_P == 1 || ErrorParameter_Q == 1) alert('數值未依規定輸入，請修正數值')
    else var reply = confirm("確定要發送資料?");
    if (select === 'SET_PQ' && reply === true && ErrorParameter_P == 0 && ErrorParameter_Q == 0) {
        select = 'SET_PQ';
        //console.log(Capacity_setting);
        //console.log(Capacity_setting3);
        $.ajax(
            {
                url: '/EMSashx/EMS_COM.ashx',
                type: 'post',
                async: false,
                dataType: 'json',
                data: 'select=' + select + '&SET_P=' + SET_P + '&SET_Q=' + SET_Q,

                success: function initialize(data) {

                    //console.log("成功");
                }
            });
    }
}
//----------設定SOC----------
function SET_PQ_limit() {
    var Parameter = document.getElementById("ParameterText");
    var SOC_H_limit = '';
    var SOC_L_limit = '';
    var select = 'SET_SOC';
    var ErrorParameter_H = 1;
    var ErrorParameter_L = 1;
    select = Parameter.btn_Set_SOC.value;
    SOC_H_limit = Parameter.SOC_H_limit.value;
    SOC_L_limit = Parameter.SOC_L_limit.value;
    SOC_H_limit = parseFloat(SOC_H_limit);
    SOC_L_limit = parseFloat(SOC_L_limit);
    if (SOC_H_limit <= 100 && SOC_H_limit >= 0 && SOC_H_limit != null && SOC_H_limit > SOC_L_limit) ErrorParameter_H = 0;
    if (SOC_L_limit <= 100 && SOC_L_limit >= 0 && SOC_L_limit != null && SOC_L_limit < SOC_H_limit) ErrorParameter_L = 0;
    if (ErrorParameter_H == 1 || ErrorParameter_L == 1) alert('數值未依規定輸入，請修正數值')
    else var reply = confirm("確定要發送資料?");
    
    if (select === 'SET_SOC' && reply === true && ErrorParameter_H == 0 && ErrorParameter_L == 0) {
        select = 'SET_SOC';
        console.log(ErrorParameter_H);
        console.log(ErrorParameter_L);
        $.ajax(
            {
                url: '/EMSashx/EMS_COM.ashx',
                type: 'post',
                async: false,
                dataType: 'json',
                data: 'select=' + select + '&SOC_H_limit=' + SOC_H_limit + '&SOC_L_limit=' + SOC_L_limit,

                success: function initialize(data) {

                    //console.log("成功");
                }
            });
    }
}
//----------設定功率基準值----------
function Set_P_ref() {
    var Parameter = document.getElementById("ParameterText");
    var P_ref = '';
    var select = 'SET_P_ref';
    var ErrorParameter = 1;
    select = Parameter.btn_Set_P_ref.value;
    P_ref = Parameter.P_ref.value;
    P_ref = parseFloat(P_ref);
    if (P_ref <= 1250 && P_ref >= -1250 && P_ref != null ) ErrorParameter = 0;
    if (ErrorParameter == 1) alert('數值未依規定輸入，請修正數值')
    else var reply = confirm("確定要發送資料?");
    console.log(select);
    if (select === 'SET_P_ref' && reply === true && ErrorParameter == 0) {
        select = 'SET_P_ref';
        $.ajax(
            {
                url: '/EMSashx/EMS_COM.ashx',
                type: 'post',
                async: false,
                dataType: 'json',
                data: 'select=' + select + '&P_ref=' + P_ref,

                success: function initialize(data) {

                    //console.log("成功");
                }
            });
    }
}


function Set_MVCB_ON(){
    var reply = confirm("確定要搭接MVCB?");
}
function Set_MVCB_OFF() {
    var reply = confirm("確定要切離MVCB?");
}
function Set_VCB1_ON() {
    var reply = confirm("確定要搭接VCB1?");
}
function Set_VCB1_OFF() {
    var reply = confirm("確定要切離VCB1?");
}
function Set_VCB2_ON() {
    var reply = confirm("確定要搭接VCB2?");
}
function Set_VCB2_OFF() {
    var reply = confirm("確定要切離VCB2?");
}
function Set_VCB3_ON() {
    var reply = confirm("確定要搭接VCB3?");
}
function Set_VCB3_OFF() {
    var reply = confirm("確定要切離VCB3?");
}

