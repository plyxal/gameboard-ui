/**
 * Created by psmit on 8/26/2016.
 */
define([
        'angularAMD',
        'js/directive/control/plyxal.button.directive'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('wifiModalController', [
            '$scope',

            function($scope) {
                console.log('wifiModalController');
            }
        ])
    }
);