function show_page4_data() {
    page4List_div('#Core1_PCS1_Status');
    page4List_div('#Core2_PCS1_Status');
}
function page4List_div(selector) {
    $(selector).empty();
    switch (selector) {
        case '#Core1_PCS1_Status':
            $(selector).append(
                '<table id="tb_PCS_Status" class="table">'
                + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS實功(kW)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS虛功(kVAR)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS視在功率(VA)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_VRS</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_VST</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_VTR</span></th></tr>'
                + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_P + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Q + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_S + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_VRS + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_VST + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_VTR + '</span></td></tr>'
                + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">直流電壓</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">直流電流</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS溫度(°C)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_I1</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_I2</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_I3</span></th></tr>'
                + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_DCV + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_DCI + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_T1 + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_I1 + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_I2 + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_I3 + '</span></td></tr>'
                + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_IGBT溫度(°C)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_最大溫度模組(°C)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS濕度(%)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">充電電量(kWh)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">放電電量(kWh)</span></th></tr>'
                + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_TIGBT + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Module_Tmax + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Hum + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_AE_IMP + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_AE_EXP + '</span></td></tr>'
                + '<tr><th colspan="3" style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS警告</span></th>'
                + '<th colspan="3" style = "text-align: center;" > <span style="font-weight: bold; font-size: 16px;">PCS報警</span></th ></tr>'
                + '<tr><td colspan="3"><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Warning + '</span></td>'
                + '<td colspan="3"><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Fault + '</span></td></tr></table > ');
            break;
        case '#Core2_PCS1_Status':
            $(selector).append(
                '<table id="tb_PCS_Status" class="table">'
                + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS實功(kW)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS虛功(kVAR)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS視在功率(VA)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_VRS</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_VST</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_VTR</span></th></tr>'
                + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_P + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Q + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_S + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_VRS + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_VST + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_VTR + '</span></td></tr>'
                + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">直流電壓</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">直流電流</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS溫度(°C)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_I1</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_I2</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_I3</span></th></tr>'
                + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_DCV + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_DCI + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_T1 + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_I1 + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_I2 + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_I3 + '</span></td></tr>'
                + '<tr><th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_IGBT溫度(°C)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS_最大溫度模組(°C)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS濕度(%)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">充電電量(kWh)</span></th>'
                + '<th style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">放電電量(kWh)</span></th></tr>'
                + '<tr><td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_TIGBT + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Module_Tmax + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Hum + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_AE_IMP + '</span></td>'
                + '<td><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_AE_EXP + '</span></td></tr>'
                + '<tr><th colspan="3" style="text-align: center;"><span style="font-weight: bold; font-size: 16px;">PCS警告</span></th>'
                + '<th colspan="3" style = "text-align: center;" > <span style="font-weight: bold; font-size: 16px;">PCS報警</span></th ></tr>'
                + '<tr><td colspan="3"><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Warning + '</span></td>'
                + '<td colspan="3"><span style="font-weight: bold; font-size: 20px;">' + FLN_bms_PCS_data[0].PCS_Fault + '</span></td></tr></table > ');
            break;
    }

}