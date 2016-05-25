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

                return {
                    getVolume: getVolume,
                    putVolume: putVolume
                }
            }
        ])
    }
);