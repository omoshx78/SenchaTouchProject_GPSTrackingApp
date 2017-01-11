Ext.define('MyGPS.view.MainMenu', {
   extend: 'Ext.Container',
  //  extend: 'Ext.Panel',
    xtype: 'mainmenu',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        //layout: {
            
        //},
        style: "background-color: #57A0DC; color:white;",
        items: [






            {
                xtype: 'container',
                //  top:100,
                layout: {
                    type: 'vbox',
                    pack: 'left'

                },
                items: [
                    {
                        //xtype: 'button',
                        //id: 'btnMainMenuIconNotification',
                        //height: 55,
                        //width: 55,
                        // html: '<font size="3" color="white">Welcome!<br>Tarmizi@Hotmail.my<br>Last Login:19/3/1983 12:14AM</font>',
                        id:'MainMenuUserLabel',
                        html: '<font size="3" color="white">Welcome!<br>Tarmizi@Hotmail.my</font>',
                        //ui: 'plain',
                    },
            {
                xtype: 'button',
                id: 'btnMainMenuMainMenuTitleicture',
                height: 120,
                width: 120,
                top: 90,
                left: 21,
                html: '<div ><img src="resources/icons/MainMenuTitleicture.png" width="110" height="110" alt="Company Name"></div>',
                ui: 'plain',
            },

                        {
                            top: 110,
                            left:135,
                             html: '<font size="5" color="white">GPS Tracking<br>Application v 1.0</font>',                       
                            
                           
                        },
                    //{
                    //    xtype: 'button',
                    //    id: 'btnMainMenuIconNotificationText',
                    //    height: 25,
                    //    width: 25,
                    //    text: '10',
                    //    //html: '<div ><img src="resources/icons/notificationIcon.png" width="45" height="45" alt="Company Name"></div>',
                    //    ui: 'decline',
                    //}

                ]
            },

            {
                xtype: 'container',
                //  top:100,
                layout: {
                    type: 'hbox',
                    pack: 'right'               

                },
                items: [
                     {
                         xtype: 'button',
                         id: 'btnMainMenuIconPictureProfile',
                         height: 55,
                         width: 55,
                         html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                            
                         }
                     },
                    {
                        xtype: 'button',
                        id: 'btnMainMenuIconNotification',
                        height: 55,
                        width: 55,
                        html: '<div ><img src="resources/icons/notificationIcon.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'plain',
                    },
                    {
                        xtype: 'button',
                        id: 'btnMainMenuIconNotificationText',
                        height: 25,
                        width: 25,
                        text:'10',
                        //html: '<div ><img src="resources/icons/notificationIcon.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'decline',
                    }

                ]
            },



            {
                xtype: 'container',
                //  top:100,
                layout: {
                    type: 'hbox',
                    pack: 'right',
                    align: 'end'

                },
                items: [

                     {
                         xtype: 'button',
                         id: 'btnsingleTrackingMaprightpanelPointInformations15',
                         margin: '0 -60 90 0',

                         height: 90,
                         width: 90,
                         //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                         html: '<div ><img src="resources/icons/MainMenuSetting.png" width="80" height="80" alt="Company Name"></div>',

                         ui: 'plain',

                         handler: function () {
                             Ext.getCmp('mainView').setActiveItem(10);
                             //this.overlay = Ext.Viewport.add(MainSettingView());
                             //this.overlay.show();
                         }
                       
                     },
                      {
                          xtype: 'button',
                          id: 'btnsingleTrackingMaprightpanelPointInformations14',
                          margin: '0 15 195 0',

                          height: 90,
                          width: 90,
                          //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                          html: '<div ><img src="resources/icons/MainMenuLogOut.png" width="80" height="80" alt="Company Name"></div>',

                          ui: 'plain',
                          handler: function () {
                              Ext.getCmp('mainView').setActiveItem(0);
                          }


                         
                      },
                      {
                          xtype: 'button',
                          id: 'btnsingleTrackingMaprightpanelPointInformations1',
                          height: 90,
                          width: 90,
                          margin: '0 -13 220 0',
                          html: '<div ><img src="resources/icons/MainMenuMyAccount.png" width="80" height="80" alt="Company Name"></div>',

                          ui: 'plain',
                          handler: function () {
                              SetMyAccountDetailsByAccountNo();
                              Ext.getCmp('mainView').setActiveItem(3);
                          }
                      },
            {
                xtype: 'button',
                id: 'btnsingleTrackingMaprightpanelPointInformation2',
                margin: '0 -215 153 0',
                height: 100,
                width: 100,
                html: '<div ><img src="resources/icons/MainMenuGeofence.png" width="90" height="90" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {
                    Ext.getCmp('mainView').setActiveItem(4);

                  
                   

                }
            },




            {
                xtype: 'button',
                id: 'btnsingleTrackingMaprightpanelPointInformation3',
                margin: '0 -134 115 0',
                height: 100,
                width: 100,
                html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',

                ui: 'plain',
                handler: function () {
                    _trackingHistoryCreteriaSource = 'MainMenu';
                    Ext.getCmp('mainView').setActiveItem(5);


                    Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                        AccNo: AAccountNo,
                    });
                    Ext.StoreMgr.get('TrackingItemList').load();
                    setTimeout(function () {


                        Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                            AccNo: AAccountNo,
                        });
                        Ext.StoreMgr.get('TrackingItemList').load();
                    }, 500);

                }
            },


           
               {
                   xtype: 'button',
                   id: 'btnsingleTrackingMaprightpanelPointInformations4',


                   height: 100,
                   width: 100,
                   //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                   html: '<div ><img src="resources/icons/MainMenuSendCommand.png" width="90" height="90" alt="Company Name"></div>',

                   ui: 'plain',
                   handler: function () {
                       Ext.getCmp('mainView').setActiveItem(6);

                       Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                           AccNo: AAccountNo,
                       });
                       Ext.StoreMgr.get('TrackingItemList').load();
                       setTimeout(function () {


                           Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                               AccNo: AAccountNo,
                           });
                           Ext.StoreMgr.get('TrackingItemList').load();
                       }, 500);


                   }
               },
            {
                xtype: 'button',
                id: 'btnsingleTrackingMaprightpanelPointInformations5',
                height: 155,
                width: 155,
                html: '<div ><img src="resources/icons/MainMenuLiveTracking.png" width="145" height="145" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {

                    



                    _DataStore_TrackingItemListStore_AccountNo.getProxy().setExtraParams({
                        AccNo: GetCurrentUserAccountNo()
                       
                    });

                    //  _DataStore_GPSUserLogin.getProxy().setUrl(document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserLoginR');

                    _DataStore_TrackingItemListStore_AccountNo.load({

                        callback: function (record, operation, success) {
                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching....' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {

                                if (success) {
                                  
                                    var store = _DataStore_TrackingItemListStore_AccountNo.getAt(0);

                                    if (store != null) {


                                        var count = _DataStore_TrackingItemListStore_AccountNo.getCount();
                                        Ext.getCmp('MultiTrackingListLabelTop').setHtml('<u>Registered GPS tracking items</u><br><b>Found :' + count + ' Items</b>');
                                        if (count == 1) {
                                         
                                            var IMEI_no = store.get('DeviceID');
                                            loadmarkerSingleTrackingMap(IMEI_no);
                                            Ext.getCmp('mainView').setActiveItem(2);
                                            setTimeout(function () {
                                                Ext.Viewport.remove(_singleTrackingMap_Menu);
                                                this.overlay = Ext.Viewport.add(SingleTrackingMap_Menu());
                                                this.overlay.show();

                                            }, 100);

                                            setTimeout(function () {
                                                this.overlay = Ext.Viewport.add(_singleTrackingMap_MillageCount);
                                                this.overlay.show();
                                            }, 800);



                                        } else if (count > 1) {

                                            Ext.getCmp('mainView').setActiveItem(7);
                                        }
                                    }
                                }
                                else {

                                    Ext.Msg.alert("Failed.!");
                                }


                                Ext.Viewport.setMasked(false);
                            });
                            task.delay(500);
                        }
                    })








                    Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                        AccNo: GetCurrentUserAccountNo(),
                    });
                    Ext.StoreMgr.get('TrackingItemList').load();
                    setTimeout(function () {


                        Ext.getStore('TrackingItemList').getProxy().setExtraParams({
                            AccNo: GetCurrentUserAccountNo(),
                        });
                        Ext.StoreMgr.get('TrackingItemList').load();
                            var myStore = Ext.getStore('TrackingItemList');
                        

                    }, 500);

                }

            },

                ]
            },

            

    


        ]
    }
});



//function MainMenu_SelectPatientActive() {
//    var store = _DataStore_Queue_GetCurrentCheckIn.getAt(0);
//    if (store != null) {
//        alert('Please Check Out Current Patient');
//    }
//    else {

//        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading...' });
//        _DataStore_MilitaryRank.clearFilter();
//        _DataStore_ExMilitaryRank.clearFilter();
//        _DataStore_Title.clearFilter();
//        _DataStore_Unit.clearFilter();
//        _DataStore_Provider_getClinician.clearFilter();
//        var task = Ext.create('Ext.util.DelayedTask', function () {
//            _DataStore_Exam_ProcedurelogTreatNotDone_GetByMPI.getProxy().setExtraParam('MPI', _GetCurrentPatMPI());
//            _DataStore_Exam_ProcedurelogTreatNotDone_GetByMPI.load();
//            Ext.getCmp(MainMenuBack()).removeAt(4);
//            Ext.getCmp(MainMenuBack()).removeAt(3);
//            Ext.getCmp(MainMenuBack()).add(CreateSubSelectPatient());
//            //    Ext.getCmp('LblClinicSelPatGetMainView').setHtml('<center>' + ClinicName + '</center>');
//            Ext.getCmp(MainMenuBack()).setActiveItem(3);
//            Ext.Viewport.unmask();
//        });
//        task.delay(200);
//    }

//}