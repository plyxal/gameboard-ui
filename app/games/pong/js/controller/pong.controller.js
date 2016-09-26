/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'js/service/system.service',
        'js/directive/control/plyxal.button.directive'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('pongController', [
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
                    console.log('pong.controller::constructor');
                }());

                $scope.launchGame = launchGame;
                $scope.playImage = 'games/pong/assets/images/playbutton.png';
            }
        ])
    }
);