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
var petamapUserAcc;
var geocoder;
Ext.define('MyGPS.view.MyAccount.singlesummary', {

    extend: 'Ext.Map',
   // alias: "widget.googlemapscard",
    xtype: 'googlemapscard',
   
    //geo: geo, //Ext.util.Geolocation object
    //useCurrentLocation: geo, //same var geo with geolocation object
    config: {
        mapOptions: {
            
           // disableDefaultUI: true,
            //--Available Map Options--//
           // center: new google.maps.LatLng(5.820733,102.133862),
           // zoom: 15,

            
            //  mapTypeId: google.maps.MapTypeId.HYBRID,

            panControl: false,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: true,
            overviewMapControl: false
        },

        listeners: {
            maprender: function (comp, map) {
                geocoder = new google.maps.Geocoder();
                panMap = true;
                var me = this;
                me.map = map;
                petamapUserAcc = map;                 
                            
               }


        },
     


    }

});




var ipUserAcc = document.location.protocol + '//' + document.location.host +'/';
var markerUserAcc;

function loadmarkerUserAcc()
{
   // alert(geoX);
    //var posisigeo = new google.maps.LatLng(geoY, geoX);
//image = new google.maps.MarkerImage('http://20.9.11.194/7.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
    //////image = new google.maps.MarkerImage(ipUserAcc+'714blue.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
    ////////resources / icons / near_me.png
    //////var Locatemarker = new google.maps.Marker({
    //////    flat: true,
    //////    id: '11',
    //////    icon: image,
    //////    map: petamapUserAcc,
    //////    optimized: false,
    //////    position: posisigeo,
    //////    title: 'I might be herccccccccccce',
    //////    visible: true,


    //////    // data: rec
    //////});
    //var posisigeo = new google.maps.LatLng(geoY, geoX);
    //var marker = new google.maps.Marker({
    //    position: posisigeo,
    //    map: petamapUserAcc,
    //    title: 'Hello World!'
    //});




    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Fetching data..Please Wait.' });
    //stopClockGeoFence();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('signallastlocationstore').getProxy().setExtraParams({
            TrackID: SingleTrackIDlistofTrackingItem,
            AccountNo: AAccountNo
        });
        Ext.StoreMgr.get('signallastlocationstore').load();
        var myStore = Ext.getStore('signallastlocationstore');
        var modelRecord = myStore.getAt(0);
        LatitudedUserAcc = modelRecord.get('Latitude');
        LongitudedUserAcc = modelRecord.get('Longitude');
        DTUserAcc = modelRecord.get('DateDT');

        console.log("SingleTrackIDlistofTrackingItem: " + SingleTrackIDlistofTrackingItem);
        // loadmarkerUserAcc(LatitudedUserAcc, LongitudedUserAcc);
       
      
        //Ext.getCmp('useraccStartlivetracking').setHidden(false);
        //Ext.getCmp('Backuseracc').setHidden(false);
        //Ext.getCmp('basicform').setActiveItem(2);

        var posisigeo = new google.maps.LatLng(LatitudedUserAcc, LongitudedUserAcc);
         markerUserAcc = new google.maps.Marker({
            position: posisigeo,
            map: petamapUserAcc,
            title: SingleTrackIDlistofTrackingItem
        });

        var bounds = new google.maps.LatLngBounds();
        bounds.extend(posisigeo);
        petamapUserAcc.fitBounds(bounds);
        // petamapUserAcc.setZoom(13);
        codeLatLng();
        Ext.Viewport.unmask();
    });
    task.delay(3000);






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


function codeLatLng() {
    var foundaddrs;
    var latlng = new google.maps.LatLng(LatitudedUserAcc, LongitudedUserAcc);
    geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                //map.setZoom(11);
                //marker = new google.maps.Marker({
                //    position: latlng,
                //    map: map
                //});
               // foundaddrs = results[1].formatted_address;
                Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackIDlistofTrackingItem + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackingItems + '</td></tr><tr> <td class="tdgpslabel">Location Y,X</td> <td class="tdgpslabel">' + LatitudedUserAcc + ',' + LongitudedUserAcc + '</td></tr><tr> <td class="tdgpslabel">GeoCode Address</td> <td class="tdgpslabel">' + results[1].formatted_address + '</td></tr></table>');
                //alert(results[1].formatted_address);
               // infowindow.setContent(results[1].formatted_address);
               // infowindow.open(map, marker);
            } else {
                foundaddrs = 'No Addres found';
                Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackIDlistofTrackingItem + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackingItems + '</td></tr><tr> <td class="tdgpslabel">Location Y,X</td> <td class="tdgpslabel">' + LatitudedUserAcc + ',' + LongitudedUserAcc + '</td></tr><tr> <td class="tdgpslabel">GeoCode Address</td> <td class="tdgpslabel">' + foundaddrs + '</td></tr></table>');
            }
        } else {
            foundaddrs = 'Geocoder failed due to: ' + status;
            Ext.getCmp('InfoSingleSummaryUserAcc').setHtml('<table class="tblcurrentlocation"> <tr> <td class="tdgpslabel" colspan="2"><font size="2"><center><b>Tracking Item Summary (ID:' + SingleTrackIDlistofTrackingItem + ')</b></center></font></td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel">' + TrackingItems + '</td></tr><tr> <td class="tdgpslabel">Location Y,X</td> <td class="tdgpslabel">' + LatitudedUserAcc + ',' + LongitudedUserAcc + '</td></tr><tr> <td class="tdgpslabel">GeoCode Address</td> <td class="tdgpslabel">' + foundaddrs + '</td></tr></table>');
        }
    });

   Ext.getCmp('InfoSingleSummarylabelUserAcc').setHtml('Last Location as at:' + DTUserAcc);
   
   
    
}