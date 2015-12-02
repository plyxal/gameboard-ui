/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/service/game.service'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('initService', [
            '$q',
            'gameService',

            function($q, gameService) {
                /**
                 * @public
                 * @returns {*}
                 */
                var init = function() {
                    var deferred = $q.defer();

                    var p = [];
                    p.push(gameService.getGames());

                    $q.all(p)
                        .then(deferred.resolve, deferred.reject);

                    return deferred.promise;
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