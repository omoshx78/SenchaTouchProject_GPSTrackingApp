Ext.define('MyGPS.view.custompanel.multiTracking_InfoPanel', {

});


//function multiTrackingInfoPanel() {
//    var _multiTrackingInfoPanel =
//       Ext.create('Ext.Container', {



        


//            //{
//            //    xtype: 'container',
//            //    style: 'background-color: black;',
//            //    layout: {
//            //        type: 'hbox',
//            //        //pack: 'left',
//            //        //align: 'end'
//            //    },
//            //    items: [

//            //        {
//            //            xtype: 'button',
//            //            id: 'multiTrackingInfoPanel_infos',
//            //            height: 25,
//            //            width: 160,
//            //            html:'Summary Info'
//            //        },
//            //        {
//            //            xtype: 'button',
//            //            id: 'multiTrackingInfoPanel_close',
//            //            height: 25,
//            //            width: 30,
//            //            html: 'X'
//            //        }

//            //    ]
//            //},






//           xtype: 'container',
         
 
          
//           height: 300,
//           width: 190,
//           id: 'multiTrackingInfoPanel_',
//           draggable: true,
//         // centered: true,
//           //left: 1,
//           //top:32,
//           // bottom: 260,
//          // bottom: 65,
//           scrollable: {
//               direction: 'vertical',
//               directionLock: true
//           },
//           showAnimation: {
//               type: 'slide',
//               direction: 'right',
//               duration: 250,
//               easing: 'ease-out'
//           },
//           hideAnimation: {
//               type: null,
//               direction: null,
//               duration: null,
//               //  easing: 'ease-in'
//           },

//           style: 'background-color: transparent;',
//           items: {

//               xtype: 'container',
//               style: 'background-color: transparent;',
//               layout: {
//                   type: 'vbox',
//                   //pack: 'left',
//                   //align: 'end'
//               },
            

//               items: [


                  






//                   {
//                              xtype: 'button',
//                              id: 'multiTrackingInfoPanel_1',
//                              height: 250,
//                              width: 190,
//                              //height: 250,
//                              //width: 180,
//                            //  margin: '-36 -7 0 0',
//                            //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
//                              html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>',
//                              //  ui:'round'
//                              ui: 'plain',
//                          },
                              





//                                  {
//                                      xtype: 'button',
//                                      id: 'multiTrackingInfoPanel_2',
//                                      height: 200,
//                                      width: 190,
                                     
//                                      //height: 250,
//                                      //width: 180,
//                                    //  margin: '-36 -7 0 0',
//                                      html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div><div  class="transbox"><font size="3" color="white"><b>0045641</b></font><br><font size="0.5" color="white">------------Milliages------------</font></div>',
//                                      //  ui:'round'
//                                      ui: 'plain',
//                                  },

//                                   {
//                                       xtype: 'button',
//                                       id: 'multiTrackingInfoPanel_3',
//                                       height: 200,
//                                       width: 190,
                                     
//                                       //height: 250,
//                                       //width: 180,
//                                       //  margin: '-36 -7 0 0',
//                                       html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div><div  class="transbox"><font size="3" color="white"><b>0045641</b></font><br><font size="0.5" color="white">------------Milliages------------</font></div>',
//                                       //  ui:'round'
//                                       ui: 'plain',
//                                   },
                            



//               ]

//           },


//       });

//    return _multiTrackingInfoPanel
//}


function multiTrackingInfoPanel2() {
    var _multiTrackingInfoPanel2 =
       Ext.create('Ext.Container', {
           
           xtype: 'container',
           height: 100,
           width: 190,
           id: 'multiTrackingInfoPanel2_',
           draggable: true,
           // centered: true,
           //left: 1,
           //top:32,
           // bottom: 260,
           // bottom: 65,
          
           showAnimation: {
               type: 'slide',
               direction: 'right',
               duration: 250,
               easing: 'ease-out'
           },
           hideAnimation: {
               type: null,
               direction: null,
               duration: null,
               //  easing: 'ease-in'
           },

           style: 'background-color: transparent;',
           items: [

             {

                 xtype: 'container',
                 style: 'background-color: black;',
                 width: 170,
                 height: 30,
                 left: 10,
                 top:-8,
                 layout: {
                     type: 'hbox',
                  
                 },
                 items: [

                                         {
                        xtype: 'button',
                        id: 'multiTrackingInfoPanel_infos',
                        left: 2,
                        height: 25,
                        width: 135,
                        html: '<font size="0.5" color="white">Summary Points(Dragable)</font>',
                                             ui:'plain'
                                             
                    },
                    {
                        xtype: 'button',
                        id: 'multiTrackingInfoPanel_close',
                        right:-6,
                        height: 25,
                        width: 35,
                        html: '<font size="2.5" color="white">X</font>',
                        ui:'plain'
                    }

                 ]

             },

                 
                 {

                     xtype: 'container',
                     style: 'background-color: transparent;',
                     height: 500,
                     width: 190,
                    // top:5,
                     layout: {
                         type: 'vbox',
                         //pack: 'left',
                         //align: 'end'
                     },
                     scrollable: {
                         direction: 'vertical',
                         directionLock: true
                     },

                     items: [









                         {
                             xtype: 'button',
                             id: 'multiTrackingInfoPanel_1',
                             height: 230,
                             width: 190,
                             //height: 250,
                             //width: 180,
                             //  margin: '-36 -7 0 0',
                             //  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">PROTON PERSONA</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                             html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>',
                             //  ui:'round'
                             ui: 'plain',
                         },






                                        {
                                            xtype: 'button',
                                            id: 'multiTrackingInfoPanel_2',
                                            height: 230,
                                            width: 190,

                                            //height: 250,
                                            //width: 180,
                                            //  margin: '-36 -7 0 0',
                                            html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>',
                                           // html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div><div  class="transbox"><font size="3" color="white"><b>0045641</b></font><br><font size="0.5" color="white">------------Milliages------------</font></div>',
                                            //  ui:'round'
                                            ui: 'plain',
                                        },

                                         {
                                             xtype: 'button',
                                             id: 'multiTrackingInfoPanel_3',
                                             height: 230,
                                             width: 190,

                                             //height: 250,
                                             //width: 180,
                                             //  margin: '-36 -7 0 0',
                                             html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">0137798</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">Millage</td> </tr>   <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr> <tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">No 41 Parit Hussin<br>34300 Bagan Serai.Perak</td> </tr>  </table></div>',
                                            // html: '<div class="transbox"><table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: transparent;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: transparent;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdstreetViewTblInfo" >{Speed}</td> <td class="tdstreetViewTblInfo">120km/h</td></tr> <tr > <td class="tdstreetViewTblInfo1">Curr. Speed</td> <td class="tdstreetViewTblInfo1">Max Speed</td></tr> <tr> <td colspan="2" class="tdstreetViewTblInfo">10/13/2015 2:06:56AM</td> </tr>  </table></div><div  class="transbox"><font size="3" color="white"><b>0045641</b></font><br><font size="0.5" color="white">------------Milliages------------</font></div>',
                                             //  ui:'round'
                                             ui: 'plain',
                                         },




                     ]

                 },
                  



           ],



       });

    return _multiTrackingInfoPanel2
}