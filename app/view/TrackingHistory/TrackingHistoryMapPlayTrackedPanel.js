var _trackingHistoryMapPlayTrackedPanel;
Ext.define('MyGPS.view.TrackingHistory.TrackingHistoryMapPlayTrackedPanel', {

});





function TrackingHistoryMapPlayTrackedPanel()
{
    _trackingHistoryMapPlayTrackedPanel =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 110,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: 89,
        // centered: false,
        id: 'panelhistoryPlay',
        draggable: false,

        left: 4,
        top: 50,


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





            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            id: 'Playtrackedhistory',
              margin:'0 0 0 0',
            html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 40px; color: #fff; text-align: center;"><b>00</b></td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;font-weight: bold;"><b>00km/h</b></td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 12px; color: #fff; text-align: center;  "><b>00:00:00</b></td> </tr>  </table>',
                  //'<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 28px; color: #fff; text-align: center;"><b>0</b></td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;font-weight: bold;"><b>00km/h</b></td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 12px; color: #fff; text-align: center;  "><b>' + dtt + '</b></td> </tr>  </table>');
            //  html: '<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>',
            //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">1</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr> </table>',
            //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
            ////style: 'background-color: #5E99CC;'
            //style: 'background-color: #57A0DC;'


        }



    });

    return _trackingHistoryMapPlayTrackedPanel;

}



function TrackingHistoryMapPlayTrackedPanelShow() {

    Ext.Viewport.remove(_trackingHistoryMapPlayTrackedPanel);
    this.overlay = Ext.Viewport.add(TrackingHistoryMapPlayTrackedPanel());
    this.overlay.show();
}



function TrackingHistoryMapPlayTrackedPanelHide() {
    _trackingHistoryMapPlayTrackedPanel.hide();

}