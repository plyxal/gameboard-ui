/**
 * Created by psmit on 2/11/2016.
 */
define([
        'angularAMD',
        'js/model/settings.model',
        'js/service/settings.service',
        'js/model/directive/volume.slider.model',
        'js/model/directive/brightness.slider.model'
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

            function($scope, $timeout, settingsModel, settingsService, volumeSliderModel, brightnessSliderModel) {

                $scope.doShow = false;

                /**
                 * bullshit fix for slider taking FOREVER to set it's self. i got build my own -psmithiv
                 */
                var show = function() {
                    $scope.doShow = settingsModel.volume && settingsModel.brightness ? true : false;

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
                    settingsService.putBrightness(value);
                };

                /**
                 *
                 * @type {Function}
                 */
                volumeSliderModel.onEnd = volumeSliderEnd;

                /**
                 *
                 * @type {Function}
                 */
                brightnessSliderModel.onEnd = brightnessSliderEnd;

                /**
                 * constructor
                 */
                (function() {
                    console.log('settings.controller::constructor');

                    //load settings data
                    settingsService.getVolume()
                        .then(show);
                    settingsService.getBrightness()
                        .then(show);
                }());

                //expose scope props
                $scope.volumeSliderModel = volumeSliderModel;
                $scope.brightnessSliderModel = brightnessSliderModel;
                $scope.settingsModel = settingsModel;
            }
        ])
    }
);