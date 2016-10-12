/**
 * Created by Paul on 8/18/2015.
 */
define([
    'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('serviceLocator', [
            '$http',

            function($http) {
                /**
                 *
                 * @type {string}
                 */
                var baseUrl = 'http://127.0.0.1:3000';
                // var baseUrl = 'http://localhost:3000';
                // var baseUrl = 'http://192.168.0.18:3000';

                /**
                 *
                 * @returns {HttpPromise}
                 */
                var getGames = function() {
                    return $http.get(baseUrl + '/game');
                };

                /**
                 *
                 * @param gameId
                 * @returns {HttpPromise}
                 */
                var launch = function(gameId) {
                    return $http.post(baseUrl + '/system/launch/' + gameId);
                };

                /**
                 *
                 * @returns {*}
                 */
                var getVolume = function() {
                    return $http.get(baseUrl + '/volume');
                };

                /**
                 *
                 * @param value
                 * @returns {*}
                 */
                var putVolume = function(value) {
                    return $http.put(baseUrl + '/volume/' + value, {});
                };

                /**
                 *
                 * @returns {*}
                 */
                var getBrightness = function() {
                    return $http.get(baseUrl + '/brightness');
                };

                /**
                 * 
                 * @param value
                 * @returns {*}
                 */
                var putBrightness = function(value) {
                    return $http.put(baseUrl + '/brightness/' + value, {});
                };

                /**
                 *
                 */
                var getWifiNetworks = function() {
                    // return $http.get('assets/data/networks.json');
                    return $http.get(baseUrl + '/wifi/networks');
                };

                /**
                 *
                 */
                var getWifiConnectionState = function() {
                    return $http.get(baseUrl + '/wifi/state');
                };

                var postConnectWifi = function(accessPoint) {
                    return $http.post(baseUrl + '/wifi/connect', accessPoint);
                };

                return {
                    getGames: getGames,
                    launch: launch,
                    getVolume: getVolume,
                    putVolume: putVolume,
                    getBrightness: getBrightness,
                    putBrightness: putBrightness,
                    getWifiNetworks: getWifiNetworks,
                    getWifiConnectionState: getWifiConnectionState,
                    postConnectWifi: postConnectWifi
                }
            }
        ])
    }
)