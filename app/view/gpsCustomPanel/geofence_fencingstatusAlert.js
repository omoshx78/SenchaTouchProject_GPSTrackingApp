var _InfoPanelSstreetView =
    Ext.create('Ext.Panel', {

        xtype: 'panel',      
        //height: 55,     
        //width: 92,   
        height: 138,
        width: 165,
        id: 'InfoPanelSstreetView',
        draggable: false,

        //right: 4,
        //top: 70,
        right: 5,
        top: 50,
        style: 'background-color: #57A0DC;',

        //showAnimation: {
        //    type: 'slide',
        //    direction: 'down',
        //    duration: 350,
        //    easing: 'ease-out',

        //},
        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            direction: null,
            duration: 650,
            easing: null,
            out: null

        },


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


        items:

           

            {

                    

                xtype: 'container',
                style: 'background-color: transparent;',
                // margin: '110 2 0 0',
                // draggable: true5,
                layout: {

                    type: 'vbox',
                    pack: 'left',
                   // align: 'end'
                },

                items: [
                     {
                         //   html: '<table class="tblmasterhistory"><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpsdata">WTP 2681</td> <td class="tdgpsdata">Proton Persona</td></tr> <tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr><tr > <td class="tdgpslabel">Tracked ID</td> <td class="tdgpslabel">Tracked Item</td></tr></table>',
                         id: 'InfoPanelSstreetViewContainer',
                         //html: '<table>  <tr> <td colspan="2" font-weight: bold; style="background-color: #57A0DC;  font-size: 15px; color: #fff; text-align: center;">ENABLED</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;">Status</td> </tr></table>',
                         html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 13px; color: #fff; text-align: center;  valign:top; height:20%">{TrackID}</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 10px; color: #fff; text-align: center;  valign:top;  height:20% ">{TrackItem}</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                     },
                     {

                         xtype: 'button',
                         hidden:true,
                         Id: 'btnGeofenceBoundPointccccxxx',
                         // margin: '-1 0 0 0',
                         // margin: 'top left bottom right',
                         //// margin: '250 5 -30 20',
                         //margin: '250 2 -30 20',
                         //style: 'margin-top: 350px;margin-left: 500px;',
                         // text: 'Start',
                         //height: 47,
                         //width: 47,
                         //height: 40,
                         //width: 40,
                         height: 55,
                         width: 255,
                         //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                         //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                         html: '<div ><img src="resources/icons/boundpoints.png" width="45" height="45" alt="Company Name"></div>',
                         //ui:'round'
                         ui: 'plain',
                         handler: function () {


                         }
                     }


                ]

            

    }

            



    });






var _GeofenceInfopanel=
    Ext.create('Ext.Panel', {
        xtype: 'panel',
        height: 145,
        width: 195,
        id: 'GeofenceInfopanels',
        draggable: false,
        right: 5,
        top: 50,
        style: 'background-color: #57A0DC;',

        showAnimation: {
            type: 'slide',
            direction: 'down',
            duration: 350,
            easing: 'ease-out',
        },
        hideAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 650,
            out: 'ease-in'          
        },

        style: 'background-color: #57A0DC;',
        items:


            {
                xtype: 'container',
                style: 'background-color: transparent;',
               
                items: [
                    
                     {
                         id: 'GeofenceInfopanel',
                         html: '<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',
                          

                     },
                     
                     //{

                     //    xtype: 'button',
                     //   // hidden: true,
                     //    Id: 'btnGeofenceBoundPointcccc',
                     //    height: 55,
                     //    width: 255,
                     //    //   style: "background-color: #57A0DC; border-color: blue;margin: .3em;color:blue;border-radius: 10px; border-style: solid;border-bottom-color: #ff0000;",
                     //    //style: 'background-color: #0042BA;border-radius: 0px;border-color: white;margin: .5em;color:white',
                     //    html: '<div ><img src="resources/icons/boundpoints.png" width="45" height="45" alt="Company Name"></div>',
                     //    //ui:'round'
                     //    ui: 'plain',
                     //    handler: function () {

                     //        alert('test');
                     //    }
                     //}


                ]



            }
        






    });








var _TrackingInfopanel =
    Ext.create('Ext.Panel', {
        xtype: 'panel',
        height: 145,
        width: 195,
        id: 'TrackingInfopanel',
        draggable: false,
        right: 5,
        top: 50,
        style: 'background-color: #57A0DC;',

        showAnimation: {
            type: 'slide',
            direction: 'down',
            duration: 350,
            easing: 'ease-out',
        },
        hideAnimation: {
            type: 'slide',
            direction: 'up',
            duration: 650,
            out: 'ease-in'
        },

        style: 'background-color: #57A0DC;',
        items:


            {
                xtype: 'container',
                style: 'background-color: transparent;',

                items: [

                     {
                         id: 'TrackingInfopanelTbl',
                         html: '<table class="tblgpssummary2">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 18px; color: #fff; text-align: center;  valign:top; height:20%">WTP 2681</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 14px; color: #fff; text-align: center;  valign:top;  height:20% ">Proton Persona</td> </tr>    <tr > <td class="tdspeedmax">{Speed}</td> <td class="tdspeedmax">120km/h</td></tr> <tr > <td class="tdspeed">Curr. Speed</td> <td class="tdspeed">Max Speed</td></tr> <tr> <td colspan="2" class="tdspeedmax">10/13/2015 2:06:56AM</td> </tr>  </table>',


                     },

                   

                ]



            }







    });



var _GeofenceInfopanelMillage=
    Ext.create('Ext.Panel', {
        xtype: 'panel',
        height: 110,
        width: 198,
        id: 'GeofenceInfopanelMillage',
        draggable: false,
        //right: 205,
        right: 5,
        top: 202,
        style: 'background-color: #57A0DC;',

        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 350,
            easing: 'ease-out',
        },
        hideAnimation: {
            type: 'slide',
            direction: 'right',
            duration: 650,
            out: 'ease-in'
        },
        //hideAnimation: {
        //    type: null,
        //    direction: null,
        //    duration: null,
        //    //  easing: 'ease-in'
        //},
        style: 'background-color: #57A0DC;',
        items:


            {
                xtype: 'container',
                style: 'background-color: transparent;',

                items: [
                     {
                         id: 'GeofenceInfopanelMillageTable',
                         html: '<table class="tblgpssummary">  <tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 38px; color: #fff; text-align: center;  valign:top; height:20%">00000758</td> </tr><tr> <td colspan="2" style="background-color: #57A0DC;  font-size: 12px; color: #fff; text-align: center;  valign:top;  height:20% "><b>Milliage Counted (Approximate)</b></td> </tr>  </table>',

                         

                     },



                   


                ]



            },









    });


