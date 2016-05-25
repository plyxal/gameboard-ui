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
                /**
                 *
                 * @param id
                 * @param value
                 */
                var volumeSliderChanged = function(id, value) {

                };

                /**
                 *
                 */
                var volumeSliderEnd = function() {
                    settingsService.putVolume(value);
                };

                /**
                 *
                 * @param id
                 * @param value
                 */
                var brightnessSliderChanged = function(id, value) {
                    console.log('brightnessSliderChanged: ', (value/100));
                    //TODO: call settingsService.putBrightness(value)
                };

                /**
                 *
                 * @type {Function}
                 */
                volumeSliderModel.onChange = volumeSliderChanged;
                volumeSliderModel.onEnd = volumeSliderEnd;

                /**
                 *
                 * @type {Function}
                 */
                brightnessSliderModel.onEnd = brightnessSliderChanged;

                /**
                 * constructor
                 */
                (function() {
                    console.log('settings.controller::constructor');

                    //load settings data
                    settingsService.getVolume();
                }());

                //expose scope props
                $scope.volumeSliderModel = volumeSliderModel;
                $scope.settingsModel = settingsModel;
                $scope.volumeSliderChanged = volumeSliderChanged;
                $scope.brightnessSliderModel = brightnessSliderModel;
            }
        ])
    }
);