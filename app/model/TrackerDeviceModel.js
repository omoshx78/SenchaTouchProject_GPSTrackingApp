Ext.define('MyGPS.model.TrackerDeviceModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           'ID',
                  'DeviceID',
      'DeviceName',

       'DeviceModel',
      'Manufacturer',
      'Supplier',
      'CapabilityDescript',
      'CoordinateType',
      'SimNum',
      'SimOperator',
      'Status',
      'IgnitionRemotely',
      'LockedDoorRemotely',
      'ArmedRemotely',
       'HornRemotely',
       'Interval',
       'GPSPacket',
       'TrackerPwd',
       'TrackerUsrNm',
       'GPSserverPort',
       'ServerIP',
'CreatedBy',
'CreatedDate',
'ModifiedBy',
'ModifiedDate'


        ]
    }
});