

//spare4   _SQLDataReader["TrackID"].ToString() + ',' + _SQLDataReader["DeviceID"].ToString()
Ext.define('MyGPS.model.TrackingItem', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                'ID',
                  'AccountNo',
                   'GPSSimNumber',
                  'TrackID',
                 'DeviceID',
                    'TrackItemType',
                 'TrackItem',
                          'GPSModel',
                               'Interval',
                    'CreatedDate',
                      'CreatedBy',
                            'ModifiedDate',
                 'ModifiedBy',
                 'TrackingMode',
                 'Status',
                 'ExpiredDate',
                 'Term',
                 'Sex',
                 'Risk',
                 'Age',
                 'Picture',
                  'Spare1',
      'Spare2',
      'Spare3',
      'Spare4',
      'Spare5',
      'Spare6',
      'Spare7',
      'Spare8',
      'Spare9',
      'Spare10',
      'Spare11',
      'Spare12',
      'Spare13' ,       
      'SimNum'
               
              
             
               
           
           
                 
            















                 
                 
        ]
    }
});