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
Ext.define('MyGPS.view.SingleTrackingStreetView.SingleTrackingStreetViewMap', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet'],


    xtype: 'SingleTrackingStreetViewMap',
    // id:'gstreetview',

    config: {
        styleHtmlContent: true,
        layout: 'fit',


        items: [

            {

                xtype: 'toolbar',
                title: '<font size="4">Street View Live Tracking</font>',
                docked: 'top',
                id: 'toolbarSingleTrackingMapStreetViewTop',
                //  hidden:true,
                items:
                       [


                           {
                               xtype: 'button',

                               id: 'btnSingleTrackingMapStreetViewTopHome',
                               //  text: 'Show',
                               iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   hideMenuStreetView();
                                 
                                 
                                 
                               }




                           },
                           {
                               xtype: 'spacer'
                           },
                           {
                               xtype: 'button',
                               //right: -7,
                               //top: 1,
                               id: 'btnSingleTrackingMapStreetViewTopAccInfo',
                               html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                               //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {



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
                                 id: 'btnsingleTrackingStreetViewMapgeocodeAddress',
                                 height: 30,
                                 width: 400,
                                 zIndex:10,
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
                                                         margin: '-20 -7 0 0',
                                                         hidden:true,
                                                         zIndex: 10,
                                                         id: 'btnsingleTrackingStreetViewMapShowPointInfoTbl',
                                                         height: 115,
                                                         width: 50,
                                                         // hidden: true,
                                                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                         html: '<div class="transbox"><div  style="background-color: transparent"><font size="4" color="white">&#8681;</font></div></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             Ext.getCmp('btnsingleTrackingStreetViewMapShowPointInfoTbl').setHidden(true);
                                                             Ext.getCmp('btnsingleTrackingStreetViewMapPointInfoTbl').setHidden(false);
                                                             Ext.getCmp('btnsingleTrackingStreetViewMapHidePointInfoTbl').setHidden(false);
                                                         }


                                                     },
                     ]
                 },






             {
                 xtype: 'container',
                 width: '100%',
                 layout: {
                     //type: 'hbox',
                     //pack: 'end'
                     type: 'hbox',
                     pack: 'start'

                 },
                 items: [


                         {
                             xtype: 'button',

                             id: 'btnsingleTrackingStreetViewMapPointInfoTbl',
                           
                             height: 240,
                           
                             //ori  width:'120%',
                             width: '110%',
                             margin: '-35 0 0 -10',
                             zIndex: 10,
                            
                           //ori  margin: '-35 0 0 -18',
                             // html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',

                           //ori  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdstreetViewTblInfo">{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr > <td class="tdstreetViewTblInfo">ON</td> <td class="tdstreetViewTblInfo">Moving..</td></tr> <tr > <td class="tdstreetViewTblInfo1">Geofence</td> <td class="tdstreetViewTblInfo1">Status</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',

                           //ori 2  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> <td colspan="2"  class="tdstreetViewTblInfo1">Signal Time</td> </tr>   <tr > <td class="tdstreetViewTblInfo">OFF</td> <td class="tdstreetViewTblInfo">10(s)</td><td class="tdstreetViewTblInfo">ON</td> <td class="tdstreetViewTblInfo">Moving...</td></tr> <tr > <td class="tdstreetViewTblInfo1">Geofence</td> <td class="tdstreetViewTblInfo1">Interval</td><td class="tdstreetViewTblInfo1">Heading</td> <td class="tdstreetViewTblInfo1">Status</td></tr>  </table></div>',
                             html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="3" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> <td colspan="3" class="tdstreetViewTblInfo">12/24/2016 11:06:56AM</td> </tr><tr> <td colspan="3" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> <td colspan="3"  class="tdstreetViewTblInfo1">Signal Time</td> </tr>   <tr > <td class="tdstreetViewTblInfo">OFF-i</td> <td class="tdstreetViewTblInfo">10(s)</td><td class="tdstreetViewTblInfo">ON</td> <td class="tdstreetViewTblInfo">Moving..</td><td class="tdstreetViewTblInfo3">Car</td></tr> <tr > <td class="tdstreetViewTblInfo1">Geofence</td> <td class="tdstreetViewTblInfo1">Interval</td><td class="tdstreetViewTblInfo1">Heading</td> <td class="tdstreetViewTblInfo1">Status</td><td class="tdstreetViewTblInfo2">Item Type</td></tr>  </table></div>',
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
                        //original punya
                                                    //{
                                                    //    xtype: 'button',
                                                    //    margin: '159 -7 0 0',
                                                    //   zIndex:10,
                                                    //    id: 'btnsingleTrackingStreetViewMapHidePointInfoTbl',
                                                    //    height: 115,
                                                    //    width: 50,
                                                    //     hidden: true,
                                                    //       html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                    //    html: '<div class="transbox"><div  style="background-color: transparent;"><font size="4" color="white">&#8679;</font></div></div>',
                                                    //    ui: 'plain',
                                                    //    handler: function () {
                                                    //        Ext.getCmp('btnsingleTrackingStreetViewMapShowPointInfoTbl').setHidden(false);
                                                    //        Ext.getCmp('btnsingleTrackingStreetViewMapPointInfoTbl').setHidden(true);
                                                    //        Ext.getCmp('btnsingleTrackingStreetViewMapHidePointInfoTbl').setHidden(true);
                                                    //    }


                                                    //},



                                                     {
                                                         xtype: 'button',
                                                         margin: '94 -7 0 0',
                                                         zIndex: 10,
                                                         id: 'btnsingleTrackingStreetViewMapHidePointInfoTbl',
                                                         height: 115,
                                                         width: 50,
                                                       //  width:'100%',
                                                         // hidden: true,
                                                         //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                                                         html: '<div class="transbox"><div  style="background-color: transparent;"><font size="4" color="white">&#8679;</font></div></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             Ext.getCmp('btnsingleTrackingStreetViewMapShowPointInfoTbl').setHidden(false);
                                                             Ext.getCmp('btnsingleTrackingStreetViewMapPointInfoTbl').setHidden(true);
                                                             Ext.getCmp('btnsingleTrackingStreetViewMapHidePointInfoTbl').setHidden(true);
                                                         }


                                                     },
                    ]
                },


            //{
            //    xtype: 'container',
            //    hidden:true,
            //    layout: {
            //        type: 'vbox',
            //        pack: 'left',
            //        align: 'end'

            //    },
            //    items: [
            //        {
                       
            //            xtype: 'button',
            //            id: 'btnSingleTrackingStreetViewMapPointInfo',
            //            height: 255,
            //            width: 226,

            //            margin: '-54 -4 0 0',
            //            zIndex: 10,
            //            html: '<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
            //            ui: 'plain',

            //        },

            //    ]

            //},

             {
                 xtype: 'container',
                 bottom: 17,
                 //  left:3,
                 layout: {
                     type: 'hbox',
                     pack: 'left',
                     align: 'end'
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
            mapOptions: {

                center: new google.maps.LatLng(5.4445234, 101.91246603),
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
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
                  
                    overviewClick = 'no';
                    //console.log('initializedStreetViewTracking');
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
                         addressControl: false,
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











var MarkerStreetView;
var MarkerStreetViewArr = [];
var StreetViewuniqueId = 1;
var singleTrackingMapchecklongStreetviewMap;
function loadSingleTrackingStreetViewMap() {
    //alert(SingleMapTrackingDeviceID);
    //console.log(SingleMapTrackingDeviceID + ':loadmarkerSingleTrackingMapStreetView')
  //  alert(singleTrackingMap_DeviceID);
    singleTrackingMapchecklongStreetviewMap = '000';
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Heading Point..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
            TrackID: singleTrackingMap_DeviceID,
            AccountNo: GetCurrentUserAccountNo()
        });
        Ext.StoreMgr.get('singlesignalTrackingstore').load();
        var myStore = Ext.getStore('singlesignalTrackingstore');
        var modelRecord = myStore.getAt(0);
        var LatitudeStreetView = modelRecord.get('Latitude');
        var LongitudeStreetView = modelRecord.get('Longitude');       
        var PositionStreetView = new google.maps.LatLng(LatitudeStreetView, LongitudeStreetView);
        SingleTrackingMapStreetView.setCenter(PositionStreetView)
        SingleTrackingMapStreetView.setZoom(10);
        Ext.Viewport.unmask();
        startsingleTrackingMapsStreetView('start', '0000');
    });
    task.delay(1000);


}



var singleTrackingStreetViewMapsec = 0;
var timer = 0;
function startsingleTrackingMapsStreetView(val, SingleDeviceID) {
   
    if (val == 'start') {
        timer = setInterval(function () {
            singleTrackingStreetViewMapsec = singleTrackingStreetViewMapsec + 1;
           // console.log("Running street view:" + singleTrackingStreetViewMapsec);
            if (singleTrackingStreetViewMapsec == 1) {
                Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                    TrackID: singleTrackingMap_DeviceID,
                    AccountNo: GetCurrentUserAccountNo()
                });
                Ext.StoreMgr.get('singlesignalTrackingstore').load();
                var myStore = Ext.getStore('singlesignalTrackingstore');
                var cou = myStore.getCount();
                if (cou >= 1) {

                    try {
                        var modelRecord = myStore.getAt(0);
                        var Latitude = modelRecord.get('Latitude');
                        var Longitude = modelRecord.get('Longitude');
                        var IMEI_no = modelRecord.get('IMEI_no');
                        var Speed = modelRecord.get('Speed');
                        var BatteryReading = modelRecord.get('BatteryReading');
                        var DateDT = modelRecord.get('DateDT');
                        var DirectionStreetView = parseFloat(modelRecord.get('Direction'));
                        var TrackID = modelRecord.get('TrackID');
                        var TrackItem = modelRecord.get('TrackItem');
                        var TrackItemType = modelRecord.get('TrackItemType');
                        var GPSModel = modelRecord.get('GPSModel');
                        var AccountNo = modelRecord.get('AccountNo');
                        var GPSSimNumber = modelRecord.get('GPSSimNumber');
                        var Interval = modelRecord.get('Interval');
                        var TrackingMode = modelRecord.get('TrackingMode');
                        var Status = modelRecord.get('Status');
                        var CreatedDate = modelRecord.get('CreatedDate');
                        var ExpiredDate = modelRecord.get('ExpiredDate');
                        var Spare1 = modelRecord.get('Spare1');
                        var Spare2 = modelRecord.get('Spare2');
                        var Spare3 = modelRecord.get('Spare3');
                        var Spare4 = modelRecord.get('Spare4');
                        var Spare5 = modelRecord.get('Spare5');
                        var Spare6 = modelRecord.get('Spare6');
                        var Spare7 = modelRecord.get('Spare7');
                        var Spare8 = modelRecord.get('Spare8');
                        var Spare9 = modelRecord.get('Spare9');
                        var Spare10 = modelRecord.get('Spare10');
                        var Spare11 = modelRecord.get('Spare11');
                        var Spare12 = modelRecord.get('Spare12');

                      //  console.log("Running street view:" + singleTrackingMapsec);
                                             
                        if (IsStreetViewMiniMapActivated == 'yes') {
                           // console.log('IsStreetViewMiniMapActivated:' + IsStreetViewMiniMapActivated);
                            SetStreetViewMiniMap(Latitude, Longitude, DirectionStreetView);
                           
                        }
                        if (singleTrackingMapchecklongStreetviewMap == Longitude)
                        { return }

                        //temp disabled
                      //  ReversegeocodeAddress(Longitude, Latitude);
                        var modifiedLat = Latitude - 0.00011366666667;
                        var modifiedlong = Longitude - 0.00011366666667;
                        var boundreboundlatlongsingleTrackingStreetViewMap = new google.maps.LatLng(Latitude, Longitude);
                        var modifiedbound = new google.maps.LatLng(modifiedLat, modifiedlong);
                      //  console.log('DirectionStreetView:' + DirectionStreetView)
                        panoramastreetMap.setPosition(boundreboundlatlongsingleTrackingStreetViewMap);
                        panoramastreetMap.setPov({
                            heading: DirectionStreetView,
                            // heading: heading,
                            pitch: 0
                        });
                      


                        singleTrackingMapchecklongStreetviewMap = Longitude;
                        //MarkerStreetView.id = StreetViewuniqueId;
                        //if (StreetViewuniqueId > 1) {
                        //    DeleteMarkersingleTrackingMapStreetView(MarkerStreetView.id - 1);
                        //}

                        //StreetViewuniqueId++;


                        //MarkerStreetViewArr.push(MarkerStreetView);
                       

                    }
                    catch (ert) {
                        console.log(ert);
                    }

                }

           

            }
            if (singleTrackingStreetViewMapsec == 2) {
                singleTrackingStreetViewMapsec = 0;
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
    startsingleTrackingMapsStreetView('stop', singleTrackingMap_DeviceID);
    singleTrackingMapchecklongStreetviewMap = "000";
    singleTrackingStreetViewMapsec = 0;

}

function hideMenuStreetView()
{
    if (_singleTrackingMapStreetView_BurgeMenuIsInitialized == 'yes')
    { SingleTrackingMapStreetView_BurgeMenuHide(); }
    if (IsStreetViewMiniMapActivated == 'yes')
    { StreetViewMiniMapHide(); }

    _singleTrackingMapStreetView_Menu.hide();
    _singleTrackingMap_MillageCount.hide();
    _singleTrackingMap_SpeedMeter.hide();
    //_singleTrackingMapStreetView_MiniMapPanel.hide();
    //IsStreetViewMiniMapActivated = 'no';
   
    trackingid.length = 0;
    SingleTrackingSearchPanelisOpen = 'no';
    HideSearchSingleTrackingMap();
    stopClocksingleTrackingMapsStreetView();
    Ext.getCmp('mainView').setActiveItem(1);
}