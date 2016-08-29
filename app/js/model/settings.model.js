/**
 * Created by psmit on 3/30/2016.
 */
define([
        'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.factory('settingsModel', function() {
            var volume;
            var brightness;
            var wifiNetworks;
            var wifiConnectionState;

            return {
                volume: volume,
                brightness: brightness,
                wifiNetworks: wifiNetworks,
                wifiConnectionState: wifiConnectionState
            }
        })
    }
);