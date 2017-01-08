Ext.define('MyGPS.view.functionality.routine', {

});

var clockmapsendcommands;
var clockmultiple;
var panoramaMap;
var panoOptions;
var panoramastreetMap;
var hasrunning;
var viewmap;
var pointXYn;
var holderID;
var xstreetview;
var ystreetview;
var maxspeeding;
var currspeeding;



var panoOptions;
var btnSingleSignalCount;
var isSingleTrackingRun;
var showinfostatus;
var storeindex;
var IMEI_no;
var Speed;
var GPSSimNumber;

var BatteryReading;
var TrackItem;
var TrackItemType;
var GPSModel;
var AccountNo;
var DateDT;



var Infotrackid;
var Infotracktype;
var Infospeed;
var docStore;

var geoX;
var geoY;

var trackingrun;
var ImeiNo;
var mapmap;
var kirarow;
var onoffgeolocation;
var lastMarker;
//var multimarker;
//var Locatemarker;
var latlngbounds;
var holdPosisi;
var previousPosisi;
var locateholdPosisi;
var locatepreviousPosisi;
var panMap;
var showSummar;
var hideSummar;
var countresult;
var id;
var markerss = {};
var boundreboundlatlong;
//var multiplemarkerloc=[]; // creating array
var multiplemarkerloc = new Array(); // creating array
//var ip = 'http://localhost/';
var ip = document.location.protocol + '//' + document.location.host + '/';
//var ip = 'http://192.168.0.105/';
//var ip = 'http://20.9.11.190/';
//var ip = 'http://192.168.0.101/7.gif';
//var ip = 'http://20.9.11.194/';
var co;
var lastpoint = 0;
function loadMarkerisingle(map, lati, long, typ, trckid, trckitm, speeding, indexstore) {
    // alert(typ);
    lastpoint = lastpoint + 1;
  //  console.log("record" + co + "    lastpoint: " + lastpoint)


    if (typ == "tracking") {

        oviewviewmap(lati,long);
        var posisi = new google.maps.LatLng(lati, long);
        boundreboundlatlong = new google.maps.LatLng(lati, long);
        // alert(posisi);
        image = new google.maps.MarkerImage(ip + '7.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
        //resources / icons / near_me.png
        var multimarker = new google.maps.Marker({
            flat: true,
            icon: image,
            map: map,
            optimized: false,
            position: posisi,
            // title: 'I be herdddddddddoooooooe',
            visible: true,
            labelContent: "$425K",



        });

       
        panoramastreetMap = petamapstreetview.getStreetView();
        panoramastreetMap.setPosition(posisi);
        var latLng = new google.maps.LatLng(lati, long); //Makes a latlng
        map.panTo(latLng); //Make map global
        //panoramaMap = petamap.getStreetView();
        //panoramaMap.setPosition(posisi);

        //getStreetView();
        //panoramaMap = petamap.getStreetView();      
        //panoramaMap.setPosition(posisi);

        ////getStreetView();
        //panorama.setPosition(posisigeo);




        // multimarker.setMap(null);
        // marker.setMap(null);
        if (onoffgeolocation == "on") {

            var posisigeo = new google.maps.LatLng(geoY, geoX),
   //image = new google.maps.MarkerImage('http://20.9.11.194/7.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
   image = new google.maps.MarkerImage(ip + '714blue.gif', null, null, new google.maps.Point(8, 8), new google.maps.Size(32, 32));
            //resources / icons / near_me.png
            var Locatemarker = new google.maps.Marker({
                flat: true,
                id: '11',
                icon: image,
                map: map,
                optimized: false,
                position: posisigeo,
                // title: 'I might be herccccccccccce',
                visible: true,


                // data: rec
            });
            getCurrentLocationsingle();
        }






        google.maps.event.addListener(map, 'idxxxxle', function (event) {

            //  ib.open();

        });



        google.maps.event.addListener(multimarker, 'mousedown',
            function (event) {
                //ib.record = {
                //    //places: data
                //};


                var ib = new InfoBubble({
                    hideCloseButton: false,
                    disableAutoPan: true,
                    maxHeight: 110,
                    // position: posisi

                });


                ib.setContent([
                    '<div class="infobox">',
                    '<div class="content">',
                   // data.get('description'),
                 'ID:' + trckid ,
                    '</div>',
                  // '<img src="resources/images/arrow.png">',
                    '</div>'
                ].join(''));

                ib.open(map, this);
           
                google.maps.event.addDomListener(ib.bubble_, 'mousedown',
            function (e) {
            
                storeindex = indexstore;
              


                // Ext.getCmp('InfoSummDatasingle').setHtml('<table>  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + trckid + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + trckitm + '</td> </tr>    <tr > <td class="tdspeedmax">' + speeding + '</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>');

            });

            });


        if (co == lastpoint) {
            lastpoint = 0;
         //   console.log("PANnnn MAP");

        }
    
        setTimeout(function () {


            try {
                multimarker.setMap(null);
               
                // multimarkeroverview.setMap(null);
                Locatemarker.setMap(null);
            } catch (err) {
                console.log(err);
            }
        }, 2000);
        // }

        // return;

    }







}







function getCurrentLocationsingle() {
    //  Ext.Msg.alert("Sor??");
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
        // Ext.Msg.alert("Sorry, browser does not support geolocation!");
        if ((messageboxss())) {
            Ext.Viewport.add(messageboxss('browser does not support geolocation'));
        }
    }
}


var panjang;
var lebar;

var _valuesingle =
    Ext.create('Ext.Panel', {

        xtype: 'panel',

        //height: 130,
        //width: 160,
        height: 138,
        width: 165,

        // height: '28.5%',
        // width: '44.5%',
        centered: false,
        id: 'popuppanelsingle',
        draggable: false,

        right: 5,
        top: 50,
        style: 'background-color: #57A0DC;',

        //showAnimation: {
        //    type: 'slide',
        //    direction: 'left',
        //    duration: 250,
        //    easing: 'ease-out'
        //},
        //hideAnimation: {
        //    type: 'slide',
        //    direction: 'right',
        //    duration: 250,
        //    easing: 'ease-out',
        //    out: true
        //},
    
        items: [
     

    {



        id: 'InfoSummDatasingle',
        // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">'+Infotrackid+'</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">'+Infotracktype+'</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

        html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
        //original//  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

    },


        ],
        scrollable: false
 
    })
;


var _listAccsingle = Ext.create('Ext.Panel', {
    draggable: false,
    centered: true,
    scrollable: false,
    height: 143,
    width: 250,
    // flex: 1,
    //width: '50%',
    //height: '50%',
    modal: true,
    hideOnMaskTap: false,
    //showAnimation: {
    //    type: 'popIn',
    //    duration: 250,
    //    easing: 'ease-out'
    //},
    //hideAnimation: {
    //    type: 'popOut',
    //    duration: 250,
    //    easing: 'ease-out'
    //},

    items: [

         {

             xtype: 'toolbar',
             title: 'Tracking Item',
             docked: 'top',
            
         },
        {

            xtype: 'textfield',
            // name: 'ID',
            //  label: 'ID',
            id:'NewtxtTrackID',
            placeHolder: 'Insert Plat No or ID.',
            // autoCapitalize: true,
            //required: true,
            clearIcon: true

          
            //xtype: 'selectfield',
            //label: 'ID',
            //id: 'TrackIDtxt',
            //store: docStore,
            //valueField: 'TrackID',
            //displayField: 'TrackID',
            //placeHolder: 'Select  Value'
          
        },
              {

                  xtype: 'toolbar',
                  docked: 'bottom',

                  items: [
                       {
                           //docked: 'right',
                           // width: 50,
                           ui: 'round',
                           xtype: 'button',
                           id: 'cancelButtonsingle',
                           text: 'Cancel',
                           handler: function () {

                              
                               _listAccsingle.hide();
                           }
                       },

                       {
                           xtype: 'spacer',
                       },
                    
                       {
                           //docked: 'right',
                           // width: 50,
                           ui: 'round',
                           xtype: 'button',
                           id: 'runButtonsingle',
                           text: 'Start Tracking',
                           handler: function () {
                              
                              
                               var strTrackID = Ext.getCmp('NewtxtTrackID').getValue();
                               if (strTrackID == "")
                               {
                                   // Ext.Msg.alert("ID cannot Empty!!");
                                   if ((messageboxss())) {
                                       Ext.Viewport.add(messageboxss('ID cannot Empty'));
                                   }
                                   return;
                               }
                              
                               //   SingleTrackID = strTrackID;
                               Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                   TrackID: strTrackID,
                                   AccountNo: AAccountNo

                               });
                               Ext.StoreMgr.get('singlesignalstore').load();
                               _listAccsingle.hide();
                               setTimeout(function () {

                              
                             
                            

                                   try {



                                       Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                           TrackID: strTrackID,
                                           AccountNo: AAccountNo
                                       });
                                       Ext.StoreMgr.get('singlesignalstore').load();
                                       var myStores = Ext.getStore('singlesignalstore');
                                       var modelRecord = myStores.getAt(0);
                                      


                                       // checkingcount = '0';
                                       checkingcount = myStores.getCount();
                                       //  alert(checkingcount);

                                       if (checkingcount == '1') {
                                           holderID = "";
                                           pointXYn = new google.maps.LatLng(modelRecord.get('Latitude'), modelRecord.get('Longitude'))
                                           // Ext.Msg.alert("Record Found !!");
                                           // alert(viewmap);
                                         
                                           SingleTrackID = strTrackID;
                                           holderID = SingleTrackID;
                                           isSingleTrackingRun = "On";
                                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Signal..Please Wait.' });
                                           var task = Ext.create('Ext.util.DelayedTask', function () {
                                             
                                               if (viewmap == 'streetview') {
                                                 
                                                   var streetViewService = new google.maps.StreetViewService();
                                                   var STREETVIEW_MAX_DISTANCE = 100;
                                                   streetViewService.getPanoramaByLocation(pointXYn, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
                                                       if (status == google.maps.StreetViewStatus.OK) {


                                                           panoramastreetMap = petamapstreetview.getStreetView();
                                                           panoramastreetMap.setPosition(pointXYn);
                                                           panoramastreetMap.setVisible(true);
                                                           //petamap.setZoom(10);      // This will trigger a zoom_changed on the map
                                                           //petamap.setCenter(new google.maps.LatLng(modelRecord.get('Latitude'), modelRecord.get('Longitude')));
                                                           //  _listAccsingle.hide();
                                                           // Ext.Msg.alert("Signal Found !!");
                                                           if ((messageboxss())) {
                                                               Ext.Viewport.add(messageboxss('Signal Found :' + SingleTrackID));
                                                           }
                                                           startSingle();

                                                       } else {
                                                           
                                                           boundsmarkerview();
                                                       }
                                                   });
                                                   
                                               }
                                               else
                                                   if (viewmap =='normal')
                                                   {
                                                       Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                                                           TrackID: strTrackID,
                                                           AccountNo: AAccountNo
                                                       });
                                                       Ext.StoreMgr.get('singlesignalstore').load();
                                                       var myStoresd = Ext.getStore('singlesignalstore');
                                                       var modelRecordss = myStoresd.getAt(0);
                                                       var pointXYnm = new google.maps.LatLng(modelRecordss.get('Latitude'), modelRecordss.get('Longitude'))
                                                       // alert(pointXYnm);
                                                       //    var latLngd = new google.maps.LatLng(modelRecord.get('Latitude'), modelRecord.get('Longitude')); //Makes a latlng
                                                       // Ext.Msg.alert("Signal Found !!" + SingleTrackID);
                                                       if ((messageboxss())) {
                                                           Ext.Viewport.add(messageboxss('Signal Found :' + SingleTrackID));
                                                       }
                                                       petamap.setZoom(10);
                                                       petamap.setCenter(pointXYnm);
                                                       // This will trigger a zoom_changed on the map
                                                       //setTimeout(function () {
                                                       
                                                       //}, 500);
                                                       // petamap.panTo(pointXYn);
                                                       // _listAccsingle.hide();
                                              
                                                       startSingle();

                                                   }

                                              
                                               Ext.Viewport.unmask();
                                           });
                                           task.delay(2000);

                                       } 
                                       if (checkingcount == '0' ) {
                                           //  var nm = holderID;
                                              
                                           Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Signal..Please Wait.' });
                                           var task = Ext.create('Ext.util.DelayedTask', function () {
                                               // _listAccsingle.show();

                                               if (holderID) {
                                                   //  Ext.Msg.alert("Plat No or ID not Valid.!!");
                                                   if ((messageboxss())) {
                                                       Ext.Viewport.add(messageboxss('Plat No or ID not Valid'));
                                                   }
                                                   SingleTrackID = holderID;
                                                   //console.log("HOLDER ID :"+holderID);
                                                   startSingle();
                                               }
                                               else
                                               {
                                                   if ((messageboxss())) {
                                                       Ext.Viewport.add(messageboxss('Plat No or ID not Valid'));
                                                   }
                                                   // Ext.Msg.alert("Plat No or ID not Valid.!!");
                                               }
                                               //  _listAccsingle.hide();
                                               Ext.Viewport.unmask();
                                           });
                                           task.delay(2000);

                                       }
                                      

                                    
                                       
                                      
                                   } catch (err) {
                                       //  Ext.Msg.alert("InValid ID");
                                       console.log(err);
                                   }
                           

                               }, 1000);
                              
                         

                              
                              
                           }
                       },
                      

                  ]
                  
              },

               

    ],


});

var _DetailGPSsingle =
     Ext.create('Ext.Panel', {
         draggable: false,
         centered: true,
         scrollable: false,
         height: 345,
         width: 276,
         // width: '70%',
         // height: '50%',
         modal: true,
         hideOnMaskTap: true,
         //showAnimation: {
         //    type: 'popIn',
         //    duration: 250,
         //    easing: 'ease-out'
         //},
         //hideAnimation: {
         //    type: 'popOut',
         //    duration: 250,
         //    easing: 'ease-out'
         //},

         items: [{
             xtype: 'carousel',
             height: 330,
             // height: 148,
             items: [



                          {
                              // title: 'title card 1',
                              // html: '<table  class="tabledetail">  <tr> <td colspan="2" style="background-color: grey;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: grey;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>  <tr > <td class="tdspeed">80km/h</td> <td class="tdgpsdata">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr > <td class="tdspeed">101.09876775</td> <td class="tdspeedmax">5.76755899747</td></tr> <tr > <td class="tde">Longitutded</td> <td class="tdk">Latitude</td></tr>  <tr > <td class="tdspeed">101.010292873</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr > <td class="tdspeed">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> </table>',
                              // html: '<table class="tabledetail">  <tr> <td colspan="2" style="background-color: grey;  font-size: 11px; color: #fff; text-align: center;  valign:top; height:20%">GPS Live Data Info</td> </tr><tr> <td colspan="2" style="background-color: grey;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">(20-11-2014 01:32AM)</td> </tr>    <tr > <td class="tdgpsdata">80km/h</td> <td class="tdgpsdata">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-12-2014 2:06AM</td> </tr>  </table>',
                              // html: 'card1',
                              // html: '<table>  <tr> <td colspan="2" style="background-color: grey;  font-size: 11px; color: #fff; text-align: center;  valign:top; height:20%">GPS Live Data Info</td> </tr><tr> <td colspan="2" style="background-color: grey;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">(20-11-2014 01:32AM)</td> </tr>    <tr> <td class="tdgpsdata">80km/h</td> <td class="tdDetailGPSdata">120km/h</td></tr> <tr> <td class="tdgpslabel">Current Speed</td> <td class="tdgpslabel">Max Speed</td></tr> <tr> <td class="tdgpsdata">80km/h</td> <td class="tdDetailGPSdata">120km/h</td></tr>  </table>',








                              id: 'InfoDetailsDatasingle',
                              html: '<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>{DateDT}</td> </tr><tr > <td class="tde">{TrackID}</td> <td class="tde">{TrackItem}</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">{Latitude}</td> <td class="tde">{Longitude}</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                              cls: 'card1'
                          },
                             {
                                 //  title: 'title card 2',
                                 //  html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>    <tr > <td class="tdspeed">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-12-2014 2:06AM</td> </tr>  </table>',
                                 // html: 'card1',
                                 // html: '<table>  <tr > <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center; ">Live Tracking Summary<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">Tracking ID</td> <td class="tdk">WTP 2681</td></tr> <tr > <td class="tde">Item</td> <td class="tdk">Persona Car</td></tr><tr > <td class="tde">Latitude</td> <td class="tdk">3.93847234</td></tr> <tr > <td class="tde">Longituded</td> <td class="tdk">101.27484755</td></tr>  <tr > <td class="tde">Speed</td> <td class="tdk">80KM/h</td></tr>  <tr> <td  class="tde">Status</td> <td  class="tdk">Running...</td></tr>  </table>',
                                 cls: 'card1'
                             },


             ]
         },




         ],



     });



var _valuepanelsearch =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 49,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: 89,
        // centered: false,
        id: 'panelhistoryStatusPlay',
        draggable: false,

        left: 80,
        top: 45,

        //showAnimation: 'fadeIn',
        //showAnimation: {
        //    type: 'fadeIn',
        //    // direction: 'down',
        //    //  duration: 350,
        //    // easing: 'ease-out',

        //},
        //hideAnimation: {
        //    type: 'fadeOut',
        //    //direction: 'up',
        //    // duration: 650,
        //    //easing: 'ease-out',
        //    //out: true

        //},


        //right: 1,
        //bottom: 1,
        style: 'background-color: #57A0DC;',
        //showAnimation: {
        //    type: 'slide',
        //    direction: 'down',
        //    duration: 350,
        //    easing: 'ease-out',

        //},
        //hideAnimation: {
        //    type: 'slide',
        //    direction: 'up',
        //    duration: 650,
        //    easing: 'ease-out',
        //    out: true
        //},


        items: {

            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            id: 'searchplace',
            //  html: 'Point',
            //   html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Playing..</td> </tr> </table>',
            html: '<div class="x-container x-field-text x-field x-label-align-top x-field-labeled x-form-label-nowrap x-empty" id=""><div class="x-form-label" id="" style="width: 100% !important;"><span id="ext-element-251">Address</span></div><div class="x-component-outer" id=""><div class="x-unsized x-field-input" id=""><input class="x-input-el x-form-field x-input-text" type="text" id="locationField" name="locationPoint" maxlength="50" placeholder=""><div class="x-field-mask" style="display: none !important;" id=""></div><div class="x-clear-icon" id=""></div></div></div></div>'
            //  html: '<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>',
            //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">1</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr> </table>',
            //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
            ////style: 'background-color: #5E99CC;'
            //style: 'background-color: #57A0DC;'


        }



    });
//////////////////////////////

var _valuepanelStatusPlay =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 49,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: 89,
        // centered: false,
        id: 'panelhistoryStatusPlay',
        draggable: false,

        left: 80,
        top: 45,

        //showAnimation: 'fadeIn',
        //showAnimation: {
        //    type: 'fadeIn',
        //   // direction: 'down',
        //  //  duration: 350,
        //   // easing: 'ease-out',

        //},
        //hideAnimation: {
        //    type: 'fadeOut',
        //    //direction: 'up',
        //   // duration: 650,
        //    //easing: 'ease-out',
        //    //out: true

        //},


        //right: 1,
        //bottom: 1,
        style: 'background-color: #57A0DC;',
        //showAnimation: {
        //    type: 'slide',
        //    direction: 'down',
        //    duration: 350,
        //    easing: 'ease-out',

        //},
        //hideAnimation: {
        //    type: 'slide',
        //    direction: 'up',
        //    duration: 650,
        //    easing: 'ease-out',
        //    out: true
        //},


        items: {

            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            id: 'statusPlaytrackedhistory',
            //  html: 'Point',
            html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Playing..</td> </tr> </table>',

            //  html: '<font color=red>Signal seq:<b>" + i + "</b><br> Speed :<b>" + Spdarr[i] + "km/h</b><br> Time :<b>" + dt + "</b></font>',
            //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">1</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">kkkkk</td> </tr> </table>',
            //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
            ////style: 'background-color: #5E99CC;'
            //style: 'background-color: #57A0DC;'


        }



    });

//////////////////////////////////////////


//////////////////////

var _valuepanelhistoryinfo =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        // style: 'background-color:#57A0DC',
        height: 100,
        //width: 320,
        //  centered: true,
        // height: '10%',
        width: '100%',
        // centered: false,
        id: 'panelhistoryinfos',
        draggable: false,

        right: 0,
        bottom: 0,

        style: 'background-color: #57A0DC;',
       

        items: {

            //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            id: 'Infotrackedhistory',
            html: '<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr> <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
            //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + Infotrackid + '</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + Infotracktype + '</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
            //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
            ////style: 'background-color: #5E99CC;'
            //style: 'background-color: #57A0DC;'

            items: {

                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'right',
                    // align: 'end'
                },
                items: [

                     
                    {
                        xtype: 'button',

                        Id: 'stopTrackhistory',
                        // margin: 'top left bottom right',
                        margin: '-40 0 0 0',
                        //style: 'margin-top: 350px;margin-left: 500px;',
                        // text: 'Start',
                        height: 45,
                        width: 50,
                        html: '<div ><img src="resources/icons/stophistory.png" width="40" height="40" alt="Company Name"></div>',
              
                        //ui:'round'
                        ui: 'plain',
                        handler: function () {
                       
                            firstime = '1';
                            resumeCounter = 0;
                            counter = 0;
                            btnplay.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                            clearTimeout(myVar);
                            // counter = Xarr.length + 1;
                            // alert(counter);

                            //    statustimer = 'pause';
                            // playXY();
                            // myLoopXY();
                            // initxy();
                            //theLoop();
                            //  _valuepanelhistoryinfo.hide();
                        }
                    },


                {
                    xtype: 'button',

                    Id: 'playTrackhistorylbl',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function (btn) {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add(_valuepanelhistoryPlay
                        );

                        }
                        this.overlay.show();

                        btnplay = btn;
                        //  btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                  
                      //  console.log(firstime);
                        if (firstime == '1')
                        {

                           // console.log("cccccc:"+firstime);
                            btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                            firstime = '0';
                            plystatus = 'play';
                            resumeWatchclockPlay();
                            return;
                        }
                        if ((firstime == '0' && plystatus == 'play')||(firstime == '0' && plystatus == 'resume'))
                        {
                            btn.setHtml('<div ><img src="resources/icons/playhistory.png" width="40" height="40" alt="Company Name"></div>');
                            plystatus = 'pause';
                            return;
                        }

                        if (firstime == '0' && plystatus == 'pause')
                        {
                            plystatus = 'resume';
                            counter = resumeCounter;
                            btn.setHtml('<div ><img src="resources/icons/pausehistory.png" width="40" height="40" alt="Company Name"></div>');
                            resumeWatchclockPlay();
                        }
                   
                     
                    }
                },

                {
                    xtype: 'button',

                    Id: 'hideTrackhistorylbl',
                    //   hidden:true,
                    // margin: 'top left bottom right',
                    margin: '-40 0 0 0',
                    //style: 'margin-top: 350px;margin-left: 500px;',
                    // text: '',
                    height: 45,
                    width: 50,
                    html: '<div ><img src="resources/icons/hideArrow.png" width="40" height="40" alt="Company Name"></div>',
                    //ui:'round'
                    ui: 'plain',
                    handler: function () {
                     
                        _valuepanelhistoryPlay.hide();
                        _valuepanelhistoryinfo.hide();
                    }
                },

                ]


            }
        
        }

        //    items: [


        //{

        //    style: "background-color: #006600;",

        //    id: 'tablepanelhistoryinfo',
        //    // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">'+Infotrackid+'</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">'+Infotracktype+'</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',


        //   // html: '<table><tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> </table>',

        //},


        //    ],
        //   scrollable: false

    });

var ControlPanel = Ext.create('Ext.Panel', {
    style: 'background-color: #57A0DC;',
    draggable: true,
    centered: true,
    //frame: false,
    //border: false,
    // cls: 'my-panel',
    // style: 'background-color: transparent;',
    // bodyStyle: 'background:transparent',
    // scrollable: false,
    height: 5,
    width: 60,
    // width: '70%',
    // height: '50%',
    // modal: { transparent: true },
    modal: false,
    //   left:40,
    hideOnMaskTap: false,
    //showAnimation: {
    //    type: 'popIn',
    //    duration: 250,
    //    easing: 'ease-out'
    //},
    //hideAnimation: {
    //    type: 'popOut',
    //    duration: 250,
    //    easing: 'ease-out'
    //},
    items: {

        //  html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
        //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + Infotrackid + '</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + Infotracktype + '</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
        //html: 'First Panel<br>ssssssss<br>cvxvc<br>ccdfdfs',
        ////style: 'background-color: #5E99CC;'
        //style: 'background-color: #57A0DC;'

        // html: 'Drag Me',

        xtype: 'container',
        layout: {
            type: 'vbox',
            pack: 'right',
            align: 'stretch',
        },
        items: [
            {
                // xtype: 'label',

                Id: 'hideTrackhistorynew',
                // margin: 'top left bottom right',
                margin: '-13 0 0 0',
                // style: 'margin-top: 350px;margin-left: 500px;',
                // text: 'Start',
                //height: 45,
                //width: 60,

                html: '<center><font size="1.8" color="white">Drag Me</font></center>',
                //ui:'round'
                //ui: 'plain',
                //handler: function () {
                  
                //}
            },


        {
            xtype: 'button',

            Id: 'viewreboundsinglenew',
            margin: '-1 0 0 0',
            // margin: 'top left bottom right',
            //// margin: '250 5 -30 20',
            //margin: '250 2 -30 20',
            //style: 'margin-top: 350px;margin-left: 500px;',
            // text: 'Start',
            //height: 47,
            //width: 47,
            height: 40,
            width: 40,
            html: '<div ><img src="resources/icons/rebounds.png" width="30" height="30" alt="Company Name"></div>',
            //ui:'round'
            ui: 'plain',
            handler: function () {
                // hello.show();
                //  aboutPanel.show();

                if (boundstatus == 'no') {
                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Bounds Map to Point..' });
                    var task = Ext.create('Ext.util.DelayedTask', function () {

                        var bounds = new google.maps.LatLngBounds();
                        bounds.extend(boundreboundlatlong);
                        petamap.fitBounds(bounds);
                        boundstatus = 'yes';
                        Ext.Viewport.unmask();
                    });
                    task.delay(2000);
                    return;
                }
                if (boundstatus == 'yes') {
                    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Re-center Map View' });
                    var task = Ext.create('Ext.util.DelayedTask', function () {

                        petamap.setZoom(5);      // This will trigger a zoom_changed on the map
                        petamap.setCenter(new google.maps.LatLng(Latitude, Longitude));
                        boundstatus = 'no';
                        Ext.Viewport.unmask();
                    });
                    task.delay(2000);

                }

            }
        },
        {
            xtype: 'button',

            Id: 'viewReboundnew',
            margin: '-2 0 0 0',
            // margin: 'top left bottom right',
            //  margin: '-5 0 0 0',
            //margin: '250 2 -30 20',
            //style: 'margin-top: 350px;margin-left: 500px;',
            // text: 'Start',
            //height: 47,
            //width: 47,
            height: 40,
            width: 40,
            html: '<div ><img src="resources/icons/PictureGpsAcc.png" width="30" height="30" alt="Company Name"></div>',
            //ui:'round'
            ui: 'plain',
            handler: function () {
                // hello.show();

                //var panel = Ext.getCmp('toolsPnl');
                //if (panel.isHidden()) {
                //    panel.show({ type: 'slide', direction: 'up' });
                //    btn.setText('hide');
                //} else {
                //    panel.hide({ type: 'slide', direction: 'up' });
                //    btn.setText('show');
                //    this.fixListHeight();
                //}
                alert("luar");
                if (!this.overlay) {
                    this.overlay = Ext.Viewport.add(_DetailGPSsingle
                );
                    alert("masuk");

                }
                this.overlay.show();
                //  _DetailGPSsingle.show();
                //    _DetailGPSsingle.show();


            }
        },


             {
                 xtype: 'button',
                 Id: 'Locatedsinglenew',
                 ///    margin: '30 12 -2 20',   
                 margin: '-3 0 0 0',
                 height: 40,
                 width: 40,
                 html: '<div ><img src="resources/icons/Picture3.png" width="30" height="30" alt="Company Name"></div>',
                 ui: 'plain',

                 handler: function () {
                     //var me = this;


                     if (onoffgeolocation == "off") {
                         // alert('xxxxxx');
                         geoX = "";
                         countresult = 1;
                         geocheck = null;
                         getCurrentLocationsingle();
                         onoffgeolocation = "on";

                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Detecting Your Location..' });
                         var task = Ext.create('Ext.util.DelayedTask', function () {


                             if (geoX === "") {
                                 //  Ext.Msg.alert("Sorry,your browser does not<br>support geolocation!");
                                 if ((messageboxss())) {
                                     Ext.Viewport.add(messageboxss('your browser does not support geolocation'));
                                 }
                                 geoX = "";
                                 countresult = 0;
                             }

                             Ext.Viewport.unmask();
                         });
                         task.delay(3000);

                     } else
                         if (onoffgeolocation == "on") {
                             geoX = "";
                             countresult = 0;
                             onoffgeolocation = "off";
                             geocheck = 'Notnull';
                             Ext.Viewport.mask({ xtype: 'loadmask', message: 'Remove Your Location..' });
                             var task = Ext.create('Ext.util.DelayedTask', function () {



                                 // Ext.Msg.alert("Done..!");
                                   
                                 if ((messageboxss())) {
                                     Ext.Viewport.add(messageboxss('Done'));
                                 }
                                 Ext.Viewport.unmask();
                             });
                             task.delay(3000);

                         }
                     //alert("sds,ssfffs,,");




                 }
             },


             {
                 xtype: 'button',

                 Id: 'viewAccnew',
                 margin: '-4 0 0 0',
                 // margin: 'top left bottom right',
                 //  margin: '0 12 10 20',
                 //style: 'margin-top: 350px;margin-left: 500px;',
                 // text: 'Start',
                 height: 40,
                 width: 40,
                 html: '<div ><img src="resources/icons/Picture44.png" width="30" height="30" alt="Company Name"></div>',
                 //ui:'round'
                 ui: 'plain',
                 handler: function () {
                     // _valuesingle.hide();
                     // trackingrunsingle = "off";





                     // var myStore = Ext.getStore('TrackingItemList');
                     // var co = myStore.getCount() - 1;
                     // co = myStore.getCount() - 1;
                     // alert("-zz-" + docStore.getCount());
                     _listAccsingle.show();
                     //  Ext.Viewport.setActiveItem(Ext.create('MyGPS.view.gpsdata.multitrackingaccount'));

                 }
             },







        ]


       
        
    },

    //    initialize: function () {
    //        buttonlabelsinglecount= Ext.getCmp('SingleSignalCount');
    //   // Ext.getCmp('SingleSignalCount')
    //} 

});
var statustimer;
var checkingcount;
var _DataStore_Signal;
var check;
var geocheck;
var newstro;
var Longitude;
var Latitude;
var Speed;
var DateS;
var TrackID;
var btnID = 'play';
var counter=0;
var myVar;
var buttonlabelsinglecount;
function reloadID()
{

}



var boundstatus;
var clickedsingle = false;
var sec = 0;
var petamap ;
var petaOverViewmap ;
var clock;

function resettext()
{


    Ext.getCmp('SingleSignalCount').setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    // Ext.getCmp('SingleSignalCount').setText('<font color="white"; size="2"><b>(' + cor + ') Running Signal..</b></font>');
}


function startSingle() {
    maxspeeding = 0;
    if (singlesummaryGPS == 'yes') {
        _valuesingle.show();
        hasrunning = 'yes';
    }
    if (clickedsingle === false) {
        clock = setInterval("stopWatchSingle()", 1000);
        clickedsingle = true;
    }
    else if (clickedsingle === true) {
    }
}




function stopWatchSingle() {
    
    sec++;
    if (sec == 1) {
        Latitude = '';
        Longitude = '';
        Speed = '';
        TrackID = '';
        IMEI_no = '';
        GPSSimNumber = '';
        BatteryReading = '';
        TrackItem = '';
        TrackItemType = '';
        GPSModel = '';
        AccountNo = '';
        DateDT = '';
       // console.log("TrackID:" + SingleTrackID + " isSingleTrackingRun : " + isSingleTrackingRun);
        if (isSingleTrackingRun == "On") {
            Ext.getStore('singlesignalstore').getProxy().setExtraParams({
                TrackID: SingleTrackID,
                AccountNo: AAccountNo
            });
            Ext.StoreMgr.get('singlesignalstore').load();
            var myStore = Ext.getStore('singlesignalstore');
            // var co = myStore.getCount() - 1;
            co = myStore.getCount();
            var cor = co + countresult;
           // console.log("recorded found:" + co + " AccountNo" + AAccountNo);
            // Ext.getCmp('BB_IDsingle').setValue(cor);
            Ext.getCmp('SingleSignalCount').setText('<font color="white"; size="2"><b>(' + cor + ') Running Signal..</b></font>');

            
            if (co >= 1) {
                // alert(co);
                var modelRecord = myStore.getAt(0);
                Latitude = modelRecord.get('Latitude');
                Longitude = modelRecord.get('Longitude');
                Speed = modelRecord.get('Speed');
                TrackID = modelRecord.get('TrackID');
                IMEI_no = modelRecord.get('IMEI_no');
                GPSSimNumber = modelRecord.get('GPSSimNumber');
                BatteryReading = modelRecord.get('BatteryReading');
                TrackItem = modelRecord.get('TrackItem');
                TrackItemType = modelRecord.get('TrackItemType');
                GPSModel = modelRecord.get('GPSModel');
                AccountNo = modelRecord.get('AccountNo');
                DateDT = modelRecord.get('DateDT');
             
                currspeeding=parseInt(Speed);
                if (currspeeding > maxspeeding)
                {
                    maxspeeding = Speed;
                
                }

                Ext.getCmp('InfoSummDatasingle').setHtml('<table  class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + modelRecord.get('TrackID') + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + modelRecord.get('TrackItem') + '</td> </tr>    <tr > <td class="tdspeedmax">' + modelRecord.get('Speed') + 'KM/H</td> <td class="tdspeedmax">' + maxspeeding + 'KM/H</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + modelRecord.get('DateDT') + '</td> </tr>  </table>');
                Ext.getCmp('InfoDetailsDatasingle').setHtml('<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>' + modelRecord.get('DateDT') + '</td> </tr><tr > <td class="tde">' + modelRecord.get('TrackID') + '</td> <td class="tde">' + modelRecord.get('TrackItem') + '</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">' + modelRecord.get('Latitude') + '</td> <td class="tde">' + modelRecord.get('Longitude') + '</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">' + modelRecord.get('Speed') + '</td> <td class="tde">' + maxspeeding + 'KM/H</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">' + modelRecord.get('BatteryReading') + '</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">' + modelRecord.get('GPSModel') + '</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">' + modelRecord.get('GPSSimNumber') + '</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');

                Ext.getCmp('InfoGmapsingleDToverview').setHtml('<font color="white"; size="2"><b>' + modelRecord.get('DateDT') + '</b></font>');
                Ext.getCmp('InfoGmapsingleMaxSpeedoverview').setHtml('<font color="white"; size="2"><b>Max Speed:'+maxspeeding+'KM/H</b></font>');
                Ext.getCmp('InfoGmapsinglespeedoverview').setHtml('<font color="white"; size="2"><b>' + modelRecord.get('Speed') + 'KM/H</b></font>');
                //  Ext.getCmp('stoprunGmapsingleoverview').setHtml('<div align="center"><img src="resources/icons/green.png"  width="16" height="16" alt="Company Name"/></div>');
                Ext.getCmp('InfoGmapoverviewTrackItem').setHtml('<font color="white"; size="2"><b>' + modelRecord.get('TrackItem') + '</b></font>');
                Ext.getCmp('InfoGmapoverviewTrackID').setHtml('<font color="white"; size="2"><b>' + modelRecord.get('TrackID') + '-</b></font>');

                //   Ext.getCmp('InfoGmapsingleLongitudedstreetview').setHtml('<font color="white"; size="2"><b>X:' + modelRecord.get('Longitude') + '</b></font>');


                //    Ext.getCmp('InfoGmapsingleLatitudestreetview').setHtml('<font color="white"; size="2"><b>Y:' + modelRecord.get('Latitude') + '</b></font>');



                loadMarkerisingle(petamap, Latitude, Longitude, "tracking", TrackID, TrackItem, Speed, 0);
                //if (showinfostatus == "On") {
                //    console.log("showinfostatus:" + showinfostatus);
                //    try {
                //        var modelRecords = myStore.getAt(storeindex);
                //        Ext.getCmp('InfoSummDatasingle').setHtml('<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + modelRecords.get('TrackID') + '</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + modelRecords.get('TrackItem') + '</td> </tr>    <tr > <td class="tdspeedmax">' + modelRecords.get('Speed') + '</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>');
                //        Ext.getCmp('InfoDetailsDatasingle').setHtml('<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>' + modelRecords.get('DateDT') + '</td> </tr><tr > <td class="tde">' + modelRecords.get('TrackID') + '</td> <td class="tde">' + modelRecords.get('TrackItem') + '</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">' + modelRecords.get('Latitude') + '</td> <td class="tde">' + modelRecords.get('Longitude') + '</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">' + modelRecords.get('Speed') + '</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">' + modelRecords.get('BatteryReading') + '</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">' + modelRecords.get('GPSModel') + '</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">' + modelRecords.get('GPSSimNumber') + '</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>');

                //    } catch (errr) {
                //        console.log(errr);
                //    }

                //}

            }





            return;



        } else

            if (isSingleTrackingRun == "Off") {
                try {

                    multimarker.setMap(null);
                    Locatemarker.setMap(null);


                }
                catch (err) {
                    console.log("Exception:" + err);
                }

            }


       
       
    }

  
    if (sec == 2) {

        sec = 0;
    }







   // console.log(sec);

    // document.getElementById("timer").innerHTML = sec;
}
function stopClockSingle() {
    //Ext.getCmp('SingleSignalCount').setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    // use your segmented button id here
    // buttonlabelsinglecount.setText('Test');
    singlesummaryGPS = "yes";
    _valuesingle.hide();
    // mapgstreetview.hide();
    //if (indexlist == 2 &&  hasrunning == 'yes')
    //{
        
    //    console.log(indexlist);
    //    var cntr = Ext.ComponentQuery.query("#panelMainGmapSingle")[0];
    //    cntr.setActiveItem(0);
    //  }
      
    Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    window.clearInterval(clock);
    // markerUserAcc.setMap(null);
    sec = 0;
    //console.log(sec);
    // document.getElementById("timer").innerHTML = 0;
    clickedsingle = false;
    //  btnSingleSignalCount.setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    // Ext.getCmp('SingleSignalCount').setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    //Ext.getCmp('MultiSignalCount').setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    //  Ext.getCmp('InfoSummDatasingle').setHtml('<table>  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Stop</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Stop</td> </tr>    <tr > <td class="tdspeedmax">Stop</td> <td class="tdspeedmax">Stop/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">Stop</td> </tr>  </table>');
    //Ext.getCmp('InfoSummData').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Stop</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Stop</td> </tr>    <tr > <td class="tdspeedmax">Stop</td> <td class="tdspeedmax">Stop/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">Stop</td> </tr>  </table>');
}

//////////////////////////////////////////// timer/////////////////////////////
////////////////////////////////var myStore;
////////////////////////////////var clickedPlay = false;
////////////////////////////////var secplay = 0;
////////////////////////////////var resumeCounter;
////////////////////////////////var clockPlay;
////////////////////////////////var btnplay;
////////////////////////////////var firstime;
////////////////////////////////var isfirstime = 'yes';
////////////////////////////////var plystatus='play';


////////////////////////////////function resumeWatchclockPlay() {
////////////////////////////////    var maxLoops = Xarr.length;
   

////////////////////////////////    (function next() {
////////////////////////////////      //  console.log(counter + "------" + plystatus + "---" + resumeCounter);
////////////////////////////////        if (counter++ >= maxLoops) return;

////////////////////////////////        myVar = setTimeout(function () {
////////////////////////////////            if (plystatus == 'play') {
////////////////////////////////                // _valuepanelStatusPlay.show();
////////////////////////////////                //current.getEl().fadeOut({ duration: 2000 });
////////////////////////////////                //current = current == one ? two : one;
////////////////////////////////                //current.getEl().fadeIn({ duration: 2000 });
////////////////////////////////                loopingXY(counter);
////////////////////////////////                next();
////////////////////////////////            }
////////////////////////////////            if (plystatus == 'pause') {
////////////////////////////////                resumeCounter = counter;
////////////////////////////////                counter = maxLoops + 2;
////////////////////////////////            }
////////////////////////////////            if (plystatus == 'resume') {
              
               
////////////////////////////////                loopingXY(counter);
////////////////////////////////                //  plystatus = 'play';
////////////////////////////////                next();
////////////////////////////////            }
////////////////////////////////        }, 1000);
////////////////////////////////    })();

////////////////////////////////}
//function stopClockPlay() {
//    window.clearInterval(myVar);
   
//    secplay = 0;
    
   
//    clickedPlay = false;
//}








////////////////////////////////////////////////////////////////////////////
var t = null; /* Our timeout ID */
var startTimeout = new Date(); /* When the timer starts */
var timeLeft = 0; /* How much time is left */
var timeDelay = 10000; /* How long the timer should be */

function startTimer() {
    /* Replace the "alert" below with the actual code
       that should be executed at the end of the timer */
    alert('You reached the end of your time limit');

    /* Figure out when you're starting the new timer */
    startTimeout = new Date();

    /* Set the timer to perform the action again */
    t = setTimeout(startTimer, timeDelay);
}
function pauseTimeout() {
    /* Instantiate the timeLeft variable to be the same as
       the amount of time the timer initially had */
    timeLeft = timeDelay;

    /* Subtract the timestamp at which the timer started from
       the current time, then subtract that amount of milliseconds
       from the initial amount of time the timer should have run */
    timeLeft -= new Date() - startTimeout;

    /* Clear the timer */
    clearTimeout(t);
}
function resumeTimeout() {
    /* If the timeLeft variable is empty or doesn't exist,
       we simply set it to the timeDelay var */
    if (!timeLeft) { timeLeft = timeDelay; }

    /* Start the timer again, this time using the timeLeft
       variable instead of the timeDelay variable */
    t = setTimeout(fadeNext, timeLeft);
}


function toggleStreetView() {
    var toggle = panorama.getVisible();
    if (toggle == false) {
        panorama.setVisible(true);
    } else {
        panorama.setVisible(false);
    }
}
//var maxLoops = Xarr.length;
//var counter = 0;

var streetviewstatusimg;
function checkingstreetviewimg(pointi) {
    var delay = 1000;//1 seconds
    setTimeout(function () {
        var streetViewService = new google.maps.StreetViewService();
        var STREETVIEW_MAX_DISTANCE = 100;
        // var latLng = new google.maps.LatLng(40.7140, -74.0062);
        streetViewService.getPanoramaByLocation(pointi, STREETVIEW_MAX_DISTANCE, function (streetViewPanoramaData, status) {
            if (status == google.maps.StreetViewStatus.OK) {
                streetviewstatusimg = streetViewPanoramaData.location.pano;
                // alert(streetViewPanoramaData.location.pano);
                // ok
            } else {
                streetviewstatusimg = streetViewPanoramaData.location.pano;
                //  alert(streetViewPanoramaData.location.pano);
                //alert(streetviewstatusimg);
                // no street view available in this range, or some error occurred
            }
        });
       

        //your code to be executed after 1 seconds
    }, delay);
    return streetviewstatusimg;
   
}
var GmapsingleNostreetview;
function boundsmarkerview() {
    viewmap = 'normal';
    //Ext.Msg.show({
    //    title: 'Street View Image',
    //    message: 'Sorry,No street view image at this Point '+ boundreboundlatlong+' in radius (100m),system  will automatically bound marker to fit view map. ',
    //    width: 300,
    //    buttons: Ext.MessageBox.OK,
    //    iconCls: Ext.MessageBox.INFO,
    //    fn: function (buttonIdmsg) {



    //    }
    //});





    if (!GmapsingleNostreetview) {
        GmapsingleNostreetview = Ext.create('Ext.form.Panel', {
            centered: true,
            modal: true,
            hideOnMaskTap: true,
            width: 250,
            height: 120,
            style: "background-color: black;",
            scrollable: false,

            items: [
                {

                    html: '<font size="4" color="white">No street view image at this Point ' + boundreboundlatlong + ' in radius (100m),system  will automatically bound marker to fit view map.</font>'
                },
                {
                    xtype: 'spacer'
                },
                {

                    xtype: 'toolbar',
                    docked: 'bottom',
                    title: '',

                    items: [

                                {
                                    xtype: 'button',

                                    itemId: 'BtnGmapSingleNostreetview',
                                    ui: 'round',
                                    // padding: '10px',
                                    // text: 'OK/Procced.',
                                    html: '<font size="3" color="white">OK/Procced.</font>',
                                    handler: function () {
                                        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Bounds Map to Point..' });
                                        var task = Ext.create('Ext.util.DelayedTask', function () {
                                            var cntr = Ext.ComponentQuery.query("#panelMainGmapSingle")[0];
                                            cntr.setActiveItem(0);
                                            _valuesingle.show();
                                            mapgstreetview.hide();
                                            panoramastreetMap.setVisible(false);
                                            var bounds = new google.maps.LatLngBounds();
                                            bounds.extend(boundreboundlatlong);
                                            petamap.fitBounds(bounds);
                                            boundstatus = 'yes';
                                            Ext.Viewport.unmask();
                                        });
                                        task.delay(1000);

                                    }
                                },

                    ]

                },

            ]
        });
        Ext.Viewport.add(GmapsingleNostreetview);
    }
    GmapsingleNostreetview.show();
}

function stopClockMultiple() {


  //  _value.hide();
 //   Ext.getCmp('InfoSummData').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');


    //Ext.getCmp('InfoSummData').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Stop</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Stop</td> </tr>    <tr > <td class="tdspeedmax">Stop</td> <td class="tdspeedmax">Stop/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">Stop</td> </tr>  </table>');
    // Ext.getCmp('InfoSummData').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">' + modelRecords.get('TrackID') + '</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">' + modelRecords.get('TrackItem') + '</td> </tr>    <tr > <td class="tdspeedmax">' + modelRecords.get('Speed') + '</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">' + jam + '</td> </tr>  </table>');
    window.clearInterval(clockmultiple);
    // markerUserAcc.setMap(null);
    secmultiple = 0;
   // console.log(secmultiple);
    // Ext.getCmp('SingleSignalCount').setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    // Ext.getCmp('MultiSignalCount').setText('<font color="white"; size="2"><b>(0) No Signal..Re-Start Tracking</b></font>');
    //Ext.getCmp('InfoSummDatasingle').setHtml('<table>  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Stop</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Stop</td> </tr>    <tr > <td class="tdspeedmax">Stop</td> <td class="tdspeedmax">Stop/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">Stop</td> </tr>  </table>');
    //  Ext.getCmp('InfoSummData').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">Stop</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Stop</td> </tr>    <tr > <td class="tdspeedmax">Stop</td> <td class="tdspeedmax">Stop/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">Stop</td> </tr>  </table>');
    // document.getElementById("timer").innerHTML = 0;
    clickedmultiple = false;
}


function stopClockmapsendcommands() {

   // console.log("STOP");
    // Ext.getCmp('InfoSummDatasingle').setHtml('<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">ABC1234</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">-UNKNOWN-</td> </tr>    <tr > <td class="tdspeedmax">000km/h</td> <td class="tdspeedmax">000km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">00:00:00:00:00:00:00</td> </tr>  </table>');
    window.clearInterval(clockmapsendcommands);

    mapsendcommandssec = 0;

    clickedmapsendcommands = false;

}




var _value =
    Ext.create('Ext.Panel', {







        xtype: 'panel',
        //ORIGINAL // height: 118,
        // width: 169,
        //draggable:{

        //        direction: 'both',

        //    constraint: {
        //        min: { x: 100, y: 100 },
        //        max: { x: 100, y: 100 }
        //    },
        //},
        height: 138,
        width: 165,
        //height: 133,
        //width: 155,
        // height: '28.5%',
        // width: '44.5%',
        centered: false,
        // width:

        // width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 200 : 600,
        // height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 220 : 300,
        id: 'popuppanel',
        draggable: false,
        //layoutConfig: {
        //    pack: 'right',
        //    align: 'right'
        //},
        // cls: 'mybackground',
        right: 5,
        top: 50,
        // Make it modal so you can click the mask to hide the overlay
        // id: 'CreatePopup_ListGetLabOrderHistory',
        //modal: true,
        // hideOnMaskTap: true,
        // Make it hidden by default
        //hidden: true,
        //////////showAnimation: {
        //////////    type: 'popIn',
        //////////    duration: 250,
        //////////    easing: 'ease-out'
        //////////},

        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            direction: null,
            duration: 250,
            easing: null,
            out: null
        },

        style: 'background-color: #57A0DC;',
        //hideAnimation: {
        //    type: 'popOut',
        //    duration: 250,
        //    easing: 'ease-out'
        //},

        //centered: true,

        // width: '40%',
        //height: '80%',
        //  styleHtmlContent: true,
        items: [
            //{
            //    docked: 'top',
            //    xtype: 'toolbar',
            //    title: 'Live Data Tracking'
            //},


    {




        //html: '<div class="trackingbox"> <table> <thead> <tr> <th scope="col" colspan="2">Item</th> <th scope="col">Qty</th> <th scope="col">Price</th> </tr> </thead> <tbody> <tr> <td>Don&#8217;t Make Me Think by Steve Krug</td> <td>In Stock</td> <td>1</td> <td>$30.02</td> </tr> <tr> <td>A Project Guide to UX Design by Russ Unger &#38; Carolyn Chandler</td> <td>In Stock</td> <td>2</td> <td>$52.94 ($26.47 &#215; 2)</td> </tr> <tr> <td>Introducing HTML5 by Bruce Lawson &#38; Remy Sharp</td> <td>Out of Stock</td> <td>1</td> <td>$22.23</td> </tr> <tr> <td>Bulletproof Web Design by Dan Cederholm</td> <td>In Stock</td> <td>1</td> <td>$30.17</td> </tr> </tbody> <tfoot> <tr> <td colspan="3">Subtotal</td> <td>$135.36</td> </tr> <tr> <td colspan="3">Tax</td> <td>$13.54</td> </tr> <tr> <td colspan="3">Total</td> <td>$148.90</td> </tr> </tfoot> </table></div>',
        //  html: '<table>  <tr > <td colspan="2" style="background-color: red;  font-size: 11px; color: #fff; ">WTP 2681-PERSONA CAR</td> </tr> <tr > <td class="tde">Latitude</td> <td class="tde">3.93847234</td></tr> <tr > <td class="tde">Longituded</td> <td class="tde">101.27484755</td></tr>  <tr > <td class="tde">Speed</td> <td class="tde">80KM/h</td></tr>  <tr> <td  class="tde">Date</td> <td  class="tde">20-11-2014</td></tr> <tr> <td  class="tde">Time</td> <td  class="tde">01:32 AM</td></tr>   </table>',

        //////latest/// html: '<table>  <tr > <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center; ">Live Tracking Summary<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">Tracking ID</td> <td class="tdk">WTP 2681</td></tr> <tr > <td class="tde">Item</td> <td class="tdk">Persona Car</td></tr><tr > <td class="tde">Latitude</td> <td class="tdk">3.93847234</td></tr> <tr > <td class="tde">Longituded</td> <td class="tdk">101.27484755</td></tr>  <tr > <td class="tde">Speed</td> <td class="tdk">80KM/h</td></tr>  <tr> <td  class="tde">Status</td> <td  class="tdk">Running...</td></tr>  </table>',


        ////INUSE-- html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>    <tr > <td class="tdspeed">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> </table>',


        // #348017
        // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-12-2014 2:06AM</td> </tr>  </table>',



        id: 'InfoSummData',
        // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">'+Infotrackid+'</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">'+Infotracktype+'</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

        html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">null</td> </tr>  </table>',
        //original//  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

        //  html: '<font size=2.5px><b>Name:&emsp;</b>{Title} {Name}</br><b>ID Number:&emsp;</b>{ID Number}</br><b>Race:&emsp;</b>{Race}</br><b>Gender:&emsp;</b>{Gender}</br><b>Age:&emsp;</b>{Age}</font>',


        //html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-12-2014 2:06AM</td> </tr>  </table>',


        //xtype: 'fieldset',
        //id: 'fieldset1',
        //title: 'WTP 2681-PROTON PERSONA',

        //defaults: {
        //    labelWidth: '15%'
        //},
        //items: [
        //    {
        //        xtype: 'textfield',
        //        name: 'AccNo',
        //        label: 'Account No',           
        //        autoCapitalize: true,           
        //        clearIcon: true
        //    },
        //     {
        //         xtype: 'textfield',
        //         name: 'AccName',
        //         label: 'Account Name',            
        //         autoCapitalize: true,           
        //         clearIcon: true
        //     },]
    },




    //{
    //    docked: 'bottom',
    //    xtype: 'toolbar',
    //              title: 'Running...'
    //          },

        ],
        scrollable: false
        //showhideShowsummary()
        //left: 0,
        //padding: 10
    })
;