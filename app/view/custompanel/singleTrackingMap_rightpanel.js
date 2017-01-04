var countMapChange = 0;
var changeMsg;
var boundstatus = 'yes';
var ShowOverViewMap = 'no';

Ext.define('MyGPS.view.custompanel.singleTrackingMap_rightpanel', {
 
});



function singleTrackingMap_rightpanel()
{
    var _singleTrackingMap_rightpanel =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        height: 1,
        width: 1,
        id: '_singleTrackingMap_rightpanelID',
        draggable: false,
        right: -5,
         bottom: 360,
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
                        id: 'btnsingleTrackingMaprightpanelPointInformations',
                        height: 65,
                        width: 65,
                       // html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                        html: '<div ><img src="resources/icons/StreetViewRound.png" width="55" height="55" alt="Company Name"></div>',
                        //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            _singleTrackingMap_rightpanel.hide();
                            Ext.Viewport.remove(_singleTrackingMap_rightpanel);

                            setTimeout(function () {

                                this.overlay = Ext.Viewport.add(singleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                                // }
                                this.overlay.show();
                            }, 500);
                            //Ext.getCmp('btnSingleTrackingShowHideMenuStreetView').setHidden(false);
                            //Ext.getCmp('btnSingleTrackingShowHideMenu').setHidden(true);

                            //Ext.getCmp('btnSingleTrackingBackStreetView').setHidden(false);
                            //Ext.getCmp('btnSingleTrackingBack').setHidden(true);


                            //var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                            //cntr.setActiveItem(2);


                            var StreetViewPoint = new google.maps.LatLng(latitude, longitude);
                            var streetViewService = new google.maps.StreetViewService();
                            var STREETVIEW_MAX_DISTANCE = 100;
                            streetViewService.getPanoramaByLocation(StreetViewPoint, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
                                if (status == google.maps.StreetViewStatus.OK) {
                                //    loadmarkerSingleTrackingMapStreetView(listSingleTrackingitemSingleTrackID);
                                    var cntr = Ext.ComponentQuery.query("#SingleTrackingholderIDs")[0];
                                    cntr.setActiveItem(2);
                                    _GeofenceInfopanel.hide();
                                    Ext.getCmp('toolbarSingleTrackingTop').setTitle('Street View Live Tracking');
                                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Activate Street View Map..Please Wait.' });
                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                        trackingMapMode = 'streetView';
                                        _singleTrackingMap_rightpanel.hide();
                                        if (!this.overlay) {
                                            this.overlay = Ext.Viewport.add(_singleStreetViewTrackingMap_rightpanel);

                                        } else {
                                            this.overlay = Ext.Viewport.add(_singleStreetViewTrackingMap_rightpanel);

                                        }
                                        this.overlay.show();
                                        _GeofenceInfopanelMillage.hide();
                                        _TrackingInfopanel.hide();
                                        //   initializedStreetViewTracking();
                                        Ext.Viewport.unmask();
                                    });
                                    task.delay(2000);


















                                    
                                        //Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHidden(true);
                                        //Ext.getCmp('btnsingleTrackingMaprightpanelDetailsPointlblStreetView').setHidden(true);
                                        //Ext.getCmp('btnsingleTrackingMaprightpanelSearchTrackingItemlblStreetView').setHidden(true);
                                        //Ext.getCmp('btnsingleTrackingMaprightpanelOverViewMaplblStreetView').setHidden(true);
                                        //Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHidden(true);
                                        //Ext.getCmp('toolbarSingleTrackingBottom').setHidden(true);
                                        Ext.getCmp('holderMapStreetView_gSingleTrackingMapStreetView').setHeight("90%");
                                        Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setHidden(true);
                                        if (ShowOverViewMapStreetViewMobile == 'no') {

                                            ShowOverViewMapStreetViewMobile = 'yes';
                                            gSingleTrackingMapStreetViewOverviewMapMobileActive = 'yes';
                                            Ext.getCmp('gSingleTrackingMapStreetView_OverViewPhone').setHidden(false);
                                            return;

                                        } if (ShowOverViewMapStreetViewMobile == 'yes') {

                                            ShowOverViewMapStreetViewMobile = 'no';
                                            gSingleTrackingMapStreetViewOverviewMapMobileActive = 'no';
                                            Ext.getCmp('gSingleTrackingMapStreetView_OverViewPhone').setHidden(true);
                                            return;

                                        }



                                    




                                }

                            });

                            //this.overlay = Ext.Viewport.add(_LiveTracking_InfoPanel);

                            //this.overlay.show();


                            //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching Data...' });
                            //var task = Ext.create('Ext.util.DelayedTask', function () {
                            //    setsingleTrackingMapDetails();
                            //    Ext.Viewport.unmask();
                            //});
                            //task.delay(1000);
                        }
                    },
                //{
                //    //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
                //    id: 'InfoPanelSstreetViewContainertest',
                //    //html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>',
                //    html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                //},
                  {
                      xtype: 'button',
                      id: 'btnsingleTrackingMaprightpanelChangeMaps',
                      height: 65,
                      width: 65,
                      html: '<div ><img src="resources/icons/OverViewMapRound.png" width="55" height="55" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function (btn) {
                        
                          setTimeout(function () {

                              this.overlay = Ext.Viewport.add(singleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                              // }
                              this.overlay.show();

                             

                          }, 500);
                          countMapChange = countMapChange + 1;
                          btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                          if (countMapChange == 1) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                              changeMsg = "Please wait,Change Map SATELLITE";

                              Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');

                          } else if (countMapChange == 2) {
                              Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                              changeMsg = "Please wait,Change Map HYBRID";

                          } else if (countMapChange == 3) {
                              Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                              changeMsg = "Please wait,Change Map ROADMAP";

                          } else if (countMapChange == 4) {
                              Ext.getCmp('btnsingleTrackingOverViewMapGeolocationAddressWeb').setHtml('<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>');
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                              changeMsg = "Please wait,Change Map TERRAIN";

                              countMapChange = 0;
                          }
                          _singleTrackingMap_rightpanel.hide();
                          Ext.Viewport.remove(_singleTrackingMap_rightpanel);
                          Ext.Viewport.mask({ xtype: 'loadmask', message: changeMsg });
                          var task = Ext.create('Ext.util.DelayedTask', function () {

                              Ext.Viewport.unmask();
                              btn.setHtml('<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>');
                          });
                          task.delay(1500);
                      }
                  },
                 {
                     xtype: 'button',
                     id: 'btnsingleTrackingMaprightpanelZoomPoints',
                     height: 65,
                     width: 65,
                     html: '<div ><img src="resources/icons/NearMeRound.png" width="55" height="55" alt="Company Name"></div>',
                     ui: 'plain',
                     handler: function (btn) {
                         _singleTrackingMap_rightpanel.hide();

                         setTimeout(function () {

                             this.overlay = Ext.Viewport.add(singleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                             // }
                             this.overlay.show();
                         }, 500);
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
                           height: 65,
                           width: 65,
                           html: '<div ><img src="resources/icons/LocateRound.png" width="55" height="55" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {
                               _singleTrackingMap_rightpanel.hide();

                               setTimeout(function () {

                                   this.overlay = Ext.Viewport.add(singleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                                   // }
                                   this.overlay.show();
                               }, 500);
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
                    height: 65,
                    width: 65,
                    html: '<div ><img src="resources/icons/SearchRound.png" width="55" height="55" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {

                       
                        _singleTrackingMap_rightpanel.hide();
                        Ext.Viewport.remove(_singleTrackingMap_rightpanel);
                        setTimeout(function () {
                          
                            this.overlay = Ext.Viewport.add(singleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
                            // }
                            this.overlay.show();
                        }, 500);

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
                          xtype: 'button',
                          Id: 'btnsingleTrackingMaprightpanelStreetViewTracking',
                          height: 55,
                          width: 55,
                          hidden: true,
                          //    html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                          html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {
                              // alert(OS);




                              //   ActivatedStreetView = 'yes';

                              if (OS != "Windows") {
                                  Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHidden(true);
                                  Ext.getCmp('btnsingleTrackingMaprightpanelDetailsPointlblStreetView').setHidden(true);
                                  Ext.getCmp('btnsingleTrackingMaprightpanelSearchTrackingItemlblStreetView').setHidden(true);
                                  Ext.getCmp('btnsingleTrackingMaprightpanelOverViewMaplblStreetView').setHidden(true);
                                  Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHidden(true);
                                  Ext.getCmp('toolbarSingleTrackingBottom').setHidden(true);
                                  Ext.getCmp('holderMapStreetView_gSingleTrackingMapStreetView').setHeight("90%");


                              }

                              //if (OS == "Windows" || OS == "MacOS") {
                              //    Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHidden(false);
                              //    Ext.getCmp('toolbarSingleTrackingBottom').setHidden(false);
                              //    Ext.getCmp('holderMapStreetView_panelLower').setHidden(true);
                              //    Ext.getCmp('holderMapStreetView_panelUpper').setHidden(true);
                              //    Ext.getCmp('holderMapStreetView_gSingleTrackingMapStreetView').setHeight("100%");
                              //    Ext.getCmp('btnsingleTrackingMaprightpanelStreetViewFullView').setHidden(true);
                              //    Ext.getCmp('btnsingleTrackingMaprightpanelOverViewMaplblStreetView').setHidden(true);


                              //    Ext.getCmp('btnsingleTrackingMaprightpanelSearchTrackingItemlblStreetView').setHtml("<div class=transbox><p><font size=2>OverView Map</font></p></div>");

                              //    Ext.getCmp('btnsingleTrackingMaprightpanelDetailsPointlblStreetView').setHtml("<div class=transbox><p><font size=2>Search</font></p></div>");
                              //    Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHtml("<div class=transbox><p><font size=2>Point Info</font></p></div>");



                              //}

                              Ext.getCmp('btnSingleTrackingShowHideMenuStreetView').setHidden(false);
                              Ext.getCmp('btnSingleTrackingShowHideMenu').setHidden(true);

                              Ext.getCmp('btnSingleTrackingBackStreetView').setHidden(false);
                              Ext.getCmp('btnSingleTrackingBack').setHidden(true);


                              //var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                              //cntr.setActiveItem(2);


                              var StreetViewPoint = new google.maps.LatLng(latitude, longitude);
                              var streetViewService = new google.maps.StreetViewService();
                              var STREETVIEW_MAX_DISTANCE = 100;
                              streetViewService.getPanoramaByLocation(StreetViewPoint, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
                                  if (status == google.maps.StreetViewStatus.OK) {
                                      loadmarkerSingleTrackingMapStreetView(listSingleTrackingitemSingleTrackID);
                                      var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                                      cntr.setActiveItem(2);
                                      _GeofenceInfopanel.hide();
                                      Ext.getCmp('toolbarSingleTrackingTop').setTitle('Street View Live Tracking');
                                      Ext.Viewport.mask({ xtype: 'loadmask', message: 'Activate Street View Map..Please Wait.' });
                                      var task = Ext.create('Ext.util.DelayedTask', function () {
                                          trackingMapMode = 'streetView';
                                          _singleTrackingMap_rightpanel.hide();
                                          if (!this.overlay) {
                                              this.overlay = Ext.Viewport.add(_singleStreetViewTrackingMap_rightpanel);

                                          } else {
                                              this.overlay = Ext.Viewport.add(_singleStreetViewTrackingMap_rightpanel);

                                          }
                                          this.overlay.show();

                                          //   initializedStreetViewTracking();
                                          Ext.Viewport.unmask();
                                      });
                                      task.delay(2000);





                                  }

                              });





                          }


                      },
                      //{
                      //    xtype: 'button',
                      //    id: 'btnsingleTrackingMaprightpanelDetailsPointlbl',
                      //    height: 55,
                      //    width: 140,
                      //    right: 38,
                      //    bottom: 220,
                      //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                      //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                      //    html: '<div class="transbox"><p><font size="2">Point Info</font></p></div>',
                      //    //ui:'round'
                      //    ui: 'plain',
                      //    handler: function () {


                      //    }


                      //},

                                //{
                                //    xtype: 'button',
                                //    id: 'btnsingleTrackingMaprightpanelChangeMaplbl',
                                //    height: 55,
                                //    width: 140,
                                //    right: 38,
                                //    bottom: 165,
                                //    // bottom: 220,
                                //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                //    html: '<div class="transbox"><p><font size="2">Base Map</font></p></div>',
                                //    //ui:'round'
                                //    ui: 'plain',
                                //    handler: function () {


                                //    }


                                //},
                                //{
                                //    xtype: 'button',
                                //    id: 'btnsingleTrackingMaprightpanelBoundReboundPointlbl',
                                //    height: 55,
                                //    width: 140,
                                //    right: 38,
                                //    bottom: 110,
                                //    // bottom: 165,
                                //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                //    html: '<div class="transbox"><p><font size="2">Re-Center</font></p></div>',
                                //    //ui:'round'
                                //    ui: 'plain',
                                //    handler: function () {


                                //    }


                                //},
                                //       
                        //        {
                        //                    xtype: 'button',
                        //                    id: 'btnsingleTrackingMaprightpanelOverViewMaplbl',
                        //                    height: 55,
                        //                    width: 140,
                        //                    right: 38,
                        //                    bottom: 55,
                        //                    // bottom: 110,
                        //                    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                        //                    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                        //                    html: '<div class="transbox"><p><font size="2">OverView Map</font></p></div>',
                        //                    //ui:'round'
                        //                    ui: 'plain',
                        //                    handler: function () {


                        //                    }


                        //                },
                        //{
                        //    xtype: 'button',
                        //    id: 'btnsingleTrackingMaprightpanelSearchTrackingItemlbl',
                        //    height: 55,
                        //    width: 140,
                        //    right: 38,
                        //    // bottom: 55,
                        //    bottom: 2,
                        //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                        //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                        //    html: '<div class="transbox"><p><font size="2">Search</font></p></div>',
                        //    //ui:'round'
                        //    ui: 'plain',
                        //    handler: function () {


                        //    }


                        //},

                        //{
                        //    xtype: 'button',
                        //    id: 'btnsingleTrackingMaprightpanelStreetViewlbl',
                        //    height: 55,
                        //    width: 140,
                        //    right: 38,
                        //    bottom: 2,
                        //    hidden: true,
                        //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                        //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                        //    html: '<div class="transbox"><p>Street View</p></div>',
                        //    //ui:'round'
                        //    ui: 'plain',
                        //    handler: function () {


                        //    }


                        //},

            ]

        },

        initialize: function () {

            //   _singleTrackingMap_BurgeMenu.hide();
        }

    });

    return _singleTrackingMap_rightpanel;
}









//function singleTrackingMap_BurgeMenu() {
//    var _singleTrackingMap_BurgeMenu =
//       Ext.create('Ext.Panel', {

//           xtype: 'panel',
//           height: 1,
//           width: 1,
//           id: 'singleTrackingMap_BurgeMenu',
//           draggable: false,
//           right: -5,
//           // bottom: 260,
//           bottom: 65,

//           //showAnimation: {
//           //    type: 'slide',
//           //    direction: 'left',
//           //    duration: 250,
//           //    easing: 'ease-out'
//           //},
//           //hideAnimation: {
//           //    type: null,
//           //    direction: null,
//           //    duration: null,
//           //    //  easing: 'ease-in'
//           //},



//           showAnimation: {
//               type: 'popIn',
//               duration: 250,
//               easing: 'ease-out'
//           },
//           hideAnimation: {
//               type: 'popOut',
//               duration: 250,
//               easing: 'ease-out'
//           },
//           style: 'background-color: transparent;',
//           items: {

//               xtype: 'container',
//               style: 'background-color: transparent;',
//               layout: {
//                   type: 'vbox',
//                   pack: 'left',
//                   align: 'end'
//               },

//               items: [

//                       {
//                           xtype: 'button',
//                           id: 'btnsingleTrackingMapBurgeMenu',
//                           height: 75,
//                           width: 75,
//                           html: '<div ><img src="resources/icons/BurgerMenu1.png" width="65" height="65" alt="Company Name"></div>',
//                           //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
//                           ui: 'plain',
//                           handler: function () {


//                               _singleTrackingMap_BurgeMenu.hide();
//                               Ext.Viewport.remove(_singleTrackingMap_BurgeMenu);
//                               setTimeout(function () {
                                  
//                                   this.overlay = Ext.Viewport.add(singleTrackingMap_rightpanel());
//                                   this.overlay.show();

//                               }, 100);


//                           }
//                       },


//               ]

//           },


//       });

//    return _singleTrackingMap_BurgeMenu
//}



