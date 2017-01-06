Ext.define('MyGPS.view.MainPage', {
    extend: 'Ext.Panel',
    xtype: 'mainPage',
    config: {
        fullscreen: true,
        id: 'mainView',
        // layout: 'card',
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                //type: 'pop',
                //direction: 'left',
                duration: 250
            }

        },
        items: [

            {
                //0
                xtype: 'loginpage'
            },
             
        {
            //1
            xtype: 'mainmenu',
            //style: "background-color: #FF9900; color:white;",
            //html: '<center>Item 2</center>'
        },


          {
              //2
              xtype: 'singleTrackingOverViewMap',
              //style: "background-color: #FF9900; color:white;",
              //html: '<center>Item 2</center>'
          },


          {
              //3
              xtype: 'UserAccount',
              //style: "background-color: #FF9900; color:white;",
              //html: '<center>Item 2</center>'
          },

           {
               //4
               xtype: 'geoFencesSettingholder',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
          
           {
               //5
               xtype: 'TrackingHistoryCreateria',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
          
           {
               //6
               xtype: 'sendcommandsmain',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },

         {
             //7
             xtype: 'multiTrackingItemsLists',
             //style: "background-color: #FF9900; color:white;",
             //html: '<center>Item 2</center>'
         },
           {
               //8
               xtype: 'MultiTrackingMap',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
           {
               //9
               xtype: 'SingleTrackingStreetViewMap',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
           { //10
               xtype: 'listMainSetting',
               
           },
        //{ //11
        //    xtype: 'TrackingItemListXtype',
        //},
        {
            style: "background-color: #006600; color:white;",
            html: '<center>Item 3</center>'
        }

        ]
    }
});