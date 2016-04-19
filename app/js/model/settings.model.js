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

            return {
                volume: volume,
                brightness: brightness
            }
        })
    }
);