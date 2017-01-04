
var _singleTrackingMap_BurgeMenu;
var _singleTrackingMapStreetView_BurgeMenu;
var _singleTrackingMapStreetView_BurgeMenuIsInitialized = 'no';
var _singleTrackingMap_BurgeMenuIsInitialized = 'no';
Ext.define('MyGPS.view.custompanel.burgerMenu', {

});






function SingleTrackingMap_BurgeMenu() {
 _singleTrackingMap_BurgeMenu =
   Ext.create('Ext.Panel', {

       xtype: 'panel',
       height: 1,
       width: 1,
       id: 'singleTrackingMap_BurgeMenuID',
       draggable: false,
       right: -5,
       // bottom: 260,
       bottom: 64,

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
                       id: 'btnsingleTrackingMapBurgeMenu',
                       height: 75,
                       width: 75,
                       html: '<div ><img src="resources/icons/BurgerMenu1.png" width="65" height="65" alt="Company Name"></div>',
                       //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                       ui: 'plain',
                       handler: function () {


                           SingleTrackingMap_BurgeMenuHide();
                           _singleTrackingMap_BurgeMenuIsInitialized = 'yes';
                           //  Ext.Viewport.remove(_singleTrackingMap_BurgeMenu);
                           setTimeout(function () {
                               Ext.Viewport.remove(_singleTrackingMap_Menu);
                               this.overlay = Ext.Viewport.add(SingleTrackingMap_Menu());
                               this.overlay.show();

                           }, 100);


                       }
                   },


           ]

       },


   });
return _singleTrackingMap_BurgeMenu;
}



function SingleTrackingMap_BurgeMenuHide() {
    _singleTrackingMap_BurgeMenu.hide();
}



function SingleTrackingMap_BurgeMenuShow() {

    
    setTimeout(function () {
        Ext.Viewport.remove(_singleTrackingMap_BurgeMenu);
        this.overlay = Ext.Viewport.add(SingleTrackingMap_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
        // }
        this.overlay.show();



    }, 500);
}




function SingleTrackingMapStreetView_BurgeMenu() {
    _singleTrackingMapStreetView_BurgeMenu =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'singleTrackingMapStreetView_BurgeMenuID',
          draggable: false,
          right: -5,
          // bottom: 260,
          bottom: 64,
          zIndex:5,
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
                          id: 'btnsingleTrackingMapStreetViewBurgeMenu',
                          height: 75,
                          width: 75,
                          html: '<div ><img src="resources/icons/BurgerMenu1.png" width="65" height="65" alt="Company Name"></div>',
                          //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {

                              _singleTrackingMapStreetView_BurgeMenuIsInitialized = 'yes';
                              SingleTrackingMapStreetView_BurgeMenuHide();
                              setTimeout(function () {
                                  Ext.Viewport.remove(_singleTrackingMapStreetView_Menu);
                                  this.overlay = Ext.Viewport.add(SingleTrackingMapStreetView_Menu());
                                  this.overlay.show();

                              }, 100);


                          }
                      },


              ],
              
          },
         

      });
    return _singleTrackingMapStreetView_BurgeMenu;
}

function SingleTrackingMap_BurgeMenuHide()
{
    _singleTrackingMap_BurgeMenu.hide();
}







function SingleTrackingMapStreetView_BurgeMenuHide() {
    _singleTrackingMapStreetView_BurgeMenu.hide();
}



function SingleTrackingMapStreetView_BurgeMenuShow() {

    Ext.Viewport.remove(_singleTrackingMapStreetView_BurgeMenu);
    setTimeout(function () {

        this.overlay = Ext.Viewport.add(SingleTrackingMapStreetView_BurgeMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
        // }
        this.overlay.show();



    }, 500);
}