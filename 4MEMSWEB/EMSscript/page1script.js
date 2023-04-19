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
