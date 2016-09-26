/**
 * Created by psmit on 8/26/2016.
 */
define([
        'angularAMD',
        'js/directive/control/plyxal.button.directive',
        'js/service/settings.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('wifiModalController', [
            '$scope',
            '$modalInstance',
            'wifiNetwork',
            'settingsService',

            function($scope, $modalInstance, wifiNetwork, settingsService) {

                var cancel = function() {
                    $modalInstance.close();
                };

                var connect = function() {
                    $scope.connecting = true;

                    var success = function() {
                        console.log('!!!!!!!!!! success');
                        $scope.connecting = false;

                        $modalInstance.close();
                    };

                    var fail = function(error) {
                        console.log('wifiConnect::fail::error:', error);
                    };

                    settingsService.connectWifi($scope.accessPoint)
                        .then(success, fail);
                };

                //expose scope beans
                $scope.wifiNetwork = wifiNetwork;

                //expose scope methods
                $scope.cancel = cancel;
                $scope.connect = connect;
                $scope.connecting = false;

                $scope.accessPoint =  {
                    ssid: wifiNetwork.ssid,
                    password: null
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('wifi.modal.controller:constructor: ', wifiNetwork);

                    //hack!
                    // setTimeout(function() {
                    //
                    // }, 0);
                }());
            }
        ])
    }
);