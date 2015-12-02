/**
 * Created by psmit on 5/21/2015.
 */
define([
        'angularAMD'],

    function(angularAMD) {
        'use strict';

        var HOME = {
            id: 0,
            route: '/home',
            templateUrl: 'partials/view/monopolyplus.html',
            controller: 'homeController',
            controllerUrl: 'js/controller/home.controller'
        };

        angularAMD.provider('routeEnumProvider', [
            function() {
                return {
                    $get: angular.noop,
                    HOME: HOME
                };
            }
        ]);

        angularAMD.service('routeEnum', [
            function() {
                return {
                    HOME: HOME
                };
            }
        ]);
    }
);