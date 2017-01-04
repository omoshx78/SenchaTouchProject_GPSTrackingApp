
var dialogboxHistoryTimeset;
Ext.define('MyGPS.view.TraceAlertFence.Gmaphistory', {
    extend: 'Ext.Panel',
    requires: [
    'Ext.dataview.List',
        'Ext.data.Store', 'Ext.Map'

    ],
    xtype: 'gMapHistory',
    config: {
        // fullscreen: true,
        id: 'mainViewgmaphistory',
        layout: 'fit',
        // layout: 'card',
        styleHtmlContent: true,
        //layout: { type: 'card', animation: { type: 'slide', direction: 'right' } },
        ////layout: 'card',
        items: [
          

        //second item

 {
     xtype: 'map',
     id: 'maphistorycard',
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
             // xtype: 'titlebar',
             docked: 'bottom',

             items: [


                  {
                      //  align: 'center',
                      //height: 10,
                      //margin: '2 10 2 10',
                      ui: 'action',
                      xtype: 'button',

                      id: 'backButtonhistoryploting',
                      text: '<< Back',
                      handler: function () {
                          _valuepanelhistoryPlay.hide();
                          //Ext.getCmp('mainViewgmaphistory').setActiveItem(0);
                          //if (isrecenter == '1') {
                          //    resetMap();
                          //}
                         
                          var cntr = Ext.ComponentQuery.query("#holderTraceAlertFenceID")[0];
                          cntr.setActiveItem(0);
                          resetMap();
                          //Ext.getCmp('maphistorycard').destroy();


                      }
                  },
                  {
                      xtype: 'spacer'
                  },

                  {
                      //  align: 'center',
                      // width: 50,
                      ui: 'action',
                      xtype: 'button',
                      id: 'testButtonhistoryploting',
                      text: 'Show Info',
                      handler: function (btn) {

                          Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 26px; color: #fff; text-align: center;">0</td> </tr> <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: bold;">0.0km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">00:00:00:00:0</td> </tr>  </table>');


                          if (!this.overlay) {
                              this.overlay = Ext.Viewport.add(_valuepanelhistoryinfo
                          );

                          }
                          this.overlay.show();
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
var petahistory ;
var polyLengthInMeters;
var isrecenter;



//////////////////////////////////////{

//////////////////////////////////////    items: [
//////////////////////////////////////        {    html: ' Track back your item log journey on map by date range.<br> Recommended to put time as paramater to get maximize smoothness of ploting point :',
//////////////////////////////////////            // xtype: 'listTraceAlertFenced',
                   
//////////////////////////////////////        },
                  
              
//////////////////////////////////////         {

//////////////////////////////////////             xtype: 'toolbar',
//////////////////////////////////////             // xtype: 'titlebar',
//////////////////////////////////////             docked: 'bottom',

//////////////////////////////////////             items: [
//////////////////////////////////////              {
//////////////////////////////////////                  xtype: 'spacer',


//////////////////////////////////////              },

//////////////////////////////////////                  {
//////////////////////////////////////                      //  align: 'center',
//////////////////////////////////////                      // width: 50,
//////////////////////////////////////                      ui: 'round',
//////////////////////////////////////                      xtype: 'button',
//////////////////////////////////////                      id: 'runButtonhistoryploting',
//////////////////////////////////////                      text: 'Start Ploting',
//////////////////////////////////////                      handler: function () {
//////////////////////////////////////                          firstime = '1';
//////////////////////////////////////                          resumeCounter = 0;
//////////////////////////////////////                          counter = 0;
//////////////////////////////////////                          Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">null</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">null</td></tr></table>');
                             


//////////////////////////////////////                      }
//////////////////////////////////////                  },
                          
//////////////////////////////////////             ]

//////////////////////////////////////         },
//////////////////////////////////////    ]
//////////////////////////////////////},





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

function continueploting() {
    var continu;
    Ext.Msg.show({
        title: 'Confirmation?',
        message: 'You are not set Time,this will make ploting point taking long time,recommended to set time,Continue?',
        width: 500,
        buttons: Ext.MessageBox.YESNO,
        iconCls: Ext.MessageBox.INFO,
        fn: function (buttonId) {
            //alert('You pressed the "' + buttonId + '" button.');
            continu = buttonId;
        }
    });
    return continu;
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

function plotingHistoryXypath(TrackIDAlert, DateAlert, DateAlert, TrackItemAlert,GeofenceID) {

    Ext.getStore('GeofenceAlertHistoryStore').getProxy().setExtraParams({
        TrackID: TrackIDAlert,
        DateFrom: DateAlert,
        DateTo: DateAlert,
 geofenceID: GeofenceID,
    });
    Ext.StoreMgr.get('GeofenceAlertHistoryStore').load();
   
   

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('GeofenceAlertHistoryStore').getProxy().setExtraParams({
            TrackID: TrackIDAlert,
            DateFrom: DateAlert,
            DateTo: DateAlert,
 geofenceID: GeofenceID,
        });
        Ext.StoreMgr.get('GeofenceAlertHistoryStore').load();
        var myStoreHH = Ext.getStore('GeofenceAlertHistoryStore');
        var co = myStoreHH.getCount();
      
        var ii = 0;
        Xarr.length = 0;
        Yarr.length = 0;
        Spdarr.length = 0;
        DTarr.length = 0;
        pathXY = "";
        if (co >= 1) {
            pointCount = co;
            console.log("first:" + pointCount);
            for (ii = 0; ii < co; ii++) {
                var modelRecordHH = myStoreHH.getAt(ii);
                Xarr[ii] = modelRecordHH.get('Longituded');
                Yarr[ii] = modelRecordHH.get('Latituded');
                DTarr[ii] = modelRecordHH.get('AlertDate');
                
              //  console.log("Count:" + ii + '' + modelRecordHH.get('AlertDate'));
                
            }
            isrecenter = '1';
            
        } else {
            isrecenter = '0';
            Ext.Msg.alert("No Signal Point Detected.!!");
           
        }
       
        Ext.Viewport.unmask();
        drawlinexypathhistory(pathXY, TrackIDAlert, DateAlert, DateAlert, TrackItemAlert);
    });
    task.delay(1000);
  
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
function drawlinexypathhistory(XYhistoryPath, TrackIDAlert, DateAlert, DateAlert, TrackItemAlert) {
    // flightPlanCoordinates.length = 0;


    var flightPlanCoordinates = new Array();

    var locations = [];
   
    console.log(Xarr.length);

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
             var travellength = parseInt(polyLengthInMeters);
            travellength = +Math.floor(polyLengthInMeters);

            Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + TrackIDAlert + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + DateAlert + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellength.toFixed(1) + " M" + "| Point:" + pointCount + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItemAlert + '</td></tr></table>');
            google.maps.event.addListener(marker, 'mousedown', (function (marker, i) {


                return function () {
                    var infowindow = new google.maps.InfoWindow();
                   var dt = DTarr[i].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');

                  infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b><br>Signal Date:<b>" + dt + "</b></font>");
                   //infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b></font>");

                    // infowindow.setContent("<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>");
                    infowindow.open(petahistory, marker);
                }
            })
    (marker, i));


        }

        petahistory.fitBounds(bounds);
      //  travellengthkm = travellength / 1000;
        
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
        Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">Calculating..</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
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


    Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + calcDistance(p1, p2) + " KM | Total Point:" + ttpoint + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');


    //  _valuepanelStatusPlay.hide();

    //


    var dtt = DTarr[rnumber].replace(/(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}/g, '');
    markersArray.push(marker);
    Ext.getCmp('Playtrackedhistory').setHtml('<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 26px; color: #fff; text-align: center;">' + rnumber + '</td> </tr> <tr > <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;   font-weight: bold;">' + Spdarr[rnumber] + 'km/h</td> </tr> <tr> <td colspan="2" style="background-color: #57A0DC; font-weight: bold; font-size: 10px; color: #fff; text-align: center;  ">' + dtt + '</td> </tr>  </table>');
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
                    Ext.getCmp('Infotrackedhistory').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  ' + Ext.getCmp('HistoryTrackingID').getValue() + '</u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">' + dateFromFormated + '  ' + timeFrom + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel">' + dateToFormated + '  ' + timeTo + '</td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel">' + travellengthkm.toFixed(1) + " KM | Total Point:" + ttpoint + '</td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackItem + '</td></tr></table>');
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
   

    function VirtuaFenceTraceStartDraw()
    {
        dialogboxHistoryTimeset.hide();
        Ext.getStore('trackingitemhistorystore').getProxy().setExtraParams({
            AccNo: AAccountNo,
            tracID: Ext.getCmp('HistoryTrackingID').getValue(),

        });
        Ext.StoreMgr.get('trackingitemhistorystore').load();

        var myStoreH = Ext.getStore('trackingitemhistorystore');
        var modelRecordH = myStoreH.getAt(0);

        Ext.getStore('signalhistorystore').getProxy().setExtraParams({
            DeviceID: modelRecordH.get('DeviceID'),
            TrackID: Ext.getCmp('HistoryTrackingID').getValue(),
            GPSSimNumber: modelRecordH.get('GPSSimNumber'),
            DateFrom: dateFromFormated + ' ' + timeFrom,
            DateTo: dateToFormated + ' ' + timeTo,

        });
        Ext.StoreMgr.get('signalhistorystore').load();

        Ext.getCmp('mainViewgmaphistory').setActiveItem(2);

        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point in progress..Please Wait..' });
        var task = Ext.create('Ext.util.DelayedTask', function () {
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
            if (co >= 1) {

                for (ii = 0; ii < co; ii++) {
                    var modelRecordHH = myStoreHH.getAt(ii);

                    Xarr[ii] = modelRecordHH.get('Longitude');
                    Yarr[ii] = modelRecordHH.get('Latitude');
                    Spdarr[ii] = modelRecordHH.get('Speed');
                    DTarr[ii] = modelRecordHH.get('DateDT');

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













}

