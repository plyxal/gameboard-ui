/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/model/enum/route.enum',
        'js/locator/service.locator',
        'js/model/game.model',
        'js/service/route.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('gameService', [
            '$q',
            'routeEnum',
            'serviceLocator',
            'gameModel',
            'routeService',

            function($q, routeEnum, serviceLocator, gameModel, routeService) {

                /**
                 * @private
                 */
                var getGames = function() {
                    var deferred = $q.defer();

                    var success = function(result) {
                        gameModel.games = result.data;
                        routeService.createRoutes(result.data);

                        deferred.resolve();
                    };

                    serviceLocator.getGames()
                        .then(success, deferred.reject);

                    return deferred.promise;
                };

                /**
                 * @constructor
                 */
                (function() {
                    console.log('game.service::constructor');
                }());

                return {
                    getGames: getGames
                }
            }
        ])
    }
);