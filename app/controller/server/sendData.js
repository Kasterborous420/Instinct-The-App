/*
 * File: app/controller/server/sendData.js
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

Ext.define('Instinct.controller.server.sendData', {
    extend: 'Ext.app.Controller',

    config: {
    },

    pictureUpload: function(base64, callbackFn) {
            var userId			= settings.get('userId');
            var userToken		= settings.get('userToken');
            var successCallback = function(resp, ops) {
                var responseData 	= Ext.JSON.decode(resp.responseText);
                callbackFn(true,responseData);
            };
            var failureCallback = function(resp, ops) {
                callbackFn(false,"");
            };

            Ext.Ajax.request({
                url: "http://iriks-it.nl/PokemonGo/Instinct/modules/images/edit.php?new=true",
                disableCaching: false,
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'POST',
                jsonData: {
                    "userid": userId,
                    "token"	: userToken,
                    "base64": base64,
                },
                success: successCallback,
                failure: failureCallback
            });
    }

});