var image;
var imagegeoLocationIcon;

var multiTrackingMap;

var count = 0;

var ip = document.location.protocol + '//' + document.location.host + '/resources/icons/';

var boundreboundlatlongmultiTrackingMap;
var boundstatus;




var geocoderMultiLiveTracking;
var maxSpeed;
var MarkerGeolocationID;


var countaddmarker = 0;
var markersMulti = [];
var markersIDs = [];
var markersCHECK = [];




var markersMultipleExtentBound = [];//some array
var boundsMultiple = new google.maps.LatLngBounds();
var checkinMultipoint;
var mulptipoint;
var markersMultipleID = [];//some array
var markersMultipleID_Deleted = [];//some array






var uniqueIdgeoLocationMarker = 1;

var geoLocationArr = [];

Ext.define('MyGPS.view.MultipleTracking.multiTrackingMap', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


    xtype: 'MultiTrackingMap',


    config: {

        layout: 'fit',
        // layout: 'card',
        styleHtmlContent: true,
        items: [


               {

                   xtype: 'toolbar',

                   docked: 'bottom',
                   id: 'toolbarMultiTrackingBottom',
                   //  hidden:true,
                   items:
                          [
     {
         //docked: 'right',
         // width: 50,
         ui: 'plain',
         xtype: 'button',
         id: 'btnMultiCountLiveTracking',

         handler: function () {

         }
     },

                       {
                           xtype: 'spacer',
                       },

                           {
                               xtype: 'button',

                               id: 'btnMultiTrackingbacktoList',
                               text: 'Back',
                             //  iconCls: 'home',
                               // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                               ui: 'action',
                               handler: function () {
                                   DeselectMultipleTrackingList();
                                   MultipleGeocodeAdd.length = 0;
                             
                                   stopClockmultiTrackingMaps();
                                   Ext.getCmp('mainView').setActiveItem(7);
                               }



                           },

                          ]


               },
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

                                  id: 'btnMultiTrackingOverViewHome',
                                  //  text: 'Show',
                                  iconCls: 'home',
                                  // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                                  ui: 'plain',
                                  handler: function () {
                                      MultipleGeocodeAdd.length = 0;
                                    
                                      stopClockmultiTrackingMaps();
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
                                  id: 'btnMultiTrackingTopAccInfo',
                                  html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                //  html: '<div ><img src="resources/icons/hideGeofence.png" width="30" height="20" alt="Company Name"></div>',
                                  ui: 'plain',
                                  handler: function () {

                                     

                                  }
                              },

                            
                          ]

               },

           {
               //xtype: 'titlebar',
               xtype: 'container',
               margin: '-22 -5 -5 -5',
                  hidden: true,
               // draggable: true,
               layout: {

                   type: 'vbox',
                   pack: 'left',
                   //  align: 'end'
               },

               items: [

                     {
                         xtype: 'button',
                         ui: 'plain',
                         // style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                         height: 24,
                         width: 45,
                         //iconCls: 'download',
                         html: '<div ><img src="resources/icons/download.png" width="25" height="18" alt="Company Name"></div>',
                         //ui:'round'

                         id: 'btnpanelMultipleTrackingMapShowHideInfo',

                         handler: function (btnpanelsingleTrackingMapShowHideInfo) {
                             // btn.setHidden(true);

                             if (btnpanelsingleTrackingMapShowHideInfo.hasDisabled) {

                                 btnpanelsingleTrackingMapShowHideInfo.setHtml('<div ><img src="resources/icons/download.png" width="25" height="18"></div>')
                                 btnpanelsingleTrackingMapShowHideInfo.hasDisabled = false;
                                 //_GeofenceInfopanel.hide();

                                 _GeofenceInfopanel.hide();


                             } else {


                                 if (!this.overlay) {
                                     this.overlay = Ext.Viewport.add(_GeofenceInfopanel
                                 );


                                 }
                                 btnpanelsingleTrackingMapShowHideInfo.setHtml('<div ><img src="resources/icons/download_screen.png" width="25" height="18"></div>')
                                 this.overlay.show();

                                 btnpanelsingleTrackingMapShowHideInfo.hasDisabled = true;




                             }

                         }

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
                scaleControl: false,
                //overviewMapControl: true,
                //overviewMapControlOptions: {opened: true},

                mapTypeControl: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                streetViewControlOptions: {
                    position: google.maps.ControlPosition.TOP_LEFT
                },
                zoomControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                },


            },






            listeners: {
                maprender: function (comp, map) {
                    multiTrackingMap = map;
                    var me = this;
                    me.map = map;
                   
                  
                 
                    geocoderMultiLiveTracking = new google.maps.Geocoder();

                }

            }


        });




    }

});














var multiDirection = parseFloat('16.86');;

var multiTrackingMapsec = 0;
var multitimer = 0;

var MultipleGeocodeAdd = [];//some array


function CheckMarkersMultipleID(arr, findValue) {
    var i = arr.length;

    while (i--) {
        if (arr[i] === findValue) return true;
    }
    return false;
}


function startmultiTrackingMaps(val, countmultiple, ImeiNo) {

    markersMultipleID.length = 0;
    checkinMultipoint = '000';
    
    
    if (val == 'start') {
        Ext.getCmp('btnMultiCountLiveTracking').setText(countmultiple + ' Signal(s) Running');
        multitimer = setInterval(function () {


            multiTrackingMapsec = multiTrackingMapsec + 1;

            if (multiTrackingMapsec == 1) {
                markersMultipleExtentBound.length = 0;
                //  markersIDs.length = 0;
                mulptipoint = '';
                Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
                    //TrackID: valSingleTrackID,
                    ImeiNo: ImeiNo,
                    count: countmultiple,
                    AccountNo: AAccountNo

                    //ImeiNo: '359710048057492,359710041627184,1452824661',
                    //count: '3',
                    //AccountNo: AAccountNo

                });
                Ext.StoreMgr.get('multipletrackingsignalpoint').load();
                var myStore = Ext.getStore('multipletrackingsignalpoint');
                var cou = myStore.getCount();


                for (var ii = 0; ii < cou; ii++) {
                    var modelRecord = myStore.getAt(ii);

                    var Latitude = modelRecord.get('Latitude');
                    var Longitude = modelRecord.get('Longitude');
                    var IMEI_no = modelRecord.get('IMEI_no');
                    var Speed = modelRecord.get('Speed');
                    var BatteryReading = modelRecord.get('BatteryReading');
                    var DateDT = modelRecord.get('DateDT');
                    var Direction = parseFloat(modelRecord.get('Direction'));
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
                    var MarkerID = Latitude + TrackID;



                    if (CheckMarkersMultipleID(markersMultipleID, MarkerID)) {




                    } else {
                        var i = markersMultipleID.length;
                        while (i--) {
                            if (markersMultipleID[i].includes(TrackID)) {
                                var deletedMarkerID = markersMultipleID[i];
                                markersMultipleID_Deleted.push(deletedMarkerID);
                                // console.log('markersMultipleID_Deleted:' + deletedMarkerID);
                            }
                            ;
                        }

                     

                        var boundreboundlatlongmultiTrackingMap = new google.maps.LatLng(Latitude, Longitude);
                        var image = {
                            url: ip + '7.gif', // url
                            scaledSize: new google.maps.Size(80, 80), // scaled size
                            //  origin: new google.maps.Point(0, 0), // origin
                            anchor: new google.maps.Point(40, 40) // anchor
                        };


                        var markermultiTrackingMapTop = new google.maps.Marker({
                            position: boundreboundlatlongmultiTrackingMap,
                            icon: image,
                            flat: true,
                            draggable: false,
                            optimized: false,
                            //  labelClass: "labelsMark",// the CSS class for the label
                            id: Latitude + TrackID,
                            map: multiTrackingMap,
                            title: Latitude + TrackID
                        });
                        var markermultiTrackingMap = new MarkerWithLabel({
                            position: boundreboundlatlongmultiTrackingMap,
                            //  icon: image,
                            flat: true,
                            icon: {
                                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                scale: 10,
                                rotation: Direction,
                                strokeColor: '#FFFFFF',
                                fillColor: '#57A0DC',
                                fillOpacity: 1,
                                strokeWeight: 4
                            },

                            draggable: false,
                            labelContent: TrackID,
                            // labelContent:'<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>',
                            labelAnchor: new google.maps.Point(70, 13),
                            labelClass: "labelsMark",// the CSS class for the label
                            map: multiTrackingMap,
                            id: Latitude + TrackID,
                            title: Latitude + TrackID
                        });







                        markersMultipleExtentBound.push(markermultiTrackingMapTop);
                        markersMulti.push(markermultiTrackingMapTop);
                        markersMulti.push(markermultiTrackingMap);
                        markersMultipleID.push(MarkerID);
                        mulptipoint += Latitude;

                        DeleteMarkermultiTrackingMap('2.98867666666667WTP2681');



               





                        //   var contentString = '<div id="content" class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>';

                        // var contentString = '<div style="width: 94.2%; padding-left:10px; height: 25px;float: left;color: #FFF;background: #ed1e79;line-height: 25px;border-radius:5px 5px 0px 0px;"><strong><b>"You feild"</b></strong></div><div style="clear:both;height:0px;"><div style="float:left;width:90%;padding:5px 10px;border:1px solid #ccc;border-top:none;border-radius:0px 0px 5px 5px;"><div style="float:left;color:#666;font-size:18px;font-weight:bold;margin:5px 0px;"> <div style="padding: 0px;">]]..product_list[i].category..[[</div></div><div style="clear:both;height:0px;"></div><div style="float:left;line-height:18px;color:#666;font-size:13px;">"You feild"</div><div style="clear:both;height:0px;"></div><form action=\"navigat:"You feild"\"><input type=\"submit\"/ style=\"background:#7e7e7e;float:right;color:#FFF;padding:5px 7px;font-size:10px;font-weight:bold;border:none;margin:5px 0px; border-radius:0px !important;\" value=\"More Info\" ></form></div></div>';

                        //////////////////////////    var contentString='<div style="position: absolute; left: 0px; top: 0px; width: 317px; height: 366px; overflow: hidden; -webkit-user-select: none; <font color="#FF0000">background-color:black;</font> border: 1px solid rgb(171, 171, 171); "></div>';
                        //////////////////////////    var infowindow = new google.maps.InfoWindow({
                        //////////////////////////        content: contentString
                        //////////////////////////    });

                        ///////////////////////////****** Map Marker Options *******/


                        ///////////////////////////****** Info Window With Click *******/
                        //////////////////////////    google.maps.event.addListener(markersingleTrackingMapTop, 'click', function () {
                        //////////////////////////        infowindow.open(singleTrackingMap, markersingleTrackingMapTop);
                        //////////////////////////    });

                        ///////////////////////////****** Info Window Without Click *******/
                        //////////////////////////    infowindow.open(singleTrackingMap, markersingleTrackingMapTop);








                        //                var content = '<div  class="infobox">' +
                        //'This is my customized InfoWindow!xxxxxxxxxxxxxxxxxxxxxxxx' +

                        //'</div>';










                        var infowindow = new google.maps.InfoWindow();
                        if (geocoderMultiLiveTrackingisFirstLoad == 'yes') {
                            var content = "<b>Track ID: " + TrackID + '<br>' + "Track Item: " + TrackItem + "<BR>Millage:" + Spare1 + "<BR> Current Speed:" + Speed + "<br>Max Speed:" + Speed + "<br>Date:" + DateDT + "<BR>Geocode Add:" + MultipleGeocodeAdd[ii] + "</b>";
                            console.log('index of geocode array:' + ii);
                            infowindow.setContent(content);
                            infowindow.open(multiTrackingMap, markermultiTrackingMap);


                          
                            google.maps.event.addListener(markermultiTrackingMap, 'mousedown', (function (markermultiTrackingMap, content, infowindow) {
                                return function () {

                                    infowindow.setContent(content);
                                    infowindow.open(multiTrackingMap, markermultiTrackingMap);
                                };

                            })(markermultiTrackingMap, content, infowindow));
                        }
                      


                        if (geocoderMultiLiveTrackingisFirstLoad == 'no') {
                            console.log('Length:' + MultipleGeocodeAdd.length);
                          
                            MultipleGeocodeAdd.length = 0;
                            MultiSignalReversegeocodeAddressIsLoadNo(Longitude, Latitude, TrackID, TrackItem, Spare1, Speed, DateDT);
                            console.log('geocoderMultiLiveTrackingisFirstLoad is  NO');

                            console.log('Length2222:' + MultipleGeocodeAdd.length);


                            setTimeout(function () {
                                console.log('index of geocode array:' + ii);
                                var content = "<b>Track ID: " + MultipleGeocodeAdd[1] + '<br>' + "Track Item: " + MultipleGeocodeAdd[2] + "<BR>Millage:" + MultipleGeocodeAdd[3] + "<BR> Current Speed:" + MultipleGeocodeAdd[4] + "<br>Max Speed:" + MultipleGeocodeAdd[4] + "<br>Date:" + MultipleGeocodeAdd[5] + "<BR>Geocode Add:" + MultipleGeocodeAdd[0] + "</b>";
                                infowindow.setContent(content);
                                infowindow.open(multiTrackingMap, markermultiTrackingMap);

                                google.maps.event.addListener(markermultiTrackingMap, 'mousedown', (function (markermultiTrackingMap, content, infowindow) {
                                    return function () {

                                        infowindow.setContent(content);
                                        infowindow.open(multiTrackingMap, markermultiTrackingMap);
                                    };

                                })(markermultiTrackingMap, content, infowindow));

                          }, 500);
                       
                       
                            //google.maps.event.addListener(markermultiTrackingMap, 'click', (function (markermultiTrackingMap, content, infowindow) {
                            //    return function () {

                            //        infowindow.setContent(content);
                            //        infowindow.open(multiTrackingMap, markermultiTrackingMap);
                            //    };

                            //})(markermultiTrackingMap, content, infowindow));
                        }

                        //else {


                        //    //var content = "<b>Track ID: " + TrackID + '<br>' + "Track Item: " + TrackItem + "<BR>Millage:" + Spare1 + "<BR> Current Speed:" + Speed + "<br>Max Speed:" + Speed + "<br>Date:" + DateDT + "<BR>Geocode Add:" + MultipleGeocodeAdd[ii] + "</b>";

                        //    //infowindow.setContent(content);
                        //    //infowindow.open(multiTrackingMap, markermultiTrackingMap);


                        //    //google.maps.event.addListener(markermultiTrackingMap, 'mousedown',
                        //    //function (event) {
                        //    //    infowindow.setContent(content);
                        //    //    infowindow.open(multiTrackingMap, markermultiTrackingMap);

                        //    //});



                        //    //google.maps.event.addListener(markermultiTrackingMap, 'click', (function (markermultiTrackingMap, content, infowindow) {
                        //    //    return function () {

                        //    //        infowindow.setContent(content);
                        //    //        infowindow.open(multiTrackingMap, markermultiTrackingMap);
                        //    //    };

                        //    //})(markermultiTrackingMap, content, infowindow));
                        //}



                    }




                }



                // *
                // START INFOWINDOW CUSTOMIZE.
                // The google.maps.event.addListener() event expects
                // the creation of the infowindow HTML structure 'domready'
                // and before the opening of the infowindow, defined styles are applied.
                // *

                //  DeleteMarkersingleTrackingMap('2.98867666666667WTP2681');

                if (checkinMultipoint != mulptipoint) {

                    for (var i = 0; i < markersMultipleExtentBound.length; i++) {
                        boundsMultiple.extend(markersMultipleExtentBound[i].getPosition());
                    }
                    geocoderMultiLiveTrackingisFirstLoad = 'no';
                    console.log('NOOOOOOOOOOOOOOOOOOOOOO');
                    multiTrackingMap.fitBounds(boundsMultiple);
                    // MultipleGeocodeAdd.length = 0;
                    checkinMultipoint = mulptipoint;
                }










                if (cou >= 10) {



                }

                //if (PanMapAfterPointChange == '1') {
                //    singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                //    singleTrackingMap.setZoom(16);
                //}

            }
            if (multiTrackingMapsec == 2) {
                multiTrackingMapsec = 0;

                markersMultipleExtentBound.length = 0;

               // geocoderMultiLiveTrackingisFirstLoad = 'no';



                //multiTrackingMapsec = 0;
                //multisingleTrackingMapsec = 0;

















            }
        }, 1000);
    } else {

        clearInterval(multitimer);
    }
}






//var markers = {};
























function DeleteMarkermultiTrackingMap(id) {
    //Find and remove the marker from the Array
   // MultipleGeocodeAdd.length = 0;
    // console.log("DELETEEEE IDDDD:"+id);
    for (var i = 0; i < markersMulti.length; i++) {

        //   console.log("ALL MARKER with id:" + markers[i].id);

        if (markersMulti[i].id == markersMultipleID_Deleted[0]) {
            console.log("CAUGHT:" + id);
            markersMulti[i].setMap(null);

            //Remove the marker from array.
            //  markers.splice(i, 1);
            // return;
        }

    }



    var index = markersMultipleID.indexOf(markersMultipleID_Deleted[0]);
    if (index >= 0) {

        markersMultipleID.splice(index, 1);
        console.log('DELETEDDDDDDDDD MULTI MARKERWWWWWWWWWWWWWWWWWWWWW');
        markersMultipleID_Deleted.length = 0;
    }
}



function DeleteAllMultiMarker() {
    //Find and remove the marker from the Array

    //console.log("DELETEEEE:"+id);
    for (var i = 0; i < markersMulti.length; i++) {
        
            //Remove the marker from Map                  
        markersMulti[i].setMap(null);
        console.log('Marker DELTE:'+markersMulti[i].id);
            //Remove the marker from array.
        //markersMulti.splice(i, 1);
       
    }
}

function stopClockmultiTrackingMaps() {
    startmultiTrackingMaps('stop', '01');
    geocoderMultiLiveTrackingisFirstLoad = 'yes';
    DeleteAllMultiMarker();
    markersMulti.length = 0;
 
    Ext.getCmp('btnMultiCountLiveTracking').setText( '0 Signal(s) Running');
    // console.log("STOPED");
    // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    //  window.clearInterval(clockgeofence);
   
    multiTrackingMapsec = 0;

}











function getCurrentLocationmultiTrackingMap() {
    var me = this;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            me.latitude = position.coords.latitude;
            me.longitude = position.coords.longitude;

            me.position = new google.maps.LatLng(me.latitude, me.longitude);
            geoX = me.longitude;
            geoY = me.latitude;

        });
    } else {
        Ext.Msg.alert("Sorry, browser does not support geolocation!");

    }
}
























function DeleteMarkerGeolocation(id) {
    console.log('DeleteMarkerGeolocation:' + id);
    for (var i = 0; i < geoLocationArr.length; i++) {
        if (geoLocationArr[i].id == id) {
            //Remove the marker from Map                  
            geoLocationArr[i].setMap(null);

            //Remove the marker from array.
            geoLocationArr.splice(i, 1);
            return;
        }
    }
}


function geolocate(isFirstLoad) {
    var me = this;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            me.latitude = position.coords.latitude;
            me.longitude = position.coords.longitude;

            me.position = new google.maps.LatLng(me.latitude, me.longitude);
            geolocationX = me.longitude;
            geolocationY = me.latitude;
            var geoLocation = new google.maps.LatLng(geolocationY, geolocationX);
            if (isFirstLoad == 'yes') {
                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting GeoLocation..Please Wait.' });
                var task = Ext.create('Ext.util.DelayedTask', function () {
                    singleTrackingMap.setCenter(geoLocation)
                    singleTrackingMap.setZoom(16);
                    Ext.Viewport.unmask();
                });
                task.delay(1500);

            }



        });
    } else {
        Ext.Msg.alert("Sorry, browser does not support geolocation!");

    }
}

