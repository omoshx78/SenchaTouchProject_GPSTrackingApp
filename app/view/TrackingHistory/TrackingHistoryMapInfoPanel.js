


var _trackingHistoryMapInfoPanel;
Ext.define('MyGPS.view.TrackingHistory.TrackingHistoryMapInfoPanel', {

});


function TrackingHistoryMapInfoPanel()
{


    _trackingHistoryMapInfoPanel = Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 100,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: '100%',
        // centered: false,
        id: 'TrackingHistoryMapInfoPanelInfo',
        draggable: false,

        right: 0,
        bottom: 0,
        showAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null

        },
        style: 'background-color: #57A0DC;',


        items: {
            id: 'TrackingHistoryMapInfoPanelDetails',
            html: '<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">N/A</td> <td class="tdgpsdata">N/A</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',

            items: {

                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'right',
                    // align: 'end'
                },
                items: [


                    {
                        xtype: 'button',
                        
                        Id: 'stopTrackhistory',
                        // margin: 'top left bottom right',
                        margin: '-40 0 0 0',
                        //style: 'margin-top: 350px;margin-left: 500px;',
                        // text: 'Start',
                        height: 45,
                        width: 50,
                        html: '<div ><img src="resources/icons/stophistory.png" width="40" height="40" alt="Company Name"></div>',

                        //ui:'round'
                        ui: 'plain',
                        handler: function () {

                            firstime = '1';
                            resumeCounter = 0;
                            counter = 0;
                            btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                            clearTimeout(myVar);
                        }
                    },


                {
                    xtype: 'button',

                    Id: 'playTrackhistorylbl',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add(_valuepanelhistoryPlay
                        );

                        }
                        this.overlay.show();

                        btnplay = btn;
                        //  btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');

                        console.log(firstime);
                        if (firstime == '1') {


                            btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                            firstime = '0';
                            plystatus = 'play';
                            resumeWatchclockPlay();
                            return;
                        }
                        if ((firstime == '0' && plystatus == 'play') || (firstime == '0' && plystatus == 'resume')) {
                            btn.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                            plystatus = 'pause';
                            return;
                        }

                        if (firstime == '0' && plystatus == 'pause') {
                            plystatus = 'resume';
                            counter = resumeCounter;
                            btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                            resumeWatchclockPlay();
                        }


                    }
                },

                {
                    xtype: 'button',

                    id: 'hideTrackhistorylbl',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/hideArrow.png" width="40" height="40" alt="Company Name"></div>',
                   // ui:'round',
                    ui: 'plain',
                    handler: function () {
                        SetTrackingHistoryMapInfoPanelHide();
                        //_valuepanelhistoryPlay.hide();
                        //_valuepanelhistoryinfo.hide();
                    }
                },

                ]


            }

        }


    });




    return _trackingHistoryMapInfoPanel;
}



function SetTrackingHistoryMapInfoPanelShow() {
    Ext.Viewport.remove(_trackingHistoryMapInfoPanel);
    this.overlay = Ext.Viewport.add(TrackingHistoryMapInfoPanel());
    this.overlay.show();
}

function SetTrackingHistoryMapInfoPanelHide() {
    _trackingHistoryMapInfoPanel.hide();
}

function SetTrackingHistoryMapInfoPanelDetails()
{
    Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Get_trackingHistoryMapConfig_trackID() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + Get_trackingHistoryMapConfig_dateFromFormated() + '  ' + Get_trackingHistoryMapConfig_timeFrom() + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + Get_trackingHistoryMapConfig_dateFromFormated() + '  ' + Get_trackingHistoryMapConfig_timeTo() + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + Get_trackingHistoryMapConfig_travellengthkm() + " KM" + "| Point:" + Get_trackingHistoryMapConfig_pointCount() + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + Get_trackingHistoryMapConfig_trackItem() + '</td></tr></table>');
}