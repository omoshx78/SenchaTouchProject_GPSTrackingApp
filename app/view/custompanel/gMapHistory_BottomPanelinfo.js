
Ext.define('MyGPS.view.custompanel.gMapHistory_BottomPanelinfo', {
 
});
var _valuepanelhistoryinfo =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 100,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: '100%',
        // centered: false,
        id: 'panelhistoryinfos',
        draggable: false,

        right: 0,
        bottom: 0,

        style: 'background-color: #57A0DC;',


        items: {
            id: 'Infotrackedhistory',
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
                        hidden:true,
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
                    hidden: true, 
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

                            console.log("cccccc:" + firstime);
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

                    Id: 'hideTrackhistorylbl',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/hideArrow.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function () {

                        _valuepanelhistoryPlay.hide();
                        _valuepanelhistoryinfo.hide();
                    }
                },

                ]


            }

        }


    });




