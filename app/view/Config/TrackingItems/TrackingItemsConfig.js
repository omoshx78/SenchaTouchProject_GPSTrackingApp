Ext.define('MyGPS.view.Config.TrackingItems.TrackingItemsConfig', {

});

//letak dekat SingleTrackingMap class
var _TrackingItemsConfigDeviceID;

function GetCurrentDeviceID() {

    var _value = _TrackingItemsConfigDeviceID;
    //_DataStore_Maintain_GetByMPI.load();
    //var store = _DataStore_User_Login.getAt(0);
    //if (store != null) {
    //    _value = store.get('ID');
    //}
    return _value;
}