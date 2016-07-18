/*
 * File: app/view/user/VerifyAccount.js
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

Ext.define('Instinct.view.user.VerifyAccount', {
    extend: 'Ext.Panel',
    alias: 'widget.userUploadProfile',

    requires: [
        'Ext.Container',
        'Ext.Img',
        'Ext.Button',
        'Ext.field.Hidden',
        'Ext.TitleBar'
    ],

    config: {
        cls: 'verifyView',
        items: [
            {
                xtype: 'container',
                docked: 'bottom',
                height: '100%',
                hidden: false,
                itemId: 'verifyInfoText',
                maxHeight: '100%',
                minHeight: '100%',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'image',
                        height: 250,
                        style: 'background-size:contain;',
                        src: 'resources/images/verification.jpg'
                    },
                    {
                        xtype: 'container',
                        cls: 'verifyLabel',
                        html: '<br>This app is for Team Instinct only <br><br>To make sure of that, we run a manual check on the date your about to send us. <br><br>Please take a screenshot of your profile. <br><br>Make sure to include the following data:<br> Name, Level, Team & Start date'
                    },
                    {
                        xtype: 'button',
                        cls: 'loginButton',
                        itemId: 'showUploadForm',
                        margin: 20,
                        padding: 8,
                        text: 'I GOT THIS!'
                    }
                ]
            },
            {
                xtype: 'container',
                docked: 'bottom',
                height: '100%',
                hidden: true,
                itemId: 'verifyInfoUpload',
                maxHeight: '100%',
                minHeight: '100%',
                scrollable: 'vertical',
                items: [
                    {
                        xtype: 'button',
                        hidden: true,
                        itemId: 'sendPicture',
                        text: 'submit'
                    },
                    {
                        xtype: 'container',
                        itemId: 'preview'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'baseString',
                        name: 'baseString'
                    },
                    {
                        xtype: 'button',
                        centered: true,
                        itemId: 'importPicture',
                        text: 'import'
                    }
                ]
            }
        ]
    }

});