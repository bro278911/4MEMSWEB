google.charts.load('current', { packages: ['corechart'] });
var chart2;
var Control_Chartdatas;
var Controlchart;
//新增全域變數
var SBSPM_Chartdatas;
var System_Chartdatas;
var Pcs_Chartdatas;
function myrefresh() {
    window.location.reload();
}

function getLineChartdata() {
    var page = location.pathname.toString();
    switch (page) {
        case '/':
        case '/Homepage.aspx':
            //呼叫取資料方法
            get_SBSPMdata();
            get_Systemdata();
            
        //case '/Default_1.aspx':
            //$('#pagename').append('雲端儲能管理系統');

            google.charts.setOnLoadCallback(batt1socchart);
            google.charts.setOnLoadCallback(batt2socchart);
            google.charts.setOnLoadCallback(sbspmchart);
            google.charts.setOnLoadCallback(systemchart);
            break;
        case '/page1.aspx':
            //$('#pagename').append('系統單線圖');
            break;
        case '/page2.aspx':
            //$('#pagename').append('貨櫃資訊');
            break;
        case '/page3.aspx':
            //$('#pagename').append('電池資訊');
            break;
        case '/page4.aspx':
            get_Pcsdata();
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
            //google.charts.setOnLoadCallback(Controlchart);

            //呼叫取資料方法
            getAFCChartdata();
            break;


    }
    
}
function searchdata() {
    google.charts.setOnLoadCallback(hischart);
}
function batt1socchart() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Number of Cube');
    dataTable.addColumn('number', 'SOC');
    var chart = null;
    dataTable.addRows([
        ['Cube1', getsocRandom(15)],
        ['Cube2', getsocRandom(15)],
        ['Cube3', getsocRandom(15)],
        ['Cube4', getsocRandom(15)]   
    ]);

    var options = {
        title: 'Batt SOC',
        height: 250,
        seriesType: 'bars',
        hAxis: { title: 'Number of Cube' },
        vAxis: {
            title: 'SOC(%)',
            maxValue: 100,
            minValue: 0
        }
    };

    if (chart == null || chart == undefined) {
        chart = new google.visualization.ColumnChart(document.getElementById('Core1_Chart'));
    }
    else {
        chart.clearChart();
    }
    chart.draw(dataTable, options);
    dataTable = null;
    chart = null;
   
}
function batt2socchart() {
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Number of Cube');
    dataTable.addColumn('number', 'SOC');
    var chart = null;
    dataTable.addRows([
        ['Cube5', getsocRandom(15)],
        ['Cube6', getsocRandom(15)],
        ['Cube7', getsocRandom(15)],
        ['Cube8', getsocRandom(15)]
    ]);

    var options = {
        title: 'Batt SOC',
        height: 250,
        seriesType: 'bars',
        hAxis: { title: 'Number of Cube' },
        vAxis: {
            title: 'SOC(%)',
            maxValue: 100,
            minValue: 0
        }
    };

    if (chart == null || chart == undefined) {
        chart = new google.visualization.ColumnChart(document.getElementById('Core2_Chart'));
    }
    else {
        chart.clearChart();
    }
    chart.draw(dataTable, options);
    dataTable = null;
    chart = null;

}
function sbspmchart() {
    

    var data1 = 'SBSPM';
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Time');
    dataTable.addColumn('number', data1);

    var chart2 = null;

    /*    data_num = (Control_Chartdatas.length / 2);*/
    for (var i in SBSPM_Chartdatas) {
        /*        console.log(Control_Chartdatas[i].SBPSPM);*/ //資料%數
        /*                console.log(2 % 4)*/
        if (i % 4 == 0) {//利用%等於0來減少資料點，只需將對應id+1即可
            dataTable.addRows([[(i / 2) + '', SBSPM_Chartdatas[i / 2].SBPSPM]]);//X軸id除2為時間3600秒,Y軸資料%
        }

    }

    options = {
        title: '系統執行率',
        pointSize: 2,//資料點大小
        height: 250,//高度
        legend: { position: 'bottom' },

        vAxis: { //Y軸%數
            title: '%',
            maxValue: 100,
            minValue: 0
        }
    };
    if (chart2 == null || chart2 == undefined) {

        chart2 = new google.visualization.LineChart(document.getElementById('sbspm_chart'));

    }
    else {
        chart2.clearChart();

    }
    chart2.draw(dataTable, options);
    //console.log(chart2)
    dataTable = null;
    chart2 = null;

}
//取得時間 和 SBSPM資料
function get_SBSPMdata() {
    //console.log('chart');
    $.ajax({
        url: '/EMSashx/getSBSPM_data.ashx',
        type: "post",
        dataType: 'json',
        async: true,
        data: '',
        success: function (data) {
            SBSPM_Chartdatas = data;
        }
    });
}

function systemchart() {
    
    var data1 = '功率(%)';
    var data2 = '頻率(Hz)';
    var dataTable = null;
    dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Time');
    dataTable.addColumn('number', data1);
    dataTable.addColumn('number', data2);
    var chart1 = null;
    /*    console.log(System_Chartdatas)*/

    //for (j = 0, jj = 500 - 1; j < 500, jj >= 0; j++, jj--) {
    //    dataTable.addRows([[j + '', getVRandom(18), getHzRandom(0.02)]]);
    //}

    for (var j in System_Chartdatas) {
        if (j % 4 == 0) {//利用%等於0來減少資料點，只需將對應id+1即可
            dataTable.addRows([[(j / 2) + '', (System_Chartdatas[j / 2].P_ref) / 100, System_Chartdatas[j / 2].Base_Freq]]);//X軸id除2為時間3600秒,Y軸資料%
        }
    }

    options = {
        title: '系統趨勢圖',
        //curveType: 'function',
        pointSize: 2,
        height: 250,
        legend: { position: 'bottom' },
        series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 1 },
        },
        vAxes: {
            // Adds titles to each axis.
            0: {
                title: '%',

            },
            1: {
                title: 'Freq',
                //maxValue: 61,
                //minValue: 59
            }
        },
    };

    if (chart1 == null || chart1 == undefined) {
        chart1 = new google.visualization.LineChart(document.getElementById('sys_chart'));

    }
    else {
        chart1.clearChart();
    }
    chart1.draw(dataTable, options);
    dataTable = null;
    chart1 = null;
}
//建立方法取System資料
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

function PCSchart() {
    
    var data1 = '功率(%)';
    var data2 = '頻率(Hz)';
    var dataTable = null;
    dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Time');
    dataTable.addColumn('number', data1);
    dataTable.addColumn('number', data2);
    var chart1 = null;
    //for (j = 0, jj = 500 - 1; j < 500, jj >= 0; j++ , jj--) {
    //    dataTable.addRows([[j + '', getVRandom(18), getHzRandom(0.02)]]);
    //}

    for (var j in Pcs_Chartdatas) {
        if (j % 4 == 0) {//利用%等於0來減少資料點，只需將對應id+1即可
            dataTable.addRows([[(j / 2) + '', (Pcs_Chartdatas[j / 2].P_ref) / 100, Pcs_Chartdatas[j / 2].Base_Freq]]);//X軸id除2為時間3600秒,Y軸資料%
        }
    }

    options = {
        title: '系統趨勢圖',
        //curveType: 'function',
        pointSize: 2,
        height: 280,
        legend: { position: 'bottom' },
        series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 1 },
        },
        vAxes: {
            // Adds titles to each axis.
            0: {
                title: '%',

            },
            1: {
                title: 'Freq',
                //maxValue: 61,
                //minValue: 59
            }
        },
    };

    if (chart1 == null || chart1 == undefined) {
        chart1 = new google.visualization.LineChart(document.getElementById('PCS_chart'));

    }
    else {
        chart1.clearChart();
    }
    chart1.draw(dataTable, options);
    dataTable = null;
    chart1 = null;
}

//建立方法取Pcs資料
function get_Pcsdata() {
    //console.log('chart');
    $.ajax({
        url: '/EMSashx/getPcs_data.ashx',
        type: "post",
        dataType: 'json',
        async: true,
        data: '',
        success: function (data) {
            Pcs_Chartdatas = data;
        }
    });
}


function getAFCChartdata() {

    //console.log('chart');
    $.ajax({
        url: '/EMSashx/getAFC0.25data.ashx',
        type: "post",
        dataType: 'json',
        async: true,
        data: '',
        success: function (data) {
            Control_Chartdatas = data;
/*            console.log(Control_Chartdatas)*/
/*            console.log(Control_Chartdatas);*/
            if (Control_Chartdatas.length > 1) {
                //google.charts.load('current', { 'packages': ['corechart'] });
                /*                google.charts.setOnLoadCallback(Controlchart);*/
                google.charts.setOnLoadCallback(Controlchart);
                google.charts.setOnLoadCallback(AFCoperatingchart);
            }
            //else if (Chartdatas < 1) {
            //    $('#mainchart').empty();
            //    $("#mainchart").append("<h5>目前近30分鐘無數據資料，請確認系統是否正常運行</h5>");
            //}
        }
    });
}

function Controlchart() {
    var data1 = 'Freq(Hz)';
    var data2 = 'VCB(kW)';
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Time');
    dataTable.addColumn('number', data1);
    dataTable.addColumn('number', data2);
    var Controlchart = null;

    for (j = 0, jj = Control_Chartdatas.length - 1; j < Control_Chartdatas.length, jj >= 0; j++ , jj--) {
        dataTable.addRows([[j + '', Control_Chartdatas[jj].Control_Freq, Control_Chartdatas[jj].Control_P]]);
    }

    options = {
        title: '功率歷史趨勢圖',
        pointSize: 2,
        height: 500,
        legend: { position: 'bottom' },

        series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 1 },
        },
        vAxes: {
            // Adds titles to each axis.
            0: {
                title: 'Freq',
                maxValue: 60.6,
                minValue: 59.4
            },
            1: {
                title: 'kW',
                maxValue: 1000,
                minValue: -1000
            }
        },
        
    };
/*    Controlchart = new google.visualization.LineChart(document.getElementById('AFCoperating_chart'));*/
    if (Controlchart == null || Controlchart == undefined) {

        Controlchart = new google.visualization.LineChart(document.getElementById('AFCoperating_chart'));

    }
    else {
        
        Controlchart.clearChart();
        
    }
    Controlchart.draw(dataTable, options);
    //console.log(chart2)
    dataTable = null;
    Controlchart = null;
/*    Control_Chartdatas = []*/
}

function AFCoperatingchart() {

    var data1 = 'dReg(0.25)';
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('number', 'Hz');
    dataTable.addColumn('number', 'Power');
    dataTable.addColumn('number', 'Power1');
    dataTable.addColumn('number', 'Power2');
    dataTable.addRows([[59.70, 100, 100,null]]);
    dataTable.addRows([[59.75, 100, 100,null]]);
    dataTable.addRows([[59.86, 52, 52, null]]);
    dataTable.addRows([[59.98, 9, -9, null]]);
    dataTable.addRows([[60.02, 9, -9, null]]);
    dataTable.addRows([[60.14, -52, -52, null]]);
    dataTable.addRows([[60.25, -100, -100, null]]);
    dataTable.addRows([[60.30, -100, -100, null]]);
    //dataTable.addRows([[59.92, null, null, -100]]);
    //for (i = 0; i < Chartdatas.length ; i++) {
    //    dataTable.addRows([[Chartdatas[i].Freq, null, null, Chartdatas[i].PCS_P/1000*100]]);
    //}
    
    for (i = 0; i < 500; i++) {
        dataTable.addRows([[Control_Chartdatas[i].Control_Freq, null, null, Control_Chartdatas[i].Control_P / 1000 * 100]]);
    }
    var chart3 = null;
    options = {
        title: 'dReg(0.25)',
        pointSize: 2,
        height: 500,
        legend: { position: 'bottom' },
        series: { 0: { type: 'line' }, 1: { type: 'line' }, 2: { type: 'scatter'  ,pointSize: 5, } },

        vAxis: {
            title: '%',
            maxValue: 100,
            minValue: -100
        }
    };
    
    if (chart3 == null || chart3 == undefined) {
        chart3 = new google.visualization.ComboChart(document.getElementById('AFCoperating_chart2'));
    }
    else {
        chart3.clearChart();
    }
    chart3.draw(dataTable, options);
    dataTable = null;
    chart3 = null;
    Control_Chartdatas = []
}

function hischart() {
    var data1 = 'PCS(MW)';
    var data2 = 'VCB(MW)';
    var data3 = 'AFC(MW)';
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Time');
    dataTable.addColumn('number', data1);
    dataTable.addColumn('number', data2);
    dataTable.addColumn('number', data3);
    var chart4 = null;

    for (j = 0, jj = 1440 - 1; j < 1440, jj >= 0; j++, jj--) {
        dataTable.addRows([[j + '',1,0.98,0.95]]);
    }

    options = {
        title: '功率歷史趨勢圖',
        pointSize: 2,
        height: 500,
        legend: { position: 'bottom' },

        vAxis: {
            title: 'MW',
            minValue:0,
        }
    };
    if (chart4 == null || chart4 == undefined) {

        chart4 = new google.visualization.LineChart(document.getElementById('his_chart'));

    }
    else {
        chart4.clearChart();

    }
    chart4.draw(dataTable, options);
    //console.log(chart2)
    dataTable = null;
    chart4 = null;

}
