/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'js/service/system.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('skylandersController', [
            '$scope',
            'systemService',

            function($scope, systemService) {
                /**
                 *
                 */
                var launchGame = function() {
                    systemService.launchGame()
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('skylanders.controller::constructor');
                }());

                $scope.launchGame = launchGame;
            }
        ])
    }
);