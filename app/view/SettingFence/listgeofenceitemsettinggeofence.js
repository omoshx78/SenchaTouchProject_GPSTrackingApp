
Ext.define('MyGPS.view.SettingFence.listgeofenceitemsettinggeofence', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'listgeofenceitemssettinggeofence',
    id: 'listgeofenceitemssettinggeofence',
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
    title: 'Geofence',
    docked: 'top',
    id: 'toolbarGeofenceTop',
    //  hidden:true,
    items:
           [


               {
                   xtype: 'button',

                   id: 'btnGeoFenceHome',
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

    docked: 'bottom',
    layout: {
        pack: 'center'
    },
    items:
        [
            {
            xtype: 'button',
            hidden: true,
            id: 'SettingAutoFenceBackbtn',
            ui: 'action',
            text: "Back",
            handler: function (btn) {

                checkClik = 'yes';
                _SearchLocation.hide();

               
                _geofence_rightpanelSettingDrawFence.hide();
                ClearShapeFromDrawFence(); deleteAllSelectedShapeSettinggeofence();
            }

        },
            


        {
            xtype: 'spacer'
        },

               {
                   xtype: 'button',

                   id: 'SettingAutoFenceAddNewbtn',
                   ui: 'action',
                   text: "Add New Virtual Boundry Setting",

                   handler: function (btn) {
                      
                       Ext.getCmp('SettingDrawFence_ShowDetailPanelbtn').setHidden(true);
                       Ext.getCmp('SettingDrawFence_HideDetailPanelbtn').setHidden(false);
                       if (!this.overlay) {
                           this.overlay = Ext.Viewport.add(_geofence_rightpanelSettingDrawFence
                       );
                       }
                       this.overlay.show();
                       deleteAllSelectedShapeSettinggeofence();
                       Ext.getCmp('SettingDrawFence_ID').setValue('0');
                       Ext.getCmp('SettingDrawFence_TrackItem').setValue('-1');
                       // Ext.getCmp('SettingDrawFence_AccountNo').setValue('null');
                       Ext.getCmp('SettingDrawFence_FencePath').setValue('null');
                       // Ext.getCmp('SettingDrawFence_ShapeType').setValue('null');
                       Ext.getCmp('SettingDrawFence_FenceName').setValue('Enter Area Name');
                       Ext.getCmp('SettingDrawFence_TimeFrom').setValue('-1');
                       Ext.getCmp('SettingDrawFence_TimeTo').setValue('-1');
                       Ext.getCmp('SettingDrawFence_DaySetting').setValue('-1');
                       Ext.getCmp('SettingDrawFence_Status').setValue('-1');
                       Ext.getCmp('SettingDrawFence_Length').setValue('-1');
                       var cntr = Ext.ComponentQuery.query("#geoFencesSettingholderID")[0];
                       cntr.setActiveItem(1);
                       //mapgeofence.setCenter(boundreboundlatlong)
                       //mapgeofence.setZoom(16);

                       var ctr = new google.maps.LatLng(4.08345277, 108.16040039);
                       //var bounds = new google.maps.LatLngBounds();
                       //bounds.extend(ctr);
                       mapgeofenceSettinggeofence.setCenter(ctr);
                       Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Center  Map..Please Wait' });

                       var task = Ext.create('Ext.util.DelayedTask', function () {
                           mapgeofenceSettinggeofence.setZoom(5);
                           Ext.Viewport.unmask();
                       });
                       task.delay(1000);




                   }

               },


            




        ]


},

            {
                xtype: 'container',
              
                //height: '100%',
                //itemId: 'bottom',
                //width: '100%',
                layout: {
                    type: 'hbox'
                },
                items: [
             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: 'This is an auto virtual boundary that enabled by time range'
             },

             //{
             //    xtype: 'spacer',
              
             //},

             //{
             //    xtype: 'button',
             //    Id: 'btnAddNewSettingDrawFence',
             //    text: 'Add Setting',
             //    ui: 'action',
               
             //    iconCls: 'reply',
              
             //    height: 35,
             //    width: 135,

             //   // html: '<div ><img src="resources/icons/drawpolyline.png" width="45" height="45" alt="Company Name"></div>',
             //    //ui:'round'
             //  //  ui: 'plain',
             //    handler: function (btnbtnAddNewSettingDrawFence) {
                    

             //    }


             //},
                ]
            },
            {
                xtype: 'list',
                flex: 1,
                store: 'AutoFenceTimerGetByAcc',
                id: 'listgeofenceitemedsettinggeofence',
                mode: 'SINGLE',
                itemTpl: '<div class="myContent">' +
                   '<div><b>Kid Name:</b><i>{TrackItem}</i></div>' +
                   '<div><b>Area:</b><i>{FenceAreaName}</i></div>' +
                    '<div><b>Active Virtual Boundary Time:</b><i>{TimeFromConverted}-{TimeToConverted}</i></div>' +
                    '<div><b>Status:</b><i>{Status}</i></div>' +
                     //  '<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{ID}</div>' +
                   
                   '</div>',
                height: '100%',
                listeners: {
                 //  select: function (list, records) {
                    //  onItemDisclosure: function (record, btn, index) {
                   itemsingletap: function (list, idx, target, records, evt) {
                       // SingleTrackID = (records.get('TrackID'));
                       // trackingItems = (records.get('TrackItem'));
                       // DeviceID = (records.get('DeviceID'));
                     
                       // Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                       //     TrackID: SingleTrackID,
                       //     AccountNo: AAccountNo
                       // });
                       // Ext.StoreMgr.get('singlesignalstore').load();
                      // TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status
                       var ID = (records.get('ID'));
                       var TrackItem = (records.get('TrackItem'));
                       var TrackID = (records.get('TrackID'));
                       var AccountNo = (records.get('AccountNo'));
                       var FencePath = (records.get('FencePath'));
                       var ShapeType = (records.get('ShapeType'));
                       var FenceAreaName = (records.get('FenceAreaName'));
                       var TimeFrom = (records.get('TimeFrom'));
                       var TimeTo = (records.get('TimeTo'));
                       var DaySetting = (records.get('DaySetting'));
                       var Status = (records.get('Status'));
                       var FenceLength = (records.get('FenceLength'));
                       loadSettingFenceDrawMap(ID, TrackItem, TrackID, AccountNo, FencePath, ShapeType, FenceAreaName, TimeFrom, TimeTo, DaySetting, Status, FenceLength);

                   
                       Ext.getCmp('SettingDrawFence_ShowDetailPanelbtn').setHidden(true);
                       Ext.getCmp('SettingDrawFence_HideDetailPanelbtn').setHidden(false);
                       Ext.getCmp('SettingAutoFenceAddNewbtn').setHidden(true);
                       Ext.getCmp('SettingAutoFenceBackbtn').setHidden(false);
                       Ext.getCmp('AutoFenceSettingSavebtn').setHidden(false);
                       if (!this.overlay) {
                           this.overlay = Ext.Viewport.add(_geofence_rightpanelSettingDrawFence
                       );
                       }
                       this.overlay.show();

                       var cntr = Ext.ComponentQuery.query("#geoFencesSettingholderID")[0];
                       cntr.setActiveItem(1);
                     
                       setTimeout(function () {
                           list.deselectAll();

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


//function loadforImage()
//{
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('TrackingItemDetailstore').getProxy().setExtraParams({
//            AccNo: AAccountNo,
//            TrackID: SingleTrackID,
//            DeviceID: DeviceID
//        });
//        Ext.StoreMgr.get('TrackingItemDetailstore').load();
//        var myStore = Ext.getStore('TrackingItemDetailstore');
//        var modelRecord = myStore.getAt(0);
//        bPicture = (modelRecord.get('Picture'));
//        console.log(bPicture);
//    });
//    task.delay(1000);
//}