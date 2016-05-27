/**
 * Created by psmit on 3/30/2016.
 */
define([
        'angularAMD',
        'js/locator/service.locator',
        'js/model/settings.model'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('settingsService', [
            'gameModel',
            'serviceLocator',
            'settingsModel',

            function(gameModel, serviceLocator, settingsModel) {
                /**
                 *
                 */
                var getVolume = function() {
                    var success = function(result) {
                        settingsModel.volume = result.data.value;

                        return;
                    };

                    var fail = function(error) {
                        console.log('settings.service::getVolume::fail: ', error);
                    };

                    return serviceLocator.getVolume()
                        .then(success, fail);
                };

                var putVolume = function(value) {
                    var success = function(result) {
                        new Audio('assets/sounds/volume.ding.mp3').play();
                    };

                    var fail = function(error) {
                        console.log('settings.service::putVolume::fail: ', error);
                    };

                    serviceLocator.putVolume(value)
                        .then(success, fail);
                };

                var getBrightness = function() {
                    var success = function(result) {
                        settingsModel.brightness = result.data.value;

                        return;
                    };

                    var fail = function(error) {
                        console.log('settings.service::getBrightness::fail: ', error);
                    };

                    return serviceLocator.getBrightness()
                        .then(success, fail);
                };

                var putBrightness = function(value) {
                    var success = function(result) {
                        console.log('settings.controller::putBrightness::value: ', result.data.value);
                    };

                    var fail = function(error) {
                        console.log('settings.service::putBrightness::fail: ', error);
                    };

                    serviceLocator.putBrightness(value)
                        .then(success, fail);
                };

                var getWifiNetworks = function() {
                    serviceLocator.getWifiNetworks();
                };

                return {
                    getVolume: getVolume,
                    putVolume: putVolume,
                    getBrightness: getBrightness,
                    putBrightness: putBrightness,
                    getWifiNetworks: getWifiNetworks
                }
            }
        ])
    }
);