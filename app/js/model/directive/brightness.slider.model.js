/**
 * Created by psmit on 4/3/2016.
 */
define([
        'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.factory('brightnessSliderModel', function() {
            var floor = 10;
            var ceil = 100;
            var hideLimitLabels =  true;
            var showTicks = false;
            var step = .1;

            return {
                floor: floor,
                ceil: ceil,
                hideLimitLabels: hideLimitLabels,
                showTicks: showTicks,
                step: step
            }
        })
    }
);