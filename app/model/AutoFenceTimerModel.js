Ext.define('MyGPS.model.AutoFenceTimerModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [

                { name: 'ID' },
		    { name: 'CreatedDate' },
            { name: 'TrackItem' },
            { name: 'TrackID' },
            { name: 'AccountNo' },
            { name: 'FencePath' },

             { name: 'ShapeType' },
            { name: 'FenceAreaName' },
            { name: 'TimeFrom' },
            {
                name: 'TimeFromConverted',
                convert: function (value, record) {

                    var _value = ConvertTime(record.get('TimeFrom') );

                    return _value;
                }
            },
            { name: 'TimeTo' },
             {
                 name: 'TimeToConverted',
                 convert: function (value, record) {

                     var _value = ConvertTime(record.get('TimeTo'));

                     return _value;
                 }
             },
          
            { name: 'DaySetting' },
             { name: 'Status' },
            { name: 'FenceLength' },
     //            'ID',
     //            'CreatedDate',
     //             'TrackItem',
	 //  	 'TrackID',
	 //'AccountNo',

	 //'FencePath',
	 //'ShapeType',

	 //'FenceAreaName',
	 //'TimeFrom',

	 //'TimeTo',
	 //'DaySetting',
	 //'Status',
     //'FenceLength'

        ]
    }
});


function ConvertTime(Timer)
{
    var convertedTime = ''

    if (Timer == '5')
    {
        convertedTime = '05:00-AM';
    } else if (Timer == '6') {
        convertedTime = '06:00-AM';
    } else if (Timer == '7') {
        convertedTime = '07:00-AM';
    } else if (Timer == '8') {
        convertedTime = '08:00-AM';
    } else if (Timer == '9') {
        convertedTime = '09:00-AM';
    } else if (Timer == '10') {
        convertedTime = '10:00-AM';
    } else if (Timer == '11') {
        convertedTime = '11:00-AM';
    } else if (Timer == '12') {
        convertedTime = '12:00-PM';
    } else if (Timer == '13') {
        convertedTime = '01:00-PM';
    } else if (Timer == '14') {
        convertedTime = '02:00-PM';
    } else if (Timer == '15') {
        convertedTime = '03:00-PM';
    } else if (Timer == '16') {
        convertedTime = '04:00-PM';
    } else if (Timer == '17') {
        convertedTime = '05:00-PM';
    } else if (Timer == '18') {
        convertedTime = '06:00-PM';
    } else if (Timer == '19') {
        convertedTime = '07:00-PM';
    } else if (Timer == '20') {
        convertedTime = '08:00-PM';
    } else if (Timer == '21') {
        convertedTime = '09:00-PM';
    } else if (Timer == '22') {
        convertedTime = '10:00-PM';
    } else if (Timer == '23') {
        convertedTime = '11:00-PM';
    } else if (Timer == '24') {
        convertedTime = '12:00-AM';
    }






    return convertedTime

}