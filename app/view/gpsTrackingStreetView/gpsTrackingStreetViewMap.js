var panoramaMap;
var panoOptions;
var btnX;
var btnXclick;
var btnY;
var btnYclick;
var overviewClick;
var singlesummaryGPS;
var SingleTrackingMapStreetView;
var panoramastreetMap;
var panoOptions;
var gSingleTrackingMapStreetViewOverviewMapMobile;
var gSingleTrackingMapStreetViewOverviewMapWebActive = 'no';

var gSingleTrackingMapStreetViewOverviewMapMobileActive = 'no';
var gSingleTrackingMapStreetViewOverviewMapWeb;
Ext.define('MyGPS.view.gpsTrackingStreetView.gpsTrackingStreetViewMap', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet'],


    xtype: 'gpsTrackingStreetViewMap',
    // id:'gstreetview',

    config: {
        styleHtmlContent: true,
        layout: 'fit',


        items: [

            {

                xtype: 'container',
                // right:10,
                //margin: '0 0 0 -10',
                //  hidden:true,
                // draggable: true,
                layout: {
                    type: 'hbox',
                    pack: 'right'
                    //type: 'vbox',
                    //pack: 'right',

                },

                items: [

                    {
                        xtype: 'panel',
                        hidden: true,
                        //  margin: '2 0 0 2',
                        //  margin: '-230 0 0 0',
                        zIndex: 10,
                        height: 150,
                        width: 180,
                        //  hidden: true,
                        id: 'gSingleTrackingMapStreetView_OverViewPhone',
                        style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
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
                                                  gSingleTrackingMapStreetViewOverviewMapMobile = map;

                                              }
                                          },
                                      },





                                 ]
                             }
                        ]
                        // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
                        // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
                    },


                    //{

                    //    //xtype: 'label',
                    //    //style: 'font: normal 2px courier',
                    //    id: 'InfoGmapsingleLongitudedstreetview',
                    //    xtype: 'button',
                    //    zIndex: 10,
                    //    //left:5,
                    //    // Id: 'InfoGmapsingleLatitudestreetview',
                    //    //margin: '-10 0 0 0',
                    //    //  margin: '0 10 0 0',
                    //    height: 35,
                    //    width: 75,
                    //    html: '<font color="white"; size="1"><b>Generate Y</b></font>',
                    //    ui:'round',
                    //  //  hidden: true,
                    //   // ui: 'plain',
                    //    handler: function (btn) {
                    //        if (btnYclick == 'no') {
                    //            btnY = btn;
                    //            btnYclick = 'yes';
                    //        }
                    //        alert('event fired!');
                    //    },

                    //},
                    //{
                    //    xtype: 'button',
                    //    //left:5,
                    //    Id: 'InfoGmapsingleLatitudestreetview',
                    //    //margin: '-10 0 0 0',
                    //    //  margin: '0 10 0 0',
                    //    height: 35,
                    //    width: 75,
                    //    html: '<font color="white"; size="1"><b>Generate X</b></font>',
                    //    //ui:'round'
                    //    ui: 'plain',
                    //  //  hidden: true,
                    //    handler: function (btn) {
                    //        if (btnXclick == 'no') {
                    //            btnX = btn;
                    //            btnXclick = 'yes';
                    //        }
                    //        // alert('event fired!');
                    //    },


                    //}

                ]


            },




            {
                xtype: 'container',

                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'end'

                },
                items: [
                    {
                        // xtype: 'button',

                        // id: 'viewstreetviewback',
                        // margin: '38 18 0 0',
                        // height: 35,
                        // width: 35,
                        // zIndex: 10,
                        //// hidden:true,
                        // html: '<div ><img src="resources/icons/ianMiziLogo.png" width="25" height="25" alt="Company Name"></div>',
                        // ui:'round',
                        // //ui: 'plain',
                        // handler: function () {



                        // }



                        xtype: 'button',
                        id: 'btnStreetViewPointInfolblRightWeb',
                        //height: 255,
                        //width: 200,
                        //// hidden: false,
                        height: 255,
                        width: 226,

                        margin: '-54 -4 0 0',
                        zIndex: 10,
                        //margin: '-58 -4 0 0',
                        //html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color:transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 41 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdstreetViewTblInfo">{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                        //html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 41 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                        html: '<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                        //  ui:'round'
                        ui: 'plain',

                    },









                    {
                        xtype: 'panel',
                        // hidden: false,
                        margin: '-54 3 0 0',
                        //  margin: '-230 0 0 0',
                        zIndex: 10,
                        height: 180,
                        width: 212,

                        //  hidden: true,
                        id: 'gSingleTrackingMapStreetView_OverViewWeb',
                        style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#fff;border-color:#fff',
                        //style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
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
                                                  gSingleTrackingMapStreetViewOverviewMapWeb = map;

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
                           xtype: 'button',

                           id: 'btnStreetViewMiliageInfo',
                           margin: '55 -25 0 0',
                           //  bottom:2,
                           //  bottom:-200,
                           height: 250,
                           width: 210,
                           zIndex: 10,
                           html: '<div class="transbox1"><font size="6" color="white"><b>00000045641</b></font></div>',
                           //html: '<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%"><b>00000045641</b><br>Millage</td> </tr></table></div>',
                           // hidden:true,
                           //  html: '<div ><img src="resources/icons/mapview.png" width="25" height="35" alt="Company Name"></div>',
                           //ui:'round'
                           ui: 'plain',
                           handler: function () {




                           }

                       },

//{
//    xtype: 'panel',

//    margin: '2 2 0 0',
//    //  margin: '-230 0 0 0',
//    zIndex: 10,
//    height: 150,
//    width: 180,
//    //  hidden: true,
//    id: 'gSingleTrackingMapStreetView_OverViewPhone',
//    style: 'border-bottom:2px solid;border-top:2px solid;border-right:2px solid;border-left:2px solid;background-color:#57A0DC;border-color:#57A0DC',
//    layout: {
//        type: 'fit',

//    },
//    //<td class="tdgpslabel">Tracked Item</td>

//    //id: 'singleTrackingOverViewMapPanelOverViewMap',
//    items: [


//         {
//             xtype: 'container',

//             layout: {
//                 type: 'fit',

//             },
//             width: '100',
//             items: [

//                  {
//                      xtype: 'map',

//                      mapOptions: {
//                          //  center: new google.maps.LatLng(3.07801333333333, 101.717348333333),
//                          zoom: 12,
//                          panControl: false,
//                          zoomControl: false,
//                          mapTypeControl: false,
//                          scaleControl: false,
//                          streetViewControl: false,
//                          mapTypeId: google.maps.MapTypeId.ROADMAP,

//                      },
//                      listeners: {
//                          maprender: function (comp, map) {
//                              //  var map = this;

//                              var me = this;
//                              me.map = map;
//                              petaOverViewmap = map;

//                          }
//                      },
//                  },





//             ]
//         }
//    ]
//    // html: '<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>',
//    // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
//},

                ]

            },

             {
                 xtype: 'container',

                 bottom: 17,
                 //  left:3,
                 layout: {
                     //type: 'hbox',
                     //pack: 'left',
                     //align: 'end'

                     type: 'hbox',
                     pack: 'left',
                     align: 'end'
                     //                     align:'center',
                     //pack: 'left'

                 },
                 items: [
              {
                  xtype: 'button',
                  //left:5,
                  id: 'btnBackSTreetView',
                  height: 55,
                  width: 55,
                  zIndex: 10,
                  //  hidden: true,
                  html: '<div ><img src="resources/icons/mapview.png" width="45" height="45" alt="Company Name"></div>',
                  ui: 'plain',
                  //  hidden: true,
                  handler: function () {


                      //if (ShowOverViewMapStreetViewMobile == 'no') {

                      //    ShowOverViewMapStreetViewMobile = 'yes';
                      //    gSingleTrackingMapStreetViewOverviewMapMobileActive = 'yes';
                      //    Ext.getCmp('gSingleTrackingMapStreetView_OverViewPhone').setHidden(false);
                      //    return;

                      //} if (ShowOverViewMapStreetViewMobile == 'yes') {

                      ShowOverViewMapStreetViewMobile = 'no';
                      gSingleTrackingMapStreetViewOverviewMapMobileActive = 'no';
                      Ext.getCmp('gSingleTrackingMapStreetView_OverViewPhone').setHidden(true);
                      //    return;

                      //}




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
                  },


              }



                 ]

             },










        ]
    },







    initialize: function () {


        this.callParent();
        map = this.add({
            xtype: 'map',


            //useCurrentLocation: true,
            mapOptions: {

                center: new google.maps.LatLng(5.4445234, 101.91246603),
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                //   streetViewControl: true,
                //overviewMapControl: true,
                //overviewMapControlOptions: {opened: true},
                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.TOP_LEFT
                },
                streetViewControl: true,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },


            },



            listeners: {
                maprender: function (comp, map) {
                    panMap = true;
                    SingleTrackingMapStreetView = map;

                    var me = this;
                    me.map = map;

                    checkisnewX = '1';
                    btnXclick = 'no';
                    btnYclick = 'no';
                    overviewClick = 'no';
                    console.log('initializedStreetViewTracking');
                    var StreetViewPoint = new google.maps.LatLng(latitude, longitude);
                    panoramastreetMap = SingleTrackingMapStreetView.getStreetView();
                    panoramastreetMap.setPosition(StreetViewPoint);
                    panoramastreetMap.setVisible(true);
                    panoramastreetMap.setOptions({
                        //addressControlOptions: {
                        //    position: google.maps.ControlPosition.BOTTOM_CENTER
                        //},
                        linksControl: false,
                        panControl: false,
                        // addressControl: false,
                        enableCloseButton: false,
                        zoomControl: false,
                        fullscreenControl: false,
                        enableCloseButton: false,
                        motionTracking: false,
                        //addressControlOptions: {
                        //    position: google.maps.ControlPosition.BOTTOM_RIGHT,
                        //},
                        //zoomControlOptions: {
                        //    position: google.maps.ControlPosition.BOTTOM_RIGHT
                        //},
                        //panControlOptions: {
                        //    position: google.maps.ControlPosition.BOTTOM_RIGHT
                        //},
                    })

                }


            }




        });








    }

});










var DirectionStreetView;
var MarkerStreetView;
var MarkerStreetViewArr = [];
var StreetViewuniqueId = 1;
var singleTrackingMapchecklongGeofenceStreetview;
function loadmarkerSingleTrackingMapStreetView(SingleTrackID) {
    stopClocksingleTrackingMaps();
    var valSingleTrackIDStreetView = SingleTrackID;
    console.log(valSingleTrackIDStreetView + ':loadmarkerSingleTrackingMapStreetView')
    singleTrackingMapchecklongGeofenceStreetview = '000';
    //Ext.getStore('singlesignalstore').getProxy().setExtraParams({
    //    TrackID: valSingleTrackIDStreetView,
    //    AccountNo: AAccountNo
    //});
    //Ext.StoreMgr.get('singlesignalstore').load();
    Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + '</td></tr></table>');
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
            TrackID: valSingleTrackIDStreetView,
            AccountNo: AAccountNo
        });
        Ext.StoreMgr.get('singlesignalstore').load();
        var myStore = Ext.getStore('singlesignalstore');
        var modelRecord = myStore.getAt(0);
        var latGeofence = modelRecord.get('Latitude');
        var longGeofence = modelRecord.get('Longitude');
        DirectionStreetView = parseFloat(modelRecord.get('Direction'));
        var posisigeofence = new google.maps.LatLng(latGeofence, longGeofence);
        SingleTrackingMapStreetView.setCenter(posisigeofence)
        SingleTrackingMapStreetView.setZoom(10);
        Ext.Viewport.unmask();

        startsingleTrackingMapsStreetView('start', valSingleTrackIDStreetView);
    });
    task.delay(1000);


}



var clickedsingleTrackingMap = false;
var singleTrackingMapsec = 0;
var timer = 0;
function startsingleTrackingMapsStreetView(val, SingleTrackID) {
    var SingleTrackIDStreetView = SingleTrackID;
    if (val == 'start') {
        timer = setInterval(function () {
            singleTrackingMapsec = singleTrackingMapsec + 1;
            console.log("Running street view:" + singleTrackingMapsec);
            console.log("Running street view Track ID:" + SingleTrackIDStreetView);
            //  Ext.getCmp('btnStreetViewPointInfolbl').setHidden(false);
            if (singleTrackingMapsec == 1) {
                Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                    TrackID: SingleTrackIDStreetView,
                    AccountNo: AAccountNo
                });
                Ext.StoreMgr.get('singlesignalstore').load();
                var myStore = Ext.getStore('singlesignalstore');
                var cou = myStore.getCount();
                if (cou >= 1) {

                    try {
                        var modelRecord = myStore.getAt(0);
                        var latGeofence = modelRecord.get('Latitude');
                        var longGeofence = modelRecord.get('Longitude');
                        var geofenceSpeed = modelRecord.get('Speed');
                        var geofenceTrackID = modelRecord.get('TrackID');
                        //IMEI_no = modelRecord.get('IMEI_no');
                        //GPSSimNumber = modelRecord.get('GPSSimNumber');
                        //BatteryReading = modelRecord.get('BatteryReading');
                        var gfenceTrackItem = modelRecord.get('TrackItem');
                        //TrackItemType = modelRecord.get('TrackItemType');
                        //GPSModel = modelRecord.get('GPSModel');
                        //AccountNo = modelRecord.get('AccountNo');
                        var geofenceDateDT = modelRecord.get('DateDT');


                        var gFenceAlertResponder = modelRecord.get('FenceAlertResponder');
                        var gFenceAlertResponder2 = modelRecord.get('FenceAlertResponder2');
                        var gFenceAlertResponder3 = modelRecord.get('FenceAlertResponder3');
                        var gFenceAlertResponder4 = modelRecord.get('FenceAlertResponder4');
                        var gFenceAlertResponderRelations = modelRecord.get('FenceAlertResponderRelations');
                        var gFenceAlertResponderRelations2 = modelRecord.get('FenceAlertResponderRelations2');
                        var gFenceAlertResponderRelations3 = modelRecord.get('FenceAlertResponderRelations3');
                        var gFenceAlertResponderRelations4 = modelRecord.get('FenceAlertResponderRelations4');
                        var gFencelenght = modelRecord.get('Fencelenght');
                        var gCreateddate = modelRecord.get('Createddate');
                        var gFenceName = modelRecord.get('FenceName');
                        var bSex = modelRecord.get('Sex');
                        var bAge = modelRecord.get('Age');
                        var bRisk = modelRecord.get('Risk');
                        DirectionStreetView = parseFloat(modelRecord.get('Direction'));
                        //  bPicture = modelRecord.get('Picture');
                        // console.log('SelectedMarker:' + SelectedMarker);
                        var SelectedMarker = 'Standard';
                        var AttachedLabelOnMarker = '1';
                        var PanMapAfterPointChange = '1';
                        console.log("Running street view:" + singleTrackingMapsec);
                        // console.log('checkingimgMarker:' + checkingimgMarker);
                        // if ((SelectedMarker != checkingimgMarker) || (AttachedLabelOnMarker != checkingAttachedLblOnMarker))
                        //   {
                        longitude = longGeofence;
                        latitude = latGeofence;
                        if (gSingleTrackingMapStreetViewOverviewMapMobileActive == 'yes') {
                            // alert(gSingleTrackingMapStreetViewOverviewMapWebActive + '32');
                            if (OS != "Windows") {
                                setOverViewMapMarkerMobileStreetView(latGeofence, longGeofence);

                            }




                        }
                        if (gSingleTrackingMapStreetViewOverviewMapWebActive == 'yes') {
                            // alert(gSingleTrackingMapStreetViewOverviewMapWebActive+'22');
                            setOverViewMapMarkerWebStreetView(latGeofence, longGeofence);
                            //if (OS == "Windows" || OS == "MacOS") {
                            //    setOverViewMapMarkerWebStreetView(latGeofence, longGeofence);
                            //}
                        }
                        if (singleTrackingMapchecklongGeofenceStreetview == longGeofence)
                        { return }

                        var modifiedLat = latGeofence - 0.00011366666667;
                        var modifiedlong = longGeofence - 0.00011366666667;
                        var boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(latGeofence, longGeofence);
                        var modifiedbound = new google.maps.LatLng(modifiedLat, modifiedlong);


                        if (SelectedMarker == 'Standard') {
                            //   alert('standard');
                            image = new google.maps.MarkerImage(ip + 'geofencemarker.png', null, null, null, new google.maps.Size(62, 62));

                            panoramastreetMap.setPosition(boundreboundlatlongsingleTrackingMap);
                            panoramastreetMap.setPov({
                                heading: DirectionStreetView,
                                // heading: heading,
                                pitch: 0
                            });
                            //google.maps.event.addListenerOnce(panoramastreetMap, 'status_changed', function () {
                            //   var heading = google.maps.geometry.spherical.computeHeading(panoramastreetMap.getLocation().latLng, boundreboundlatlongsingleTrackingMap);                               
                            //    panoramastreetMap.setPov({
                            //        heading: DirectionStreetView,
                            //    // heading: heading,
                            //        pitch: 0
                            //    });


                            //    setTimeout(function () {
                            //        MarkerStreetView = new google.maps.Marker({
                            //            position: boundreboundlatlongsingleTrackingMap,
                            //            map: panoramastreetMap,
                            //            icon: image,
                            //            flat: true,

                            //        });
                            //        if (MarkerStreetView && MarkerStreetView.setMap) MarkerStreetView.setMap(panoramastreetMap);

                            //    }, 500);
                            //});
                        }


                        singleTrackingMapchecklongGeofenceStreetview = longGeofence;
                        MarkerStreetView.id = StreetViewuniqueId;
                        if (StreetViewuniqueId > 1) {
                            DeleteMarkersingleTrackingMapStreetView(MarkerStreetView.id - 1);
                        }

                        StreetViewuniqueId++;


                        MarkerStreetViewArr.push(MarkerStreetView);
                        checkingimgMarker = SelectedMarker;
                        checkingAttachedLblOnMarker = AttachedLabelOnMarker;




                        ///////////////
                        //  myStreetView = new google.maps.StreetViewPanorama(document.getElementById("map_canvas"));


                        ///////

















                        google.maps.event.addListener(markersingleTrackingMap, 'mousedown',
             function (event) {


                 if (!this.overlay) {
                     this.overlay = Ext.Viewport.add(_geofence_detailfencepanel);



                 }

                 this.overlay.show();
                 setsingleTrackingMapDetails();
                 Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Fetching..</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


             });
                    }
                    catch (ert) {
                        console.log(ert);
                    }

                }

                if (PanMapAfterPointChange == '1') {
                    console.log('PanMapAfterPointChange');
                    SingleTrackingMapStreetView.setCenter(boundreboundlatlongsingleTrackingMap)
                    SingleTrackingMapStreetView.setZoom(16);
                }

            }
            if (singleTrackingMapsec == 2) {
                singleTrackingMapsec = 0;
            }
        }, 1000);
    } else {

        clearInterval(timer);
    }
}





function DeleteMarkersingleTrackingMapStreetView(id) {
    //Find and remove the marker from the Array

    //console.log("DELETEEEE:"+id);
    for (var i = 0; i < MarkerStreetViewArr.length; i++) {
        if (MarkerStreetViewArr[i].id == id) {
            //Remove the marker from Map                  
            MarkerStreetViewArr[i].setMap(null);

            //Remove the marker from array.
            MarkerStreetViewArr.splice(i, 1);
            return;
        }
    }
}

function stopClocksingleTrackingMapsStreetView() {
    startsingleTrackingMapsStreetView('stop', '01');
    // console.log("STOPED");
    // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    //  window.clearInterval(clockgeofence);
    singleTrackingMapchecklongGeofence = "000";
    singleTrackingMapsec = 0;

    clickedsingleTrackingMap = false;

}