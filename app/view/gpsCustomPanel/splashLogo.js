
Ext.define('MyGPS.view.custompanel.splashLogo', {

    extend: 'Ext.form.Panel',
    alias: "widget.splashLogo",
    xtype: "splashLogo",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'Ext.data.Store'],
    config: {
        fullscreen: true,
        scrollable: false,
        style: "background-color: #57A0DC; color:white;",
        defaults: {
        },
        items: [

            {
                xtype: 'container',
                height: '100%',
                width: '100%',

                //layout: 'fit',
             
                layout: {
                    flex: 1,
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                    style: "background-color: #57A0DC; color:white;",
                },
               // style: "background-color: #57A0DC; color:white;",
                items: [

                      {
                          xtype: 'panel',
                          //  bodyPadding: 10,
                          height: 280,
                          width: 320,
                         margin: '0 -40 0 0',
                          //   left:30,
                          //height: '100%',
                          //width: '100%',
                          html: '<img src="resources/icons/BgLogin.png" style="max-height:100%; max-width:100%;"/>',
                      },





                ]
            },




        ]
    }






});
var _splashLogo =
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
                                     id: 'GeofencesplashLogo',
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
                                 id: 'btnsplashLogo',
                                 width: '100%',
                                 text: 'Fence Area',
                                 handler: function () {

                                 }
                             }, ],

                                               },
                                           ],

                                       },

                                      



                     ],
                 },

             ]
         },




         ],



     });



