var image;
var imagegeoLocationIcon;
var buttonAlertstate;
var singleTrackingMap;
var boundaryColor = '#ED1B24'; // initialize color of polyline
var polyCoordinates = []; // initialize an array where we store latitude and longitude pair
var count = 0;
var markersingleTrackingMap;
var markersingleTrackingMapTop;
var ActiveOverViewMap = 'no';
var longitude;
var latitude;
var ActivatedStreetView = 'no';
var StreetViewSingleTracking;

var ip = document.location.protocol + '//' + document.location.host + '/resources/icons/';
var geofencepolyLengthInMeters;
var singleTrackingMapchecklong;
var geofencetravellength;
var geofencetravellengthkm;
var geofenceLength;
var alertisplay;
var dialogboxdeletegeofence;
var dialogboxdeletemore;
var panelgeofencestatus;
var boundreboundlatlongsingleTrackingMap;
var boundstatus;
var geoFenceStatus;
var geoFenceDate;

var gFenceAlertResponder;
var gFenceAlertResponder2;
var gFenceAlertResponder3;
var gFenceAlertResponder4;
var gFenceAlertResponderRelations;
var gFenceAlertResponderRelations2;
var gFenceAlertResponderRelations3;
var gFenceAlertResponderRelations4;
var gFencelenght;
var gCreateddate;
var gFenceName;
var bSex;
var bAge;
var bRisk;
var bPicture;
var geocoderLiveTracking;
var maxSpeed;
var MarkerGeolocationID;
var PanMapAfterPointChange = '1';
var singleTrackingMap_DeviceID;
Ext.define('MyGPS.view.SingleTracking.singleTrackingMap', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


    xtype: 'SingleTrackingMap',


    config: {

        layout: 'fit',
        // layout: 'card',
        styleHtmlContent: true,
        items: [

           {
               //xtype: 'titlebar',
               xtype: 'container',
               margin: '-22 -5 -5 -5',
               //    hidden: false,
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

                         id: 'btnpanelsingleTrackingMapShowHideInfo',

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
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.LEFT_BOTTOM
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
                    singleTrackingMap = map;
                    var me = this;
                    me.map = map;
                    clickedsingleTrackingMap = false;
                    singleTrackingMapsec = 0;
                    maxSpeed = 0;
                    singleTrackingMapchecklong = '000';
                    geocoderLiveTracking = new google.maps.Geocoder();

                }

            }


        });




    }

});














//var Direction = parseFloat('16.86');;




function loadmarkerSingleTrackingMap(SingleTrackID) {
    singleTrackingMapchecklong = '000';
    SingleTrackingMap_SpeedMeterShow();
    SingleTrackingMap_MillageCountShow();

    Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
        TrackID: SingleTrackID,
        AccountNo: GetCurrentUserAccountNo()
    });
    Ext.StoreMgr.get('singlesignalTrackingstore').load();
   
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
            TrackID: SingleTrackID,
            AccountNo: GetCurrentUserAccountNo()
        });
        Ext.StoreMgr.get('singlesignalTrackingstore').load();
        var myStore = Ext.getStore('singlesignalTrackingstore');
        var modelRecord = myStore.getAt(0);
        var Latitude = modelRecord.get('Latitude');
        var Longitude = modelRecord.get('Longitude');    

        var position = new google.maps.LatLng(Latitude, Longitude);
       
        singleTrackingMap.setCenter(position)
        singleTrackingMap.setZoom(10);
        Ext.Viewport.unmask();
       
    });
    task.delay(1000);

    stopClocksingleTrackingMapsStreetView();
    startsingleTrackingMaps('start', SingleTrackID);

}


var SingleTrackIDRetained;
var clickedsingleTrackingMap = false;
var singleTrackingMapsec = 0;
var timer = 0;

function startsingleTrackingMaps(val, SingleTrackID) {
    var valSingleTrackID = SingleTrackID;
    singleTrackingMap_DeviceID = SingleTrackID;
    console.log(singleTrackingMap_DeviceID + ':singleTrackingMap_DeviceID');
    //this.overlay = Ext.Viewport.add(SingleTrackingMapPointIfo())
    //this.overlay.show();
    singleTrackingMapchecklong = '000';
    if (val == 'start') {
        timer = setInterval(function () {
            singleTrackingMapsec = singleTrackingMapsec + 1;
            //console.log("Running:" + singleTrackingMapsec);
            //console.log(valSingleTrackID + ':vvvvvvvvvvvvvvvXXXX');
            if (singleTrackingMapsec == 1) {
                Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                    TrackID: valSingleTrackID,
                    AccountNo: GetCurrentUserAccountNo()
                });
                Ext.StoreMgr.get('singlesignalTrackingstore').load();
                var myStore = Ext.getStore('singlesignalTrackingstore');
                var cou = myStore.getCount();
                if (cou >= 1) {
                    SingleTrackIDRetained = valSingleTrackID;
                    try {
                        var modelRecord = myStore.getAt(0);
                        var Latitude = modelRecord.get('Latitude');
                        var Longitude = modelRecord.get('Longitude');
                        var IMEI_no = modelRecord.get('IMEI_no');
                        var Speed = modelRecord.get('Speed');
                        var BatteryReading = modelRecord.get('BatteryReading');
                        var DateDT = modelRecord.get('DateDT');
                        var Direction = modelRecord.get('Direction');
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


                        Direction = parseFloat(modelRecord.get('Direction'));

                        //  bPicture = modelRecord.get('Picture');
                        // console.log('SelectedMarker:' + SelectedMarker);
                        var SelectedMarker = 'Standard';
                        var AttachedLabelOnMarker = '1';
                        // console.log("Running:" + singleTrackingMapsec);
                        // console.log('checkingimgMarker:' + checkingimgMarker);
                        // if ((SelectedMarker != checkingimgMarker) || (AttachedLabelOnMarker != checkingAttachedLblOnMarker))
                        //   {
                        // console.log("longGeofence:" + longGeofence);
                        //  console.log("singleTrackingMapchecklong:" + singleTrackingMapchecklong);


                     //  setTrackingInfoPanel(TrackID, TrackItem, Speed, DateDT, GPSModel, TrackingMode, Interval, ExpiredDate, Status, CreatedDate, BatteryReading, GPSSimNumber, Spare2);
                        longitude = Longitude;
                        latitude = Latitude;
                        boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(Latitude, Longitude);
                        if (ActiveOverViewMap == 'yes') {

                          
                                setOverViewMapMarkerMobile(Latitude, Longitude);

                        }

                        if (geolocationisOn == 'yes') {
                            console.log(geolocationisOn);




                            var geoLocation = new google.maps.LatLng(geolocationY, geolocationX);
                            console.log('geolocationisOn:' + geolocationY);
                            imagegeoLocationIcon = {
                                url: ip + '714blue.gif', // url
                                scaledSize: new google.maps.Size(80, 80), // scaled size
                                //  origin: new google.maps.Point(0, 0), // origin
                                anchor: new google.maps.Point(40, 40) // anchor
                            };
                            var Locatemarker = new google.maps.Marker({
                                flat: true,
                                icon: imagegeoLocationIcon,
                                map: singleTrackingMap,
                                optimized: false,
                                position: geoLocation,
                                visible: true,
                            });
                            //Locatemarker.id = uniqueIdgeoLocationMarker;
                            //if (uniqueIdgeoLocationMarker > 1) {
                            //    MarkerGeolocationID = Locatemarker.id - 1;
                            //    DeleteMarkerGeolocation(Locatemarker.id - 1);
                            //}
                            //uniqueIdgeoLocationMarker++;
                            //geoLocationArr.push(Locatemarker);
                            geolocate('no');
                            setTimeout(function () {


                                try {

                                    Locatemarker.setMap(null);
                                } catch (err) {
                                    //console.log(err);
                                }
                            }, 2000);
                        }






                        if (singleTrackingMapchecklong == Longitude)
                        { return }




//temp disabled
                     ///   ReversegeocodeAddress(longitude, latitude);
                        if (SelectedMarker == 'Standard') {

                            image = {
                                url: ip + '7.gif', // url
                                scaledSize: new google.maps.Size(80, 80), // scaled size
                                //  origin: new google.maps.Point(0, 0), // origin
                                anchor: new google.maps.Point(40, 40) // anchor
                            };





                            if (AttachedLabelOnMarker == '1') {

                                markersingleTrackingMapTop = new google.maps.Marker({
                                    position: boundreboundlatlongsingleTrackingMap,
                                    icon: image,
                                    flat: true,
                                    // labelAnchor: new google.maps.Point(20, 27),

                                    draggable: false,
                                    optimized: false,
                                    //  labelClass: "labelsMark",// the CSS class for the label
                                    map: singleTrackingMap,
                                    title: valSingleTrackID
                                });

                                //markersingleTrackingMapTop = new google.maps.Marker();
                                //markersingleTrackingMapTop.setPosition(boundreboundlatlongsingleTrackingMap);
                                //markersingleTrackingMapTop.setIcon(image);
                                //markersingleTrackingMapTop.setZIndex(0);
                                //markersingleTrackingMapTop.setMap(singleTrackingMap);
                                //markersingleTrackingMapTop



                                markersingleTrackingMap = new MarkerWithLabel({
                                    position: boundreboundlatlongsingleTrackingMap,
                                    //  icon: image,
                                    flat: true,
                                    icon: {
                                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                        scale: 10,
                                        // rotation: 16.86,
                                        rotation: Direction,
                                        // rotation: 0.0,
                                        // strokeColor: '#F6358A',
                                        strokeColor: '#FFFFFF',
                                        fillColor: '#57A0DC',
                                        fillOpacity: 1,
                                        strokeWeight: 4
                                    },
                                    //  optimized: false,
                                    //  icon: image,
                                    draggable: false,
                                    //labelStyle: { opacity: 0.75 },
                                    // labelContent: "<div style=background-color:Black;width:auto;border:2px solid white;padding:15px;><font size=3 color=white>" + trackingItems + "</font></div>",
                                    labelContent: TrackID,
                                    labelAnchor: new google.maps.Point(70, 13),
                                    labelClass: "labelsMark",// the CSS class for the label
                                    map: singleTrackingMap,
                                    title: valSingleTrackID
                                });



                                //var goldStar = {
                                //    path: google.maps.SymbolPath.CIRCLE,
                                //    fillColor: '#FF000D',
                                //    fillOpacity: 0.3,
                                //    scale: 60,
                                //    strokeColor: '#FF000D',
                                //    strokeWeight: 2
                                //};



                                //markersingleTrackingMap.setIcon({
                                //    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                //    scale: 6,
                                //    rotation: 345.56,
                                //    strokeColor: 'green'
                                //});
                            } else if (AttachedLabelOnMarker == '0') {

                                markersingleTrackingMap = new MarkerWithLabel({
                                    position: boundreboundlatlongsingleTrackingMap,
                                    icon: image,
                                    flat: true,
                                    draggable: false,
                                    map: singleTrackingMap,
                                    title: valSingleTrackID
                                });

                            }
                        }
                      
                        singleTrackingMapchecklong = Longitude;
                        markersingleTrackingMap.id = uniqueId;
                        markersingleTrackingMapTop.id = uniqueId;
                        if (uniqueId > 1) {
                            DeleteMarkersingleTrackingMap(markersingleTrackingMap.id - 1);
                            DeleteMarkersingleTrackingMap(markersingleTrackingMapTop.id - 1);
                        }

                        uniqueId++;


                        markers.push(markersingleTrackingMap);
                        markers.push(markersingleTrackingMapTop);
                        checkingimgMarker = SelectedMarker;
                        checkingAttachedLblOnMarker = AttachedLabelOnMarker;



                        google.maps.event.addListener(markersingleTrackingMap, 'mousedown',
             function (event) {
                 _TrackingItemsConfigDeviceID = IMEI_no;
                 Ext.Viewport.remove(_singleTrackingMap_PointInfo);
                 this.overlay = Ext.Viewport.add(SingleTrackingMapPointIfo());
                 this.overlay.show();
                 // setsingleTrackingMapDetails();
              //   Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Fetching..</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


             });
                    }
                    catch (ert) {
                        console.log(ert);
                    }

                }

                if (PanMapAfterPointChange == '1') {
                
                    singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
                    singleTrackingMap.setZoom(16);
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




var countaddmarker = 0;
var markers = [];
var uniqueId = 1;
var geofenceSpeed;
var geofenceTrackID;
var geofenceIMEI_no;
var geofenceGPSSimNumber;
var geofenceBatteryReading;
var gfenceTrackItem;
var geofenceTrackItemType;
var geofenceGPSModel;
var geofenceAccountNo;
var geofenceDateDT;
var checkingimgMarker;
var checkingAttachedLblOnMarker;





function DeleteMarkersingleTrackingMap(id) {
    //Find and remove the marker from the Array

    //console.log("DELETEEEE:"+id);
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            //Remove the marker from Map                  
            markers[i].setMap(null);

            //Remove the marker from array.
            markers.splice(i, 1);
            return;
        }
    }
}

function stopClocksingleTrackingMaps() {
    startsingleTrackingMaps('stop', singleTrackingMap_DeviceID);
    // console.log("STOPED");
    // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    //  window.clearInterval(clockgeofence);
    singleTrackingMapchecklong = '000';
    singleTrackingMapsec = 0;
 
    clickedsingleTrackingMap = false;

}



function HideSingleTrackingMapMenu()
{
    SingleTrackingMap_MenuHide();
    _singleTrackingMap_MillageCount.hide();
    _singleTrackingMap_SpeedMeter.hide();

    if (SingleTrackingSearchPanelisOpen == 'yes')
    {
        HideSearchSingleTrackingMap();
    }

    if (_singleTrackingMap_BurgeMenuIsInitialized == 'yes')
    { _singleTrackingMap_BurgeMenu.hide(); }
}







function getCurrentLocationsingleTrackingMap() {
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


var uniqueIdOverViewmap = 1;
var uniqueIdDockOverViewmap = 1;
var uniqueIdOverViewmapMobileStreetView = 1;
var uniqueIdOverViewmapWebStreetView = 1;
var uniqueIdgeoLocationMarker = 1;
var markerOverViewMap;

var markersOverViewMapArr = [];
var markersDockOverViewMapArr = [];
var markerOverViewMapMobileStreetViewArr = [];
var markerOverViewMapWebStreetViewArr = [];
var geoLocationArr = [];








function setOverViewMapMarker(long, lat) {
    console.log(long);
    console.log(lat);

    boundOverViewMap = new google.maps.LatLng(long, lat);
    markerOverViewMap = new google.maps.Marker({
        position: boundOverViewMap,
        map: petaOverViewmap,
    });




    markerOverViewMap.id = uniqueIdOverViewmap;

    if (uniqueIdOverViewmap > 1) {
        DeleteMarkerOverViewMap(markerOverViewMap.id - 1);
    }

    if (ActivatedStreetView == 'yes') {
        var StreetViewPoint = new google.maps.LatLng(latitude, longitude);


        StreetViewSingleTracking = petaOverViewmap.getStreetView();
        StreetViewSingleTracking.setPosition(StreetViewPoint);
        StreetViewSingleTracking.setPov({
            heading: Direction,
            // heading: heading,
            pitch: 0
        });
        StreetViewSingleTracking.setVisible(true);
        StreetViewSingleTracking.setOptions({
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
    else {


        petaOverViewmap.setCenter(boundOverViewMap)
        petaOverViewmap.setZoom(17);
    }



    //  panoramapetaOverViewmap
    uniqueIdOverViewmap++;

    markersOverViewMapArr.push(markerOverViewMap);

}


function DeleteMarkerOverViewMap(id) {
    for (var i = 0; i < markersOverViewMapArr.length; i++) {
        if (markersOverViewMapArr[i].id == id) {
            //Remove the marker from Map                  
            markersOverViewMapArr[i].setMap(null);

            //Remove the marker from array.
            markersOverViewMapArr.splice(i, 1);
            return;
        }
    }
}











function setOverViewMapMarkerMobile(long, lat) {

    var BoundMapMarkerMobile = new google.maps.LatLng(long, lat);
    var dockMarkerOverViewMap = new google.maps.Marker({
        position: BoundMapMarkerMobile,
        map: dockOverViewMap,
    });
    dockMarkerOverViewMap.id = uniqueIdDockOverViewmap;
    //  console.log(uniqueIdDockOverViewmap);
    if (uniqueIdDockOverViewmap > 1) {
        DeleteMarkerDockOverViewMap(dockMarkerOverViewMap.id - 1);
    }
    dockOverViewMap.setCenter(BoundMapMarkerMobile)
    dockOverViewMap.setZoom(16);

    uniqueIdDockOverViewmap++;
    markersDockOverViewMapArr.push(dockMarkerOverViewMap);

}


function DeleteMarkerDockOverViewMap(id) {
    for (var i = 0; i < markersDockOverViewMapArr.length; i++) {
        if (markersDockOverViewMapArr[i].id == id) {
            //Remove the marker from Map                  
            markersDockOverViewMapArr[i].setMap(null);

            //Remove the marker from array.
            markersDockOverViewMapArr.splice(i, 1);
            return;
        }
    }
}



function setOverViewMapMarkerWebStreetView(long, lat) {
    // alert(long);
    var BoundMapMarkerMobile = new google.maps.LatLng(long, lat);
    var ViewMapMarkerWebStreetView = new google.maps.Marker({
        position: BoundMapMarkerMobile,
        map: gSingleTrackingMapStreetViewOverviewMapWeb,
    });
    ViewMapMarkerWebStreetView.id = uniqueIdOverViewmapWebStreetView;

    if (uniqueIdOverViewmapWebStreetView > 1) {
        DeleteMarkerOverViewMapMarkerWebStreetView(ViewMapMarkerWebStreetView.id - 1);
    }
    gSingleTrackingMapStreetViewOverviewMapWeb.setCenter(BoundMapMarkerMobile)
    gSingleTrackingMapStreetViewOverviewMapWeb.setZoom(14);

    uniqueIdOverViewmapWebStreetView++;
    markerOverViewMapWebStreetViewArr.push(ViewMapMarkerWebStreetView);
}


function DeleteMarkerOverViewMapMarkerWebStreetView(id) {
    for (var i = 0; i < markerOverViewMapWebStreetViewArr.length; i++) {
        if (markerOverViewMapWebStreetViewArr[i].id == id) {
            //Remove the marker from Map                  
            markerOverViewMapWebStreetViewArr[i].setMap(null);

            //Remove the marker from array.
            markerOverViewMapWebStreetViewArr.splice(i, 1);
            return;
        }
    }
}


function setOverViewMapMarkerMobileStreetView(long, lat) {
    var BoundMapMarkerMobile = new google.maps.LatLng(long, lat);
    var ViewMapMarkerMobileStreetView = new google.maps.Marker({
        position: BoundMapMarkerMobile,
        map: gSingleTrackingMapStreetViewOverviewMapMobile,
    });
    ViewMapMarkerMobileStreetView.id = uniqueIdOverViewmapMobileStreetView;

    if (uniqueIdOverViewmapMobileStreetView > 1) {
        DeleteMarkerOverViewMapMarkerMobileStreetView(ViewMapMarkerMobileStreetView.id - 1);
    }
    gSingleTrackingMapStreetViewOverviewMapMobile.setCenter(BoundMapMarkerMobile)
    gSingleTrackingMapStreetViewOverviewMapMobile.setZoom(16);

    uniqueIdOverViewmapMobileStreetView++;
    markerOverViewMapMobileStreetViewArr.push(ViewMapMarkerMobileStreetView);
}

function DeleteMarkerOverViewMapMarkerMobileStreetView(id) {
    for (var i = 0; i < markerOverViewMapMobileStreetViewArr.length; i++) {
        if (markerOverViewMapMobileStreetViewArr[i].id == id) {
            //Remove the marker from Map                  
            markerOverViewMapMobileStreetViewArr[i].setMap(null);

            //Remove the marker from array.
            markerOverViewMapMobileStreetViewArr.splice(i, 1);
            return;
        }
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






function setTrackingInfoPanel(strTrackID, strTrackItem, strSpeed, strTime, strTrackerModel, strVersion, strInterval, strExpiredDate, strStatus, strCreatedDate, strBatteryReading, strGPSSimNumber, strMillage) {
    var currentSpeed = parseFloat(strSpeed);
    if (currentSpeed > maxSpeed)
    { maxSpeed = currentSpeed }

    console.log(strMillage);
//    Ext.getCmp('TrackingInfopanelTbl').setHtml('<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');
    //Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');

    Ext.getCmp('SingleTrackingMap_PointIfoTbl').setHtml('<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');

    //   Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHtml('<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >' + strSpeed + ' KM/H</td> <td class="tdstreetViewTblInfo">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">' + strTime + '</td> </tr>  </table></div>');
  //  Ext.getCmp('btnsingleTrackingOverViewMilliagesPhone').setHtml('<div class="transbox1"><font size="6" color="white"><br>' + strMillage + '</font><br><font size="2" color="white">Millages</font></div>');
  //  Ext.getCmp('btnsingleTrackingOverViewMilliagesPhone').setHtml('<div  style="background-color: #57A0DC;"><font size="0.5" color="white">------------Milliages------------</font><br><font size="2" color="white"><b>' + strMillage + '</b></font></div>');

   


    Ext.getCmp('LiveTrackingInfoPanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strTrackItem + '</td> <td class="tde">' + strTrackID + '</td></tr> <tr > <td class="tdk">Track Item</td> <td class="tdk">Track ID</td></tr><tr > <td class="tde">' + strStatus + '</td> <td class="tde">' + strVersion + '</td></tr> <tr > <td class="tdk">Account Status</td> <td class="tdk">Version</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strTrackerModel + '</td> <td class="tde">' + strInterval + ' </td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Interval</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strBatteryReading + '</td> <td class="tde">' + strGPSSimNumber + '</td></tr> <tr > <td class="tdk">Battery Reading</td> <td class="tdk">SimCard Number</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strCreatedDate + '</td> <td class="tde">' + strExpiredDate + '</td></tr> <tr > <td class="tdk">Date Registered</td> <td class="tdk">Expired Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');



    //   Ext.getCmp('GeofenceInfopanelMillageTable').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 38px; color: #fff; text-align: center;  valign:top; height:20%">' + strMillage + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;  valign:top;  height:20% "><b>Milliage Counted (Approximate)</b></td> </tr>  </table>');
 //   Ext.getCmp('btnStreetViewMiliageInfo').setHtml('<div class="transbox1"><font size="6" color="white"><br>' + strMillage + '</font><br><font size="2" color="white">Millages</font></div>');

    
    // html: '<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
}


















//var image;
//var imagegeoLocationIcon;
//var buttonAlertstate;
//var singleTrackingMap;
//var boundaryColor = '#ED1B24'; // initialize color of polyline
//var polyCoordinates = []; // initialize an array where we store latitude and longitude pair
//var count = 0;
//var markersingleTrackingMap;
//var markersingleTrackingMapTop;
//var ActiveOverViewMap = 'no';
//var longitude;
//var latitude;
//var ActivatedStreetView = 'no';
//var StreetViewSingleTracking;

//var ip = document.location.protocol + '//' + document.location.host + '/resources/icons/';
//var geofencepolyLengthInMeters;
//var singleTrackingMapchecklong;
//var geofencetravellength;
//var geofencetravellengthkm;
//var geofenceLength;
//var alertisplay;
//var dialogboxdeletegeofence;
//var dialogboxdeletemore;
//var panelgeofencestatus;
//var boundreboundlatlongsingleTrackingMap;
//var boundstatus;
//var geoFenceStatus;
//var geoFenceDate;

//var gFenceAlertResponder;
//var gFenceAlertResponder2;
//var gFenceAlertResponder3;
//var gFenceAlertResponder4;
//var gFenceAlertResponderRelations;
//var gFenceAlertResponderRelations2;
//var gFenceAlertResponderRelations3;
//var gFenceAlertResponderRelations4;
//var gFencelenght;
//var gCreateddate;
//     var gFenceName;
//     var bSex;
//     var bAge;
//     var bRisk;
//     var bPicture;
//     var geocoderLiveTracking;
//     var maxSpeed;
//     var MarkerGeolocationID;


//     var markersMultipleExtentBound = [];//some array
//     var boundsMultiple = new google.maps.LatLngBounds();
//     var checkinMultipoint;
//     var mulptipoint;
//     var markersMultipleID = [];//some array
//     var markersMultipleID_Deleted = [];//some array
//     Ext.define('MyGPS.view.SingleTracking.singleTrackingMap', {


//    extend: 'Ext.Container',

//    requires: ['Ext.Map', 'Ext.dataview.List',
//        'Ext.data.Store', 'Ext.field.Select',
//        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


//    xtype: 'SingleTrackingMap',


//    config: {

//        layout: 'fit',
//        // layout: 'card',
//        styleHtmlContent: true,
//        items: [    
          
//           {
//               //xtype: 'titlebar',
//               xtype: 'container',
//               margin: '-22 -5 -5 -5',
//           //    hidden: false,
//               // draggable: true,
//               layout: {

//                   type: 'vbox',
//                   pack: 'left',
//                 //  align: 'end'
//               },

//               items: [

//                     {
//                         xtype: 'button',
//                         ui: 'plain',
//                         // style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
//                         height: 24,
//                         width: 45,
//                         //iconCls: 'download',
//                         html: '<div ><img src="resources/icons/download.png" width="25" height="18" alt="Company Name"></div>',
//                         //ui:'round'

//                         id: 'btnpanelsingleTrackingMapShowHideInfo',
                        
//                         handler: function (btnpanelsingleTrackingMapShowHideInfo) {
//                            // btn.setHidden(true);

//                             if (btnpanelsingleTrackingMapShowHideInfo.hasDisabled) {

//                                 btnpanelsingleTrackingMapShowHideInfo.setHtml('<div ><img src="resources/icons/download.png" width="25" height="18"></div>')
//                                 btnpanelsingleTrackingMapShowHideInfo.hasDisabled = false;
//                                 //_GeofenceInfopanel.hide();
                                 
//                                 _GeofenceInfopanel.hide();


//                             } else {

                               
//                                 if (!this.overlay) {
//                                     this.overlay = Ext.Viewport.add(_GeofenceInfopanel
//                                 );
                                   

//                                 }
//                                 btnpanelsingleTrackingMapShowHideInfo.setHtml('<div ><img src="resources/icons/download_screen.png" width="25" height="18"></div>')
//                                 this.overlay.show();
                             
//                                 btnpanelsingleTrackingMapShowHideInfo.hasDisabled = true;
                             



//                             }
                          
//}

//                     }
                       
//                     ]
         
           
//           },
            
//]
//},


 




//    initialize: function () {      
       
//        this.callParent();
//        map = this.add({
//            xtype: 'map',
//            //useCurrentLocation: true,
//            mapOptions: {

//                center: new google.maps.LatLng(5.4445234, 101.91246603),
//                zoom: 6,
//                mapTypeId: google.maps.MapTypeId.ROADMAP,
//                panControl: false,
//                scaleControl: false,
//                //overviewMapControl: true,
//                //overviewMapControlOptions: {opened: true},
             
//                mapTypeControl:false,
//                mapTypeControlOptions: {
//                    style: google.maps.MapTypeControlStyle.DEFAULT,
//                    position: google.maps.ControlPosition.BOTTOM_CENTER
//                },
//                mapTypeId: google.maps.MapTypeId.ROADMAP,
//                streetViewControl: true,
//                streetViewControlOptions: {
//                    position: google.maps.ControlPosition.TOP_LEFT
//                },
//                zoomControl: false,
//                zoomControlOptions: {
//                    position: google.maps.ControlPosition.LEFT_TOP
//                },
               

//            },






//            listeners: {
//                maprender: function (comp, map) {
//                    singleTrackingMap = map;
//                    var me = this;
//                    me.map = map;                  
//                    clickedsingleTrackingMap = false;
//                    singleTrackingMapsec = 0;
//                    maxSpeed = 0;
//                    singleTrackingMapchecklong = '000';
//                     geocoderLiveTracking = new google.maps.Geocoder();

//                }

//            }


//        });


  

//    }

//});














//     var Direction = parseFloat('16.86');;




//     function loadmarkerSingleTrackingMap(SingleTrackID) {
//         singleTrackingMapchecklong = '000';
//         Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
//             //TrackID: valSingleTrackID,
//             ImeiNo: ImeiNo,
//             count: countmultiple,
//             AccountNo: GetCurrentUserAccountNo()
//         });
//         Ext.StoreMgr.get('singlesignalTrackingstore').load();
//    Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + '</td></tr></table>');
//    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point..Please Wait.' });
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
//            //TrackID: valSingleTrackID,
//            ImeiNo: ImeiNo,
//            count: countmultiple,
//            AccountNo: GetCurrentUserAccountNo()
//        });
//        Ext.StoreMgr.get('singlesignalTrackingstore').load();
//        var myStore = Ext.getStore('singlesignalTrackingstore');
//        var modelRecord = myStore.getAt(0);
//       var latGeofence = modelRecord.get('Latitude');
//       var longGeofence = modelRecord.get('Longitude');
//       Direction = parseFloat(modelRecord.get('Direction'));
//        boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(latGeofence, longGeofence);
      
//        var posisigeofence = new google.maps.LatLng(latGeofence, longGeofence);      
//        singleTrackingMap.setCenter(posisigeofence)
//        singleTrackingMap.setZoom(16);
//        Ext.Viewport.unmask();
//        stopClocksingleTrackingMapsStreetView();
//        startsingleTrackingMaps('start', SingleTrackID);
//    });
//    task.delay(1000);
  


//}


    



//     var SingleTrackIDRetained;
//var clickedsingleTrackingMap = false;
//var singleTrackingMapsec = 0;
//var timer = 0;



//function CheckMarkersMultipleID(arr, findValue) {
//    var i = arr.length;
     
//    while (i--) {
//        if (arr[i] === findValue) return true;
//    }
//    return false;
//} 


//function startsingleTrackingMaps(val, countmultiple, ImeiNo) {
//    var valSingleTrackID = SingleTrackID;
//    markersMultipleID.length = 0;
 






//    checkinMultipoint = '000';
//    singleTrackingMapchecklong = '000';
//    if (val == 'start') {
//        timer = setInterval(function () {

            
//            singleTrackingMapsec = singleTrackingMapsec + 1;
          
//            if (singleTrackingMapsec == 1) {
//                markersMultipleExtentBound.length = 0;
//              //  markersIDs.length = 0;
//                mulptipoint = '';
//                Ext.getStore('multipletrackingsignalpoint').getProxy().setExtraParams({
//                    //TrackID: valSingleTrackID,
//                    ImeiNo: ImeiNo,
//                    count: countmultiple,
//                    AccountNo: GetCurrentUserAccountNo()

//                    //ImeiNo: '359710048057492,359710041627184,1452824661',
//                    //count: '3',
//                    //AccountNo: GetCurrentUserAccountNo()
                    
//                });
//                Ext.StoreMgr.get('multipletrackingsignalpoint').load();
//                var myStore = Ext.getStore('multipletrackingsignalpoint');
//                var cou = myStore.getCount();             
      

//                for (var ii = 0; ii < cou; ii++) {
//                    var modelRecord = myStore.getAt(ii);
                  
//                    var Latitude = modelRecord.get('Latitude');
//                    var Longitude = modelRecord.get('Longitude');
//                    var IMEI_no = modelRecord.get('IMEI_no');
//                    var Speed = modelRecord.get('Speed');
//                    var BatteryReading = modelRecord.get('BatteryReading');
//                    var DateDT = modelRecord.get('DateDT');
//                    var Direction = parseFloat(modelRecord.get('Direction'));
//                    var TrackID = modelRecord.get('TrackID');
//                    var TrackItem = modelRecord.get('TrackItem');
//                    var TrackItemType = modelRecord.get('TrackItemType');
//                    var GPSModel = modelRecord.get('GPSModel');
//                    var AccountNo = modelRecord.get('AccountNo');
//                    var GPSSimNumber = modelRecord.get('GPSSimNumber');
//                    var Interval = modelRecord.get('Interval');
//                    var TrackingMode = modelRecord.get('TrackingMode');
//                    var Status = modelRecord.get('Status');
//                    var CreatedDate = modelRecord.get('CreatedDate');
//                    var ExpiredDate = modelRecord.get('ExpiredDate');
//                    var Spare1 = modelRecord.get('Spare1');
//                    var Spare2 = modelRecord.get('Spare2');
//                    var Spare3 = modelRecord.get('Spare3');
//                    var Spare4 = modelRecord.get('Spare4');
//                    var Spare5 = modelRecord.get('Spare5');
//                    var Spare6 = modelRecord.get('Spare6');
//                    var Spare7 = modelRecord.get('Spare7');
//                    var Spare8 = modelRecord.get('Spare8');
//                    var Spare9 = modelRecord.get('Spare9');
//                    var Spare10 = modelRecord.get('Spare10');
//                    var Spare11 = modelRecord.get('Spare11');
//                    var Spare12 = modelRecord.get('Spare12');
//                    var MarkerID = Latitude + TrackID;

                    
                  
//                    if (CheckMarkersMultipleID(markersMultipleID, MarkerID)) {




//                    } else {
//                        var i = markersMultipleID.length;
//                        while (i--) {
//                            if (markersMultipleID[i].includes(TrackID))
//                            {
//                               var deletedMarkerID = markersMultipleID[i];
//                                markersMultipleID_Deleted.push(deletedMarkerID);
//                               // console.log('markersMultipleID_Deleted:' + deletedMarkerID);
//                            }
//                            ;
//                        }

//                        if (geocoderMultiLiveTrackingisFirstLoad == 'no')
//                        { MultiSignalReversegeocodeAddress(Longitude, Latitude); }
//                      //  


                     



                     


//         //               var content+ii = '<div id="iw-container">' +
//         //  '<div class="iw-title">Porcelain Factory of Vista Alegre</div>' +
//         //  '<div class="iw-content">' +
//         //    '<div class="iw-subTitle">Hissssstosssry</div>' +
//         //    '<img src="images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
//         //    '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
//         //    '<div class="iw-subTitle">Contacts</div>' +
//         //    '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>' +
//         //    '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>' +
//         //  '</div>' +
//         //  '<div class="iw-bottom-gradient"></div>' +
//         //'</div>';













//         //               // A new Info Window is created and set content
//         //               var infowindow = new google.maps.InfoWindow({
//         //                   content: content,

//         //                   // Assign a maximum value for the width of the infowindow allows
//         //                   // greater control over the various content elements
//         //                   maxWidth: 350
//         //               });


//                      //  markersingleTrackingMapTop.setMap(null);

                       
//                        var boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(Latitude, Longitude);
//                        var image = {
//                            url: ip + '7.gif', // url
//                            scaledSize: new google.maps.Size(80, 80), // scaled size
//                            //  origin: new google.maps.Point(0, 0), // origin
//                            anchor: new google.maps.Point(40, 40) // anchor
//                        };
                       

//                            var markersingleTrackingMapTop = new google.maps.Marker({
//                                position: boundreboundlatlongsingleTrackingMap,
//                                icon: image,
//                                flat: true,
//                                draggable: false,
//                                optimized: false,
//                                //  labelClass: "labelsMark",// the CSS class for the label
//                                id: Latitude + TrackID,
//                                map: singleTrackingMap,
//                                title: Latitude + TrackID
//                            });
//                            var markersingleTrackingMap = new MarkerWithLabel({
//                                position: boundreboundlatlongsingleTrackingMap,
//                                //  icon: image,
//                                flat: true,
//                                icon: {
//                                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
//                                    scale: 10,
//                                    rotation: Direction,
//                                    strokeColor: '#FFFFFF',
//                                    fillColor: '#57A0DC',
//                                    fillOpacity: 1,
//                                    strokeWeight: 4
//                                },
                                
//                                draggable: false,
//                                labelContent: TrackID,
//                               // labelContent:'<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>',
//                                labelAnchor: new google.maps.Point(70, 13),
//                                labelClass: "labelsMark",// the CSS class for the label
//                                map: singleTrackingMap,
//                                id: Latitude + TrackID,
//                                title: Latitude + TrackID
//                            });







//                            markersMultipleExtentBound.push(markersingleTrackingMapTop);
//                            markers.push(markersingleTrackingMapTop);
//                            markers.push(markersingleTrackingMap);
//                            markersMultipleID.push(MarkerID);
//                            mulptipoint += Latitude;
                           
//                            DeleteMarkersingleTrackingMap('2.98867666666667WTP2681');
                       


//                    //        google.maps.event.addListener(markersingleTrackingMap, 'mousedown',
//                    //function (event) {


//                    //    if (!this.overlay) {
//                    //        this.overlay = Ext.Viewport.add(_LiveTracking_InfoPanel);



//                    //    }

//                    //    this.overlay.show();
//                    //    //   setsingleTrackingMapDetails();
//                    //  //  Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Fetching..</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


//                    //});





//                         //   var contentString = '<div id="content" class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>';

//                           // var contentString = '<div style="width: 94.2%; padding-left:10px; height: 25px;float: left;color: #FFF;background: #ed1e79;line-height: 25px;border-radius:5px 5px 0px 0px;"><strong><b>"You feild"</b></strong></div><div style="clear:both;height:0px;"><div style="float:left;width:90%;padding:5px 10px;border:1px solid #ccc;border-top:none;border-radius:0px 0px 5px 5px;"><div style="float:left;color:#666;font-size:18px;font-weight:bold;margin:5px 0px;"> <div style="padding: 0px;">]]..product_list[i].category..[[</div></div><div style="clear:both;height:0px;"></div><div style="float:left;line-height:18px;color:#666;font-size:13px;">"You feild"</div><div style="clear:both;height:0px;"></div><form action=\"navigat:"You feild"\"><input type=\"submit\"/ style=\"background:#7e7e7e;float:right;color:#FFF;padding:5px 7px;font-size:10px;font-weight:bold;border:none;margin:5px 0px; border-radius:0px !important;\" value=\"More Info\" ></form></div></div>';

//                        //////////////////////////    var contentString='<div style="position: absolute; left: 0px; top: 0px; width: 317px; height: 366px; overflow: hidden; -webkit-user-select: none; <font color="#FF0000">background-color:black;</font> border: 1px solid rgb(171, 171, 171); "></div>';
//                        //////////////////////////    var infowindow = new google.maps.InfoWindow({
//                        //////////////////////////        content: contentString
//                        //////////////////////////    });

//                        ///////////////////////////****** Map Marker Options *******/
                          

//                        ///////////////////////////****** Info Window With Click *******/
//                        //////////////////////////    google.maps.event.addListener(markersingleTrackingMapTop, 'click', function () {
//                        //////////////////////////        infowindow.open(singleTrackingMap, markersingleTrackingMapTop);
//                        //////////////////////////    });

//                        ///////////////////////////****** Info Window Without Click *******/
//                        //////////////////////////    infowindow.open(singleTrackingMap, markersingleTrackingMapTop);






                          

//                        //                var content = '<div  class="infobox">' +
//            //'This is my customized InfoWindow!xxxxxxxxxxxxxxxxxxxxxxxx' +
            
//                        //'</div>';


                        







//                            var infowindow = new google.maps.InfoWindow();
                          
//     if (geocoderMultiLiveTrackingisFirstLoad == 'no')
//     {

//         console.log('geocoderMultiLiveTrackingisFirstLoad is  NO');
//         console.log('Length:' + MultipleGeocodeAdd.length);
//         var content = "<b>Track ID: " + TrackID + '<br>' + "Track Item: " + TrackItem + "<BR>Millage:" + Spare1 + "<BR> Current Speed:" + Speed + "<br>Max Speed:" + Speed + "<br>Date:" + DateDT + "<BR>Geocode Add:" + MultipleGeocodeAdd[0] + "</b>";
//         infowindow.setContent(content);
//         infowindow.open(singleTrackingMap, markersingleTrackingMap);


//         google.maps.event.addListener(markersingleTrackingMap, 'click', (function (markersingleTrackingMap, content, infowindow) {
//             return function () {

//                 infowindow.setContent(content);
//                 infowindow.open(singleTrackingMap, markersingleTrackingMap);
//             };

//         })(markersingleTrackingMap, content, infowindow));
//                            } else

    
//     {


//         var content = "<b>Track ID: " + TrackID + '<br>' + "Track Item: " + TrackItem + "<BR>Millage:" + Spare1 + "<BR> Current Speed:" + Speed + "<br>Max Speed:" + Speed + "<br>Date:" + DateDT + "<BR>Geocode Add:" + MultipleGeocodeAdd[ii] + "</b>";

//         infowindow.setContent(content);
//         infowindow.open(singleTrackingMap, markersingleTrackingMap);






//         google.maps.event.addListener(markersingleTrackingMap, 'click', (function (markersingleTrackingMap, content, infowindow) {
//             return function () {

//                 infowindow.setContent(content);
//                 infowindow.open(singleTrackingMap, markersingleTrackingMap);
//             };

//         })(markersingleTrackingMap, content, infowindow));
//     }




                          
              

//                                //google.maps.event.addListener(infowindow, 'domready', function () {
//                                //    var el = $('.gm-style-iw');
//                                //    el.siblings().css('visibility', 'hidden');
//                                //    el.click(function () {
//                                //        infowindow.close();
//                                //    });
//                                //});
//                                /****** Info Window With Click *******/
//                                //google.maps.event.addListener(markersingleTrackingMap, 'click', function () {
//                                //    infowindow.open(singleTrackingMap, markersingleTrackingMap);
//                                //});

//                                /****** Info Window Without Click *******/
//                                //infowindow.setContent(content);
//                                //infowindow.open(singleTrackingMap, markersingleTrackingMap);




//                         //   var content = "<b>Track ID: " + TrackID + '<br>' + "Track Item: " + TrackItem + "<BR>Millage:" + Spare1 + "<BR> Current Speed:" + Speed + "<br>Max Speed:" + Speed + "<br>Date:" + DateDT + "<BR>Geocode Add:" + MultiSignalReversegeocodeAddress(Longitude, Latitude) + "</b>";

                          

             
////                        locatePoint(Latitude, Longitude, IMEI_no, Speed, BatteryReading, DateDT, Direction, TrackID, TrackItem, TrackItemType, GPSModel, AccountNo, GPSSimNumber, Interval, TrackingMode
////, Status, CreatedDate, ExpiredDate, Spare1, Spare2, Spare3, Spare4, Spare5, Spare6, Spare7, Spare8, Spare9, Spare10, Spare11, Spare12, mulptipoint);
                     
//                    }



                   
//                }



//                // *
//                // START INFOWINDOW CUSTOMIZE.
//                // The google.maps.event.addListener() event expects
//                // the creation of the infowindow HTML structure 'domready'
//                // and before the opening of the infowindow, defined styles are applied.
//                // *
             
//              //  DeleteMarkersingleTrackingMap('2.98867666666667WTP2681');

//                if (checkinMultipoint != mulptipoint)
//                {

//                    for (var i = 0; i < markersMultipleExtentBound.length; i++) {
//                        boundsMultiple.extend(markersMultipleExtentBound[i].getPosition());
//                    }

//                    singleTrackingMap.fitBounds(boundsMultiple);
//                   // MultipleGeocodeAdd.length = 0;
//                    checkinMultipoint = mulptipoint;
//                }
              


              






//                if (cou >= 10) {
                  
                 

//                }
              
//                //if (PanMapAfterPointChange == '1') {
//                //    singleTrackingMap.setCenter(boundreboundlatlongsingleTrackingMap)
//                //    singleTrackingMap.setZoom(16);
//                //}
               
//            }
//            if (singleTrackingMapsec == 2) {

//                markersMultipleExtentBound.length = 0;
               
//                geocoderMultiLiveTrackingisFirstLoad = 'no';



//                singleTrackingMapsec = 0;

              










                  
                  



//            }
//        }, 1000);
//    } else {
    
//        clearInterval(timer);
//    }
//}




//var countaddmarker = 0;
//var markers = [];
//var markersIDs = [];
//var markersCHECK = [];

//var uniqueId = 1;
//var geofenceSpeed;
//var geofenceTrackID;
//var geofenceIMEI_no;
//var geofenceGPSSimNumber;
//var geofenceBatteryReading;
//var gfenceTrackItem;
//var geofenceTrackItemType;
//var geofenceGPSModel;
//var geofenceAccountNo;
//var geofenceDateDT;
//var checkingimgMarker;
//var checkingAttachedLblOnMarker;

////var markers = {};


//function removeMarker(markerId) {
//    console.log('MARJER ID:'+markerId);
//    if (markers[markerId]) {
//        markers[markerId].setMap(null);
//        delete markers[markerId];
//    }
//}




//function locatePoint(Latitude,Longitude,IMEI_no,Speed,BatteryReading,DateDT,Direction,TrackID,TrackItem,TrackItemType,GPSModel,AccountNo,GPSSimNumber,Interval,TrackingMode
//    , Status, CreatedDate, ExpiredDate, Spare1, Spare2, Spare3, Spare4, Spare5, Spare6, Spare7, Spare8, Spare9, Spare10, Spare11, Spare12, mulptipoint)
//{
//    try {
      
//        var SelectedMarker = 'Standard';
//        var AttachedLabelOnMarker = '1';
//       // console.log(mulptipoint);
//      var boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(Latitude, Longitude);
//        if (ActiveOverViewMap == 'yes') {

//            setOverViewMapMarkerMobile(Latitude, Longitude);
//        }

//        if (geolocationisOn == 'yes') {
//            console.log(geolocationisOn);
//            var geoLocation = new google.maps.LatLng(geolocationY, geolocationX);
//            console.log('geolocationisOn:' + geolocationY);
//            imagegeoLocationIcon = {
//                url: ip + '714blue.gif', // url
//                scaledSize: new google.maps.Size(80, 80), // scaled size
//                //  origin: new google.maps.Point(0, 0), // origin
//                anchor: new google.maps.Point(40, 40) // anchor
//            };
//            var Locatemarker = new google.maps.Marker({
//                flat: true,
//                icon: imagegeoLocationIcon,
//                map: singleTrackingMap,
//                optimized: false,
//                position: geoLocation,
//                visible: true,
//            });           
//            geolocate('no');
//            setTimeout(function () {


//                try {

//                    Locatemarker.setMap(null);
//                } catch (err) {
//                    //console.log(err);
//                }
//            }, 2000);
//        }






//        //if (checkinMultipoint == mulptipoint)
//        //{ return }





//    //    ReversegeocodeAddress(longitude, latitude);
//        if (SelectedMarker == 'Standard') {
//           var image = {
//                url: ip + '7.gif', // url
//                scaledSize: new google.maps.Size(80, 80), // scaled size
//                //  origin: new google.maps.Point(0, 0), // origin
//                anchor: new google.maps.Point(40, 40) // anchor
//            };
//            if (AttachedLabelOnMarker == '1') {

//               var markersingleTrackingMapTop = new google.maps.Marker({
//                    position: boundreboundlatlongsingleTrackingMap,
//                    icon: image,
//                    flat: true,
//                    draggable: false,
//                    optimized: false,
//                   //  labelClass: "labelsMark",// the CSS class for the label
//                    id: Latitude + TrackID,
//                    map: singleTrackingMap,
//                    title: TrackID
//                });
//               var markersingleTrackingMap = new MarkerWithLabel({
//                    position: boundreboundlatlongsingleTrackingMap,
//                    //  icon: image,
//                    flat: true,
//                    icon: {
//                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
//                        scale: 10,
//                        // rotation: 16.86,
//                        rotation: Direction,
//                        // rotation: 0.0,
//                        // strokeColor: '#F6358A',
//                        strokeColor: '#FFFFFF',
//                        fillColor: '#57A0DC',
//                        fillOpacity: 1,
//                        strokeWeight: 4
//                    },
//                    //  optimized: false,
//                   //  icon: image,
                   
//                    draggable: false,
//                    //labelStyle: { opacity: 0.75 },
//                    // labelContent: "<div style=background-color:Black;width:auto;border:2px solid white;padding:15px;><font size=3 color=white>" + trackingItems + "</font></div>",
//                    labelContent: TrackID,
//                    labelAnchor: new google.maps.Point(70, 13),
//                    labelClass: "labelsMark",// the CSS class for the label
//                    map: singleTrackingMap,
//                    id: Latitude + TrackID,
//                    title: Latitude + TrackID
//               });


//               if (CheckMarkersMultipleID(markersCHECK, Latitude + TrackID)) {

//               } else {
//                   markersingleTrackingMapTop.setMap(null);
//                   markersCHECK.push(Latitude + TrackID);
//                   markersIDs.push(markersingleTrackingMap);
//                   console.log('ADDed MarkerIDmms:' + markersingleTrackingMap.id)
//               }
            
           
       
//               setTimeout(function () {

//                   markersMultipleExtentBound.push(markersingleTrackingMapTop);
//                   try {
//                     if (checkinMultipoint != mulptipoint) {
//                           markersingleTrackingMapTop.setMap(null);

//                           for (var i = 0; i < markersIDs.length; i++) {


//                               console.log("ALL  MARKERsxxxxxxxxxxx:" + markersIDs[i].id);
//                               // markers[1].setMap(null);
//                               //console.log('MARKER TO BE DELETED:' + markersMultipleID_Deleted[0])


//                               if (markersIDs[i].id == '2.98867666666667WTP2681') {
//                                   console.log("CAUGxxxxxxxxxxxxxxxxxxHTS:" + markersIDs[i].id);

//                                   markersIDs[i].setMap(null);

//                                   //Remove the marker from array.
//                                //    markersIDs.splice(i, 1);
//                                   ///  markersMultipleID_Deleted.length = 0;
//                                   //  return;
//                               }

//                               //if (markersIDs[i].id == '3.06216166666667WTP2681') {
//                               //    console.log("CAUGxxxx3.06216166666667WTP2681S:" + markersIDs[i].id);

//                               //    markersIDs[i].setMap(null);

//                               //    //Remove the marker from array.
//                               //    //   markersIDs.splice(i, 1);
//                               //    ///  markersMultipleID_Deleted.length = 0;
//                               //    //  return;
//                               //}



//                           }






//                     }


//                   } catch (err) {
//                       console.log(err);
//                   }
              
//               }, 2000);




//               checkinMultipoint = mulptipoint;
           


//            } else if (AttachedLabelOnMarker == '0') {

//               var markersingleTrackingMap = new MarkerWithLabel({
//                    position: boundreboundlatlongsingleTrackingMap,
//                    icon: image,
//                    flat: true,
//                    draggable: false,
//                    map: singleTrackingMap,
//                    title: TrackID
//                });

//            }
//        }
  

//        //singleTrackingMapchecklong = Longitude;

     
//        //markers.push(markersingleTrackingMapTop);
       
        
      


       

//        google.maps.event.addListener(markersingleTrackingMapTop, 'mousedown',
//function (event) {


//    if (!this.overlay) {
//        this.overlay = Ext.Viewport.add(_LiveTracking_InfoPanel);



//    }

//    this.overlay.show();
//    //   setsingleTrackingMapDetails();
//   Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Fetching..</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


//});
//    }
//    catch (ert) {
//        console.log(ert);
//    }
//}
























//function DeleteMarkersingleTrackingMap(id) {
//    //Find and remove the marker from the Array
//    MultipleGeocodeAdd.length = 0;
//   // console.log("DELETEEEE IDDDD:"+id);
//    for (var i = 0; i < markers.length; i++) {

//     //   console.log("ALL MARKER with id:" + markers[i].id);

//        if (markers[i].id == markersMultipleID_Deleted[0]) {
//            console.log("CAUGHT:" + id);
//            markers[i].setMap(null);
           
//            //Remove the marker from array.
//        //  markers.splice(i, 1);
//           // return;
//        }
       
//    }



//    var index = markersMultipleID.indexOf(markersMultipleID_Deleted[0]);
//    if (index >= 0) {
        
//       markersMultipleID.splice(index, 1);
//        console.log('DELETEDDDDDDDDD MULTI MARKERWWWWWWWWWWWWWWWWWWWWW');
//      markersMultipleID_Deleted.length = 0;
//    }
//}

//function stopClocksingleTrackingMaps() {
//        startsingleTrackingMaps('stop','01');
//       // console.log("STOPED");
//        // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
//      //  window.clearInterval(clockgeofence);
//        singleTrackingMapchecklong = '000';
//        singleTrackingMapsec = 0;

//        clickedsingleTrackingMap = false;

//    }


   




  


//    function getCurrentLocationsingleTrackingMap() {
//        var me = this;
//        if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(function (position) {
//                me.latitude = position.coords.latitude;
//                me.longitude = position.coords.longitude;

//                me.position = new google.maps.LatLng(me.latitude, me.longitude);
//                geoX = me.longitude;
//                geoY = me.latitude;

//            });
//        } else {
//             Ext.Msg.alert("Sorry, browser does not support geolocation!");
         
//        }
//    }

  
//    var uniqueIdOverViewmap = 1;
//    var uniqueIdDockOverViewmap = 1;
//    var uniqueIdOverViewmapMobileStreetView = 1;
//    var uniqueIdOverViewmapWebStreetView = 1;
//    var uniqueIdgeoLocationMarker = 1;
//    var markerOverViewMap;
   
//    var markersOverViewMapArr = [];
//    var markersDockOverViewMapArr = [];
//    var markerOverViewMapMobileStreetViewArr = [];
//    var markerOverViewMapWebStreetViewArr = [];
//    var geoLocationArr = [];








//    function setOverViewMapMarker(long, lat) {
//        console.log(long);
//        console.log(lat);
     
//        boundOverViewMap = new google.maps.LatLng(long, lat);
//        markerOverViewMap = new google.maps.Marker({
//            position: boundOverViewMap,
//            map: petaOverViewmap,
//        });

       


//        markerOverViewMap.id = uniqueIdOverViewmap;
      
//        if (uniqueIdOverViewmap > 1) {
//            DeleteMarkerOverViewMap(markerOverViewMap.id - 1);
//        }
       
//        if (ActivatedStreetView == 'yes')
//        {
//            var StreetViewPoint = new google.maps.LatLng(latitude, longitude);


//            StreetViewSingleTracking = petaOverViewmap.getStreetView();
//            StreetViewSingleTracking.setPosition(StreetViewPoint);
//            StreetViewSingleTracking.setPov({
//                heading: Direction,
//                // heading: heading,
//                pitch: 0
//            });
//            StreetViewSingleTracking.setVisible(true);
//            StreetViewSingleTracking.setOptions({
//                //addressControlOptions: {
//                //    position: google.maps.ControlPosition.BOTTOM_CENTER
//                //},
//                linksControl: false,
//                panControl: false,
//                addressControl: false,
//                enableCloseButton: false,
//                zoomControl: false,
//                fullscreenControl: false,
//                enableCloseButton: false,
//                //addressControlOptions: {
//                //    position: google.maps.ControlPosition.BOTTOM_RIGHT,
//                //},
//                //zoomControlOptions: {
//                //    position: google.maps.ControlPosition.BOTTOM_RIGHT
//                //},
//                //panControlOptions: {
//                //    position: google.maps.ControlPosition.BOTTOM_RIGHT
//                //},
//            })
//        }
//        else
//        {
          
          
//            petaOverViewmap.setCenter(boundOverViewMap)
//            petaOverViewmap.setZoom(17);
//        }
        
      
       
//      //  panoramapetaOverViewmap
//        uniqueIdOverViewmap++;
       
//        markersOverViewMapArr.push(markerOverViewMap);
     
//    }


//    function DeleteMarkerOverViewMap(id) {
//        for (var i = 0; i < markersOverViewMapArr.length; i++) {
//            if (markersOverViewMapArr[i].id == id) {
//                //Remove the marker from Map                  
//                markersOverViewMapArr[i].setMap(null);

//                //Remove the marker from array.
//                markersOverViewMapArr.splice(i, 1);
//                return;
//            }
//        }
//    }

   







 

//    function setOverViewMapMarkerMobile(long, lat) {

//        var BoundMapMarkerMobile = new google.maps.LatLng(long, lat);
//        var dockMarkerOverViewMap = new google.maps.Marker({
//            position: BoundMapMarkerMobile,
//            map: dockOverViewMap,
//        });
//        dockMarkerOverViewMap.id = uniqueIdDockOverViewmap;
//      //  console.log(uniqueIdDockOverViewmap);
//        if (uniqueIdDockOverViewmap > 1) {
//            DeleteMarkerDockOverViewMap(dockMarkerOverViewMap.id - 1);
//        }
//        dockOverViewMap.setCenter(BoundMapMarkerMobile)
//        dockOverViewMap.setZoom(16);
    
//        uniqueIdDockOverViewmap++;
//        markersDockOverViewMapArr.push(dockMarkerOverViewMap);

//    }


//    function DeleteMarkerDockOverViewMap(id) {
//        for (var i = 0; i < markersDockOverViewMapArr.length; i++) {
//            if (markersDockOverViewMapArr[i].id == id) {
//                //Remove the marker from Map                  
//                markersDockOverViewMapArr[i].setMap(null);

//                //Remove the marker from array.
//                markersDockOverViewMapArr.splice(i, 1);
//                return;
//            }
//        }
//    }



//    function setOverViewMapMarkerWebStreetView(long, lat) {
//       // alert(long);
//        var BoundMapMarkerMobile = new google.maps.LatLng(long, lat);
//        var ViewMapMarkerWebStreetView = new google.maps.Marker({
//            position: BoundMapMarkerMobile,
//            map: gSingleTrackingMapStreetViewOverviewMapWeb,
//        });
//        ViewMapMarkerWebStreetView.id = uniqueIdOverViewmapWebStreetView;

//        if (uniqueIdOverViewmapWebStreetView > 1) {
//            DeleteMarkerOverViewMapMarkerWebStreetView(ViewMapMarkerWebStreetView.id - 1);
//        }
//        gSingleTrackingMapStreetViewOverviewMapWeb.setCenter(BoundMapMarkerMobile)
//        gSingleTrackingMapStreetViewOverviewMapWeb.setZoom(14);

//        uniqueIdOverViewmapWebStreetView++;
//        markerOverViewMapWebStreetViewArr.push(ViewMapMarkerWebStreetView);
//    }


//    function DeleteMarkerOverViewMapMarkerWebStreetView(id) {
//        for (var i = 0; i < markerOverViewMapWebStreetViewArr.length; i++) {
//            if (markerOverViewMapWebStreetViewArr[i].id == id) {
//                //Remove the marker from Map                  
//                markerOverViewMapWebStreetViewArr[i].setMap(null);

//                //Remove the marker from array.
//                markerOverViewMapWebStreetViewArr.splice(i, 1);
//                return;
//            }
//        }
//    }


//    function setOverViewMapMarkerMobileStreetView(long, lat) {
//        var BoundMapMarkerMobile = new google.maps.LatLng(long, lat);
//        var ViewMapMarkerMobileStreetView = new google.maps.Marker({
//            position: BoundMapMarkerMobile,
//            map: gSingleTrackingMapStreetViewOverviewMapMobile,
//        });
//        ViewMapMarkerMobileStreetView.id = uniqueIdOverViewmapMobileStreetView;
       
//        if (uniqueIdOverViewmapMobileStreetView > 1) {
//            DeleteMarkerOverViewMapMarkerMobileStreetView(ViewMapMarkerMobileStreetView.id - 1);
//        }
//        gSingleTrackingMapStreetViewOverviewMapMobile.setCenter(BoundMapMarkerMobile)
//        gSingleTrackingMapStreetViewOverviewMapMobile.setZoom(16);

//        uniqueIdOverViewmapMobileStreetView++;
//        markerOverViewMapMobileStreetViewArr.push(ViewMapMarkerMobileStreetView);
//    }

//    function DeleteMarkerOverViewMapMarkerMobileStreetView(id) {
//        for (var i = 0; i < markerOverViewMapMobileStreetViewArr.length; i++) {
//            if (markerOverViewMapMobileStreetViewArr[i].id == id) {
//                //Remove the marker from Map                  
//                markerOverViewMapMobileStreetViewArr[i].setMap(null);

//                //Remove the marker from array.
//                markerOverViewMapMobileStreetViewArr.splice(i, 1);
//                return;
//            }
//        }
//    }





//    function DeleteMarkerGeolocation(id) {
//        console.log('DeleteMarkerGeolocation:' +id);
//        for (var i = 0; i < geoLocationArr.length; i++) {
//            if (geoLocationArr[i].id == id) {
//                //Remove the marker from Map                  
//                geoLocationArr[i].setMap(null);

//                //Remove the marker from array.
//                geoLocationArr.splice(i, 1);
//                return;
//            }
//        }
//    }

   
//    function geolocate(isFirstLoad) {
//        var me = this;
//        if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(function (position) {
//                me.latitude = position.coords.latitude;
//                me.longitude = position.coords.longitude;

//                me.position = new google.maps.LatLng(me.latitude, me.longitude);
//                geolocationX = me.longitude;
//                geolocationY = me.latitude;
//                var geoLocation = new google.maps.LatLng(geolocationY, geolocationX);
//                if(isFirstLoad=='yes')
//                {
//                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting GeoLocation..Please Wait.' });
//                    var task = Ext.create('Ext.util.DelayedTask', function () {
//                        singleTrackingMap.setCenter(geoLocation)
//                        singleTrackingMap.setZoom(16);
//                        Ext.Viewport.unmask();
//                    });
//                    task.delay(1500);
                                   
//                }



//            });
//        } else {
//             Ext.Msg.alert("Sorry, browser does not support geolocation!");
           
//        }
//    }

    

//    function setsingleTrackingMapDetails() {
//        // alert(gFenceAlertResponderRelations);
       
//    }


   
//    function setTrackingInfoPanel(strTrackID, strTrackItem, strSpeed, strTime, strTrackerModel, strVersion, strInterval, strExpiredDate, strStatus, strCreatedDate, strBatteryReading, strGPSSimNumber,strMillage)
//    {
//        var currentSpeed = parseFloat(strSpeed);
//        if (currentSpeed > maxSpeed)
//        { maxSpeed = currentSpeed }
//        Ext.getCmp('TrackingInfopanelTbl').setHtml('<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');      
//        Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');
//        Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHtml('<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >' + strSpeed + ' KM/H</td> <td class="tdstreetViewTblInfo">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">' + strTime + '</td> </tr>  </table></div>');






//        Ext.getCmp('LiveTrackingInfoPanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strTrackItem + '</td> <td class="tde">' + strTrackID + '</td></tr> <tr > <td class="tdk">Track Item</td> <td class="tdk">Track ID</td></tr><tr > <td class="tde">' + strStatus + '</td> <td class="tde">' + strVersion + '</td></tr> <tr > <td class="tdk">Account Status</td> <td class="tdk">Version</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');
//        Ext.getCmp('LiveTrackingInfoPanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strTrackerModel + '</td> <td class="tde">' + strInterval + ' </td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Interval</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
//        Ext.getCmp('LiveTrackingInfoPanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strBatteryReading + '</td> <td class="tde">' + strGPSSimNumber + '</td></tr> <tr > <td class="tdk">Battery Reading</td> <td class="tdk">SimCard Number</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
//        Ext.getCmp('LiveTrackingInfoPanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strCreatedDate + '</td> <td class="tde">' + strExpiredDate + '</td></tr> <tr > <td class="tdk">Date Registered</td> <td class="tdk">Expired Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');



//     //   Ext.getCmp('GeofenceInfopanelMillageTable').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 38px; color: #fff; text-align: center;  valign:top; height:20%">' + strMillage + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;  valign:top;  height:20% "><b>Milliage Counted (Approximate)</b></td> </tr>  </table>');
//        Ext.getCmp('btnStreetViewMiliageInfo').setHtml('<div class="transbox1"><font size="6" color="white"><br>' + strMillage + '</font><br><font size="2" color="white">Millages</font></div>');

    
//       // html: '<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
//    }