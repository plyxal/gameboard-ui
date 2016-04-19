/**
 * Created by psmit on 4/3/2016.
 */
define([
        'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.factory('volumeSliderModel', function() {
            var floor = 0;
            var ceil = 100;
            var hideLimitLabels =  true;
            var showTicks = false;

            return {
                floor: floor,
                ceil: ceil,
                hideLimitLabels: hideLimitLabels,
                showTicks: showTicks
            }
        })
    }
);