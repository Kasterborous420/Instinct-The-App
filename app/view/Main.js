/*
 * File: app/view/Main.js
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

Ext.define('Instinct.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.instinctMain',

    requires: [
        'Ext.Img',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.Button',
        'Ext.TitleBar'
    ],

    config: {
        style: 'background-color: #000;',
        items: [
            {
                xtype: 'image',
                height: 150,
                style: 'background-size:contain;',
                src: 'resources/images/login.jpg'
            },
            {
                xtype: 'container',
                itemId: 'loginPanel',
                items: [
                    {
                        xtype: 'fieldset',
                        itemId: 'loginForm',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Username',
                                labelWidth: '40%',
                                name: 'username'
                            },
                            {
                                xtype: 'passwordfield',
                                label: 'Password',
                                labelWidth: '40%',
                                name: 'password'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        itemId: 'loginButton',
                        margin: 20,
                        padding: 8,
                        text: 'Login'
                    },
                    {
                        xtype: 'button',
                        itemId: 'showRegisterButton',
                        margin: 20,
                        padding: 8,
                        text: 'Or register here'
                    }
                ]
            }
        ]
    }

});