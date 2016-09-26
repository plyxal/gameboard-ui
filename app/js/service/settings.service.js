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
            '$q',

            function(gameModel, serviceLocator, settingsModel, $q) {
                /**
                 *
                 */
                var getVolume = function() {
                    var success = function(result) {
                        settingsModel.volume = result.data.value;

                        // return;
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
                    var adj = d3.scale.linear().domain([0, 100]).range([.25, 1])(value);
                    adj = Math.round(adj * 100) / 100;

                    var success = function(result) {
                        // console.log('settings.controller::putBrightness::value: ', result.data.value);
                    };

                    var fail = function(error) {
                        console.log('settings.service::putBrightness::fail: ', error);
                    };

                    serviceLocator.putBrightness(adj)
                        .then(success, fail);
                };

                var getWifiNetworks = function() {
                    var success = function(result) {
                        settingsModel.wifiNetworks = result.data.networks;
                    };

                    var fail = function(error) {

                    };

                    return serviceLocator.getWifiNetworks()
                        .then(success, fail);
                };

                var pollingInterval;
                var startPollingNetworks = function() {
                    pollingInterval = setInterval(getWifiNetworks, 5000);
                };

                var stopPollingNetworks = function() {
                    clearInterval(pollingInterval);
                };

                var getWifiConnectionState = function() {
                    var success = function(result) {
                        settingsModel.wifiConnectionState = result.data.state;

                        return;
                    };

                    var fail = function(error) {
                        console.log('getWifiConnectionState::fail: ', error);

                        return $q.reject();
                    };

                    return serviceLocator.getWifiConnectionState()
                        .then(success, fail);
                };

                var connectWifi = function(accessPoint) {
                    var success = function(result) {
                        settingsModel.wifiConnectionState = result.data.accessPoint;

                        return;
                    };

                    var fail = function(error) {
                        console.log('connectWifi::fail::error: ', error);

                        return $q.reject();
                    };

                    return serviceLocator.postConnectWifi(accessPoint)
                        .then(success, fail);
                };

                return {
                    getVolume: getVolume,
                    putVolume: putVolume,
                    getBrightness: getBrightness,
                    putBrightness: putBrightness,
                    getWifiNetworks: getWifiNetworks,
                    getWifiConnectionState: getWifiConnectionState,
                    startPollingNetworks: startPollingNetworks,
                    stopPollingNetworks: stopPollingNetworks,
                    connectWifi: connectWifi
                }
            }
        ])
    }
);