Ext.define('MyGPS.view.gMapStreetView.holderMapStreetView', {
    extend: 'Ext.Panel',
    requires: 'MyGPS.view.gMapStreetView.gSingleTrackingMapStreetView',   
    xtype: "holderMapStreetView",


    config: {
        styleHtmlContent: true,
        layout: 'fit',
        items: [

          


    

             {
                 xtype: 'container',
                 //docked: 'top',
                 height: '100%',
                 //itemId: 'bottom',
                 width: '100%',
                 layout: {
                     type: 'vbox'
                 },
                 items: [

                    
                     {
                         xtype: 'container',
                         //flex: 1,
                        // hidden: true,
                         height: "5%",
                         id: 'holderMapStreetView_panelUpper',
                         style: 'border-bottom:1px solid; background-color:#57A0DC;',
                         layout: {
                             type: 'hbox',
                             //  pack: 'justify'

                         },

                         items: [
                             {
                                 xtype: 'label',
                                 id: 'InfoGmapoverviewTrackID',
                                 html: '<font color="white"; size="2"><b>TrackID - </b></font>'
                             },
                              {
                                  xtype: 'label',
                                  id: 'InfoGmapoverviewTrackItem',
                                  html: '<font color="white"; size="2"><b>TrackItem</b></font>'
                              },
                              {
                                  xtype: 'spacer',

                              },
                                   {
                                       // xtype: 'button',
                                       xtype: 'image',
                                       //align: 'right',
                                       id: 'stoprunGmapsingleoverview',
                                       // name: 'hideSummary',
                                        hidden:true,
                                       //  text: 'Hide Info',
                                       // ui: 'plain',
                                       html: '<div align="center"><img src="resources/icons/green.png"  width="16" height="16" alt="Company Name"/></div>',
                                       // padding: '0 0 -10 150',

                                   },
                              {
                                  xtype: 'label',
                                  id: 'InfoGmapsinglespeedoverview',
                                  html: '<font color="white"; size="2">-<b>00.00KM/H</b></font>'
                              },


                         ]

                     },


                     {
                         xtype: 'panel',
                         //   flex: 10,
                         // height:60,
                         height: "90%",
                         id: 'holderMapStreetView_gSingleTrackingMapStreetView',
                         //style: 'border-bottom:1px solid;',
                         layout: {
                             type: 'fit'
                         },
                         xtype: "gSingleTrackingMapStreetView",
                     
                     },
                    


                         
{
    xtype: 'container',
    // flex: 1,
    height: "5%",
   // hidden: true,
    id: 'holderMapStreetView_panelLower',
    style: 'border-bottom:1px solid; background-color:#57A0DC;',
    layout: {
        type: 'hbox',
        //  pack: 'justify'

    },

    items: [
        {
            xtype: 'label',
            id: 'InfoGmapsingleMaxSpeedoverview',
            html: '<font color="white"; size="2"><b>Max Speed: </b></font>'
        },

         {
             xtype: 'spacer',

         },
              {
                  xtype: 'label',
                  id: 'InfoGmapsingleDToverview',
                  html: '<font color="white"; size="2"><b>00:00:00:00</b></font>'
              },


    ]

},






                 ]
             },





        ]
    }

});

