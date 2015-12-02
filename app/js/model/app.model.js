/**
 * Created by Paul on 8/18/2015.
 */
define([
    'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.factory('appModel', function() {
            var loading = false;
            var inGame = false;
            var $routeProvider;

            return {
                loading: loading,
                inGame: inGame,
                $routeProvider: $routeProvider
            }
        })
    }
);