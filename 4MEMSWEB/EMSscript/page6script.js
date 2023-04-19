//建立表格
function buildHtmlTable(selector) {
    
    $(selector).empty();
    var columns = addAllColumnHeaders(Alm_Comm_data, selector);
    
    for (var i = 0; i < Alm_Comm_data.length; i++) {
        var row$ = $('<tr/>');
        row$.addClass("success");
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            //if (colIndex == 9) { colIndex = 10; }
            var cellValue = Alm_Comm_data[i][columns[colIndex]];

            if (cellValue == null) cellValue = "";

            //if (colIndex == 2)
            //    cellValue = cellValue.toString().slice(0, 10);//console.log('lat' + columns.length + '___' + cellValue.toString().slice(0, 10));//cellValue = cellValue.split("", 10);
            //else if (colIndex == 3)
            //    cellValue = cellValue.toString().slice(0, 11);//console.log('lng' + columns.length + '___' + cellValue.toString().slice(0, 11));//cellValue = cellValue.split("", 11);
            ////console.log(columns.length + '___' + cellValue);
            row$.append($('<td/>').text(cellValue));

        }

        $(selector).append(row$);
    }
}
// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.


function addAllColumnHeaders(datas, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
    headerTr$.addClass("info");
    for (var i = 0; i < datas.length; i++) {

        var rowHash = Alm_Comm_data[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                if (key == 'SOC')
                    headerTr$.append($('<th/>').text(key + '(%)'));
                //else if (key == 'Ring' || key == 'GPStime' || key == 'T1' || key == 'T2' || key == 'T3' || key == 'MT1' || key == 'MT2' || key == 'MT3' || key == 'AHT' || key == 'SOH' || key == 'RRT' || key == 'TimeError' || key == 'CarStatic')
                //{ }
                else if (key == 'AHC')
                    headerTr$.append($('<th/>').text(key + '(Ah)'));

                else
                    headerTr$.append($('<th/>').text(key));

            }
            //console.log(headerTr$);
        }


    }
    $(selector).append(headerTr$);
    
    return columnSet;
}
//建立表格

//建立表格
function buildHtmlTable1(selector) {

    $(selector).empty();
    var columns = addAllColumnHeaders1(Operation_log, selector);

    for (var i = 0; i < Operation_log.length; i++) {
        var row$ = $('<tr/>');
        row$.addClass("success");
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            //if (colIndex == 9) { colIndex = 10; }
            var cellValue = Operation_log[i][columns[colIndex]];

            if (cellValue == null) cellValue = "";

            //if (colIndex == 2)
            //    cellValue = cellValue.toString().slice(0, 10);//console.log('lat' + columns.length + '___' + cellValue.toString().slice(0, 10));//cellValue = cellValue.split("", 10);
            //else if (colIndex == 3)
            //    cellValue = cellValue.toString().slice(0, 11);//console.log('lng' + columns.length + '___' + cellValue.toString().slice(0, 11));//cellValue = cellValue.split("", 11);
            ////console.log(columns.length + '___' + cellValue);
            row$.append($('<td/>').text(cellValue));

        }

        $(selector).append(row$);
    }
}
// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.


function addAllColumnHeaders1(datas, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
    headerTr$.addClass("info");
    for (var i = 0; i < datas.length; i++) {

        var rowHash = Operation_log[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                if (key == 'SOC')
                    headerTr$.append($('<th/>').text(key + '(%)'));
                //else if (key == 'Ring' || key == 'GPStime' || key == 'T1' || key == 'T2' || key == 'T3' || key == 'MT1' || key == 'MT2' || key == 'MT3' || key == 'AHT' || key == 'SOH' || key == 'RRT' || key == 'TimeError' || key == 'CarStatic')
                //{ }
                else if (key == 'AHC')
                    headerTr$.append($('<th/>').text(key + '(Ah)'));

                else
                    headerTr$.append($('<th/>').text(key));

            }
            //console.log(headerTr$);
        }


    }
    $(selector).append(headerTr$);

    return columnSet;
}
//建立表格

//建立表格
function buildHtmlTable2(selector) {

    $(selector).empty();
    var columns = addAllColumnHeaders2(Alm_Comm_data_his, selector);

    for (var i = 0; i < Alm_Comm_data_his.length; i++) {
        var row$ = $('<tr/>');
        row$.addClass("success");
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            //if (colIndex == 9) { colIndex = 10; }
            var cellValue = Alm_Comm_data_his[i][columns[colIndex]];

            if (cellValue == null) cellValue = "";

            //if (colIndex == 2)
            //    cellValue = cellValue.toString().slice(0, 10);//console.log('lat' + columns.length + '___' + cellValue.toString().slice(0, 10));//cellValue = cellValue.split("", 10);
            //else if (colIndex == 3)
            //    cellValue = cellValue.toString().slice(0, 11);//console.log('lng' + columns.length + '___' + cellValue.toString().slice(0, 11));//cellValue = cellValue.split("", 11);
            ////console.log(columns.length + '___' + cellValue);
            row$.append($('<td/>').text(cellValue));

        }

        $(selector).append(row$);
    }
}
// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records.


function addAllColumnHeaders2(datas, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');
    headerTr$.addClass("info");
    for (var i = 0; i < datas.length; i++) {

        var rowHash = Alm_Comm_data_his[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                if (key == 'SOC')
                    headerTr$.append($('<th/>').text(key + '(%)'));
                //else if (key == 'Ring' || key == 'GPStime' || key == 'T1' || key == 'T2' || key == 'T3' || key == 'MT1' || key == 'MT2' || key == 'MT3' || key == 'AHT' || key == 'SOH' || key == 'RRT' || key == 'TimeError' || key == 'CarStatic')
                //{ }
                else if (key == 'AHC')
                    headerTr$.append($('<th/>').text(key + '(Ah)'));

                else
                    headerTr$.append($('<th/>').text(key));

            }
            //console.log(headerTr$);
        }


    }
    $(selector).append(headerTr$);

    return columnSet;
}
//建立表格