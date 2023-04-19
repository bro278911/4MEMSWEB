var EMS_data = [];
var Nexus_Hs_data = [];
var Alm_Comm_data = [];
var Alm_Comm_data_his = [];
var Operation_log = [];
var FLN_Cube_data = [];
var FLN_bms_PCS_data = [];
//new_add
var New_Warning_data = [];
var SBPSPM_data = [];
function getHzRandom(x) {
    return Math.random() * x + 59.98;
};
function getVRandom(x) {
    return Math.random() * x + -9;
};
function getPRandom(x) {
    return Math.random() * x + 100;
};
function getsbspmRandom(x) {
    return Math.random() * x + 97;
};
function getsocRandom(x) {
    return Math.random() * x + 85;
};

function getpRandom(x) {
    return Math.random() * x;
};
function getqRandom(x) {
    return Math.random() * x;
};
function gettempRandom(x) {
    return Math.random() * x + 20;
};

/*先執行取權限資料方法*/
function getPermissiondata() {
    /*內容為儲存在cookie的權限等級username)*/
        var login_username =  getCookie_username();
    /*    console.log(login_username)*/
    $.ajax(
        {
            url: '/EMSashx/getPermission_data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: {"login_username": login_username },
            success: function initialize(data) {
                Permission_data = data;
                //enablebtn("AFCTEST");
                //console.log(FLN_bms_PCS_data);
                //buildparametertable('#moduleA');
            }
        });
    /*        console.log(Permission_data)*/
}

function geEMSdata() {
    $.ajax(
        {
            url: '/EMSashx/getEMS_data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                EMS_data = data;
                //enablebtn("AFCTEST");
                //console.log(data);
                //buildparametertable('#moduleA');

            }

        });
}
function getNexusdata() {
    $.ajax(
        {
            url: '/EMSashx/getNexus_Hs_data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                Nexus_Hs_data = data;
                //enablebtn("AFCTEST");
                //console.log(Nexus_Hs_data);
                //buildparametertable('#moduleA');

            }

        });
}
function getAlarm_Comm_data() {
    $.ajax(
        {
            url: '/EMSashx/getAlarm_Comm_Data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                Alm_Comm_data = data;
                //enablebtn("AFCTEST");
                //console.log(Alm_Comm_data);
                //buildparametertable('#moduleA');

            }

        });
}
function getAlarm_Comm_data_his() {
    $.ajax(
        {
            url: '/EMSashx_history/getAlarm_Comm_Data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                Alm_Comm_data_his = data;
                //enablebtn("AFCTEST");
                //console.log(Alm_Comm_data);
                //buildparametertable('#moduleA');

            }

        });
}
function getOperation_log_data() {
    $.ajax(
        {
            url: '/EMSashx/getOperation_log_Data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                Operation_log = data;
                //enablebtn("AFCTEST");
                console.log(Operation_log);
                //buildparametertable('#moduleA');
            }
        });
}
function getFLNCubedata() {
    $.ajax(
        {
            url: '/EMSashx/getFLNCubedata.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                FLN_Cube_data = data;
                //enablebtn("AFCTEST");
                //console.log(FLN_Cube_data);
                //buildparametertable('#moduleA');
            }
        });
}
function getFLNbmspcsdata() {
    $.ajax(
        {
            url: '/EMSashx/getFLNBMS_PCS_data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                FLN_bms_PCS_data = data;
                //enablebtn("AFCTEST");
                //console.log(FLN_bms_PCS_data);
                //buildparametertable('#moduleA');
            }
        });
}

/*取最新告警資料方法*/
function getNewWarningdata() {
    /*抓取隱藏在MasterPage.master頁面的input(內容為儲存在session的權限等級permission)*/
/*    var login_username = getCookie_username();*/
    /*    var login_username = $("#login_username").val();*/
    /*    console.log(login_username)*/
    $.ajax(
        {
            url: '/EMSashx/getNewWarning_data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: {},
            success: function initialize(data) {
                New_Warning_data = data;
                //enablebtn("AFCTEST");
                //console.log(FLN_bms_PCS_data);
                //buildparametertable('#moduleA');
            }
        });
}
//取得SBSPM資料
function getSBSPM_data() {
    $.ajax(
        {
            url: '/EMSashx/getSBSPM_data.ashx',
            type: 'post',
            async: false,
            dataType: 'json',
            data: '',
            success: function initialize(data) {
                SBPSPM_data = data;
            }

        });
}
//取得System資料
function get_Systemdata() {
    //console.log('chart');
    $.ajax({
        url: '/EMSashx/getSystem_data.ashx',
        type: "post",
        dataType: 'json',
        async: true,
        data: '',
        success: function (data) {
            System_Chartdatas = data;
        }
    });
}