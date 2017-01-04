var IsStreetViewMiniMapActivated = 'no';
var _singleTrackingMapStreetView_MiniMapPanel;
var SingleTrackingMapStreetViewMiniMap;
var SingleTrackingMapStreetViewMiniMaplatlongCheck;
var MiniMapuniqueId = 1;
var MiniMapmarkersArray = [];
Ext.define('MyGPS.view.custompanel.SingleTrackingMapStreetView_MiniMap', {
});


function SingleTrackingMapStreetView_MiniMap() {
    _singleTrackingMapStreetView_MiniMapPanel = Ext.create('Ext.Panel', {
        layout: 'fit',
        id: 'SingleTrackingMapStreetViewMiniMapID',
        height: 155,
        width: 160,
        zIndex: 20,

        // height: '28.5%',
        // width: '44.5%',
        // centered: true,
        //  hidden:true,
        draggable: true,
        //left: '-30px',
        top: 20,
        //right:'-10px',
        //draggable: {
        //    direction: 'both',
        //},
        //right: 4,
        //top: 200,

     //   style: 'background-color: #57A0DC;',
        style: 'background-color: transparent;',

        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            direction: null,
            duration: null,
            easing: null,
           
        },
        items: [

            {
                xtype: 'container',             
                layout: {
                    type: 'hbox',
                  
                },
                items: [

                       {
                           xtype: 'button',
                           id: 'btnsingleTrackingStreetViewMiniMap',
                           height: 25,
                           width: 140,
                          // zIndex: 15,
                           margin: '-24 0 0 -10',
                           //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                           //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                           html: '<div class="transbox"><p><font size="2">Mini Map</font></p></div>',
                           //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',
                           //  ui:'round'
                           ui: 'plain',
                       },


                           {
                               xtype: 'button',
                               id: 'btnsingleTrackingStreetViewMiniMapClose',
                               height: 25,
                               width: 50,
                              // zIndex: 15,
                               margin: '-24 0 0 -20',
                               //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">No 42 Parit Hussin,<br>34300 Bagan Serai<br> Perak</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Geocode Address</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                               //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div>',
                               html: '<div class="transbox"><p><font size="2">X</font></p></div>',
                               //  html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; valign:top ">No 42 Parit Hussin,34300 Bagan Serai<br> Perak</td> </tr>  </table></div>',
                               //  ui:'round'
                               ui: 'plain',

                               handler: function () {


                                   StreetViewMiniMapHide();


                               }

                           },
                ]
            },
    

           



            {
                xtype: 'map',
              //  zIndex:10,
                useCurrentLocation: false,
                mapOptions: {
                    disableDefaultUI: true,
                    panControl: false,
                    zoomControl: true,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    overviewMapControl: false
                },
                listeners: {
                    maprender: function (comp, map) {

                        SingleTrackingMapStreetViewMiniMap = map;
                        SingleTrackingMapStreetViewMiniMaplatlongCheck = '000';
                    }
                }

            }]
    });
    return _singleTrackingMapStreetView_MiniMapPanel
}




function StreetViewMiniMapHide()
{
    _singleTrackingMapStreetView_MiniMapPanel.hide();
    IsStreetViewMiniMapActivated = 'no';
}




function SetStreetViewMiniMap(Latitude, Longitude, DirectionStreetView)
{
   var image = {
        url: ip + '7.gif', // url
        scaledSize: new google.maps.Size(60, 60), // scaled size
        //  origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(30, 30) // anchor
    };

   var streetviewMiniMapPosition = new google.maps.LatLng(Latitude, Longitude);
   SingleTrackingMapStreetViewMiniMap.setCenter(streetviewMiniMapPosition)
 //  SingleTrackingMapStreetViewMiniMap.setZoom(16);

   if (SingleTrackingMapStreetViewMiniMaplatlongCheck == Longitude)
   { return }

 

       var markerStreetviewMiniMapTop = new google.maps.Marker({
           position: streetviewMiniMapPosition,
            icon: image,
            flat: true,
            // labelAnchor: new google.maps.Point(20, 27),

            draggable: false,
            optimized: false,
            //  labelClass: "labelsMark",// the CSS class for the label
            map: SingleTrackingMapStreetViewMiniMap,
          
        });

      var markerStreetviewMiniMapBottom = new MarkerWithLabel({
          position: streetviewMiniMapPosition,
            //  icon: image,
            flat: true,
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 8,
                // rotation: 16.86,
                rotation: DirectionStreetView,
                // rotation: 0.0,
                // strokeColor: '#F6358A',
                strokeColor: '#FFFFFF',
                fillColor: '#57A0DC',
                fillOpacity: 1,
                strokeWeight: 2
            },
            //  optimized: false,
            //  icon: image,
            draggable: false,
            //labelStyle: { opacity: 0.75 },
            // labelContent: "<div style=background-color:Black;width:auto;border:2px solid white;padding:15px;><font size=3 color=white>" + trackingItems + "</font></div>",
       
            labelAnchor: new google.maps.Point(70, 13),
          
            map: SingleTrackingMapStreetViewMiniMap,
       
        });

      


      SingleTrackingMapStreetViewMiniMaplatlongCheck = Longitude;
      markerStreetviewMiniMapTop.id = MiniMapuniqueId;
      markerStreetviewMiniMapBottom.id = MiniMapuniqueId;
      if (MiniMapuniqueId > 1) {
          DeleteMarkersingleTrackingStreetviewMiniMap(markerStreetviewMiniMapTop.id - 1);
          DeleteMarkersingleTrackingStreetviewMiniMap(markerStreetviewMiniMapBottom.id - 1);
      }

      MiniMapuniqueId++;


      MiniMapmarkersArray.push(markerStreetviewMiniMapTop);
      MiniMapmarkersArray.push(markerStreetviewMiniMapBottom);


}


function DeleteMarkersingleTrackingStreetviewMiniMap(id) {
    //Find and remove the marker from the Array

    //console.log("DELETEEEE:"+id);
    for (var i = 0; i < MiniMapmarkersArray.length; i++) {
        if (MiniMapmarkersArray[i].id == id) {
            //Remove the marker from Map                  
            MiniMapmarkersArray[i].setMap(null);

            //Remove the marker from array.
            MiniMapmarkersArray.splice(i, 1);
            return;
        }
    }
}