var _trackingHistoryMapTravelRangePanel;
Ext.define('MyGPS.view.TrackingHistory.TrackingHistoryMapTravelRangePanel', {

});





function TrackingHistoryMapTravelRangePanel() {
    _trackingHistoryMapTravelRangePanel =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 82,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: 89,
        // centered: false,
        id: 'travelRangePanelID',
        draggable: false,

         left: 98,
        top: 50,
        //left: 4,
        //top: 150,


        showAnimation: {
            type: 'slide',
            direction: 'down',
            duration: 350,
            easing: 'ease-out',

        },
        hideAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 250,
            easing: 'ease-out',
            out: true

        },


        //right: 1,
        //bottom: 1,
        style: 'background-color: #57A0DC;',


        items: {


            style: 'background-color: #57A0DC;',

            id: 'travelRangePanelHtmlID',
            margin: '0 0 0 0',
           html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 30px; color: #fff; text-align: center;"><b>00</b></td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;font-weight: bold;">Travel Range (KM)</td> </tr> </table>',



        }



    });

    return _trackingHistoryMapTravelRangePanel;

}



function TrackingHistoryMapTravelRangePanelShow() {

    Ext.Viewport.remove(_trackingHistoryMapTravelRangePanel);
    this.overlay = Ext.Viewport.add(TrackingHistoryMapTravelRangePanel());
    this.overlay.show();
}



function TrackingHistoryMapTravelRangePanelHide() {
    _trackingHistoryMapTravelRangePanel.hide();

}




function SetTTrackingHistoryMapTravelRangePanel(travelKM) {
    Ext.getCmp('travelRangePanelHtmlID').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 30px; color: #fff; text-align: center;"><b>' + travelKM + '</b></td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;font-weight: bold;">Travel Range (KM)</td> </tr> </table>');
}