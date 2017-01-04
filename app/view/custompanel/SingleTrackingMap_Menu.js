
var _singleTrackingMap_Menu;
var _issingleTrackingMap_MenuInitialized = 'no';
Ext.define('MyGPS.view.custompanel.SingleTrackingMap_Menu', {

});



function SingleTrackingMap_Menu() {
    _singleTrackingMap_Menu =
  Ext.create('Ext.Panel', {

      xtype: 'panel',
      height: 1,
      width: 1,
      id: '_singleTrackingMap_MenuID',
      draggable: false,
      right: -5,
      bottom: 301,
      zIndex:10,
      // bottom: 165,

      showAnimation: {
          type: 'slide',
          direction: 'left',
          duration: 250,
          easing: 'ease-out'
      },
      hideAnimation: {
          type: null,
          direction: null,
          duration: null,
          //  easing: 'ease-in'
      },
      style: 'background-color: transparent;',
      items: {

          xtype: 'container',
          style: 'background-color: transparent;',
          layout: {
              type: 'vbox',
              pack: 'left',
              align: 'end'
          },

          items: [

                  {
                      xtype: 'button',
                      id: 'btnsingleTrackingMapMenuChangeMaps',
                      height: 62,
                      width: 65,
                      // hidden:true,
                      // html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                      //   html: '<div ><img src="resources/icons/GPSListRound.png" width="55" height="55" alt="Company Name"></div>',
                      html: '<div ><img src="resources/icons/ChangeMapRound.png" width="55" height="55" alt="Company Name"></div>',
                      //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {

                          SingleTrackingMap_MenuHide();
                          _singleTrackingMap_BurgeMenuIsInitialized = 'yes';
                          ////  Ext.Viewport.remove(_SingleTrackingMap_Menu);

                          countMapChange = countMapChange + 1;
                          //   btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                          if (countMapChange == 1) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                              changeMsg = "Please wait,Change Map SATELLITE";

                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');

                          } else if (countMapChange == 2) {
                              //  Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                              changeMsg = "Please wait,Change Map HYBRID";

                          } else if (countMapChange == 3) {
                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                              changeMsg = "Please wait,Change Map ROADMAP";

                          } else if (countMapChange == 4) {
                              // Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                              changeMsg = "Please wait,Change Map TERRAIN";

                              countMapChange = 0;
                          }
                          SingleTrackingMap_BurgeMenuShow();
                          //setTimeout(function () {
                          //    Ext.Viewport.remove(_singleTrackingMap_BurgeMenu);
                          //    this.overlay = Ext.Viewport.add(SingleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                          //    // }
                          //    this.overlay.show();
                          //}, 500);
                          Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                          var task = Ext.create('Ext.util.DelayedTask', function () {

                              Ext.Viewport.unmask();
                              // btn.setHtml('<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>');
                          });
                          task.delay(800);
                      }
                  },

                {
                    xtype: 'button',
                    id: 'btnsingleTrackingMapStreetView',
                    height: 62,
                    width: 65,
                    //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                    html: '<div ><img src="resources/icons/StreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        //  alert('singleTrackingMap_DeviceID:' + singleTrackingMap_DeviceID);
                        SingleTrackingMap_MenuHide();
                        // Ext.Viewport.remove(_SingleTrackingMap_Menu);
                        stopClocksingleTrackingMaps();
                        Ext.getCmp('mainView').setActiveItem(9);

                        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                            TrackID: singleTrackingMap_DeviceID,
                            AccountNo: AAccountNo
                        });
                        Ext.StoreMgr.get('singlesignalTrackingstore').load();
                        loadSingleTrackingStreetViewMap();
                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Searching Point..Please Wait.' });
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            Ext.Viewport.remove(_singleTrackingMapStreetView_Menu);
                            this.overlay = Ext.Viewport.add(SingleTrackingMapStreetView_Menu());
                            this.overlay.show();
                            Ext.Viewport.unmask();
                        });
                        task.delay(800);


                    }
                },
               {
                   xtype: 'button',
                   id: 'btnsingleTrackingMaprightpanelZoomPoints',
                   height: 62,
                   width: 65,
                   html: '<div ><img src="resources/icons/NearMeRound.png" width="55" height="55" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       SingleTrackingMap_MenuHide();
                       SingleTrackingMap_BurgeMenuShow();
                       _singleTrackingMap_BurgeMenuIsInitialized = 'yes';
                       // Ext.Viewport.remove(_SingleTrackingMap_Menu);

                       if (boundstatus == 'yes') {
                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-center Map View' });
                           var task = Ext.create('Ext.util.DelayedTask', function () {


                               singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                               singleTrackingMap.setZoom(8);

                               //singleTrackingMap.setZoom(8);      // This will trigger a zoom_changed on the map
                               //singleTrackingMap.setCenter(new google.maps.LatLng(latGeofence, longGeofence));
                               boundstatus = 'no';
                               Ext.Viewport.unmask();
                           });
                           task.delay(1000);
                           return;

                       }
                       if (boundstatus == 'no') {
                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Bounds Map to Point..' });
                           var task = Ext.create('Ext.util.DelayedTask', function () {

                               var bounds = new google.maps.LatLngBounds();
                               bounds.extend(boundreboundlatlongsingleTrackingMap);
                               singleTrackingMap.fitBounds(bounds);
                               boundstatus = 'yes';
                               Ext.Viewport.unmask();
                           });
                           task.delay(1000);
                           return;
                       }


                   }
               },
                     {
                         xtype: 'button',
                         id: 'btnsingleTrackingMaprightpanelGeolocation',
                         height: 62,
                         width: 65,
                         html: '<div ><img src="resources/icons/LocateRound.png" width="55" height="55" alt="Company Name"></div>',
                         ui: 'plain',
                         handler: function () {
                             SingleTrackingMap_MenuHide();
                             SingleTrackingMap_BurgeMenuShow();
                             _singleTrackingMap_BurgeMenuIsInitialized = 'yes';
                             //  Ext.Viewport.remove(_SingleTrackingMap_Menu);
                             //setTimeout(function () {

                             //    this.overlay = Ext.Viewport.add(_singleTrackingMap_BurgeMenu); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                             //    // }
                             //    this.overlay.show();
                             //}, 500);
                             if (geolocationisOn == 'no') {

                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Location..Please Wait.' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                     geolocationisOn = 'yes';
                                     geolocate('yes');
                                     Ext.Viewport.unmask();
                                 });
                                 task.delay(500);

                                 return;
                             }
                             if (geolocationisOn == 'yes') {
                                 Ext.Viewport.mask({ xtype: 'loadmask', message: 'Remove GeoLocation..Please Wait.' });
                                 var task = Ext.create('Ext.util.DelayedTask', function () {
                                     geolocationisOn = 'no';


                                     singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                                     singleTrackingMap.setZoom(8);
                                     boundstatus = 'no';

                                     Ext.Viewport.unmask();
                                 });
                                 task.delay(500);

                                 //setTimeout(function () {


                                 //    try {

                                 //        singleTrackingMap.setMap(null);
                                 //    } catch (err) {
                                 //        console.log(err);
                                 //    }
                                 //}, 500);

                                 //  alert(MarkerGeolocationID);
                                 //DeleteMarkerGeolocation('0');
                                 // DeleteMarkerGeolocation(MarkerGeolocationID);

                                 return;

                             }




                         }
                     },
              {
                  xtype: 'button',
                  id: 'btnsingleTrackingMaprightpanelSearchTrackingItems',
                  height: 62,
                  width: 65,
                  html: '<div ><img src="resources/icons/SearchRound.png" width="55" height="55" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {


                      SingleTrackingMap_MenuHide();
                      SingleTrackingMap_BurgeMenuShow();
                      _singleTrackingMap_BurgeMenuIsInitialized = 'yes';
                      //  Ext.Viewport.remove(_SingleTrackingMap_Menu);

                      trackingMapMode = 'normalView';
                      if (SingleTrackingSearchPanelisOpen == 'no') {



                          this.overlay = Ext.Viewport.add(SearchSingleMapP());
                          this.overlay.show();


                          SingleTrackingSearchPanelisOpen = 'yes'
                          return
                      }

                      if (SingleTrackingSearchPanelisOpen == 'yes' && iscancelpreesed == 'yes') {

                          SingleTrackingSearchPanelisOpen = 'no';
                          return
                      }

                  }
              },
              {
                  // [top, right, bottom, and left]
                  xtype: 'button',

                  id: 'btnsingleTrackingMapMenuGPSlistRound',
                  height: 62,
                  width: 65,
                  margin: '-61 63 0 0',
                  //  html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                //  html: '<div ><img src="resources/icons/GPSListRound.png" width="55" height="55" alt="Company Name"></div>',

                  html: '<div ><img src="resources/icons/BackStreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                  
                  ui: 'plain',
                  handler: function (btn) {
                      SingleTrackingMap_MenuHide();
                      // Ext.Viewport.remove(_SingleTrackingMap_Menu);
                      SingleTrackingMap_MillageCountHide();
                      SingleTrackingMap_SpeedMeterHide();
                      //  Ext.Viewport.remove(_singleTrackingMap_MillageCount);
                      trackingid.length = 0;
                      DeselectMultipleTrackingList();
                      stopClocksingleTrackingMaps();
                      markersingleTrackingMap.setMap(null);
                      markersingleTrackingMapTop.setMap(null);
                      Ext.getCmp('mainView').setActiveItem(7);







                  }
              },




          ]

      },

      initialize: function () {

          //   _singleTrackingMap_BurgeMenu.hide();
      }

  });





    return _singleTrackingMap_Menu;
}




//function SingleTrackingMap_Menu() {

//    return _SingleTrackingMap_Menu
//}


function SingleTrackingMap_MenuHide()
{
    _singleTrackingMap_Menu.hide();

}



function SingleTrackingMap_MenuWeb() {
    var _SingleTrackingMap_MenuWeb =
       Ext.create('Ext.Panel', {

           xtype: 'panel',
           height: 1,
           width: 1,
           id: 'SingleTrackingMap_MenuWeb',
           draggable: false,
           right: 125,
           // bottom: 260,
           bottom: 313,




           showAnimation: {
               type: 'popIn',
               duration: 250,
               easing: 'ease-out'
           },
           hideAnimation: {
               type: 'popOut',
               duration: 250,
               easing: 'ease-out'
           },
           style: 'background-color: transparent;',
           items: {

               xtype: 'container',
               style: 'background-color: transparent;',
               layout: {
                   type: 'vbox',
                   pack: 'left',
                   align: 'end'
               },

               items: [

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
                            id: 'btnsingleTrackingMapMenuWeb_Locate',
                            margin: '0 -60 90 0',

                            height: 90,
                            width: 90,
                            //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                            html: '<div ><img src="resources/icons/LocateRound.png" width="80" height="80" alt="Company Name"></div>',

                            ui: 'plain',
                        },
                         {
                             xtype: 'button',
                             id: 'btnsingleTrackingMapMenuWeb_OverViewMap',
                             margin: '0 15 195 0',

                             height: 90,
                             width: 90,
                             //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                             html: '<div ><img src="resources/icons/OverViewMapRound.png" width="80" height="80" alt="Company Name"></div>',

                             ui: 'plain',
                             handler: function () {

                             }



                         },
                         {
                             xtype: 'button',
                             id: 'btnsingleTrackingMapMenuWeb_PointInfo',
                             height: 90,
                             width: 90,
                             margin: '0 -13 220 0',
                             html: '<div ><img src="resources/icons/PointInfoRound.png" width="80" height="80" alt="Company Name"></div>',

                             ui: 'plain',
                             handler: function () {

                             }
                         },
               {
                   xtype: 'button',
                   id: 'btnsingleTrackingMapMenuWeb_SearchPoint',
                   margin: '0 -215 153 0',
                   height: 100,
                   width: 100,
                   html: '<div ><img src="resources/icons/SearchRound.png" width="90" height="90" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {




                   }
               },




               {
                   xtype: 'button',
                   id: 'btnsingleTrackingMapMenuWeb_StreetView',
                   margin: '0 -134 115 0',
                   height: 100,
                   width: 100,
                   html: '<div ><img src="resources/icons/StreetViewRound.png" width="90" height="90" alt="Company Name"></div>',

                   ui: 'plain',
                   handler: function () {


                   }
               },



                  {
                      xtype: 'button',
                      id: 'btnsingleTrackingMapMenuWeb_NearMe',


                      height: 100,
                      width: 100,
                      //   html: '<div ><img src="resources/icons/MainMenuHistoryRoute.png" width="90" height="90" alt="Company Name"></div>',
                      html: '<div ><img src="resources/icons/NearMeRound.png" width="90" height="90" alt="Company Name"></div>',

                      ui: 'plain',
                      handler: function () {


                      }
                  },


                   ]
               },


               ]

           },


       });

    return _SingleTrackingMap_MenuWeb
}