var ipimg = document.location.protocol + '//' + document.location.host + '/resources/icons/About.jpg';
Ext.define('MyGPS.view.about.panelabout', {
   
    xtype: "panelabouts",
    // extend: 'Ext.Panel',
    extend: 'Ext.Carousel',
    // alias: "widget.abouts",
    //xtype: "abouts",
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img', 'MyGPS.view.about.abouts', 'MyGPS.view.about.aboutapp'],


    config: {

        // bodyStyle: 'background-color:#fff;padding: 10px',
        fullscreen: true,
        // scrollable: true,

        //mi
        //  style: "background-color: #57A0DC; color:white;",
        // bodyStyle: 'background-color:#57A0DC;',
        // cls: 'loginPanel',
        //  bodyStyle: 'background-color:#FF9900;padding: 10px',
        //  style: "background-color: #FF9900; color:white;",
        defaults: {
            // flex: 1
            //  bodyStyle: 'background-color:#FF9900;padding: 10px'
        },
        //layout: {

        //    type: 'vbox',
        //           pack: 'center',
        //    // align: 'center'
        //    align: 'stretch'
        //},
        items: [


            {
                xtype: 'carousel',
            
                items: [
                            {
                                flex: 1,
                                //html: 'Avoubt'
                                xtype: 'aboutapp'
                            },




                             {


                                 flex: 1,
                                 xtype: 'abouts'


                             }

                ]


               


            }

        ]
    }

});


