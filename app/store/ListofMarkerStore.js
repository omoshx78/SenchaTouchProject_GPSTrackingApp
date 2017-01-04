

var marker1 = document.location.protocol + '//' + document.location.host + '/resources/icons/marker01.png';
var marker2 = document.location.protocol + '//' + document.location.host + '/resources/icons/marker02.png';
var marker3 = document.location.protocol + '//' + document.location.host + '/resources/icons/marker03.png';

Ext.define("MyGPS.store.ListofMarkerStore", {
    extend: 'Ext.data.Store',
   // alias: 'store.List',
    id: 'ListofMarkerStore',
    config: {
        model: 'MyGPS.model.ListOfMarkerModel',
        //sorters: 'firstName',
        //grouper: function (record) {
        //    return record.get('firstName')[0];
        //},
        data: [
            { Marker: '<img src=' + marker1 + '  alt="Smiley face" width="32" height="32"> <br>Standard ', MarkerName: 'Standard', ID: 'ID1' },
            //{ Marker: '<img src=' + marker2 + '  alt="Smiley face" width="32" height="32"><br>Red Push Pin', MarkerName: 'Red Push Pin', ID: 'ID2' },
            //{ Marker: '<img src=' + marker3 + '  alt="Smiley face" width="32" height="32"><br> Circle Graphic', MarkerName: 'Circle Graphic', ID: 'ID3' }
   
        ]
    }
});
