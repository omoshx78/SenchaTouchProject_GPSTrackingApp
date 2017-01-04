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
Ext.define('MyGPS.view.gpsTracking.gpsTrackingProcess', {


    extend: 'Ext.Container',

    requires: ['Ext.Map', 'Ext.dataview.List',
        'Ext.data.Store', 'Ext.field.Select',
        'Ext.field.Hidden', 'Ext.form.FieldSet', ],


    xtype: 'gpsTrackingProcess',


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
                    style: google.maps.MapTypeControlStyle.DEFAULT,
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: true,
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














var Direction = parseFloat('16.86');;




function loadmarkerSingleTrackingMap(SingleTrackID) {
    singleTrackingMapchecklong = '000';
    Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
        TrackID: SingleTrackID,
        AccountNo: AAccountNo
    });
    Ext.StoreMgr.get('singlesignalTrackingstore').load();
    Ext.getCmp('Infogeofenceinfo').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">GeoFences Info</td> <td class="tdgpsdata"></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Tracking ID</td> <td class="tdgpslabel">' + SingleTrackID + '</td></tr><tr> <td class="tdgpslabel">Track Item</td> <td class="tdgpslabel">' + trackingItems + '</td></tr><tr> <td class="tdgpslabel">Geofence Length</td> <td class="tdgpslabel">' + geofencetravellengthkm + '</td></tr><tr> <td class="tdgpslabel">Geofence Alert</td> <td class="tdgpslabel">' + Ext.getCmp('AccAlertPhone').getValue() + '</td></tr></table>');
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
            TrackID: SingleTrackID,
            AccountNo: AAccountNo
        });
        Ext.StoreMgr.get('singlesignalTrackingstore').load();
        var myStore = Ext.getStore('singlesignalTrackingstore');
        var modelRecord = myStore.getAt(0);
        var latGeofence = modelRecord.get('Latitude');
        var longGeofence = modelRecord.get('Longitude');
        Direction = parseFloat(modelRecord.get('Direction'));
        boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(latGeofence, longGeofence);

        var posisigeofence = new google.maps.LatLng(latGeofence, longGeofence);
        singleTrackingMap.setCenter(posisigeofence)
        singleTrackingMap.setZoom(16);
        Ext.Viewport.unmask();
        stopClocksingleTrackingMapsStreetView();
        startsingleTrackingMaps('start', SingleTrackID);
    });
    task.delay(1000);



}


var SingleTrackIDRetained;
var clickedsingleTrackingMap = false;
var singleTrackingMapsec = 0;
var timer = 0;
function startsingleTrackingMaps(val, SingleTrackID) {
    var valSingleTrackID = SingleTrackID;

    singleTrackingMapchecklong = '000';
    if (val == 'start') {
        timer = setInterval(function () {
            singleTrackingMapsec = singleTrackingMapsec + 1;
            //console.log("Running:" + singleTrackingMapsec);
            //console.log(valSingleTrackID + ':vvvvvvvvvvvvvvvXXXX');
            if (singleTrackingMapsec == 1) {
                Ext.getStore('singlesignalTrackingstore').getProxy().setExtraParams({
                    TrackID: valSingleTrackID,
                    AccountNo: AAccountNo
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



                        //var latGeofence = modelRecord.get('Latitude');
                        //var longGeofence = modelRecord.get('Longitude');
                        //var geofenceSpeed = modelRecord.get('Speed');
                        //var geofenceTrackID = modelRecord.get('TrackID');
                        ////IMEI_no = modelRecord.get('IMEI_no');
                        ////GPSSimNumber = modelRecord.get('GPSSimNumber');
                        ////BatteryReading = modelRecord.get('BatteryReading');
                        //var gfenceTrackItem = modelRecord.get('TrackItem');
                        ////TrackItemType = modelRecord.get('TrackItemType');
                        ////GPSModel = modelRecord.get('GPSModel');
                        ////AccountNo = modelRecord.get('AccountNo');
                        //var geofenceDateDT = modelRecord.get('DateDT');


                        //var gFenceAlertResponder = modelRecord.get('FenceAlertResponder');
                        //var gFenceAlertResponder2 = modelRecord.get('FenceAlertResponder2');
                        //var gFenceAlertResponder3 = modelRecord.get('FenceAlertResponder3');
                        //var gFenceAlertResponder4 = modelRecord.get('FenceAlertResponder4');
                        //var gFenceAlertResponderRelations = modelRecord.get('FenceAlertResponderRelations');
                        //var gFenceAlertResponderRelations2 = modelRecord.get('FenceAlertResponderRelations2');
                        //var gFenceAlertResponderRelations3 = modelRecord.get('FenceAlertResponderRelations3');
                        //var gFenceAlertResponderRelations4 = modelRecord.get('FenceAlertResponderRelations4');
                        //var gFencelenght = modelRecord.get('Fencelenght');
                        //var gCreateddate = modelRecord.get('Createddate');
                        //var gFenceName = modelRecord.get('FenceName');
                        //var bSex = modelRecord.get('Sex');
                        //var bAge = modelRecord.get('Age');
                        //var bRisk = modelRecord.get('Risk');

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


                        setTrackingInfoPanel(TrackID, TrackItem, Speed, DateDT, GPSModel, TrackingMode, Interval, ExpiredDate, Status, CreatedDate, BatteryReading, GPSSimNumber, Spare2);
                        longitude = Longitude;
                        latitude = Latitude;
                        boundreboundlatlongsingleTrackingMap = new google.maps.LatLng(Latitude, Longitude);
                        if (ActiveOverViewMap == 'yes') {

                            if (OS != "Windows") {
                                setOverViewMapMarkerMobile(Latitude, Longitude);

                            }



                            if (OS == "Windows" || OS == "MacOS") {
                                setOverViewMapMarker(Latitude, Longitude);
                            }
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





                        ReversegeocodeAddress(longitude, latitude);
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
                        if (SelectedMarker == 'Red Push Pin') {
                            image = new google.maps.MarkerImage(ip + 'marker02.png', null, null, null, new google.maps.Size(62, 62));
                            if (AttachedLabelOnMarker == '1') {

                                markersingleTrackingMap = new MarkerWithLabel({
                                    position: boundreboundlatlongsingleTrackingMap,
                                    icon: image,
                                    flat: true,
                                    //  optimized: false,
                                    draggable: false,
                                    //labelStyle: { opacity: 0.75 },
                                    // labelContent: "<div style=background-color:Black;width:auto;border:2px solid white;padding:15px;><font size=3 color=white>" + trackingItems + "</font></div>",
                                    labelContent: trackingItems,
                                    labelAnchor: new google.maps.Point(50, 79),
                                    labelClass: "labelsMark",// the CSS class for the label
                                    map: singleTrackingMap,
                                    title: valSingleTrackID
                                });
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
                        if (SelectedMarker == 'Circle Graphic') {
                            image = new google.maps.MarkerImage(ip + '7.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
                            if (AttachedLabelOnMarker == '1') {
                                markersingleTrackingMap = new MarkerWithLabel({
                                    position: boundreboundlatlongsingleTrackingMap,
                                    icon: image,
                                    draggable: false,
                                    flat: true,
                                    labelContent: trackingItems,
                                    labelAnchor: new google.maps.Point(50, 27),
                                    labelClass: "labelsMark",// the CSS class for the label
                                    map: singleTrackingMap,
                                    title: valSingleTrackID
                                });
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


                 if (!this.overlay) {
                     this.overlay = Ext.Viewport.add(_LiveTracking_InfoPanel);



                 }

                 this.overlay.show();
                 //   setsingleTrackingMapDetails();
                 Ext.getCmp('GeofenceDetailpanelHeader').setHtml('<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Fetching..</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img height="127" width="134" src=' + bPicture + '></td> </tr></table>');


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
    startsingleTrackingMaps('stop', '01');
    // console.log("STOPED");
    // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    //  window.clearInterval(clockgeofence);
    singleTrackingMapchecklong = '000';
    singleTrackingMapsec = 0;

    clickedsingleTrackingMap = false;

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



function setsingleTrackingMapDetails() {
    // alert(gFenceAlertResponderRelations);

}



function setTrackingInfoPanel(strTrackID, strTrackItem, strSpeed, strTime, strTrackerModel, strVersion, strInterval, strExpiredDate, strStatus, strCreatedDate, strBatteryReading, strGPSSimNumber, strMillage) {
    var currentSpeed = parseFloat(strSpeed);
    if (currentSpeed > maxSpeed)
    { maxSpeed = currentSpeed }
    Ext.getCmp('TrackingInfopanelTbl').setHtml('<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');
    Ext.getCmp('btnsingleTrackingOverViewMapPointInfolblRightPhone').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdspeedmax">' + strSpeed + ' KM/H</td> <td class="tdspeedmax">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + strTime + '</td> </tr>  </table>');
    Ext.getCmp('btnStreetViewPointInfolblRightWeb').setHtml('<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + strTrackID + '</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + strTrackItem + '</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >' + strSpeed + ' KM/H</td> <td class="tdstreetViewTblInfo">' + maxSpeed + ' KM/H</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">' + strTime + '</td> </tr>  </table></div>');






    Ext.getCmp('LiveTrackingInfoPanel1').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strTrackItem + '</td> <td class="tde">' + strTrackID + '</td></tr> <tr > <td class="tdk">Track Item</td> <td class="tdk">Track ID</td></tr><tr > <td class="tde">' + strStatus + '</td> <td class="tde">' + strVersion + '</td></tr> <tr > <td class="tdk">Account Status</td> <td class="tdk">Version</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel3').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strTrackerModel + '</td> <td class="tde">' + strInterval + ' </td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Interval</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel4').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strBatteryReading + '</td> <td class="tde">' + strGPSSimNumber + '</td></tr> <tr > <td class="tdk">Battery Reading</td> <td class="tdk">SimCard Number</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');
    Ext.getCmp('LiveTrackingInfoPanel5').setHtml('<table class="tabledetail"><tr> <td class="tde">' + strCreatedDate + '</td> <td class="tde">' + strExpiredDate + '</td></tr> <tr > <td class="tdk">Date Registered</td> <td class="tdk">Expired Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>');



    //   Ext.getCmp('GeofenceInfopanelMillageTable').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 38px; color: #fff; text-align: center;  valign:top; height:20%">' + strMillage + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;  valign:top;  height:20% "><b>Milliage Counted (Approximate)</b></td> </tr>  </table>');
    Ext.getCmp('btnStreetViewMiliageInfo').setHtml('<div class="transbox1"><font size="6" color="white"><br>' + strMillage + '</font><br><font size="2" color="white">Millages</font></div>');


    // html: '<div class="transbox"><table class="tblgpssummary">   <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
}