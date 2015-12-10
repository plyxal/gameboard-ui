/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/service/game.service',
        'js/model/app.model',
        'js/service/route.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('initService', [
            '$q',
            'gameService',
            'appModel',
            'routeService',
            '$timeout',

            function($q, gameService, appModel, routeService, $timeout) {
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

                        $timeout(function() {
                            appModel.loading = false;
                        }, 3000)
                    };

                    /**
                     *
                     */
                    var fail = function() {

                    };

                    loadGamesList()
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