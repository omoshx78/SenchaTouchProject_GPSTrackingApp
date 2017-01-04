var trackingid = [];
var listIndex = [];
var listrecord;
var geocoderMultiLiveTrackingisFirstLoad;
Ext.define('MyGPS.view.MultipleTracking.multiTrackingItemsList', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'multiTrackingItemsLists',
    id: 'multiTrackingItemsListID',
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
                  docked: 'top',
                  title: 'Tracking List Item',
                  //  minHeight: '60px',
                  items: [
                  {
                      xtype: 'button',

                      id: 'btnMultipleListHome',
                      //  text: 'Show',
                      iconCls: 'home',
                      // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          trackingid.length = 0;
                          DeselectMultipleTrackingList();
                          SingleTrackingMap_MillageCountHide();
                          SingleTrackingMap_SpeedMeterHide();
                          Ext.getCmp('mainView').setActiveItem(1);
                      }



                  },

                  ],
              },



              {

                  xtype: 'toolbar',
                  docked: 'bottom',

                  items: [
                       {
                           //docked: 'right',
                           // width: 50,
                           ui: 'plain',
                           xtype: 'button',
                           id: 'btnMultiCount',
                         
                           handler: function () {

                           }
                       },

                       {
                           xtype: 'spacer',
                       },

                       {
                           //docked: 'right',
                           // width: 50,
                           ui: 'round',
                           xtype: 'button',
                           id: 'btnMultiStartTracking',
                           text: 'Start Tracking',
                           handler: function () {
                               var count = 0;
                               var ii;
                               var strdeviceid = '';
                               for (ii = 0; ii < trackingid.length; ii++) {                                 
                                   strdeviceid += trackingid[ii] + ',';
                                   count = ii;
                               }
                               var strDeviceIDModified = strdeviceid.replace(/.$/, '');


                               console.log('trackingid lenght:'+trackingid.length);
                               if (trackingid.length == 0)
                               {
                                   Ext.Msg.alert("Please Select Track Item!");
                                   return;
                               } if (trackingid.length == 1)
                               {
                                   loadmarkerSingleTrackingMap(strDeviceIDModified);
                                   Ext.getCmp('mainView').setActiveItem(2);
                                   Ext.Viewport.remove(_singleTrackingMap_Menu);
                                   this.overlay = Ext.Viewport.add(SingleTrackingMap_Menu());
                                   this.overlay.show();

                                 
                                   //setTimeout(function () {
                                   //    Ext.getCmp('btnSingleTrackingMillageBottom11').setHidden(false);
                                   //}, 2000);
                                 
                                   
                                   return;

                               }
                               if (trackingid.length > 1) {
                                   Ext.getCmp('mainView').setActiveItem(8);


                                   Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
                                       ImeiNo: strDeviceIDModified,
                                       count: count + 1,
                                       AccountNo: AAccountNo
                                   });
                                   Ext.StoreMgr.get('multipletrackingsignalpoint').load();


                                   Ext.Viewport.mask({ xtype: 'loadmask', message: 'Preparing Geocode Address' });
                                   var task = Ext.create('Ext.util.DelayedTask', function () {
                                       Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
                                           ImeiNo: strDeviceIDModified,
                                           count: count + 1,
                                           AccountNo: AAccountNo
                                       });
                                       Ext.StoreMgr.get('multipletrackingsignalpoint').load();
                                       var myStore = Ext.getStore('multipletrackingsignalpoint');
                                       var cou = myStore.getCount();
                                       MultipleGeocodeAdd.length = 0;
                                       for (var iii = 0; iii < cou; iii++) {
                                           var modelRecord = myStore.getAt(iii);
                                           var Latitude = modelRecord.get('Latitude');
                                           var Longitude = modelRecord.get('Longitude');
                                           MultiSignalReversegeocodeAddress(Longitude, Latitude);
                                       }

                                       setTimeout(function () {
                                           geocoderMultiLiveTrackingisFirstLoad = 'yes';




                                           startmultiTrackingMaps('start', count + 1, strDeviceIDModified);
                                           //  Ext.getCmp('mainView').setActiveItem(2);
                                           Ext.Viewport.setMasked(false);

                                       }, 1000);



                                   });
                                   task.delay(2000);

                               }



                                  

                            
                            



                               
                           }
                       },
                        {
                            //docked: 'right',
                            // width: 50,
                            ui: 'round',
                            xtype: 'button',
                            id: 'btnMultiBack',
                            text: 'Back',
                            handler: function () {

                                Ext.getCmp('mainView').setActiveItem(1);



                            }
                        },

                  ]

              },


             {
                 xtype: 'label',
                 id: 'MultiTrackingListLabelTop',
                 html: 'Registered GPS tracking Items<br>Under this Account'
             },

            {
                xtype: 'list',
                flex: 1,

                store: 'TrackingItemList',
                id: 'multiTrackingItemsListsID',

                mode: 'MULTI',
                itemTpl: '<div class="myContent">' +
                   '<div><b>{TrackItem}</b></div>' +
                   '<div>{TrackID}</div>' +
                        //'<div>{GPSSimNumber}</div>' +
                    '<div style="display: none;">{DeviceID}</div>' +
                   '</div>',
                height: '100%',


                listeners: {
                    select: function (list, records) {
                        trackingid.push(records.get('DeviceID'));

                    },
                    deselect: function (list, records) {
                        console.log(records.get('DeviceID'));
                        var value_to_remove = records.get('DeviceID');
                        trackingid.splice(trackingid.indexOf(value_to_remove), 1);

                    },
                    itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                     
                        loadmarkerSingleTrackingMap(record.get('DeviceID'));
                        Ext.getCmp('mainView').setActiveItem(2);
                        Ext.Viewport.remove(_singleTrackingMap_Menu);
                        this.overlay = Ext.Viewport.add(SingleTrackingMap_Menu());
                        this.overlay.show();

                      
                        //setTimeout(function () {
                        //    Ext.getCmp('btnSingleTrackingMillageBottom11').setHidden(false);
                        //}, 2000);

                    },
                    itemtap: function (record, index, item, e) {
                       
                      //  listIndex.push(index);
                        listrecord = record;
                        
                    }
                },





            },
             {
                 xtype: 'label',
                 id: 'MultiTrackingListLabelBotom',
                 html: '* Double tap to directly show item on map<br>* Single tap to select on multi view'
             },


        ],


    },

});





function DeselectMultipleTrackingList()
{
    if (trackingid.length >= 1) {
        setTimeout(function () {
            for (var i = 0; i < 20; i++) {
                listrecord.deselect(i);

            }

        }, 500);
    }
}