Ext.define('MyGPS.model.User.UserModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'UserName',
                 'Password',
                 'Version',
                 'Status',
                 'AccountNo',
                 'RegisterBy',
                 'UpdateBy',
                 'CreatedDate',
                 'ModifiedDate',
                 'ExpiredDate',
                 'LoginIP',
                 'LoginType',
                 'LastLoginDate',
                 'LoginCount',
                 'LastLogOutDate',
                 'Browser',
                 'OS',
                 'EmailReg'
        ]
    }
});