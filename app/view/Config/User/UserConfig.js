Ext.define('MyGPS.view.Config.User.UserConfig', {

});

var _IsSuccessLogin = false;

function GetCurrentUserID() {

    var _value = '';
    //_DataStore_Maintain_GetByMPI.load();
    var store = _DataStore_User_Login.getAt(0);
    if (store != null) {
        _value = store.get('ID');
    }
    return _value;
}
function GetCurrentUserName() {

    var _value = '';
    //_DataStore_Maintain_GetByMPI.load();
    var store = _DataStore_User_Login.getAt(0);
    if (store != null) {
        _value = store.get('UserName');
    }
    return _value;
}

function GetCurrentUserAccountNo() {

    var _value = '';
    //_DataStore_Maintain_GetByMPI.load();
    var store = _DataStore_User_Login.getAt(0);
    if (store != null) {
        _value = store.get('AccountNo');
    }
    return _value;
}



function GetCurrentUserPd() {

    var _value = '';
    //_DataStore_Maintain_GetByMPI.load();
    var store = _DataStore_User_Login.getAt(0);
    if (store != null) {
        _value = store.get('Password');
    }
    return _value;
}