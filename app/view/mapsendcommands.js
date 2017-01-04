//Ext.define('MyGPS.view.MyAccount.singlesummary', {
//    extend: 'Ext.Container',
//    requires: ['Ext.Map'],
//    config: {
//        layout: 'fit'
//        items: [
//          {xtype: 'map'}
//        ]
//},
//initialize: function() {
//    this.callParent(arguments);

//    // wait 100 ms
//    Ext.Function.defer(this.initMap,100,this);
//},
//initMap: function() {
//    var mapPanel = this.down('map');
//    var gMap = mapPanel.getMap();

//    if (gMap == null) {
//        Ext.Function.defer(this.initMap,250,this);
//    } else {
//        // ready to start calling google map methods
//    }
//}
//})

Ext.define('MyGPS.view.mapsendcommands', {

    extend: 'Ext.Map',
   // alias: "widget.mapsendcommand",
    xtype: 'mapsendcommand',

    //geo: geo, //Ext.util.Geolocation object
    //useCurrentLocation: geo, //same var geo with geolocation object
    config: {
        mapOptions: {

            disableDefaultUI: true,
            //--Available Map Options--//
            // center: new google.maps.LatLng(5.820733,102.133862),
            // zoom: 15,


            //  mapTypeId: google.maps.MapTypeId.HYBRID,

            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: true,
            overviewMapControl: false
        },


        listeners: {
            maprender: function (comp, map) {
                panMap = true;
                var me = this;
                me.map = map;
                petamapsendcommands = map;

                //panoramaOptions = {

                //    pov: {
                //        heading: 34,
                //        pitch: 10
                //    }
                //};
                //panorama = new google.maps.StreetViewPanorama(panoramaOptions);


                //map.setStreetView(panorama);
                //  _valuesendCommand.show();
                //Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                //    TrackID: 'wtp2681',
                //    AccountNo: 'C01'
                //});
                //Ext.StoreMgr.get('singlesignalstore').load();
                // loadmarkersendcommands();
                //  return;
            }


        },



    }


});

var panorama;
var panoramaOptions;
var petamapsendcommands;
var ipUserAcc = document.location.protocol + '//' + document.location.host + '/';
var markermapsendcommands;
//var markersArraymapsendcommands = [];
function loadmarkersendcommands() {
    oldX = '1';
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Last Location..Please Wait.' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
            TrackID: SingleTrackID,
            AccountNo: AAccountNo
        });
        Ext.StoreMgr.get('singlesignalstore').load();
        var myStore = Ext.getStore('singlesignalstore');
        var modelRecord = myStore.getAt(0);
        LatitudedUserAcc = modelRecord.get('Latitude');
        LongitudedUserAcc = modelRecord.get('Longitude');
        DTUserAcc = modelRecord.get('DateDT');
        speeding = modelRecord.get('Speed');
      
        Ext.getCmp('Infosendcommandspeed').setHtml('<font color="white"; size="2"><b>' + speeding + 'KM/H</b></font>');
      //  Ext.getCmp('stoprun').setHtml('<div align="center"><img src="resources/icons/green.png"  width="16" height="16" alt="Company Name"/></div>');


        // Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackID + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Last Tracked On</td> <td class="tdgpslabel">22-1-2015 20:21</td></tr><tr> <td class="tdgpslabel">Last Tracked By</td> <td class="tdgpslabel">Mizi</td></tr><tr> <td class="tdgpslabel">LIcence Status</td> <td class="tdgpslabel">Activated</td></tr></table>');
        //Ext.getCmp('useraccStartlivetracking').setHidden(false);
        //Ext.getCmp('Backuseracc').setHidden(false);
        //Ext.getCmp('basicform').setActiveItem(2);
        // Ext.getCmp('InfoSummDatamapsendcommands').setHtml('<table  class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + modelRecord.get('TrackID') + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + modelRecord.get('TrackItem') + '</td> </tr>    <tr > <td class="tdspeedmax">' + modelRecord.get('Speed') + '</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>');
        var posisigeo = new google.maps.LatLng(LatitudedUserAcc, LongitudedUserAcc);
        markermapsendcommands = new google.maps.Marker({
            position: posisigeo,
            map: petamapsendcommands,
            title: SingleTrackID
        });

        var bounds = new google.maps.LatLngBounds();
        bounds.extend(posisigeo);
        petamapsendcommands.fitBounds(bounds);
        // petamapsendcommands.setZoom(14);
        //  _valuesendCommand.show();
        clickedmapsendcommands = false;
        mapsendcommandssec = 0;
        startmapsendcommands();
        Ext.Viewport.unmask();
    });
    task.delay(3000);
    //  markersArraymapsendcommands.push(markermapsendcommands);





    //Ext.Viewport.mask({ xtype: 'loadmask', message: 'RePloting Signal..' });
    //var task = Ext.create('Ext.util.DelayedTask', function () {

    //    var bounds = new google.maps.LatLngBounds();
    //    bounds.extend(posisigeo);
    //    petamapUserAcc.fitBounds(bounds);
    //    petamapUserAcc.setZoom(13);
    //   // petamapUserAcc.panTo(marker.position);
    //    Ext.Viewport.unmask();
    //});
    //task.delay(3000);

}



var _valuemapsendcommands =
    Ext.create('Ext.Panel', {

        xtype: 'panel',

        //height: 130,
        //width: 160,
        height: 138,
        width: 155,

        // height: '28.5%',
        // width: '44.5%',
        centered: false,
        id: 'popuppanelsingle',
        draggable: false,

        right: 5,
        top: 50,
        style: 'background-color: #57A0DC;',

        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'slide',
            direction: 'right',
            duration: 250,
            easing: 'ease-out',
            out: true
        },

        items: [


    {



        id: 'InfoSummDatamapsendcommands',
        // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">'+Infotrackid+'</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">'+Infotracktype+'</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

        html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
        //original//  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

    },


        ],
        scrollable: false

    })
;







var clickedmapsendcommands = false;
var mapsendcommandssec = 0;

var clockmapsendcommands;
//var markermapsendcommands;
var oldX;

function startmapsendcommands() {

    if (clickedmapsendcommands == false) {
        clockmapsendcommands = setInterval("stopWatchmapsendcommands()", 1000);
        clickedmapsendcommands = true;
    }
    else if (clickedmapsendcommands == true) {
    }
}


function stopWatchmapsendcommands() {
    mapsendcommandssec++;
    if (mapsendcommandssec == 1) {

        Ext.getStore('singlesignalstore').getProxy().setExtraParams({
            TrackID: SingleTrackID,
            AccountNo: AAccountNo
        });
        Ext.StoreMgr.get('singlesignalstore').load();
        var myStore = Ext.getStore('singlesignalstore');
        var modelRecord = myStore.getAt(0);
        LatitudedUserAcc = modelRecord.get('Latitude');
        LongitudedUserAcc = modelRecord.get('Longitude');
        DTUserAcc = modelRecord.get('DateDT');
        speeding = modelRecord.get('Speed');

        // alert(speeding);
        // loadmarkerUserAcc(LatitudedUserAcc, LongitudedUserAcc);
        // console.log(speeding);
        var aspeed = parseInt(speeding);
        if (aspeed > 1)
            Ext.getCmp('stoprun').setHtml('<div align="center"><img src="resources/icons/green.png"  width="16" height="16" alt="Company Name"/></div>');
        if (aspeed <= 0)
            Ext.getCmp('stoprun').setHtml('<div align="center"><img src="resources/icons/RedBeacon.png"  width="16" height="16" alt="Company Name"/></div>');


        Ext.getCmp('Infosendcommandspeed').setHtml('<font color="white"; size="2"><b>' + speeding + 'KM/H</b></font>');
        var posisigeo = new google.maps.LatLng(LatitudedUserAcc, LongitudedUserAcc);
        markermapsendcommands = new google.maps.Marker({
            position: posisigeo,
            map: petamapsendcommands,
            title: SingleTrackID
        });

        //  markersArraymapsendcommands.push(markermapsendcommands);
        try {
            //  panorama = petamapsendcommands.getStreetView();
            // panorama.setPosition(posisigeo);



            //  var heading = google.maps.geometry.spherical.computeHeading(myStreetView.getLocation().latLng, results[0].geometry.location);
            //panorama.setPov({
            //    heading:-100.14849003639411,
            //    pitch: -15.365900587312863
            //});




            var bounds = new google.maps.LatLngBounds();
            bounds.extend(posisigeo);
            petamapsendcommands.fitBounds(bounds);

        }

        catch (errr) {
            console.log("Exception:" + errr);
        }


    }




    if (mapsendcommandssec == 2) {

        //console.log("old X" + oldX);
        //console.log(" New X" + LongitudedUserAcc);
        try {
            // markermapsendcommands.setMap(null);

            if (markermapsendcommands) {
                markermapsendcommands.setMap(null);
            }

            //if (oldX != LongitudedUserAcc) {
            //    console.log("x sama..");
            //    markermapsendcommands.setMap(null);
            //    oldX = LongitudedUserAcc;


            //}


        }

        catch (err) {
            console.log("Exception:" + err);
        }
        mapsendcommandssec = 0;

    }
}


function stopClockmapsendcommands() {

    console.log("STOP");
    // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    window.clearInterval(clockmapsendcommands);

    mapsendcommandssec = 0;

    clickedmapsendcommands = false;

}
var speeding;