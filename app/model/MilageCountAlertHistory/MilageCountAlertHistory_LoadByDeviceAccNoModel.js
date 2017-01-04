Ext.define('MyGPS.model.MilageCountAlertHistory.MilageCountAlertHistory_LoadByDeviceAccNoModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
		{ name: 'ID' },
        { name: 'AccountNo' },
        { name: 'DeviceID' },
        { name: 'DateTimes' },
        { name: 'MilageCount' },
        { name: 'AlertDateMilageCount' },
        { name: 'AlertRespondedDate' },
        { name: 'AlertRespondedBy' },
        { name: 'MilageServiceOilEngine' },
        { name: 'MilageServiceOilEngineDate' },
        { name: 'AlertMilageCountNote' },
        { name: 'AlertMillageUpdateInfoDate' },
        { name: 'TrackID' },
        { name: 'MilageCountString' },
        { name: 'SubsriptionStatus' },
        { name: 'AlertRespondedStatus' },

        ]
    }
});
