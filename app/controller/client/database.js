/*
 * File: app/controller/client/database.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Instinct.controller.client.database', {
    extend: 'Ext.app.Controller',

    config: {
    },

    createTables: function(callbackFn) {
        //ADDING SAMPLE LOCATIONS & STONE TYPES
        // sqlite.insertRow('locations',['descriptionEn', 'descriptionFa', 'locationTypeId'],['Terschuur','',0]);
        // sqlite.insertRow('locations',['descriptionEn', 'descriptionFa', 'locationTypeId'],['Nijkerk','',1]);
        // sqlite.insertRow('locations',['descriptionEn', 'descriptionFa', 'locationTypeId'],['Hoevelaken','',2]);
        // sqlite.insertRow('locations',['descriptionEn', 'descriptionFa', 'locationTypeId'],['Amersfoort','',3]);
        // sqlite.insertRow('stoneTypes',['descriptionEn', 'descriptionFa', 'image', 'changed', 'deleted'],['Marble','','','','0']);
        // sqlite.insertRow('stoneTypes',['descriptionEn', 'descriptionFa', 'image', 'changed', 'deleted'],['Onyx','','','','0']);
        // sqlite.insertRow('stoneTypes',['descriptionEn', 'descriptionFa', 'image', 'changed', 'deleted'],['Travertine','','','','0']);


        if(window.cordova && window.sqlitePlugin){
            /*
            //users Table
            sqlite.createTable(
                'users',
                [
                    'username',
                    'password',
                    'defaultLanguage',
                    'permissions',
                    'created',
                    'changed'
                ],
                [
                    'text',
                    'text',
                    'int',
                    'text',
                    'datetime',
                    'datetime'
                ]
            );

            //transitTypes Table
            sqlite.createTable(
                'transitTypes',
                [
                    'descriptionEn',
                    'descriptionFa',
                    'changed'
                ],
                [
                    'text',
                    'text',
                    'datetime'
                ]
            );

            //transits Table
            sqlite.createTable(
                'transits',
                [
                    'remoteId',
                    'blockId',
                    'rfidCode',
                    'transitTypeId',
                    'departureLocationId',
                    'destinationLocationId',
                    'departureDateTime',
                    'arrivalDateTime',
                    'arrivalLocationId',
                    'licensePlateFilename',
                    'created',
                    'createdUserId',
                    'createdLat',
                    'createdLng',
                    'changed',
                    'deleted'
                ],
                [
                    'int',
                    'int',
                    'text',
                    'int',
                    'int',
                    'int',
                    'datetime',
                    'int',
                    'int',
                    'text',
                    'datetime',
                    'int',
                    'text',
                    'text',
                    'datetime',
                    'int'
                ]
            );

            //stockTakings Table
            sqlite.createTable(
                'stockTakings',
                [
                    'remoteId',
                    'locationId',
                    'created',
                    'createdUserId',
                    'changed'
                ],
                [
                    'int',
                    'int',
                    'datetime',
                    'int',
                    'datetime'
                ]
            );

            //stockTakingBlocks Table
            sqlite.createTable(
                'stockTakingBlocks',
                [
                    'remoteId',
                    'stockTakingId',
                    'blockId',
                    'rfidCodeId',
                    'created',
                    'createdLat',
                    'createdLng',
                    'changed'
                ],
                [
                    'int',
                    'int',
                    'int',
                    'text',
                    'datetime',
                    'text',
                    'text',
                    'datetime'
                ]
            );

            //locationTypes Table
            sqlite.createTable(
                'locationTypes',
                [
                    'descriptionEn',
                    'descriptionFa',
                    'changed'
                ],
                [
                    'text',
                    'text',
                    'datetime'
                ]
            );

            //locations Table
            sqlite.createTable(
                'locations',
                [
                    'descriptionEn',
                    'descriptionFa',
                    'locationTypeId',
                    'changed'
                ],
                [
                    'text',
                    'text',
                    'int',
                    'datetime'
                ]
            );

            //cloudSyncQueue Table
            sqlite.createTable(
                'cloudSyncQueue',
                [
                    'dbTable',
                    'rowId',
                    'created'
                ],
                [
                    'text',
                    'int',
                    'datetime'
                ]
            );

            //blocks Table
            sqlite.createTable(
                'blocks',
                [
                    'remoteId',
                    'rfidCode',
                    'locationId',
                    'productionDate',
                    'length',
                    'width',
                    'height',
                    'weight',
                    'blockColorId',
                    'export',
                    'stoneTypeId',
                    'created',
                    'createdUserId',
                    'createdLat',
                    'createdLng',
                    'changed',
                    'deleted'
                ],
                [
                    'int',
                    'text',
                    'int',
                    'date',
                    'int',
                    'int',
                    'int',
                    'decimal',
                    'int',
                    'tinyint',
                    'int',
                    'datetime',
                    'int',
                    'text',
                    'text',
                    'datetime',
                    'tinyint'
                ]
            );

            //blockImages Table
            sqlite.createTable(
                'blockImages',
                [
                    'remoteId',
                    'blockId',
                    'filename',
                    'created',
                    'createdLat',
                    'createdLng',
                    'changed',
                    'deleted'
                ],
                [
                    'int',
                    'int',
                    'text',
                    'datetime',
                    'text',
                    'text',
                    'datetime',
                    'tinyint'
                ]
            );

            //StoneTypes Table
            sqlite.createTable(
                'stoneTypes',
                [
                    'descriptionEn',
                    'descriptionFa',
                    'image',
                    'changed',
                    'deleted'
                ],
                [
                    'text',
                    'text',
                    'text',
                    'datetime',
                    'tinyint'
                ]
            );

            //Colors Table
            sqlite.createTable(
                'blockColors',
                [
                    'descriptionEn',
                    'descriptionFa',
                    'changed',
                    'deleted'
                ],
                [
                    'text',
                    'text',
                    'datetime',
                    'tinyint'
                ]
            );
            */
            this.checkUpdateTables();

            this.setSenchaStores();

            callbackFn();

        } else {
            callbackFn();
        }

    },

    setSenchaStores: function() {
        /*
        if(window.cordova){
            //Setting the locations data in a store
            locationStore = Ext.StoreManager.lookup("settings.Locations");
            var locations = [];
            sqlite.getRows(
                "locations",
                [],
                [],
                function(records){
                    for(var i = 0; i < records.length; i++){
                        locations.push({
                            id			   : records[i].id,
                            descriptionEn  : records[i].descriptionEn,
                            descriptionFa  : records[i].descriptionFa,
                            locationTypeId : records[i].locationTypeId
                        });
                    }
                    console.log(locations);
                    locationStore.setData(locations);
                }
            );


            //Setting the stonetypes data in a store
            stoneTypeStore = Ext.StoreManager.lookup("blocks.Names");
            var stoneTypes = [];
            sqlite.getRows(
                "stoneTypes",
                [],
                [],
                function(records){
                    for(var i = 0; i < records.length; i++){
                        stoneTypes.push({
                            id:records[i].id,
                            descriptionEn  : records[i].descriptionEn,
                            descriptionFa  : records[i].descriptionFa,
                            image : records[i].image,
                            changed : records[i].changed,
                            deleted : records[i].deleted
                        });
                    }
                    console.log(stoneTypes);
                    stoneTypeStore.setData(stoneTypes);
                }
            );


            //Setting the block colors data in a store
            blockColorStore = Ext.StoreManager.lookup("blocks.Colors");
            var blockColors = [];
            sqlite.getRows(
                "blockColors",
                [],
                [],
                function(records){
                    for(var i = 0; i < records.length; i++){
                        blockColors.push({
                            id:records[i].id,
                            descriptionEn  : records[i].descriptionEn,
                            descriptionFa  : records[i].descriptionFa,
                            changed : records[i].changed,
                            deleted : records[i].deleted
                        });
                    }
                    console.log(blockColors);
                    blockColorStore.setData(blockColors);
                }
            );
        }
        */
    },

    deleteDatabase: function(callbackFn) {
        window.sqlitePlugin.deleteDatabase(
            {
                name: 'database.sqlite',
                location: 'default'
            },
            function(success){
                console.log(success);
            },
            function(error){
                console.log(error);
            }
        );
        var allStores = Ext.StoreManager.removeAll();
        for(var i = 0; i < allStores.length; i++){
            var currentTarget = allStores.keys[i];
            Ext.getStore(currentTarget).destroy();
        }
        window.localStorage.clear();
        callbackFn();
    },

    checkUpdateTables: function() {
        /*
        // Update from very first version, add color field
        if(settings.get('versionNumber') === false){
            sqlite.query("ALTER TABLE `blocks` ADD `blockColorId` INT NOT NULL DEFAULT '0';");

            sqlite.query("ALTER TABLE `transits` ADD `rfidCode` text;");
            sqlite.query("ALTER TABLE `blockImages` ADD `rfidCode` text;");

            // Download base data again
            if(settings.get('baseDataLoaded')){
                var lastSyncDownChangedDate = settings.get('lastSyncDownChangedDate');
                settings.set('baseDataLoaded', '', function(){
                    w3worx.app.getController('functions.Sync').checkBaseData(function(){
                        settings.set(
                            'lastSyncDownChangedDate',
                            lastSyncDownChangedDate,
                            function(){
                                Ext.Viewport.setMasked(false);
                            }
                        );
                    });
                });
            }
        }

        // Update from version 1.1.1
        if(settings.get('versionNumber', '1.1.1')){
            sqlite.query("ALTER TABLE `transits` ADD `rfidCode` text;");
            sqlite.query("ALTER TABLE `blockImages` ADD `rfidCode` text;");
        }
        settings.set('versionNumber', w3worx.app.version);
        */
    }

});