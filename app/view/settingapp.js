var PanMapAfterPointChangeval;
var AttachedLabelOnMarkerval;
Ext.define('MyGPS.view.settingapp', {

    extend: 'Ext.Container',
    requires: [
        'Ext.MessageBox',
        'Ext.ActionSheet',
        'Ext.picker.Picker',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
         'Ext.dataview.List',

        'Ext.data.Store'

    ],

    alias: 'widget.GeoSetting',
    id: 'GeoSetting',
    xtype: 'GeoSetting',

    config: {
        //fullscreen:true,
        //scrollable: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [




            {
                xtype: 'container',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [
                    {
                        xtype: 'container',
                        docked: 'top',

                        items: [{
                            //flex: 1,
                            layout: {
                                type: 'vbox',
                                pack: 'left',
                                align: 'left'
                            },
                            items: [


                               {
                                   //title: 'Tenderness',
                                   xtype: 'fieldset',
                                   //docked: 'top',
                                   pack: 'left',
                                   width: '98%',

                                   items: [{
                                       //flex: 1,
                                       layout: {
                                           type: 'vbox',
                                           pack: 'left',
                                           align: 'left',
                                           //style: 'padding-top:10px',
                                       },
                                       items: [
                                           {
                                               html: '<font size=3>Choose Marker</font>'
                                           },


                                                {
                                                    xtype: 'list',
                                                    //  itemTpl: '{title},{author}',
                                                    //   flex: 1,    //  add a flex property

                                                    store: 'ListofMarkerStore',
                                                    id: 'ListofMarkerStoreID',
                                                    mode: 'SINGLE',
                                                    //  mode: 'MULTI',
                                                    itemTpl: '<div class="myContent">' +
                                                           //'<div>Saved GeoFences Area</div>' +
                                                       '<div><b>{Marker}</b></div>' +
                                                        // '<div><u><b>{Marker1}</b></u></div>' +
                                                          //'<div><u><b>{Marker2}</b></u></div>' +
                                                          //   '<div><u><b>{Marker3}</b></u></div>' +
                                                       //    '<div>{FenceLength}</div>' +
                                                      // '<div>{ShapeType}</div>' +
                                                        '<div style="display: none;">{ID}</div>' +

                                                       '</div>',

                                                    // xtype: 'list',
                                                    //store:'itemsStore',
                                                    height: 100,
                                                    width: '100%',
                                                    listeners: {
                                                        select: function (list, records) {
                                                            var ID_selected = records.get('ID');
                                                            Ext.getCmp('SelectedMarker').setValue(records.get('MarkerName'))
                                                            Ext.getCmp('SelectedMarker').setValue('Standard');
                                                            //   alert(ID_selected);
                                                            //alert(geofenceArea);
                                                        },
                                                        deselect: function (list, records) {


                                                            //var value_to_remove = records.get('ID');
                                                            //GeofenceAreaid.splice(GeofenceAreaid.indexOf(value_to_remove), 1);

                                                        }
                                                    },

                                                },


                                          {

                                              xtype: 'container',
                                              width: '100%',
                                              layout: 'vbox',
                                              style: 'border-bottom: 1px solid #ddd;',
                                              items: [

                                               {
                                                   xtype: 'container',
                                                   layout: 'hbox',
                                                   width: '100%',
                                                   items: [


                           {
                               xtype: 'textfield',
                               id: 'SelectedMarker',
                               label: 'Marker',
                               disabled: true,

                               autoCapitalize: true,
                               clearIcon: true
                           },



                                                   ]
                                               },
                                               {

                                                   label: 'Change Interval GPS Tracker Devices',
						   hidden:true,
                                                   xtype: 'selectfield',
                                                   id: 'Geo_Setting_CIGPS',
                                                   width: '100%',
                                                   labelWidth: '55%',
                                                   style: 'border-bottom: 1px solid #ddd;',
                                                   options: [
                                                        {
                                                            text: 'Please Select',
                                                            value: 'null'
                                                        },
                                                   {
                                                       text: '30 Seconds',
                                                       value: '30'
                                                   },
                                                   {
                                                       text: '60 Seconds',
                                                       value: '60'
                                                   },
                                                   {
                                                       text: '90 Seconds',
                                                       value: '90'
                                                   },

                                                   ]
                                               },
                                                {
                                                    xtype: 'togglefield',
                                                    id: 'PanMapAfterPointChange',
                                                    value: true,
                                                    label: 'Pan Map After Point Change ?',
                                                    labelWidth: '75%',
                                                    listeners: {
                                                        change: function () {
                                                            // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                        }

                                                    },

                                                }, {
                                                    xtype: 'togglefield',
                                                    id: 'AttachedLabelOnMarker',
                                                    value: false,
                                                    label: 'Attached Label On Marker ?',
                                                    labelWidth: '75%',
                                                    listeners: {
                                                        change: function () {
                                                            // alert(Ext.getCmp('PanMapAfterPointChange').getValue());
                                                        }


                                                    },

                                                },

                                              ]
                                          },


                                       ]
                                   }]

                               },







                            ]
                        }]

                    },




                ]
            }
        ]
    },




    initialize: function () {

        Ext.getCmp('SelectedMarker').setValue(SelectedMarker);
        Ext.getCmp('PanMapAfterPointChange').setValue(PanMapAfterPointChange);
        Ext.getCmp('AttachedLabelOnMarker').setValue(AttachedLabelOnMarker);
        Ext.getCmp('Geo_Setting_CIGPS').setValue(Geo_Setting_CIGPS);
    }
});

