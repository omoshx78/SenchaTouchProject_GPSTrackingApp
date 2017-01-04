


var checkingcount;
var iscancelpreesed = 'no';
var trackingMapMode = 'normalView';
var SingleTrackingSearchPanelisOpen = 'no';
var _searchSingleTrackingMap;
Ext.define('MyGPS.view.custompanel.singleTrackingMap_Search', {

});
function SearchSingleMapP()
{

     _searchSingleTrackingMap = Ext.create('Ext.Panel', {
        requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
        ],

        draggable: false,
        centered: true,
        scrollable: false,
        height: 143,
        width: 250,

       
        //left: 70,
        //bottom:-10,
        // flex: 1,
        //width: '50%',
        //height: '50%',
      //  modal: true,
       // hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null
        },

        items: [

             {

                 xtype: 'toolbar',
                 title: 'Tracking ID',
                 docked: 'top',

             },

                 {
                     xtype: 'container',
                     //height: '100%',
                     //width: '100%',
                    // margin: 10,
                     layout: {
                         type: 'vbox'
                     },
                     items: [

                        

                         {

                             //xtype: 'textfield',          
                             //id: 'NewtxtTrackID',
                             //placeHolder: 'Insert Plat No or ID..',
                             //// autoCapitalize: true,
                             ////required: true,
                             //clearIcon: true



                             xtype: 'selectfield',

                             id: 'NewtxtTrackID',

                             //  _DataStore_getTrackID
                           //  labelWidth: '40%',
                             //store: 'multipletrackingitemselectFID',
                             store: 'TrackingItemList',
                             valueField: 'DeviceID',
                             displayField: 'TrackItem',
                             listeners: {
                                 change: function () {

                                 }

                             }
                             //     ////}
                             //label: 'Tracking Item',
                             //width: '100%',
                             //id: 'NewtxtTrackID',
                             ////  _DataStore_getTrackID
                             //// labelWidth: '40%',
                             ////store: 'multipletrackingitemselectFID',
                             //store: 'TrackingItemList',
                             //valueField: 'TrackID',
                             //displayField: 'TrackItem',




                             //xtype: 'list',

                             //store: 'TrackingItemList',
                             //id: 'listgeofenceitemedvvvvvv',
                             //mode: 'SINGLE',
                             //itemTpl: '<div class="myContent">' +
                             //   '<div><b>{TrackItem}</b></div>' +
                             //   '<div>{TrackID}</div>' +
                             //      //  '<div>{GPSSimNumber}</div>' +
                             //    '<div style="display: none;">{DeviceID}</div>' +

                             //   '</div>',
                             //height: '100%',



                         },

                     ]

                 },

                  {

                      xtype: 'toolbar',
                      docked: 'bottom',

                      items: [
                           {
                               //docked: 'right',
                               // width: 50,
                               ui: 'round',
                               xtype: 'button',
                               id: 'btncancelsingle',
                               text: 'Cancel',
                               handler: function () {


                                   _searchSingleTrackingMap.hide();
                                   Ext.Viewport.remove(_searchSingleTrackingMap);
                                   iscancelpreesed = 'yes';
                                   SingleTrackingSearchPanelisOpen = 'no';
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
                               id: 'btnrunsingle',
                               text: 'Find',
                               handler: function () {








                                   try {


                                       //   alert(strTrackID + '|' + AAccountNo);
                                       //   Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                       //       TrackID: strTrackID,
                                       //       AccountNo: AAccountNo
                                       //   });
                                       //   Ext.StoreMgr.get('singlesignalstore').load();
                                       //   var myStores = Ext.getStore('singlesignalstore');
                                       //   var modelRecord = myStores.getAt(0);
                                       ////   console.log(myStores.getCount());


                                       //   console.log(myStores.getCount()+'husee');
                                       //  // checkingcount = '0';
                                       //   checkingcount = myStores.getCount();
                                       //    alert(checkingcount);

                                       var SingleTrackID = Ext.getCmp('NewtxtTrackID').getValue();
                                       listSingleTrackingitemSingleTrackID = SingleTrackID;
                                       singleTrackingMap_DeviceID = SingleTrackID;
                                       if (SingleTrackID == "") {
                                           Ext.Msg.alert("ID cannot Empty!!");

                                           return;
                                       }
                                       Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                                           TrackID: SingleTrackID,
                                           AccountNo: AAccountNo
                                       });
                                       Ext.StoreMgr.get('singlesignalTrackingstore').load();
                                       Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Signal..Please Wait.' });
                                       var task = Ext.create('Ext.util.DelayedTask', function () {

                                           Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                                               TrackID: SingleTrackID,
                                               AccountNo: AAccountNo
                                           });
                                           Ext.StoreMgr.get('singlesignalTrackingstore').load();


                                           Ext.StoreMgr.get('singlesignalTrackingstore').load();
                                           var myStores = Ext.getStore('singlesignalTrackingstore');
                                           var modelRecordss = myStores.getAt(0);
                                           console.log(myStores.getCount() + 'huseecccxxx');
                                           checkingcount = '0';
                                           checkingcount = myStores.getCount();
                                           if (checkingcount == '1') {
                                             
                                               HideSearchSingleTrackingMap();
                                            
                                               SingleTrackingSearchPanelisOpen = 'no';
                                               iscancelpreesed = 'yes';
                                               stopClocksingleTrackingMaps();


                                               var pointXYnm = new google.maps.LatLng(modelRecordss.get('Latitude'), modelRecordss.get('Longitude'))

                                               Ext.Msg.alert("Signal Found !!" );

                                               singleTrackingMap.setZoom(10);
                                               singleTrackingMap.setCenter(pointXYnm);
                                               // This will trigger a zoom_changed on the map
                                               //setTimeout(function () {

                                               //}, 500);
                                               // petamap.panTo(pointXYn);
                                               // _listAccsingle.hide();

                                               //    startSingle();
                                               if (trackingMapMode == 'normalView')
                                               {
                                                   startsingleTrackingMaps('start', SingleTrackID);
                                               }

                                               if (trackingMapMode == 'streetView') {
                                                   startsingleTrackingMapsStreetView('start', SingleTrackID);
                                               }

                                           }
                                           if (checkingcount == '0') {
                                               //  var nm = holderID;
                                               Ext.Msg.alert("Plat No or ID not Valid.!!");
                                               HideSearchSingleTrackingMap();
                                               iscancelpreesed = 'yes';
                                          
                                          


                                           }







                                           Ext.Viewport.unmask();
                                       });
                                       task.delay(1000);








                                   } catch (err) {
                                       //  Ext.Msg.alert("InValid ID");
                                       console.log(err);
                                   }








                               }
                           },


                      ]

                  },



        ],


    });

    return _searchSingleTrackingMap;
}



function HideSearchSingleTrackingMap()
{

    _searchSingleTrackingMap.hide();
}


function SearchSingleMapPold() {


    //  var _singleTrackingMap_Search = Ext.create('Ext.Panel', {
    var _Value = Ext.create('Ext.Panel', {
        requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
        ],

        draggable: false,
        centered: true,
        scrollable: false,
        height: 143,
        width: 250,
        //top: 50,
        //right: 210,
        //left: 70,
        //bottom:-10,
        // flex: 1,
        //width: '50%',
        //height: '50%',
        //  modal: true,
        // hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            duration: null,
            easing: null
        },

        items: [

             {

                 xtype: 'toolbar',
                 title: 'Tracking ID',
                 docked: 'top',

             },

                 {
                     xtype: 'container',
                     //height: '100%',
                     //width: '100%',
                     // margin: 10,
                     layout: {
                         type: 'vbox'
                     },
                     items: [



                         {

                             //xtype: 'textfield',          
                             //id: 'NewtxtTrackID',
                             //placeHolder: 'Insert Plat No or ID..',
                             //// autoCapitalize: true,
                             ////required: true,
                             //clearIcon: true



                             xtype: 'selectfield',

                             id: 'NewtxtTracssskIDp',

                             //  _DataStore_getTrackID
                             //  labelWidth: '40%',
                             //store: 'multipletrackingitemselectFID',
                             store: 'TrackingItemList',
                             valueField: 'DeviceID',
                             displayField: 'TrackItem',
                             listeners: {
                                 change: function () {

                                 }

                             }
                             //     ////}
                             //label: 'Tracking Item',
                             //width: '100%',
                             //id: 'NewtxtTrackID',
                             ////  _DataStore_getTrackID
                             //// labelWidth: '40%',
                             ////store: 'multipletrackingitemselectFID',
                             //store: 'TrackingItemList',
                             //valueField: 'TrackID',
                             //displayField: 'TrackItem',




                             //xtype: 'list',

                             //store: 'TrackingItemList',
                             //id: 'listgeofenceitemedvvvvvv',
                             //mode: 'SINGLE',
                             //itemTpl: '<div class="myContent">' +
                             //   '<div><b>{TrackItem}</b></div>' +
                             //   '<div>{TrackID}</div>' +
                             //      //  '<div>{GPSSimNumber}</div>' +
                             //    '<div style="display: none;">{DeviceID}</div>' +

                             //   '</div>',
                             //height: '100%',



                         },

                     ]

                 },

                  {

                      xtype: 'toolbar',
                      docked: 'bottom',

                      items: [
                           {
                               //docked: 'right',
                               // width: 50,
                               ui: 'round',
                               xtype: 'button',
                               id: 'btncancelsinglep',
                               text: 'Cancel',
                               handler: function () {


                                   _Value.hide();
                                   Ext.Viewport.remove(_Value);
                                   SingleTrackingSearchPanelisOpen = 'no';
                                   iscancelpreesed = 'yes';
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
                               id: 'btnrunsinglep',
                               text: 'Find',
                               handler: function () {








                                   try {


                                       //   alert(strTrackID + '|' + AAccountNo);
                                       //   Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                       //       TrackID: strTrackID,
                                       //       AccountNo: AAccountNo
                                       //   });
                                       //   Ext.StoreMgr.get('singlesignalstore').load();
                                       //   var myStores = Ext.getStore('singlesignalstore');
                                       //   var modelRecord = myStores.getAt(0);
                                       ////   console.log(myStores.getCount());


                                       //   console.log(myStores.getCount()+'husee');
                                       //  // checkingcount = '0';
                                       //   checkingcount = myStores.getCount();
                                       //    alert(checkingcount);

                                       var strTrackID = Ext.getCmp('NewtxtTrackIDp').getValue();
                                       listSingleTrackingitemSingleTrackID = strTrackID;
                                       if (strTrackID == "") {
                                           Ext.Msg.alert("ID cannot Empty!!");

                                           return;
                                       }
                                       Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Signal..Please Wait.' });
                                       var task = Ext.create('Ext.util.DelayedTask', function () {

                                           //   alert(strTrackID + '|' + AAccountNo);

                                           //  alert(strTrackID + '|' + AAccountNo);


                                           Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                               TrackID: strTrackID,
                                               AccountNo: AAccountNo
                                           });
                                           Ext.StoreMgr.get('singlesignalstore').load();
                                           var myStores = Ext.getStore('singlesignalstore');
                                           var modelRecordss = myStores.getAt(0);
                                           console.log(myStores.getCount() + 'huseecccxxx');
                                           checkingcount = '0';
                                           checkingcount = myStores.getCount();
                                           if (checkingcount == '1') {

                                               _Value.hide();
                                               Ext.Viewport.remove(_Value);
                                               SingleTrackingSearchPanelisOpen = 'no';
                                               iscancelpreesed = 'yes';
                                               stopClocksingleTrackingMaps();


                                               var pointXYnm = new google.maps.LatLng(modelRecordss.get('Latitude'), modelRecordss.get('Longitude'))

                                               Ext.Msg.alert("Signal Found !!");

                                               singleTrackingMap.setZoom(10);
                                               singleTrackingMap.setCenter(pointXYnm);
                                               // This will trigger a zoom_changed on the map
                                               //setTimeout(function () {

                                               //}, 500);
                                               // petamap.panTo(pointXYn);
                                               // _listAccsingle.hide();

                                               //    startSingle();

                                               startsingleTrackingMaps('start', strTrackID);

                                           }
                                           if (checkingcount == '0') {
                                               //  var nm = holderID;
                                               _Value.hide();
                                               Ext.Viewport.remove(_Value);
                                               iscancelpreesed = 'yes';
                                               Ext.Msg.alert("Plat No or ID not Valid.!!");
                                               startsingleTrackingMaps('start', SingleTrackIDRetained);


                                           }







                                           Ext.Viewport.unmask();
                                       });
                                       task.delay(1000);








                                   } catch (err) {
                                       //  Ext.Msg.alert("InValid ID");
                                       console.log(err);
                                   }








                               }
                           },


                      ]

                  },



        ],


    });

    return _Value;
}