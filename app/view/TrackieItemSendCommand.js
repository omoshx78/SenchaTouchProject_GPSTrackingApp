
Ext.define('MyGPS.view.TrackieItemSendCommand', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'TrackieItemSendCommands',
    id: 'TrackieItemSendCommandss',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [


         {

             xtype: 'toolbar',
             title: 'Send Commands',
             docked: 'top',
             id: 'toolbarHTrackieItemSendCommandTop',
             //  hidden:true,
             items:
                    [


                        {
                            xtype: 'button',

                            id: 'btnTrackieItemSendCommandHome',
                            //  text: 'Show',
                            iconCls: 'home',
                            // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function () {
                                Ext.getCmp('mainView').setActiveItem(1);
                            }



                        },




                    ]

         },


                  {

                      xtype: 'toolbar',
                    //  title: 'Send Commands',
                      docked: 'bottom',
                      id: 'toolbarHTrackieItemSendCommandBottom',
                      //  hidden:true,
                      items:
                             [


                                 //{
                                 //    xtype: 'button',

                                 //    id: 'btnTrackieItemSendCommandHome',
                                 //    //  text: 'Show',
                                 //    iconCls: 'home',
                                 //    // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                                 //    ui: 'plain',
                                 //    handler: function () {
                                 //        Ext.getCmp('mainView').setActiveItem(1);
                                 //    }



                                 //},




                             ]

                  },

             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: 'Registered GPS tracking Item Under this Account.<br>Select item to send a command'
             },

            {
                xtype: 'list',
                flex: 1,
                store: 'TrackingItemList',
                id: 'TrackieItemMultipleAccSendCommands',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{TrackItem}</b></div>' +
                   '<div>{TrackID}</div>' +
                      //  '<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{DeviceID}</div>' +
                   '</div>',
                height: '100%',
                listeners: {
                    select: function (list, records) {
                        // trackingid.push(records.get('DeviceID'));
                        SingleTrackID = (records.get('TrackID'));
                        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                            TrackID: SingleTrackID,
                            AccountNo: AAccountNo
                        });
                        Ext.StoreMgr.get('singlesignalstore').load();
                        var cntr = Ext.ComponentQuery.query("#mainsendcommands")[0];
                        cntr.setActiveItem(1);
                        Ext.getCmp('btnbacksendcommand').setHidden(false);

                        Ext.getCmp('btnviewhistorycommand').setHidden(false);

                        Ext.getCmp('btnstartsendcommand').setHidden(false);


                        Ext.getCmp('InfosendcommandTrackID').setHtml('<font color="white"; size="2"><b>' + (records.get('TrackID')) + '- </b></font>')

                        Ext.getCmp('InfosendcommandTrackItem').setHtml('<font color="white"; size="2"><b>' + (records.get('TrackItem')) + '</b></font>')

                        //  Ext.getCmp('Infosendcommandspeed').setHidden(true)
                        //Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>');
                        //Ext.getCmp('useraccStartlivetracking').setHidden(false);
                        //Ext.getCmp('Backuseracc').setHidden(false);
                        //Ext.getCmp('basicform').setActiveItem(2);
                        loadmarkersendcommands();


                    },
                    deselect: function (list, records) {
                        // console.log(records.get('DeviceID'));
                        //var value_to_remove = records.get('DeviceID');
                        //trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                    }
                },

            }
        ]
    }

});

var SingleTrackID;
var LongitudedUserAcc;
var LatitudedUserAcc;
var DTUserAcc;