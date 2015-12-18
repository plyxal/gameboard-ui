/**
 * Created by Paul on 8/18/2015.
 */
define([
    'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('serviceLocator', [
            '$http',

            function($http) {
                /**
                 *
                 * @type {string}
                 */
                var baseUrl = 'http://localhost:3000';

                /**
                 *
                 * @returns {HttpPromise}
                 */
                var getGames = function() {
                    return $http.get(baseUrl + '/game');
                };

                /**
                 *
                 * @param gameId
                 * @returns {HttpPromise}
                 */
                var launch = function(gameId) {
                    return $http.post(baseUrl + '/system/launch/' + gameId);
                };

                return {
                    getGames: getGames,
                    launch: launch
                }
            }
        ])
    }
)