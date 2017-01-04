

var panoramapetaOverViewmap;
var dockOverViewMap;
var petaOverViewmap;
var geolocationisOn = 'no';
var geolocationX;
var geolocationY;
Ext.define('MyGPS.view.SingleTracking.singleTrackingOverViewMap', {
    extend: 'Ext.Panel',
    //  extend: 'Ext.Container',
    requires: ['MyGPS.view.SingleTracking.singleTrackingMap',

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
    alias: "widget.WidgetsingleTrackingOverViewMap",
    xtype: "singleTrackingOverViewMap",


    config: {

        styleHtmlContent: true,
        layout: 'fit',
        items: [
            {

                xtype: 'toolbar',
                title: 'Live Tracking',
                docked: 'top',
                id: 'toolbarMultiTrackingTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnSingleTrackingTopHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   // MultipleGeocodeAdd.length; = 0;
                                   HideAllSingleTrackinMapStreetViewHome_CustomePanel();
                               }



                           },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnbtnSingleTrackingTopAccInfo',
                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {



                               }
                           },


                       ]

            },
               {

                   xtype: 'toolbar',
                
                   docked: 'bottom',
                   id: 'toolbarSinglerackingBottom',
                    hidden:true,
                   items:
                          [
                              {
                                  xtype: 'button',
                                  //height: 30,
                                  hidden:true,
                                  width: 200,
                                  left: -5,
                                  id: 'btnSingleTrackingMillageBottom11',
                                  text: '<font size="5" >0|0|0|4|3|5|6|6|9</font>',
                                  //  iconCls: 'home',
                                  // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                                  ui: 'round',
                                  handler: function () {

                                  }



                              },
                               

                              {
                                  xtype: 'spacer'
                              },
                              {
                                  xtype: 'button',
                                  //right: -7,
                                  //top: 1,
                                  id: 'btnbtnSingleTrackingBottomBack',
                                  text:'Back',
                                 // html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                  //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                                  ui: 'action',
                                  handler: function () {
                                      trackingid.length = 0;
                                      stopClocksingleTrackingMaps();
                                      markersingleTrackingMap.setMap(null);
                                      markersingleTrackingMapTop.setMap(null);
                                      Ext.getCmp('mainView').setActiveItem(7);

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


                                    {
                                        xtype: 'button',
                                        id: 'btnsingleTrackingOverViewMapGeolocationAddressWeb',
                                        height: 55,
                                        width: 55,
                                        hidden:true,
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
                            height: 30,
                            width: 400,

                            margin: '-2 0 0 -20',
                            //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                            html: '<div class="transbox"><p><font size="2">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</font></p></div>',



                            //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',
                            //  ui:'round'
                            ui: 'plain',
                        },
                ]

            },


              {
                  xtype: 'container',

                  layout: {
                      type: 'hbox',
                      pack: 'end'

                  },
                  items: [

                                                  {
                                                      xtype: 'button',
                                                      margin: '-19 -7 0 0',
                                                      hidden:true,
                                                      id: 'btnsingleTrackingOverViewMapShowPointInfoTbl',
                                                      height: 115,
                                                      width: 50,
                                                      // hidden: true,
                                                      //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                      html: '<div class="transbox"><div  style="background-color: transparent"><font size="4" color="white">&#8681;</font></div></div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          Ext.getCmp('btnsingleTrackingOverViewMapShowPointInfoTbl').setHidden(true);
                                                          Ext.getCmp('btnsingleTrackingOverViewMapPointInfoTbl').setHidden(false);
                                                          Ext.getCmp('btnsingleTrackingOverViewMapHidePointInfoTbl').setHidden(false);
                                                      }


                                                  },
                  ]
              },



        


             {
                 xtype: 'container',

                 layout: {
                     type: 'hbox',
                     pack: 'end'

                 },
                 items: [


                         {
                             xtype: 'button',
                           
                             id: 'btnsingleTrackingOverViewMapPointInfoTbl',
                             height: 240,
                            //ori width: 200,
                             width:'110%',
                             margin: '-35 0 0 -10',
                            //ori margin: '-13 -15 0 0',
                            // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',

                           //ori  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr > <td class="tdspeedmax">ON</td> <td class="tdspeedmax">Moving..</td></tr> <tr > <td class="tdspeed">Geofence</td> <td class="tdspeed">Status</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',

                             html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="3" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> <td colspan="3" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr><tr> <td colspan="3" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> <td colspan="3"  class="tdstreetViewTblInfo1">Signal Time</td> </tr>   <tr > <td class="tdstreetViewTblInfo">OFF</td> <td class="tdstreetViewTblInfo">10(s)</td><td class="tdstreetViewTblInfo">ON</td> <td class="tdstreetViewTblInfo">Moving..</td><td class="tdstreetViewTblInfo3">Car</td></tr> <tr > <td class="tdstreetViewTblInfo1">Geofence</td> <td class="tdstreetViewTblInfo1">Interval</td><td class="tdstreetViewTblInfo1">Heading</td> <td class="tdstreetViewTblInfo1">Status</td><td class="tdstreetViewTblInfo2">Item Type</td></tr>  </table></div>',

                            
                             //   html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                             //  ui:'round'
                             ui: 'plain',
                         },
                         


                 ]

             },
                {
                    xtype: 'container',

                    layout: {
                        type: 'hbox',
                        pack: 'end'

                    },
                    items: [

                                                    {
                                                        xtype: 'button',
                                                        //ori margin: '138 -7 0 0',
                                                        margin: '94 -7 0 0',
                                                        // hidden:true,
                                                        id: 'btnsingleTrackingOverViewMapHidePointInfoTbl',
                                                        height: 115,
                                                        width: 50,
                                                        // hidden: true,
                                                        //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                        html: '<div class="transbox"><div  style="background-color: transparent"><font size="4" color="white">&#8679;</font></div></div>',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            Ext.getCmp('btnsingleTrackingOverViewMapShowPointInfoTbl').setHidden(false);
                                                            Ext.getCmp('btnsingleTrackingOverViewMapPointInfoTbl').setHidden(true);
                                                            Ext.getCmp('btnsingleTrackingOverViewMapHidePointInfoTbl').setHidden(true);
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

                         xtype: "SingleTrackingMap"

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

                         margin: '-140 0 0 0',
                         //  margin: '-462 0 0 0',
                         hidden: true,
                         height: 155,
                         width: 172,
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


function HideAllSingleTrackinMapStreetViewHome_CustomePanel()
{
   
    SingleTrackingMap_MillageCountHide();
    SingleTrackingMap_SpeedMeterHide();
   
   
    trackingid.length = 0;
    stopClocksingleTrackingMaps();
    HideSingleTrackingMapMenu();
    markersingleTrackingMap.setMap(null);
    markersingleTrackingMapTop.setMap(null);
    DeselectMultipleTrackingList();

    if (_singleTrackingMap_BurgeMenuIsInitialized =='yes')
    {
        SingleTrackingMap_BurgeMenuHide();
    }
    if (SingleTrackingSearchPanelisOpen == 'yes')
    {
        HideSearchSingleTrackingMap();
        SingleTrackingSearchPanelisOpen = 'no';
    }
  
    Ext.getCmp('mainView').setActiveItem(1);
}