var panoramapetaOverViewmap;
var dockOverViewMap;
var petaOverViewmap;
var geolocationisOn = 'no';
var geolocationX;
var geolocationY;
Ext.define('MyGPS.view.gpsTracking.gpsTrackingMap', {
    extend: 'Ext.Panel',
    //  extend: 'Ext.Container',
    requires: ['MyGPS.view.gpsTracking.gpsTrackingProcess',

               'Ext.MessageBox',
        'Ext.ActionSheet',
        'Ext.picker.Picker',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
         'Ext.dataview.List',

    ],
    //  alias: "widget.WidgetsingleTrackingOverViewMap",
    xtype: "gpsTrackingMap",


    config: {

        styleHtmlContent: true,
        layout: 'fit',
        items: [

            {

                xtype: 'toolbar',
                title: 'Live Tracking',
                docked: 'top',
                id: 'toolbarSingleTrackingTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnSingleTrackingOverViewHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   Ext.getCmp('mainView').setActiveItem(1);
                               }



                           },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnSingleTrackingTopPointInfoHide',
                               html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {

                                   Ext.getCmp('btnSingleTrackingTopPointInfoHide').setHidden(true);
                                   Ext.getCmp('btnSingleTrackingTopPointInfoShow').setHidden(false);
                                   Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHidden(true);

                               }
                           },

                           {
                               xtype: 'button',
                               hidden: true,
                               //right: -7,
                               //top: 1,
                               id: 'btnSingleTrackingTopPointInfoShow',
                               //  text: 'Show',
                               //  iconCls: 'compose',
                               html: '<div ><img src="resources/icons/showGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {

                                   Ext.getCmp('btnSingleTrackingTopPointInfoHide').setHidden(false);
                                   Ext.getCmp('btnSingleTrackingTopPointInfoShow').setHidden(true);
                                   Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHidden(false);






                               }
                           },

                       ]

            },


                {
                    xtype: 'container',
                    //  top:100,
                    layout: {
                        type: 'vbox',
                        pack: 'end'


                    },
                    items: [
                            {
                                xtype: 'button',
                                margin: '0 0 -45 -13',

                                id: 'btnsingleTrackingOverViewMapLabelShow',
                                height: 115,
                                width: 50,
                                // hidden: true,
                                //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                html: '<div  style="background-color: #57A0DC;"><font size="3" color="white">&#x21d7;</font></div>',
                                ui: 'plain',
                                handler: function () {

                                    Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(true);
                                    if (ShowOverViewMap == 'no') {
                                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(false);


                                        var task = Ext.create('Ext.util.DelayedTask', function () {


                                            ShowOverViewMap = 'yes';
                                            //  alert(ShowOverViewMap+"vvv");
                                            ActiveOverViewMap = 'yes';
                                            Ext.Viewport.setMasked(false);
                                        });
                                        task.delay(1000);

                                        return;

                                    } if (ShowOverViewMap == 'yes') {
                                        Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);

                                        var task = Ext.create('Ext.util.DelayedTask', function () {
                                            // Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                            ShowOverViewMap = 'no';
                                            ActiveOverViewMap = 'no';
                                            Ext.Viewport.setMasked(false);
                                        });
                                        task.delay(1000);
                                        // alert(ShowOverViewMap);
                                        return;

                                    }

                                }


                            },


                    ]
                },

                     {
                         xtype: 'container',
                         //top:10,
                         // margin:'220 0 0 0',
                         layout: {
                             type: 'hbox',
                             align: 'center',
                             pack: 'start'

                         },
                         items: [

                          //{
                          //    xtype: 'button',
                          // //   margin: '100 0 0 -9',
                          //    //  margin: '-100 -9 0 0',
                          //    id: 'btnsingleTrackingOverViewMapMilliages',
                          //    height: 90,
                          //    width: 200,
                          //    // hidden: true,
                          //    //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                          //    html: '<div  style="background-color: #57A0DC;"><font size="0.5" color="white">------------Milliages------------</font><br><font size="3" color="white"><b>0045641</b></font></div>',
                          //    ui: 'plain',
                          //    handler: function () {

                          //    }


                          //},

                                    {
                                        xtype: 'button',
                                        id: 'btnsingleTrackingOverViewMapGeolocationAddressWeb',
                                        height: 55,
                                        width: 55,
                                        hidden: true,
                                        zIndex: 10,
                                        html: '<div ><img src="resources/icons/locate.png" width="45" height="45" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {

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


                                                return;

                                            }

                                        }
                                    },

                         ]

                     },

            {
                xtype: 'container',

                layout: {
                    type: 'hbox',
                    pack: 'start'


                },
                items: [


                        {
                            xtype: 'button',
                            id: 'btnsingleTrackingOverViewMapGeocodeAddress',
                            height: 28,
                            width: 378,
                            zIndex: 10,
                            margin: '1 0 0 -9',
                            //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                            html: '<div class="transbox2"><p><font size="2">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</font></p></div>',
                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',
                            //  ui:'round'
                            ui: 'plain',
                        },




                ]

            },


             {
                 xtype: 'container',

                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'right'

                 },
                 items: [


                         {
                             xtype: 'button',
                             id: 'btnsingleTrackingOverViewMapPointInfolblRightPhone',
                             height: 250,
                             width: 190,
                             //height: 250,
                             //width: 180,
                             margin: '-36 -7 0 0',
                             html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                             //   html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                             //  ui:'round'
                             ui: 'plain',
                         },
                               {
                                   xtype: 'button',
                                   margin: '-105 -7 0 0',
                                   id: 'btnsingleTrackingOverViewMapMilliages',
                                   height: 90,
                                   width: 190,
                                   // hidden: true,
                                   //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                   html: '<div  style="background-color: #57A0DC;"><font size="0.5" color="white">------------Milliages------------</font><br><font size="3" color="white"><b>0045641</b></font></div>',
                                   ui: 'plain',
                                   handler: function () {

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
                     type: 'vbox'
                 },
                 items: [


                     {
                         xtype: 'panel',
                         // flex: 2,
                         height: "100%",
                         id: 'left_blue_bottomsingleTrackingOverViewMap',
                         style: 'border-bottom:1px solid;',
                         layout: {
                             type: 'fit'
                         },

                         xtype: "gpsTrackingProcess"

                     },



                 {
                     xtype: 'panel',


                     margin: '-230 0 0 0',

                     height: 230,
                     width: 250,
                     hidden: true,
                     id: 'singleTrackingOverViewMapPanelOverViewMapbottoms',
                     style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
                     layout: {
                         type: 'fit',

                     },
                     //<td class="tdgpslabel">Tracked Item</td>

                     //id: 'singleTrackingOverViewMapPanelOverViewMap',
                     items: [

                         {
                             xtype: 'button',
                             id: 'btnsingleTrackingMapOverViewStreetView',
                             height: 55,
                             width: 55,
                             zIndex: 10,
                             margin: '-3 0 0 195',
                             html: '<div ><img src="resources/icons/Street-View-122.png" width="45" height="45" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function (btn) {
                                 if (ActivatedStreetView == 'no') {
                                     ActivatedStreetView = 'yes';

                                     var StreetViewPoint = new google.maps.LatLng(latitude, longitude);


                                     StreetViewSingleTracking = petaOverViewmap.getStreetView();
                                     StreetViewSingleTracking.setPosition(StreetViewPoint);
                                     StreetViewSingleTracking.setVisible(true);
                                     StreetViewSingleTracking.setOptions({

                                         linksControl: false,
                                         panControl: false,
                                         addressControl: false,
                                         enableCloseButton: false,
                                         zoomControl: false,
                                         fullscreenControl: false,
                                         enableCloseButton: false,

                                     })
                                     return;
                                 }

                                 if (ActivatedStreetView == 'yes') {
                                     ActivatedStreetView = 'no';
                                     StreetViewSingleTracking = petaOverViewmap.getStreetView();
                                     StreetViewSingleTracking.setPosition(StreetViewPoint);
                                     StreetViewSingleTracking.setVisible(false);
                                     //
                                 }


                             }
                         },
                          {
                              xtype: 'container',

                              layout: {
                                  type: 'fit',

                              },
                              width: '100',
                              items: [

                                   {
                                       xtype: 'map',

                                       mapOptions: {
                                           //  center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
                                           zoom: 12,
                                           panControl: false,
                                           zoomControl: false,
                                           mapTypeControl: false,
                                           scaleControl: false,
                                           streetViewControl: false,
                                           mapTypeId: google.maps.MapTypeId.ROADMAP,

                                       },
                                       listeners: {
                                           maprender: function (comp, map) {
                                               //  var map = this;

                                               var me = this;
                                               me.map = map;
                                               petaOverViewmap = map;

                                           }
                                       },
                                   },





                              ]
                          }
                     ]
                     // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                     // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                 },




                     {
                         xtype: 'panel',

                         margin: '-135 0 0 0',
                         //  margin: '-462 0 0 0',
                         hidden: true,
                         //height: 155,
                         //width: 172,
                         height: 135,
                         width: 150,
                         id: 'singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView',
                         style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
                         //  style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;',
                         layout: {
                             type: 'fit',

                         },
                         //<td class="tdgpslabel">Tracked Item</td>

                         //id: 'singleTrackingOverViewMapPanelOverViewMap',
                         items: [

                               {
                                   xtype: 'button',
                                   margin: '-45 0 0 103',

                                   id: 'btnsingleTrackingOverViewMapLabelHide',
                                   height: 105,
                                   width: 50,
                                   // hidden: true,
                                   //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                   html: '<div  style="background-color: #57A0DC;"><font size="3" color="white">&#x21d9;</font></div>',
                                   ui: 'plain',
                                   handler: function () {

                                       Ext.getCmp('btnsingleTrackingOverViewMapLabelShow').setHidden(false);
                                       if (ShowOverViewMap == 'no') {
                                           //if (!this.overlay) {
                                           //    this.overlay = Ext.Viewport.add(overViewMap);
                                           //}
                                           //  this.overlay.show();

                                           //  Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point.. Please Wait..' });
                                           if (OS != "Windows") {
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(false);
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);

                                           }
                                           if (OS == "Windows" || OS == "MacOS") {
                                               // ActivatedStreetView = 'yes';
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(false);
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                           }
                                           var task = Ext.create('Ext.util.DelayedTask', function () {


                                               ShowOverViewMap = 'yes';
                                               //  alert(ShowOverViewMap+"vvv");
                                               ActiveOverViewMap = 'yes';
                                               Ext.Viewport.setMasked(false);
                                           });
                                           task.delay(1000);

                                           return;

                                       } if (ShowOverViewMap == 'yes') {
                                           //  overViewMap.hide();
                                           if (OS != "Windows") {
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);

                                           }
                                           if (OS == "Windows" || OS == "MacOS") {
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottoms').setHidden(true);
                                               Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                           }

                                           //if (OS != "Windows") {
                                           //    Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                           //}
                                           //if (OS == "Windows") {

                                           //    Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                           //}
                                           var task = Ext.create('Ext.util.DelayedTask', function () {
                                               // Ext.getCmp('singleTrackingOverViewMapPanelOverViewMapbottomsPhoneView').setHidden(true);
                                               ShowOverViewMap = 'no';
                                               ActiveOverViewMap = 'no';
                                               Ext.Viewport.setMasked(false);
                                           });
                                           task.delay(1000);
                                           // alert(ShowOverViewMap);
                                           return;

                                       }

                                   }


                               },
                              {
                                  xtype: 'container',

                                  layout: {
                                      type: 'fit',

                                  },
                                  width: '100',
                                  items: [

                                       {
                                           xtype: 'map',

                                           mapOptions: {
                                               center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
                                               zoom: 12,
                                               panControl: false,
                                               zoomControl: false,
                                               mapTypeControl: false,
                                               scaleControl: false,
                                               streetViewControl: false,

                                               mapTypeId: google.maps.MapTypeId.ROADMAP,

                                           },
                                           listeners: {
                                               maprender: function (comp, map) {
                                                   //  var map = this;

                                                   var me = this;
                                                   me.map = map;
                                                   dockOverViewMap = map;



                                               }
                                           },
                                       },





                                  ]
                              }
                         ]
                         // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                         // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                     },

                 ]
             },


        ]
    },


    initialize: function () {

        //if (!this.overlay) {
        //    this.overlay = Ext.Viewport.add(_geofence_rightpanelSettingDrawFence
        //);
        //}
        //this.overlay.show();
    }


});

