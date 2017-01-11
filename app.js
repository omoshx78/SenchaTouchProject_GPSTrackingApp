/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'MyGPS',

    requires: [
         'Ext.MessageBox',
           'Ext.form.*',
         'Ext.field.*',
         'Ext.Img',
 
         'Ext.Map'
    ],

    models: ['TrackingItem', 'Signal', 'singlesignalmodel', 'RegisterAccountModel', 'GPSuserModel', 'signalhistorymodel', 'TrackerDeviceModel', 'TrackingItemCheckIDmodel', 'geoFenceModel', 'ResponderAlertModel', 'geoFenceAreaModel', 'signallastlocationmodel', 'ListOfMarkerModel', 'TrackingItemImage', 'markerModel', 'settingModel', 'AutoFenceTimerModel', 'GeofenceAlertHistory', 'singlesignalTrackingmodel', 'MilageCountAlertHistory.MilageCountAlertHistory_LoadReceiptPictureByIDModel', 'MilageCountAlertHistory.MilageCountAlertHistory_LoadByDeviceAccNoModel', 'TrackingItemList.TrackingItemModel', 'MilageCountInfo.MilageCountInfoLoad_ByAccountNoDeviceIDModel', 'ResponderAlert.ResponderAlertModel', 'User.UserModel', 'TrackingHistory.TrackingHistoryModel', 'RegisteredAccount.RegisteredAccountModel'],

    // stores: ['TrackingItemList', 'SignalItemList', 'multipleSignalItemList', 'multipletrackingsignalpoint', 'singlesignalstore', 'multipletrackingitemselectF', 'GPSuserStore', 'RegisterAccountStore', 'signalhistorystore', 'trackingitemhistorystore', 'TrackingItemDetailstore', 'TrackerDevicestore', 'RegisterAccountLatestIDstore', 'TrackingItemCheckIDstore', 'GPSuserbyAccnostore', 'geoFenceStore', 'geoFenceActiveStore', 'ResponderAlertGetByAcc', 'ResponderAlertGetByID', 'geoFenceAreaSelectByIDByAccNo', 'geoFenceAreaSelectByAccNo', 'geoFenceAreaSelectByAccNoByFenceName', 'signallastlocationstore'],
    stores: ['TrackingItemList.TrackingItemListsStore', 'TrackingItemList', 'SignalItemList', 'singlesignalstore', 'GPSuserStore', 'RegisterAccountStore', 'trackingitemhistorystore', 'TrackingItemDetailstore', 'TrackerDevicestore', 'RegisterAccountLatestIDstore', 'signalhistorystore', 'TrackingItemCheckIDstore', 'GPSuserbyAccnostore', 'geoFenceStore', 'geoFenceActiveStore', 'ResponderAlertGetByAcc', 'ResponderAlertGetByID', 'geoFenceAreaSelectByIDByAccNo', 'geoFenceAreaSelectByAccNo', 'geoFenceAreaSelectByAccNoByFenceName', 'signallastlocationstore', 'ListofMarkerStore', 'TrackingItemImagestore', 'settingGetbyAccontNo', 'MarkerloadAllstore', 'AutoFenceTimerGetByAcc', 'AutoFenceTimerGetByID', 'GeofenceAlertHistoryGetByAcc', 'GeofenceAlertHistoryStore', 'singlesignalTrackingstore', 'GpsUser.GpsUserStore', 'multipletrackingsignalpoint', 'MilageCountAlertHistory.MilageCountAlertHistoryStore', 'MilageCountInfo.MilageCountInfoStore', 'ResponderAlert.ResponderAlertStore', 'User.UserStore', 'TrackingHistoryMap.TrackingHistoryMapStore', 'RegisteredAccount.RegisteredAccountStore'],


    views: ['settingapp', 'MyAccount.UserAcc', 'MyAccount.singlesummary', 'MyAccount.singlesummarypanel', 'regAccount', 'functionality.funct', 'functionality.routine', 'about.abouts', 'about.panelabout', 'about.aboutapp',
        'geoFences.holdergeofence', 'geoFences.geofence', 'geoFences.listgeofenceitem', 'geoFences.geoFenceDB', 'custompanel.geofence_detailfencepanel', 'custompanel.geofence_rightpanel', 'custompanel.geofence_rightpanelSettingDrawFence',
        'MyAccount.ResponderAlertList', 'geoFences.listgeofenceArea', 'MyAccount.listgeofTrackingitems', 'SettingFence.SettingFenceDrawMap', 'SettingFence.Settinggeofence', 'SettingFence.listgeofenceitemsettinggeofence',
        'SettingFence.holdersettinggeofence', 'TraceAlertFence.Gmaphistory', 'TraceAlertFence.listTraceAlertFence', 'custompanel.gMapHistory_BottomPanelinfo', 'TraceAlertFence.holderTraceAlertFence', 'custompanel.master_usermanual', 'custompanel.splashLogo',
    'SingleTracking.singleTrackingMap', 'custompanel.singleTrackingMap_rightpanel', 'SingleTracking.holderSingleTrackingitem', 'SingleTracking.listSingleTrackingitem', 'SingleTracking.singleTrackingOverViewMap', 'custompanel.overViewMapStreetViewLiveTracking',
    'custompanel.dockOverViewMap', 'SingleTrackingStreetView.SingleTrackingStreetViewMap', 'custompanel.SingleTrackingMap_MilageCountAlertHistoryDetail', 'custompanel.SingelTrackingMap_MillageCountInfo', 'custompanel.SingleTrackingMap_SpeedMeter', 'custompanel.SingleTrackingMapStreetView_MiniMap', 'custompanel.singleStreetViewTrackingMap_rightpanel', 'custompanel.singleTrackingMap_Search', 'custompanel.SingleTrackingMap_Menu', 'custompanel.SingelTrackingMap_MillageCount', 'Login', 'MainMenu', 'MainPage', 'mapsendcommands', 'sendcommand', 'TrackieItemSendCommand', 'custompanel.multiTracking_InfoPanel', 'MultipleTracking.multiTrackingItemsList', 'MultipleTracking.multiTrackingMap', 'custompanel.burgerMenu', 'custompanel.SingleTrackingMap_PointInfo', 'custompanel.SingleTrackingMapStreetView_Menu', 'Setting.MainSetting', 'Setting.MilageCountSetting', 'Setting.SettingTrackingItemList', 'Setting.SettingResponderAlert', 'Config.User.UserConfig', 'Config.TrackingItems.TrackingItemsConfig', 'TrackingHistory.TrackingHistoryMap', 'TrackingHistory.TrackingHistoryCreateria', 'TrackingHistory.TrackingHistoryMapInfoPanel', 'Config.TrackingHistoryMap.TrackingHistoryMapConfig', 'TrackingHistory.TrackingHistoryMapPlayTrackedPanel', 'TrackingHistory.TrackingHistoryMapTravelRangePanel'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
     //   Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
       Ext.Viewport.add(Ext.create('MyGPS.view.MainPage'));

      //  Ext.Viewport.add(Ext.create('MyGPS.view.SingleTracking.holderSingleTrackingitem'));


        
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
