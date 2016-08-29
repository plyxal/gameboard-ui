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
            '$modalInstance',
            'wifiNetwork',

            function($scope, $modalInstance, wifiNetwork) {

                var cancel = function() {
                    $modalInstance.close();
                };

                var connect = function() {
                    console.log('connect');
                };

                //expose scope beans
                $scope.wifiNetwork = wifiNetwork;

                //expose scope methods
                $scope.cancel = cancel;
                $scope.connect = connect;

                /**
                 * constructor
                 */
                (function() {
                    console.log('wifiModalController: ', wifiNetwork);
                }());
            }
        ])
    }
);