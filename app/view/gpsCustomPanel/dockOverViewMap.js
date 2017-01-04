Ext.define('MyGPS.view.custompanel.dockOverViewMap', {
    extend: 'Ext.Container',
    requires: ['Ext.Map'],
    xtype: 'dockOverViewMap',
    config: {
        layout: 'fit',
        items: [
          {xtype: 'map'}
        ]
},
initialize: function() {
    this.callParent(arguments);
   
    // wait 100 ms
    Ext.Function.defer(this.initMap,100,this);
},
initMap: function() {
    var mapPanel = this.down('map');
    var gMap = mapPanel.getMap();

    if (gMap == null) {
        Ext.Function.defer(this.initMap,250,this);
    } else {
        // ready to start calling google map methods
    }
}
});