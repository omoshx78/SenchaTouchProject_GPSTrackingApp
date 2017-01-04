


Ext.define('MyGPS.view.custompanel.overViewMapStreetViewLiveTracking', {

});

var overViewMapStreetViewLiveTracking = Ext.create('Ext.Panel', {
    layout: 'fit',
    id: 'overViewMapStreetViewLiveTrackingID',
    height: 200,
    width: 210,


    // height: '28.5%',
    // width: '44.5%',
 //centered: true,
  //  hidden:true,
    draggable: false,
    //left: '-10px',
    //top: '140px',
    //draggable: {
    //    direction: 'both',
    //},
    right: 4,
    top: 200,
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
    items: [{
        xtype: 'map',
        useCurrentLocation: false,
        mapOptions: {
            disableDefaultUI: true,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        },
        listeners: {
            maprender: function (comp, map) {

                  gSingleTrackingMapStreetViewOverviewMapWeb = map;

            }
        }
     
    }]
});

