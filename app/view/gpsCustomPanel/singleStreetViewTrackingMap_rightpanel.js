var countMapChange = 0;
var changeMsg;
var boundstatus = 'yes';
var ShowOverViewMap = 'no';
var isFullview = 'no';
var ShowOverViewMapStreetViewMobile = 'no';
var ShowOverViewMapStreetViewWeb = 'no';
Ext.define('MyGPS.view.custompanel.singleStreetViewTrackingMap_rightpanel', {
  
});
var _singleStreetViewTrackingMap_rightpanel =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        height: 1,
        width: 1,
        id: '_singleStreetViewTrackingMap_rightpanelID',
        draggable: false,
        right: -5,
         bottom: 145,
     //   bottom: 214,
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
                      id: 'btnsingleTrackingMaprightpanelChangeMapsStreetView',
                      hidden: true,
                      height: 55,
                      width: 55,
                      html: '<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function (btn) {
                          countMapChange = countMapChange + 1;
                          btn.setHtml('<div ><img src="resources/icons/changeMap2.png" width="45" height="45" alt="Company Name"></div>');
                          if (countMapChange == 1) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.SATELLITE);
                              changeMsg = "Please wait,Change Map SATELLITE";
                          } else if (countMapChange == 2) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.HYBRID);
                              changeMsg = "Please wait,Change Map HYBRID";

                          } else if (countMapChange == 3) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.ROADMAP);
                              changeMsg = "Please wait,Change Map ROADMAP";

                          } else if (countMapChange == 4) {
                              singleTrackingMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
                              changeMsg = "Please wait,Change Map TERRAIN";

                              countMapChange = 0;
                          }
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
                     id: 'btnsingleTrackingMaprightpanelZoomPointsStreetView',
                     hidden: true,
                     height: 55,
                     width: 55,
                     html: '<div ><img src="resources/icons/zoompoint.png" width="45" height="45" alt="Company Name"></div>',
                     ui: 'plain',
                     handler: function (btn) {
                         if (boundstatus == 'yes') {
                             Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-center Map View' });
                             var task = Ext.create('Ext.util.DelayedTask', function () {

                                 singleTrackingMap.setZoom(8);      // This will trigger a zoom_changed on the map
                                 singleTrackingMap.setCenter(new google.maps.LatLng(latGeofence, longGeofence));
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
                                 bounds.extend(boundreboundlatlong);
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
                           id: 'btnsingleTrackingMaprightpanelOverViewMapsStreetView',
                           height: 55,
                           width: 55,
                           hidden:true,
                           html: '<div ><img src="resources/icons/streetviewOverView.png" width="45" height="45" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {

                              

                              

                               if (OS != "Windows") {
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
                               if (OS == "Windows" || OS == "MacOS") {
                              
                                   if (ShowOverViewMapStreetViewWeb == 'no') {

                                       ShowOverViewMapStreetViewWeb = 'yes';
                                       gSingleTrackingMapStreetViewOverviewMapWebActive = 'yes';
                                    


                                       if (_GeofenceInfopanelOnOff == 'Off')
                                       {
                                           Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setMargin('5 4 0 0');
                                       } else
                                       {
                                           Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setMargin('-55 4 0 0');
                                       }
                                  
                                       Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setHidden(false);

                                       
                                      // alert(gSingleTrackingMapStreetViewOverviewMapWebActive);
                                       //if (!this.overlay) {
                                       //    this.overlay = Ext.Viewport.add(overViewMapStreetViewLiveTracking);

                                       //} 
                                       //this.overlay.show();

                                       return;

                                   } if (ShowOverViewMapStreetViewWeb == 'yes') {

                                       ShowOverViewMapStreetViewWeb = 'no';
                                       gSingleTrackingMapStreetViewOverviewMapWebActive = 'no';
                                       Ext.getCmp('gSingleTrackingMapStreetView_OverViewWeb').setHidden(true);
                                     //  overViewMapStreetViewLiveTracking.hide();
                                       return;

                                   }


                                 
                               }
                             



                           }
                       },

                       {
                           xtype: 'button',
                           id: 'btnsingleTrackingMaprightpanelStreetViewDetailsPoint',
                           height: 55,
                           width: 55,
                           // hidden: true,
                           html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {


                               this.overlay = Ext.Viewport.add(_LiveTracking_InfoPanel);

                               this.overlay.show();

                               //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching Data...' });
                               var task = Ext.create('Ext.util.DelayedTask', function () {
                                   setsingleTrackingMapDetails();
                                   //  Ext.Viewport.unmask();
                               });
                               task.delay(1000);
                           }


                       },
                {
                    xtype: 'button',
                    id: 'btnsingleTrackingMaprightpanelSearchTrackingItemsStreetView',
                    height: 55,
                    width: 55,
                    html: '<div ><img src="resources/icons/Picture28.png" width="45" height="45" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {

                        if (SingleTrackingSearchPanelisOpen == 'no') {

                            if (OS != "Windows") {


                                this.overlay = Ext.Viewport.add(SearchSingleMapP());
                                this.overlay.show();
                            }
                            if (OS == "Windows" || OS == "MacOS") {
                                this.overlay = Ext.Viewport.add(SearchSingleMap());
                                this.overlay.show();
                            }
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
                              id: 'btnsingleTrackingMaprightpanelStreetViewFullView',
                              height: 55,
                              width: 55,
                              hidden: true,
                              html: '<div ><img src="resources/icons/mapview.png" width="45" height="45" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {
                                  Ext.getCmp('toolbarSingleTrackingBottom').setHidden(false);
                                  trackingMapMode = 'normalView';
                                  stopClocksingleTrackingMapsStreetView();
                                  loadmarkerSingleTrackingMap(listSingleTrackingitemSingleTrackID);
                                  _singleStreetViewTrackingMap_rightpanel.hide();
                                  Ext.getCmp('btnSingleTrackingShowHideMenuStreetView').setHidden(true);
                                  Ext.getCmp('btnSingleTrackingShowHideMenu').setHidden(false);
                                  var cntr = Ext.ComponentQuery.query("#SingleTrackingholderID")[0];
                                  cntr.setActiveItem(1);
                                  Ext.getCmp('toolbarSingleTrackingTop').setTitle('Live Tracking');
                                  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Live View Map..Please Wait.' });
                                  var task = Ext.create('Ext.util.DelayedTask', function () {
                                      if (!this.overlay) {
                                          this.overlay = Ext.Viewport.add(_singleTrackingMap_rightpanel);
                                      } else {
                                          this.overlay = Ext.Viewport.add(_singleTrackingMap_rightpanel);
                                      }
                                      this.overlay.show();

                                      //  loadmarkerSingleTrackingMapStreetView(listSingleTrackingitemSingleTrackID);

                                      Ext.Viewport.unmask();
                                  });
                                  task.delay(1000);

                                  //if (isFullview == 'no')
                                  //{
                                  //    Ext.getCmp('toolbarSingleTrackingBottom').setHidden(true);
                                  //    Ext.getCmp('toolbarSingleTrackingTop').setHidden(true);
                                  //    Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHtml('<div class="transbox"><p><font size="2">Exit Full View</font></p></div>');
                                  //    isFullview = 'yes';
                                  //    return;
                                  //}
                                  //if (isFullview == 'yes') {
                                  //    Ext.getCmp('toolbarSingleTrackingBottom').setHidden(false);
                                  //    Ext.getCmp('toolbarSingleTrackingTop').setHidden(false);
                                  //    Ext.getCmp('btnsingleTrackingMaprightpanelFullviewlblStreetView').setHtml('<div class="transbox"><p><font size="2">Full View</font></p></div>');
                                  //    isFullview = 'no';
                                  //    return;
                                  //}
                                 
                              }


                          },
                                {
                                    xtype: 'button',
                                    id: 'btnsingleTrackingMaprightpanelChangeMaplblStreetView',
                                    height: 55,
                                    width: 140,
                                    right: 38,
                                    bottom: 220,
                                    hidden: true,
                                    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                    html: '<div class="transbox"><p><font size="2">Base Map</font></p></div>',
                                    //ui:'round'
                                    ui: 'plain',
                                    handler: function () {


                                    }


                                },
                                {
                                    xtype: 'button',
                                    id: 'btnsingleTrackingMaprightpanelOverViewMaplblStreetView',
                                    height: 55,
                                    width: 140,
                                    right: 38,
                                    bottom: 165,
                                  //  hidden: true,
                                    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                    html: '<div class="transbox"><p><font size="2">OverView Map</font></p></div>',
                                    //ui:'round'
                                    ui: 'plain',
                                    handler: function () {


                                    }


                                },
                                        {
                                            xtype: 'button',
                                            id: 'btnsingleTrackingMaprightpanelSearchTrackingItemlblStreetView',
                                            height: 55,
                                            width: 140,
                                            right: 38,
                                            bottom: 110,
                                          //  hidden:true,
                                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                                            html: '<div class="transbox"><p><font size="2">Search</font></p></div>',
                                            //ui:'round'
                                            ui: 'plain',
                                            handler: function () {

                                               
                                            }


                                        },
                        {
                            xtype: 'button',
                            id: 'btnsingleTrackingMaprightpanelDetailsPointlblStreetView',
                            height: 55,
                            width: 140,
                            right: 38,
                            bottom: 55,
                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                            html: '<div class="transbox"><p><font size="2">Point Info</font></p></div>',
                            //ui:'round'
                            ui: 'plain',
                            handler: function () {
                               
                             
                            }


                        },

                        {
                            xtype: 'button',
                            id: 'btnsingleTrackingMaprightpanelFullviewlblStreetView',
                            height: 55,
                            width: 140,
                            right: 38,
                            bottom: 2,
                       
                            //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                            //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                            html: '<div class="transbox"><p><font size="2">Full View</font></p></div>',
                            //ui:'round'
                            ui: 'plain',
                            handler: function () {


                            }


                        },
                         //{
                         //    xtype: 'button',
                         //    id: 'btnsingleTrackingMaprightpanelRevertMaplblStreetView2',
                         //    height: 55,
                         //    width: 140,
                         //    right: 38,
                         //    bottom: 2,
                         //    hidden:true,
                         //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                         //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                         //    html: '<div class="transbox"><p><font size="2">Full View</font></p></div>',
                         //    //ui:'round'
                         //    ui: 'plain',
                         //    handler: function () {


                         //    }


                         //},

            ]

        },
     

    });



