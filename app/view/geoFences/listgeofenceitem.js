var trackingItems;
var trackingid = [];
var SingleTrackID;
var DeviceID;
Ext.define('MyGPS.view.geoFences.listgeofenceitem', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listgeofenceitems',
    id: 'listgeofenceitemss',
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
                id: 'listgeofenceitemed',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{TrackItem}</b></div>' +
                   '<div>{TrackID}</div>' +
                      //  '<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{DeviceID}</div>' +
                   
                   '</div>',
                height: '100%',
                listeners: {
                 //  select: function (list, records) {
                    //  onItemDisclosure: function (record, btn, index) {
                   itemsingletap: function (list, idx, target, records, evt) {
                        SingleTrackID = (records.get('TrackID'));
                        trackingItems = (records.get('TrackItem'));
                        DeviceID = (records.get('DeviceID'));
                     
                        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                            TrackID: SingleTrackID,
                            AccountNo: AAccountNo
                        });
                        Ext.StoreMgr.get('singlesignalstore').load();
                        Ext.getCmp('btnhidegeofencecontrol').setHidden(false);
                        Ext.getCmp('btnshowgeofenceArea').setHidden(false);
                       // Ext.getCmp('btnshowgeofencecontrol').setHidden(false);
                        Ext.getCmp('btnbackgeofence').setHidden(false);
                        var cntr = Ext.ComponentQuery.query("#geoFencesholderssd")[0];
                        cntr.setActiveItem(1);


                        try {
                            Ext.getStore('geoFenceStore').getProxy().setExtraParams({
                                AccountNo: AAccountNo,
                                TrackID: SingleTrackID,
                            });
                            Ext.StoreMgr.get('geoFenceStore').load();

                            // loadmarkerGeoFence();

                            if (markerGeofence) {
                                markerGeofence.setMap(null);
                            }
                        } catch (er) {
                            console.log(er);
                        }

                        alertisplay = "no";
                        _GeofenceInfopanelOnOff = 'On';
                      


                        loadmarkerGeoFence();
                        if (!this.overlay) {

                            this.overlay = Ext.Viewport.add(_GeofenceInfopanel);
                            // this.overlay = Ext.Viewport.add(_GeofenceInfopanel);
                        }
                        this.overlay.show();
                     
                        setTimeout(function () {
                            list.deselectAll();

                            if (OS != "Windows") {
                                Ext.getCmp('btnChangeMaplbl').setHidden(true);
                                Ext.getCmp('btnBoundReboundPointlbl').setHidden(true);
                                Ext.getCmp('btnDeleteGeofencelbl').setHidden(true);
                                Ext.getCmp('btnDrawcirlelbl').setHidden(true);
                                Ext.getCmp('btnDrawpolygonlbl').setHidden(true);
                            }
                            if (!this.overlay) {
                                this.overlay = Ext.Viewport.add(_Geofence_rightPanel
                            );
                            }
                            this.overlay.show();
                            Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
                                AccNo: AAccountNo,
                                TrackID: SingleTrackID,
                                DeviceID: DeviceID
                            });
                            Ext.StoreMgr.get('TrackingItemDetailstore').load();
                            loadforImage();
                        }, 500);
                    },
                    deselect: function (list, records) {
                        // console.log(records.get('DeviceID'));
                        var value_to_remove = records.get('DeviceID');
                        trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                    }
                },

            }
        ]
    }

});


function loadforImage()
{
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
            AccNo: AAccountNo,
            TrackID: SingleTrackID,
            DeviceID: DeviceID
        });
        Ext.StoreMgr.get('TrackingItemDetailstore').load();
        var myStore = Ext.getStore('TrackingItemDetailstore');
        var modelRecord = myStore.getAt(0);
        bPicture = (modelRecord.get('Picture'));
       // console.log(bPicture);
    });
    task.delay(1000);
}