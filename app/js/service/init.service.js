/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/service/game.service',
        'js/model/app.model',
        'js/service/route.service',
        'js/service/settings.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('initService', [
            '$q',
            'gameService',
            'appModel',
            'routeService',
            '$timeout',
            'settingsService',

            function($q, gameService, appModel, routeService, $timeout, settingsService) {

                /**
                 *
                 */
                var loadSettings = function() {
                    var deferred = $q.defer();

                    var done = function() {
                        deferred.resolve();
                    };

                    settingsService.getVolume()
                        .then(settingsService.getBrightness, settingsService.getBrightness)
                        .then(settingsService.getWifiNetworks, settingsService.getWifiNetworks)
                        .then(settingsService.getWifiConnectionState, settingsService.getWifiConnectionState)
                        .then(done, done);

                    return deferred.promise;
                };

                /**
                 *
                 */
                var loadGamesList = function() {
                    return gameService.getGames();
                };

                /**
                 * @public
                 * @returns {*}
                 */
                var init = function() {
                    /**
                     *
                     */
                    var success = function() {
                        routeService.gotoInitialRoute();

                        //show loading animation for 3 seconds to allow initial route to load
                        $timeout(function() {
                            appModel.loading = false;
                        }, 3000)
                    };

                    /**
                     *
                     */
                    var fail = function() {

                    };

                    loadSettings()
                        .then(loadGamesList, loadGamesList)
                        .then(success, fail);
                };

                /**
                 * @constructor
                 */
                (function() {
                    console.log('init.service::constructor');
                }());

                return {
                    init: init
                }
            }
        ])
    }
);