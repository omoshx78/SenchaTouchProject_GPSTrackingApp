Ext.define('MyGPS.view.sendcommand', {
    extend: 'Ext.Container',
    requires: ['Ext.Map', 'Ext.dataview.List',
       'Ext.data.Store', 'Ext.field.Select',
       'Ext.field.Hidden', 'Ext.form.FieldSet', 'MyGPS.view.TrackieItemSendCommand', 'MyGPS.view.panelMainmapsendcommand'],

    xtype: 'sendcommandsmain',
    id: 'mainsendcommands',
    config: {
        layout: 'card',

        items: [{
            xtype: 'TrackieItemSendCommands'
        }, {
            xtype: 'panelMainmapsendcommands'
        }]
    }
});