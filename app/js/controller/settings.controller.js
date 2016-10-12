/**
 * Created by psmit on 2/11/2016.
 */
define([
        'angularAMD',
        'js/model/settings.model',
        'js/service/settings.service',
        'js/model/directive/volume.slider.model',
        'js/model/directive/brightness.slider.model',
        'js/directive/control/wifi.signal.button.directive',
        'js/service/modal.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('settingsController', [
            '$scope',
            '$timeout',
            'settingsModel',
            'settingsService',
            'volumeSliderModel',
            'brightnessSliderModel',
            'modalService',

            function($scope, $timeout, settingsModel, settingsService, volumeSliderModel, brightnessSliderModel, modalService) {

                /**
                 * bullshit fix for slider taking FOREVER to set it's self. i gota build my own -psmithiv
                 */
                var refreshSliders = function() {
                    //needs $timeout to force digest
                    $timeout(function() {
                        $scope.$broadcast('rzSliderForceRender');
                    });
                };

                /**
                 *
                 */
                var volumeSliderEnd = function(id, value) {
                    settingsService.putVolume(value);
                };

                /**
                 *
                 * @param id
                 * @param value
                 */
                var brightnessSliderEnd = function(id, value) {
                    settingsService.putBrightness(value)
                };

                /**
                 *
                 * @param network
                 */
                var wifiClickHandler = function(network) {
                    modalService.showWifiConnectionModal(network);
                };

                volumeSliderModel.onEnd = volumeSliderEnd;
                brightnessSliderModel.onEnd = brightnessSliderEnd;

                $scope.wifiClickHandler = wifiClickHandler;

                /**
                 * constructor
                 */
                (function() {
                    // console.log('settings.controller::constructor');

                    //load settings data
                    settingsService.getVolume()
                        .then(settingsService.getBrightness)
                        .then(refreshSliders)
                        .then(settingsService.getWifiNetworks)
                        .then(settingsService.getWifiConnectionState)
                        .then(settingsService.startPollingNetworks);

                    $scope.$on('$destroy', settingsService.stopPollingNetworks);
                }());

                //expose scope props
                $scope.volumeSliderModel = volumeSliderModel;
                $scope.brightnessSliderModel = brightnessSliderModel;
                $scope.settingsModel = settingsModel;
            }
        ])
    }
);