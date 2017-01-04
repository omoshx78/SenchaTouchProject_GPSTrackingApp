
var _singleTrackingMap_MillageCount;
Ext.define('MyGPS.view.custompanel.SingelTrackingMap_MillageCount', {

});

function singleTrackingMap_MillageCount() {

 _singleTrackingMap_MillageCount =
   Ext.create('Ext.Panel', {

       xtype: 'panel',
       height: 1,
       width: 1,
       id: 'singleTrackingMap_MillageCount',
       draggable: false,
       left: -4,
       // bottom: 260,
       bottom: 71,

       showAnimation: {
           type: 'slide',
           direction: 'up',
           duration: 450,
           easing: 'ease-out'
       },
       hideAnimation: {
           type: null,
           direction: null,
           duration: null,
           //  easing: 'ease-in'
       },



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
       style: 'background-color: transparent;',
       items: {

           xtype: 'container',
           style: 'background-color: transparent;',
           layout: {
               type: 'vbox',
               //pack: 'left',
               //align: 'end'
           },

           items: [

                   {
                       xtype: 'button',
                       id: 'btnsingleTrackingMapMillageCount',
                       height: 45,
                       width: 135,
                       html: '<div ><img src="resources/icons/MillageCountInfo2.png" width="125" height="35" alt="Company Name"></div>',
                       //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                       ui: 'plain',
                       handler: function () {
                           MillageCountAlertHistory_LoadByDeviceIDAccountNo('359710048057492', '2047-Nor-2016-5');
                           SingleTrackingMap_MillageCountInfoShow();
                       }
                   },
                     {
                         xtype: 'button',
                         //height: 30,
                         top: 38,
                         width: 200,
                         //  left: -5,
                         id: 'btnSingleTrackingMillageBottom111',
                         text: '<font size="5" >0|0|0|4|3|5|6|6|9</font>',
                         //  iconCls: 'home',
                         // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                         ui: 'action-round',
                         handler: function () {
                            
                             MillageCountAlertHistory_LoadByDeviceIDAccountNo('359710048057492', '2047-Nor-2016-5');
                             SingleTrackingMap_MillageCountInfoShow();
                         }



                     },


           ]

       },


   });

    return _singleTrackingMap_MillageCount
}




function SingleTrackingMap_MillageCountHide() {
    _singleTrackingMap_MillageCount.hide();
}



function SingleTrackingMap_MillageCountShow() {

    Ext.Viewport.remove(_singleTrackingMap_MillageCount);
    setTimeout(function () {

        this.overlay = Ext.Viewport.add(singleTrackingMap_MillageCount()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
        // }
        this.overlay.show();



    }, 800);
}