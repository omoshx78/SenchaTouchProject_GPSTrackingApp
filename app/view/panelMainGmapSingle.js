Ext.define('MyGPS.view.panelMainGmapSingle', {
    extend: 'Ext.Panel',
    //requires: "MyGPS.view.MyAccount.singlesummary",
    
    requires: ['MyGPS.view.gMapStreetView.holderMapStreetView'],
    //  alias: "widget.todomapscard",
    xtype: "panelMainGmapSingles",
    id: 'panelMainGmapSingle',



    config: {
        layout: 'card',

        items: [{
          

            xtype: 'mapPanelsingle'
        }, {
            xtype: 'holderMapStreetView'
        }]
    }




    //config: {
    //    styleHtmlContent: true,
    //    layout: 'fit',
    //    items: [

    //         {
    //             xtype: 'container',
    //             docked: 'top',
    //             height: '100%',
    //             itemId: 'bottom',
    //             width: '100%',
    //             layout: {
    //                 type: 'vbox'
    //             },
    //             items: [

    //                 {
    //                     xtype: 'container',
    //                     //flex: 1,
    //                    // height: 20,
    //                      height: "5%",
    //                     itemId: 'left_blue_bottoma',
    //                     style: 'border-bottom:1px solid; background-color:#57A0DC;',
    //                     layout: {
    //                         type: 'hbox',
    //                         //  pack: 'justify'

    //                     },

    //                     items: [
    //                         {
    //                             xtype: 'label',
    //                             id: 'InfoGmapsingleTrackID',
    //                             html: '<font color="white"; size="2"><b>TrackID - </b></font>'
    //                         },
    //                          {
    //                              xtype: 'label',
    //                              id: 'InfoGmapsingleTrackItem',
    //                              html: '<font color="white"; size="2"><b>TrackItem</b></font>'
    //                          },
    //                          {
    //                              xtype: 'spacer',

    //                          },
    //                               {
    //                                   // xtype: 'button',
    //                                   xtype: 'image',
    //                                   //align: 'right',
    //                                   id: 'stoprunGmapsingle',
    //                                   // name: 'hideSummary',
    //                                   //  hidden:true,
    //                                   //  text: 'Hide Info',
    //                                   // ui: 'plain',
    //                                   html: '<div align="center"><img src="resources/icons/green.png"  width="16" height="16" alt="Company Name"/></div>',
    //                                   // padding: '0 0 -10 150',

    //                               },
    //                          {
    //                              xtype: 'label',
    //                              id: 'InfoGmapsinglespeed',
    //                              html: '<font color="white"; size="2">-<b>00.00KM/H</b></font>'
    //                          },


    //                     ]

    //                 },




    //                 {
    //                     xtype: 'panel',
    //                     //   flex: 10,
    //                    // height:60,
    //                     height: "90%",
    //                     itemId: 'left_blue_bosssttom',
    //                     style: 'border-bottom:1px solid;',
    //                     layout: {
    //                         type: 'fit'
    //                     },
    //                     xtype: "mapPanelsinglestreetview"

    //                 },
            

                     

    //                     {
    //                         xtype: 'container',
    //                        // flex: 1,
    //                         height: "5%",
    //                         //  height: "10%",
    //                         itemId: 'left_blue_bottoma',
    //                         style: 'border-bottom:1px solid; background-color:#57A0DC;',
    //                         layout: {
    //                             type: 'hbox',
    //                             //  pack: 'justify'

    //                         },

    //                         items: [
    //                             {
    //                                 xtype: 'label',
    //                                 id: 'InfoGmapsingleMapType',
    //                                 html: '<font color="white"; size="2"><b>Mode:Street View </b></font>'
    //                             },
                                  
    //                              {
    //                                  xtype: 'spacer',

    //                              },
    //                                   {
    //                                       xtype: 'label',
    //                                       id: 'InfoGmapsingleMapStreetViewStatus',
    //                                       html: '<font color="white"; size="2"><b>Street view Image:OK</b></font>'
    //                                   },


    //                         ]

    //                     },







    //             ]
    //         },





    //    ]
    //}

});


var _valuesendCommand =
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
        top: 80,
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



        id: 'InfoSummSendCommands',
        // html: '<table>  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">'+Infotrackid+'</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">'+Infotracktype+'</td> </tr>    <tr > <td class="tdspeedmax">80km/h</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

        html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',
        //original//  html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: red;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: red;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Current Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">02-11-2015 2:06AM</td> </tr>  </table>',

    },


        ],
        scrollable: false

    })
;