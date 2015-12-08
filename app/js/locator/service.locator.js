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
                var baseUrl = 'http://localhost:3000';

                var getGames = function() {
                    return $http.get(baseUrl + '/game');
                };

                var launch = function(command) {
                    console.log('service.locator::launch: ', command);
                    return $http.post(baseUrl + '/system/launch', {command: command});
                };

                return {
                    getGames: getGames,
                    launch: launch
                }
            }
        ])
    }
)