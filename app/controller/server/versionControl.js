/*
 * File: app/controller/server/versionControl.js
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

Ext.define('Instinct.controller.server.versionControl', {
    extend: 'Ext.app.Controller',

    config: {
    },

    checkServerVersion: function(callbackFn) {
        var successCallback = function(resp, ops) {
            if(resp.status === 200){
                var responseData = Ext.JSON.decode(resp.responseText);
                if(responseData.errorHandle == "alert"){
                    if(responseData.errorText !== ""){
                        Ext.Msg.alert(false, responseData.errorText);
                    }
                    if(responseData.successText !== ""){
                        Ext.Msg.alert(false, responseData.successText);
                    }
                }
                if(responseData.success === true){
                    callbackFn(responseData.data[0].latestVersion);
                }else{
                    callbackFn("Error");
                }
            }else{
                Ext.Msg.alert(false,"server is down, Please try again later!");
                callbackFn("Error");
            }
        };
        var failureCallback = function(resp, ops) {
            callbackFn("Error");
        };

        Ext.Ajax.request({
            url: "http://iriks-it.nl/PokemonGo/Instinct/modules/authentication/version.php",
            disableCaching: false,
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            success: successCallback,
            failure: failureCallback
        });
    }

});