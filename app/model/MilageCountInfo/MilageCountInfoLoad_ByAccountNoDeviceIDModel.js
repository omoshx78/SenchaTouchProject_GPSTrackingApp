Ext.define('MyGPS.model.MilageCountInfo.MilageCountInfoLoad_ByAccountNoDeviceIDModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
		{ name: 'ID' },
        { name: 'AccountNo' },
        { name: 'DeviceID' },
        { name: 'TrackID' },
        { name: 'CurrentMilage' },
        { name: 'CurrentMilageStr' },
        { name: 'NextAlertMilage' },
        { name: 'Subscription' },
        { name: 'MilageIntervalAlert' },
        { name: 'MilageAlertVia' },
        { name: 'ActivationDate' },
        { name: 'ExpiredDate' },
        { name: 'AlertSentCount' },
        { name: 'UpdatedBy' },
        { name: 'LastUpdateDate' },
        { name: 'RowStatus' },
        { name: 'RecorrectToleranceMilage' },
        { name: 'LastSentMilageAlertDate' },
        { name: 'DateTimes' },
        ]
    }
});
