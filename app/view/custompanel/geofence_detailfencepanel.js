
var geoFenceStatus;

Ext.define('MyGPS.view.custompanel.geofence_detailfencepanel', {

});




var _geofence_detailfencepanel =
     Ext.create('Ext.Panel', {
         draggable: false,
        centered: true,
         scrollable: false,
         height: 340,
         width: 276,
         // width: '70%',
         // height: '50%',
         modal: true,
         hideOnMaskTap: true,
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: null,
             duration: null,
             easing: null
         },

         items: [{
            // xtype: 'carousel',
             xtype: 'panel',
             height: 330,
             // height: 148,
             items: [


                 {
              
                     xtype: 'container',
                   //  style: 'background-color: transparent;',
                     // margin: '110 2 0 0',
                     // draggable: true5,
                     layout: {

                         type: 'vbox',
                        
                     },

                     items: [
                                 {
                                     id: 'GeofenceDetailpanelHeader',
                                     html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Geofence:??????</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src=http://www.eobcards.com/corey.gif></td> </tr></table>',
                                 },


                                       {
                                           items: [

                                               {

                                                   xtype: 'toolbar',
                                                   //   title: 'Re-Confirm Password',
                                                    docked: 'top',
                                                   items: [
                             {
                                 //docked: 'right',
                                 // width: 50,
                                 ui: 'plain',
                                 xtype: 'button',
                                 id: 'btnFenceArea',
                                 width: '100%',
                                 text: 'Fence Area',
                                 handler: function () {

                                 }
                             }, ],

                                               },
                                           ],

                                       },

                                       {

                                           xtype: 'carousel',
                                           height: 100,
                                           // height: 148,
                                           items: [
                                               {
                                                   id: 'GeofenceDetailpanel1',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">NUR ANIS AQILAH BT TARMIZI</td> <td class="tde">OUT OF FENCE!!</td></tr> <tr > <td class="tdk">Name</td> <td class="tdk">Status</td></tr><tr > <td class="tde">7 YEARS</td> <td class="tde">AUTHISME</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                   cls: 'card1'
                                               },
                                                //{
                                                   // id: 'GeofenceDetailpanel2',
                                                  //  html: '<table class="tabledetail"><tr> <td class="tde">X=1.02154554<br>Y:1.0255881</td> <td class="tde">JALAN SRI PERMAISURI 1 ,BANDAR SRI PERMAISURI,56000 KUALA LUMPUR</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   // cls: 'card2'
                                                //},
                                               {
                                                   id: 'GeofenceDetailpanel3',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">TARMIZI BIN RAHIM (FATHER)</td> <td class="tde">AZULIANA BT MOHAMMAD (MOTHER)</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   cls: 'card2'
                                               },
                                               {
                                                   id: 'GeofenceDetailpanel4',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                   cls: 'card3'
                                               },
                                               {
                                                   id: 'GeofenceDetailpanel5',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">10.5KM</td> <td class="tde">20-10-2015 09:35AM</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                   cls: 'card3'
                                               }
                                               ]
                                          



                                       }


                            
                     ],




                           
                              //html: '<table class="tabledetail">  <tr > <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>{DateDT}</td> </tr><tr > <td class="tde">{TrackID}</td> <td class="tde">{TrackItem}</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">{Latitude}</td> <td class="tde">{Longitude}</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                             // cls: 'card1'
                          },
                             //////////{
                             //////////    id: '_geofence_detailfencepanelID',
                             //////////    html: '<table class="tabledetail">  <tr> <td colspan="2" style="background-color: grey;  font-size: 12px; color: #fff; text-align: center; ">GPS Live Data Info<br>{DateDT}</td> </tr><tr > <td class="tde">{TrackID}</td> <td class="tde">{TrackItem}</td></tr> <tr > <td class="tdk">Tracking ID</td> <td class="tdk">Tracking Item</td></tr><tr > <td class="tde">{Latitude}</td> <td class="tde">{Longitude}</td></tr> <tr > <td class="tdk">Latituded</td> <td class="tdk">Longituded</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                             //////////    //  title: 'title card 2',
                             //////////    //  html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona Car</td> </tr>    <tr > <td class="tdspeed">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tde">Current Speed</td> <td class="tdk">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-12-2014 2:06AM</td> </tr>  </table>',
                             //////////    // html: 'card1',
                             //////////    // html: '<table>  <tr > <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center; ">Live Tracking Summary<br>(20-11-2014 01:32AM)</td> </tr><tr > <td class="tde">Tracking ID</td> <td class="tdk">WTP 2681</td></tr> <tr > <td class="tde">Item</td> <td class="tdk">Persona Car</td></tr><tr > <td class="tde">Latitude</td> <td class="tdk">3.93847234</td></tr> <tr > <td class="tde">Longituded</td> <td class="tdk">101.27484755</td></tr>  <tr > <td class="tde">Speed</td> <td class="tdk">80KM/h</td></tr>  <tr> <td  class="tde">Status</td> <td  class="tdk">Running...</td></tr>  </table>',
                             //////////    cls: 'card1'
                             //////////},


             ]
         },




         ],



     });







var _LiveTracking_InfoPanel =
     Ext.create('Ext.Panel', {
      // draggable: true,
       centered: true,
         //  scrollable: false,
        //right: 215,
     
        //top: 50,
        // bottom:-100,
         height: 370,
         width: 276,
         // width: '70%',
         // height: '50%',
         modal: true,
       //  style: "background-color: #57A0DC; color:white;",
         hideOnMaskTap: true,
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: null,
             duration: null,
             easing: null
         },

         items: [{
             // xtype: 'carousel',
             xtype: 'panel',
             height: 330,
            
             // height: 148,
             items: [


                 {

                     xtype: 'container',
                     layout: {

                         type: 'vbox',
                         style: "background-color: #57A0DC; color:white;",

                     },
                    // style: 'background-color: transparent;',
                     items: [
                                 {
                                     id: 'LiveTrackingInfoPanelpanelHeader',
                                     html: '<table width=100%>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">Status:Static (11h20m24s)</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;"><img src="/resources/icons/protonWTP2681.jpg" style="width:228px;height:150px;"></td> </tr></table>',
                                 },

                                 {
                                     xtype: 'container',
                                    
                                     //style: 'background-color:#57A0DC color: #fff',
                                     style: 'background-color: #57A0DC',
                                     layout: {

                                         type: 'hbox',

                                     },
                                     items: [
                                          {
                                              //docked: 'right',
                                              // width: 50,
                                             //  ui: 'plain',
                                            //  top: -3,
                                              ui: 'action',
                                              xtype: 'button',
                                              id: 'btnLiveTrackingInfoPanelPlayBacks',
                                              // width: '50%',
                                              iconCls: 'time',
                                            
                                              text: '<font size="2.5">Playback</font>',
                                              handler: function () {
                                                  _LiveTracking_InfoPanel.hide();
                                              }
                                          },
                                          {
                                              xtype:'spacer'
                                          },
                                             {
                                                 //docked: 'right',
                                                 // width: 150,
                                                 // ui: 'plain',
                                                // right:3,
                                               //  top:-3,
                                                 ui: 'action',
                                                 xtype: 'button',
                                                 id: 'btnLiveTrackingInfoPanelCommands',
                                                 // width: '50%',
                                                 iconCls: 'organize',
                                                 text: '<font size="2.5">Commands</font>',
                                               //  text: 'Command',
                                                 handler: function () {

                                                 }
                                             },

                                     ]
                                 },
                                      
                               

                                       

                                       {

                                           xtype: 'carousel',
                                           height: 100,
                                         // top:-200,
                                           // height: 148,
                                           items: [
                                               {
                                                   id: 'LiveTrackingInfoPanel1',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">PROTON PERSONA</td> <td class="tde">WTP2681</td></tr> <tr > <td class="tdk">Track Item</td> <td class="tdk">Track ID</td></tr><tr > <td class="tde">OFF</td> <td class="tde">AUTHISME</td></tr> <tr > <td class="tdk">Age</td> <td class="tdk">Risk</td></tr><tr > <td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                   cls: 'card1'
                                               },
                                                //{
                                                   // id: 'GeofenceDetailpanel2',
                                                  //  html: '<table class="tabledetail"><tr> <td class="tde">X=1.02154554<br>Y:1.0255881</td> <td class="tde">JALAN SRI PERMAISURI 1 ,BANDAR SRI PERMAISURI,56000 KUALA LUMPUR</td></tr> <tr > <td class="tdk">Location</td> <td class="tdk">Geocode Adress</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   // cls: 'card2'
                                                //},
                                               {
                                                   id: 'LiveTrackingInfoPanel3',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">TARMIZI BIN RAHIM (FATHER)</td> <td class="tde">AZULIANA BT MOHAMMAD (MOTHER)</td></tr> <tr > <td class="tdk">Responder 1</td> <td class="tdk">Responder 2</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   cls: 'card2'
                                               },
                                               {
                                                   id: 'LiveTrackingInfoPanel4',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder 3</td> <td class="tdk">Responder 4</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                   cls: 'card3'
                                               },
                                               {
                                                   id: 'LiveTrackingInfoPanel5',
                                                   html: '<table class="tabledetail"><tr> <td class="tde">10.5KM</td> <td class="tde">20-10-2015 09:35AM</td></tr> <tr > <td class="tdk">Fence Length</td> <td class="tdk">Fence Date</td></tr> <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"></td> <td class="tdk"></td></tr><tr > <td class="tde"></td> <td class="tde"></td></tr> <tr > <td class="tdk"</td> <td class="tdk"></td></tr></table>',
                                                   //html: '<table class="tabledetail"><tr> <td class="tde">MOHD HELMI BIN RAHIM(RELATIVE)</td> <td class="tde">ZULKIFLI BIN RAHIM (RELATIVE)</td></tr> <tr > <td class="tdk">Responder3</td> <td class="tdk">Responder4</td></tr><tr ><td class="tde">{Speed}</td> <td class="tde">160km/h</td></tr> <tr > <td class="tdk">Current Speed</td> <td class="tdk">Max Speed</td></tr><tr > <td class="tde">{BatteryReading}</td> <td class="tde">BATTERY</td></tr> <tr > <td class="tdk">Batery Status</td> <td class="tdk">Power Mode</td></tr><tr > <td class="tde">{GPSModel}</td> <td class="tde">Standard</td></tr> <tr > <td class="tdk">GPS Tracker Model</td> <td class="tdk">Tracking Mode</td></tr><tr > <td class="tde">{GPSSimNumber}</td> <td class="tde">68 meter</td></tr> <tr > <td class="tdk">Sim Number</td> <td class="tdk">Max Elevation</td></tr></table>',
                                                   cls: 'card3'
                                               }
                                           ]




                                       }



                     ],

                 },
                          
             ]
         },




         ],



     });