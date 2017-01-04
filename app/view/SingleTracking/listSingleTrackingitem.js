var listSingleTrackingitemtrackingItems;
var listSingleTrackingitemtrackingid = [];
var listSingleTrackingitemSingleTrackID;
var listSingleTrackingitemDeviceID;
Ext.define('MyGPS.view.SingleTracking.listSingleTrackingitem', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listSingleTrackingitem',
    id: 'listSingleTrackingitemID',
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
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: 'Registered GPS tracking kids<br>Under this Account'
             },

            {
                xtype: 'list',
                flex: 1,
                store: 'TrackingItemList',
                id: 'listSingleTracking',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{TrackItem}</b></div>' +
                   '<div>{TrackID}</div>' +
                      //  '<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{DeviceID}</div>' +
                   
                   '</div>',
                height: '100%',
                listeners: {
                 
                   itemsingletap: function (list, idx, target, records, evt) {
                       listSingleTrackingitemSingleTrackID = (records.get('TrackID'));
                       listSingleTrackingitemtrackingItems = (records.get('TrackItem'));
                       listSingleTrackingitemDeviceID = (records.get('DeviceID'));
                     
                        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                            TrackID: listSingleTrackingitemSingleTrackID,
                            AccountNo: AAccountNo
                        });
                        Ext.StoreMgr.get('singlesignalstore').load();
                        Ext.getCmp('btnSingleTrackingShowHideMenu').setHidden(false);
                        Ext.getCmp('btnSingleTrackingShowHideMenuStreetView').setHidden(true);
                        Ext.getCmp('btnSingleTrackingBackStreetView').setHidden(true);
                        Ext.getCmp('btnSingleTrackingBack').setHidden(false);
                        var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                        cntr.setActiveItem(1);


                        try {
                            Ext.getStore('geoFenceStore').getProxy().setExtraParams({
                                AccountNo: AAccountNo,
                                TrackID: listSingleTrackingitemSingleTrackID,
                            });
                            Ext.StoreMgr.get('geoFenceStore').load();

                            // loadmarkerGeoFence();

                            if (singleTrackingMap) {
                                singleTrackingMap.setMap(null);
                            }
                        } catch (er) {
                            console.log(er);
                        }
                        _GeofenceInfopanelOnOff = 'On';
                      


                        loadmarkerSingleTrackingMap(listSingleTrackingitemSingleTrackID);
                      

                        //if (!this.overlay) {
                        //    this.overlay = Ext.Viewport.add(_singleTrackingMap_rightpanel
                        //);
                        //}
                        //this.overlay.show();

                        //if (!this.overlay) {
                        //    this.overlay = Ext.Viewport.add(_singleTrackingMap_BurgeMenu
                        //);
                        //}
                        this.overlay = Ext.Viewport.add(singleTrackingMap_BurgeMenu())
                        this.overlay.show();

                        

                     
                        setTimeout(function () {
                            list.deselectAll();
                           
                            if (OS != "Windows") {
                                Ext.getCmp('btnsingleTrackingMaprightpanelDetailsPointlbl').setHidden(true);
                                Ext.getCmp('btnsingleTrackingMaprightpanelChangeMaplbl').setHidden(true);
                                Ext.getCmp('btnsingleTrackingMaprightpanelBoundReboundPointlbl').setHidden(true);
                                Ext.getCmp('btnsingleTrackingMaprightpanelOverViewMaplbl').setHidden(true);
                                Ext.getCmp('btnsingleTrackingMaprightpanelSearchTrackingItemlbl').setHidden(true);
                                Ext.getCmp('btnsingleTrackingMaprightpanelStreetViewlbl').setHidden(true);
                                Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);
                             //   Ext.getCmp('btnsingleTrackingOverViewMapGeocodeAddressWeb').setHidden(true);
                         
                                

                                
                                
                            }
                            if (OS == "Windows" || OS == "MacOS") {
                                //if (!this.overlay) {
                                this.overlay = Ext.Viewport.add(_TrackingInfopanel); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                            //    }
                                this.overlay.show();
                                Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHidden(true);
                                Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);

                                setTimeout(function () {
                                  //  alert('xxxccc');
                                   // if (!this.overlay) {
                                    this.overlay = Ext.Viewport.add(_GeofenceInfopanelMillage); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                                   // }
                                    this.overlay.show();
                                }, 500);

                               // 
                            }
                            Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
                                AccNo: AAccountNo,
                                TrackID: listSingleTrackingitemSingleTrackID,
                                DeviceID: listSingleTrackingitemDeviceID
                            });
                            Ext.StoreMgr.get('TrackingItemDetailstore').load();                           
                        }, 500);
                    },
                    deselect: function (list, records) {
                        var value_to_remove = records.get('DeviceID');
                        listSingleTrackingitemtrackingid.splice(listSingleTrackingitemtrackingid.indexOf(value_to_remove), 1);


                    }
                },

            }
        ]
    }

});


