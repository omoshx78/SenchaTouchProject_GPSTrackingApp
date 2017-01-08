var petahistory ;
var dialogboxHistoryTimeset;



Ext.define('MyGPS.view.TrackingHistory.TrackingHistoryMap', {
    extend: 'Ext.Panel',
    requires: [
      'Ext.data.Store'

    ],
    xtype: 'HistoryMap',
    config: {
        // fullscreen: true,
        id: 'HistoryMapID',

        layout: { type: 'card', animation: { type: 'slide', direction: 'left' } },
        //layout: 'card',
        items: [

            

        //second item

 {



     xtype: 'map',
     id: 'HistoryMapcard',
     mapOptions: {

         // center: new google.maps.LatLng(5.4445234, 101.91246603),
         zoom: 6,
         //mapTypeId: google.maps.MapTypeId.HYBRID,
         mapTypeId: google.maps.MapTypeId.ROADMAP,



         streetViewControl: true,
         streetViewControlOptions: {
             position: google.maps.ControlPosition.TOP_RIGHT,
         },
         mapTypeControl: true,
         mapTypeControlOptions: {
             style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
             position: google.maps.ControlPosition.TOP_RIGHT
         },
         //zoomControl: true,
         //zoomControlOptions: {
         //    position: google.maps.ControlPosition.LEFT_TOP,
         //},
     },

     listeners: {
         maprender: function (comp, map) {

             petahistory = map;

           
         }
     },






     items: [



         {

             xtype: 'toolbar',
             title: 'History Route',
             docked: 'top',
             id: 'toolbarHistoryMapTop',
             //  hidden:true,
             items:
                    [


                        {
                            xtype: 'button',

                            id: 'btnHistoryMappHome',
                            //  text: 'Show',
                            iconCls: 'home',
                            // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                            ui: 'plain',
                            handler: function () {
                                Ext.getCmp('mainView').setActiveItem(1);
                                SetTrackingHistoryMapInfoPanelHide();
                                TrackingHistoryMapPlayTrackedPanelHide();
                                if (isrecenter == '1') {
                                    resetMap();
                                }
                            }



                        },




                    ]

         },





         {


             xtype: 'toolbar',
             // xtype: 'titlebar',
             docked: 'bottom',

             items: [


                 
                  {
                      xtype: 'spacer'
                  },

                  {
                      //  align: 'center',
                      // width: 50,
                      ui: 'action',
                      xtype: 'button',
                      id: 'showInfoButtonHistoryMap',
                      text: 'show Info',
                      handler: function (btn) {

                        //  Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 26px; color: #fff; text-align: center;">0</td> </tr> <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: bold;">0.0km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">00:00:00:00:0</td> </tr>  </table>');

                          // _valuepanelhistoryPlay.show();
                          //  _valuepanelhistoryinfo.show();


                          //Ext.Viewport.remove(_trackingHistoryMapInfoPanel)

                          //this.overlay = Ext.Viewport.add(TrackingHistoryMapInfoPanel());
                          //this.overlay.show();
                          SetTrackingHistoryMapInfoPanelShow();
                          SetTrackingHistoryMapInfoPanelDetails();
                      
                      }
                  },
                   {
                       //  align: 'center',
                       //height: 10,
                       //margin: '2 10 2 10',
                       //   ui: 'plain',
                       xtype: 'button',
                       ui: 'action',
                       id: 'backButtonHistoryMap',
                       text: 'Back',
                       handler: function () {
                           SetTrackingHistoryMapInfoPanelHide();
                           TrackingHistoryMapPlayTrackedPanelHide();
                           Ext.getCmp('mainView').setActiveItem(5);
                           if (isrecenter == '1') {
                               resetMap();
                           }





                       }
                   },
             ]


         }]






 },








        ]
    }
});
var pathXY = "";
var LatitudeHH;
var LongitudeHH;
var SpeedHH;
var DateDTHH;
var _DataStore_getTrackID;
var dateFrom;
var dateFromFormated;
var dateTo;
var dateToFormated;
var timeFrom = '00:00';
var timeTo = '00:00';
var trackID;
var TrackItem;
var lineXYpath = [];
var Xarr = [];
var Yarr = [];
var Spdarr = [];
var DTarr = [];
var xyHistory = [];
var markersArray = [];
var flightPath;

var polyLengthInMeters;
var isrecenter;





function plotingHistoryXypath() {

    console.log(Get_trackingHistoryMapConfig_creteria());
    console.log(Get_trackingHistoryMapConfig_DeviceID());
    console.log(Get_trackingHistoryMapConfig_trackID());
    console.log(GetCurrentUserAccountNo());
    console.log(Get_trackingHistoryMapConfig_dateFromFormated() + ' ' + Get_trackingHistoryMapConfig_timeFrom());
    console.log(Get_trackingHistoryMapConfig_dateFromFormated() + ' ' + Get_trackingHistoryMapConfig_timeTo());




    Ext.getStore('TrackingHistoryMapStore').getProxy().setExtraParams({
        Createria: Get_trackingHistoryMapConfig_creteria(),
        DeviceID: Get_trackingHistoryMapConfig_DeviceID(),
        TrackID: Get_trackingHistoryMapConfig_trackID(),
        AccountNo: GetCurrentUserAccountNo(),
        DateFrom: Get_trackingHistoryMapConfig_dateFromFormated() + ' ' + Get_trackingHistoryMapConfig_timeFrom(),
        DateTo: Get_trackingHistoryMapConfig_dateFromFormated() + ' ' + Get_trackingHistoryMapConfig_timeTo(),

    });
    Ext.StoreMgr.get('TrackingHistoryMapStore').load();
  
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        Ext.getStore('TrackingHistoryMapStore').getProxy().setExtraParams({
            Createria: Get_trackingHistoryMapConfig_creteria(),
            DeviceID: Get_trackingHistoryMapConfig_DeviceID(),
            TrackID: Get_trackingHistoryMapConfig_trackID(),
            AccountNo: GetCurrentUserAccountNo(),
            DateFrom: Get_trackingHistoryMapConfig_dateFromFormated() + ' ' + Get_trackingHistoryMapConfig_timeFrom(),
            DateTo: Get_trackingHistoryMapConfig_dateFromFormated() + ' ' + Get_trackingHistoryMapConfig_timeTo(),

        });
        Ext.StoreMgr.get('TrackingHistoryMapStore').load();
        var myStoreHH = Ext.getStore('TrackingHistoryMapStore');
        var co = myStoreHH.getCount();
     
        var ii = 0;
        Xarr.length = 0;
        Yarr.length = 0;
        Spdarr.length = 0;
        DTarr.length = 0;
        pathXY = "";
        if (co > 1) {
            pointCount = co;
            _trackingHistoryMapConfig_pointCount = co;
         //   var modelRecordHHH = myStoreHH.getAt(0);
         

            console.log("first:" + pointCount);
            for (ii = 0; ii < co; ii++) {
                var modelRecordHH = myStoreHH.getAt(ii);    
                Xarr[ii] = modelRecordHH.get('Longitude');
                Yarr[ii] = modelRecordHH.get('Latitude');
                Spdarr[ii] = modelRecordHH.get('Speed');
                DTarr[ii] = modelRecordHH.get('DateDT');              
                pathXY += "[" + LatitudeHH + "," + LongitudeHH + ",'" + SpeedHH+"'],";


            }
           
            isrecenter = '1';
            drawlinexypathhistory(pathXY);
        } else {
            isrecenter = '0';
            Ext.Msg.alert("No Signal Point Detected.!!");
           
        }

        Ext.Viewport.unmask();

    });
    task.delay(2000);

}



//var infoBubble;
var map;
var bounds;
var imagie;
var flightPath;
var travellength;
var travellengthkm;
var marker, i;
var pointCount;
//var flightPlanCoordinates = new Array();
function drawlinexypathhistory(XYhistoryPath) {
    // flightPlanCoordinates.length = 0;


    var flightPlanCoordinates = new Array();

    var locations = [];
  
    setTimeout(function () {



        bounds = new google.maps.LatLngBounds();

        for (i = 0; i < Xarr.length; i++) {
            //var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
            // bounds.extend(point);
            var point = new google.maps.LatLng(Yarr[i], Xarr[i]);
            bounds.extend(point);
            //  console.log(locations[i][0], locations[i][1]);
            marker = new google.maps.Marker({
                //    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
                position: new google.maps.LatLng(Yarr[i], Xarr[i]),
                animation: google.maps.Animation.DROP,
                //icon: imagie,
                map: petahistory
            });

            markersArray.push(marker);








            flightPlanCoordinates.push(point);
            var flightPath = new google.maps.Polyline({
                path: flightPlanCoordinates,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });

            lineXYpath.push(flightPath);

            flightPath.setMap(petahistory);
            polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPath.getPath().getArray());
            // var travellength = parseInt(polyLengthInMeters);
            travellength = +Math.floor(polyLengthInMeters);


            google.maps.event.addListener(marker, 'mousedown', (function (marker, i) {


                return function () {
                    var infowindow = new google.maps.InfoWindow();
                    var dt = DTarr[i].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');


                    infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>");
                    infowindow.open(petahistory, marker);
                }
            })
    (marker, i));


        }

        petahistory.fitBounds(bounds);
        travellengthkm = travellength / 1000;
        _trackingHistoryMapConfig_travellengthkm = travellengthkm.toFixed(1) + " KM";
        SetTrackingHistoryMapInfoPanelShow();
        SetTrackingHistoryMapInfoPanelDetails();

        firstime = '1';
      
      //  Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + " KM" + "| Point:" + pointCount + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
    }, 1000);
   

}


var isfirst = '1';
function initxy() {
    alert("initxffffy");
    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }

    Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
        AccNo: AAccountNo,
        tracID: Ext.getCmp('HistoryTrackingID').getValue(),


    });
    Ext.StoreMgr.get('trackingitemhistorystore').load();

    var myStoreH = Ext.getStore('trackingitemhistorystore');
    var modelRecordH = myStoreH.getAt(0);

    //plotingpoint();
    Ext.getStore('signalhistorystore').getProxy().setExtraParams({
        DeviceID: modelRecordH.get('DeviceID'),
        TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
        GPSSimNumber: modelRecordH.get('GPSSimNumber'),
        DateFrom: dateFromFormated + ' ' + timeFrom,
        DateTo: dateToFormated + ' ' + timeTo,

    });
    Ext.StoreMgr.get('signalhistorystore').load();



    Ext.getStore('signalhistorystore').getProxy().setExtraParams({
        DeviceID: modelRecordH.get('DeviceID'),
        TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
        GPSSimNumber: modelRecordH.get('GPSSimNumber'),
        DateFrom: dateFromFormated + ' ' + timeFrom,
        DateTo: dateToFormated + ' ' + timeTo,

    });
    Ext.StoreMgr.get('signalhistorystore').load();
    var myStoreHH = Ext.getStore('signalhistorystore');
    var co = myStoreHH.getCount();

    TrackItem = modelRecordH.get('TrackItem');


    var ii = 0;
    Xarr.length = 0;
    Yarr.length = 0;
    Spdarr.length = 0;
    DTarr.length = 0;
    pathXY = "";
    if (co > 1) {

        for (ii = 0; ii < co; ii++) {
            var modelRecordHH = myStoreHH.getAt(ii);

            Xarr[ii] = modelRecordHH.get('Longitude');
            Yarr[ii] = modelRecordHH.get('Latitude');
            Spdarr[ii] = modelRecordHH.get('Speed');
            DTarr[ii] = modelRecordHH.get('DateDT');


        }

        isrecenter = '1';

    }


    myLoopXY();


}




var ixy = 1;                     //  set your counter to 1

function calcDistance(p1, p2) {
    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(1);
}


var flightPlanCoordinatess = new Array();
var ttpoint;
//var XYinit;
function loopingXY(number) {
    console.log(number);

    // alert(Yarr[number] + ',' + Xarr[number]);


    if (number == "1") {

        ttpoint = Xarr.length - 1
        //  alert(XYinit);
      //  Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">Calculating..</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
        if (markersArray) {
            for (i in markersArray) {
                markersArray[i].setMap(null);
            }
            markersArray.length = 0;
        }
        if (lineXYpath) {
            for (i in lineXYpath) {
                lineXYpath[i].setMap(null);
            }
            lineXYpath.length = 0;
        }
    }
    var rnumber = number - 1;

    //var point = new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]);
    //bounds.extend(point);
    //  console.log(locations[i][0], locations[i][1]);
    marker = new google.maps.Marker({
        //    position: new google.maps.LatLng(locations[i][0], locations[i][1]),
        position: new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]),
        // animation: google.maps.Animation.DROP,
        //icon: imagie,
        map: petahistory
    });


    //NEW


    //var XYinit = new google.maps.LatLng(Yarr[0], Xarr[0]);

    //var restXY= new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]);


    var p1 = new google.maps.LatLng(Yarr[0], Xarr[0]);
    var p2 = new google.maps.LatLng(Yarr[rnumber], Xarr[rnumber]);
    //_trackingHistoryMapConfig_travellengthkm = calcDistance(p1, p2);
    //alert(calcDistance(p1, p2));
    //var fres
    //  alert(XYinit + " ------ " + restXY);
    //alert();
    //console.log(XYinit);
    //console.log(restXY);



    //var calculateR = google.maps.geometry.spherical.computeDistanceBetween((XYinit, restXY) / 1000).toFixed(2);
    //alert(calculateR);

    //  polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPaths.getPath().getArray());
    // var travellength = parseInt(polyLengthInMeters);
    //  travellength = +Math.floor(polyLengthInMeters);

    SetTrackingHistoryMapInfoPanelDetailsPlay(calcDistance(p1, p2));

//// Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + calcDistance(p1, p2) + " KM | Total Point:" + ttpoint + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');


    //  _valuepanelStatusPlay.hide();

    //


    var dtt = DTarr[rnumber].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');
    markersArray.push(marker);
    Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 28px; color: #fff; text-align: center;"><b>' + rnumber + '</b></td> </tr> <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;   font-weight: bold;"><b>' + Spdarr[rnumber] + 'km/h</b></td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 12px; color: #fff; text-align: center;  "><b>' + dtt + '</b></td> </tr>  </table>');
   // html:                                    '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">1</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Point</td> </tr>    <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: bold;">80km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">10:02:06 AM</td> </tr>  </table>',




    //   Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="3" rowspan="2" font-weight: bold; style="background-color: red;  font-size: 25px; color: #fff; text-align: center;">' + rnumber + '</td> </tr>  <tr > <td colspan="3" style="background-color: red;  font-size: 15px; color: #fff; text-align: center;   font-weight: bold;">' + Spdarr[rnumber] + 'km/h</td> </tr> <tr> <td colspan="3" style="background-color: red; font-weight: bold; font-size: 15px; color: #fff; text-align: center;  ">' + dtt + '</td> </tr>  </table>');
    google.maps.event.addListener(marker, 'mousedown', (function (marker, rnumber) {


        return function () {
            var infowindow = new google.maps.InfoWindow();
            var dt = DTarr[rnumber].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');


            infowindow.setContent("<font color=red>Signal seq:<b>" + rnumber + "</b><br> Speed :<b>" + Spdarr[rnumber] + "km/h</b><br> Time :<b>" + dt + "</b></font>");
            infowindow.open(petahistory, marker);
        }
    })
(marker, rnumber));


    //  console.log(rnumber+'-----'+number + '-------' + pointCount)

    if (number == pointCount) {

        Ext.Msg.show({
            title: 'DONE..',
            message: 'Draw line over point?',
            width: 500,
            buttons: Ext.MessageBox.YESNO,
            iconCls: Ext.MessageBox.INFO,
            fn: function (buttonId) {
                if (buttonId != "yes") {
                    firstime = '1';
                    resumeCounter = 0;
                    counter = 0;
                    btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                    //  Ext.getCmp('playTrackhistorylbl').setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                    firstime = '1'; return;
                }
                Ext.Viewport.mask({ xtype: 'loadmask', message: 'Drawing Line...' });
                var task = Ext.create('Ext.util.DelayedTask', function () {




                    var flightPlanCoordinates = new Array();

                    var points;

                    for (i = 0; i < Xarr.length; i++) {
                        //var point = new google.maps.LatLng(locations[i][0], locations[i][1]);
                        // bounds.extend(point);
                        points = new google.maps.LatLng(Yarr[i], Xarr[i]);
                        flightPlanCoordinates.push(points);
                    }




                    var flightPath = new google.maps.Polyline({
                        path: flightPlanCoordinates,
                        geodesic: true,
                        strokeColor: '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 2
                    });

                    lineXYpath.push(flightPath);

                    flightPath.setMap(petahistory);
                    polyLengthInMeters = google.maps.geometry.spherical.computeLength(flightPath.getPath().getArray());
                    // var travellength = parseInt(polyLengthInMeters);
                    travellength = +Math.floor(polyLengthInMeters);

                //    SetTrackingHistoryMapInfoPanelDetailsPlay(travellengthkm.toFixed(1));
                  //  Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + " KM | Total Point:" + ttpoint + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
                    firstime = '1';
                    resumeCounter = 0;
                    counter = 0;
                    btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                    Ext.Viewport.unmask();
                });
                task.delay(2000);

            }
        });



    }
    //drawline(Xarr[rnumber], Yarr[rnumber]);













}



function removeLine() {
    //for (i = 0; i < line.length; i++) {
    //    line[i].setMap(null); //or line[i].setVisible(false);
    //}
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }




}




function resetMap() {

    var bound;

    if (markersArray) {
        for (i in markersArray) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }
    if (lineXYpath) {
        for (i in lineXYpath) {
            lineXYpath[i].setMap(null);
        }
        lineXYpath.length = 0;
    }



    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-Center Map...' });
    var task = Ext.create('Ext.util.DelayedTask', function () {


        petahistory.setZoom(5);      // This will trigger a zoom_changed on the map
        petahistory.setCenter(new google.maps.LatLng(4.65307992, 102.11242676));
        Ext.Viewport.unmask();

    });
    task.delay(1000);



}