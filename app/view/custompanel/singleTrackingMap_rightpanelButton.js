


function singleTrackingMap_rightpanelbutton() {
    var _singleTrackingMaprightpanelbutton =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        height: 1,
        width: 1,
        id: '_singleTrackingMap_rightpanelID',
        draggable: false,
        right: -5,
        // bottom: 260,
        bottom: 265,

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
            //  easing: 'ease-in'
        },
        style: 'background-color: transparent;',
        items: {

            xtype: 'container',
            style: 'background-color: transparent;',
            layout: {
                type: 'vbox',
                pack: 'left',
                align: 'end'
            },

            items: [

                    {
                        xtype: 'button',
                        id: 'btnsingleTrackingMaprightpanelPointInformations',
                        height: 55,
                        width: 55,
                        html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                        //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {

                         
                        }
                    },
                  {
                      xtype: 'button',
                      id: 'btnsingleTrackingMaprightpanelChangeMaps',
                      height: 55,
                      width: 55,
                      html: '<div ><img src="resources/icons/changeMape1.png" width="45" height="45" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                   
                      }
                  },
                 {
                     xtype: 'button',
                     id: 'btnsingleTrackingMaprightpanelZoomPoints',
                     height: 55,
                     width: 55,
                     html: '<div ><img src="resources/icons/Picture33.png" width="45" height="45" alt="Company Name"></div>',
                     ui: 'plain',
                     handler: function () {
   
                     }
                 },
                       {
                           xtype: 'button',
                           id: 'btnsingleTrackingMaprightpanelGeolocation',
                           height: 55,
                           width: 55,
                           html: '<div ><img src="resources/icons/PictureGeoLocation.png" width="45" height="45" alt="Company Name"></div>',
                           ui: 'plain',
                           handler: function () {




                           }
                       },
                {
                    xtype: 'button',
                    id: 'btnsingleTrackingMaprightpanelSearchTrackingItems',
                    height: 55,
                    width: 55,
                    html: '<div ><img src="resources/icons/Picture28.png" width="45" height="45" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {

                    }
                },


                      {
                          xtype: 'button',
                          Id: 'btnsingleTrackingMaprightpanelStreetViewTracking',
                          height: 55,
                          width: 55,
                          hidden: true,
                          html: '<div ><img src="resources/icons/streetviewIcon.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {





                          }


                      },
                

            ]

        },

        initialize: function () {

            //   _singleTrackingMap_BurgeMenu.hide();
        }

    });

    return _singleTrackingMap_rightpanel;
}