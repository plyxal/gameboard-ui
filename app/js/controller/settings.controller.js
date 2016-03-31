/**
 * Created by psmit on 2/11/2016.
 */
define([
        'angularAMD',
        'js/model/settings.model',
        'js/service/settings.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('settingsController', [
            '$scope',
            '$timeout',
            'settingsModel',
            'settingsService',

            function($scope, $timeout, settingsModel, settingsService) {
                /**
                 *
                 * @param id
                 * @param value
                 */
                var sliderChanged = function(id, value) {
                    console.log('sliderChanged: ', value);

                    //TODO: call settingsService.putVolume;
                    settingsService.putVolume(value);
                };

                /**
                 *
                 * @type {{floor: number, ceil: number, hideLimitLabels: boolean, showTicks: boolean, onEnd: Function}}
                 */
                var sliderSettings = {
                    floor: 0,
                    ceil: 100,
                    hideLimitLabels: true,
                    showTicks: false,
                    onEnd: sliderChanged
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('settings.controller::constructor');

                    //load settings data
                    settingsService.getVolume();
                }());

                //expose scope props
                $scope.sliderSettings = sliderSettings;
                $scope.settingsModel = settingsModel;
                $scope.sliderChanged = sliderChanged;
            }
        ])
    }
);