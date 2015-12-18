/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'js/service/system.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('monopolyplusController', [
            '$scope',
            'systemService',

            function($scope, systemService) {
                /**
                 *
                 */
                var launchGame = function() {
                    systemService.launchGame();
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('monopolyplus.controller::constructor');
                }());

                $scope.launchGame = launchGame;
            }
        ])
    }
);