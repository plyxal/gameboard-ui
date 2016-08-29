/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/model/game.model',
        'js/model/enum/routes.enum'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('routeService', [
            '$rootScope',
            '$location',
            '$route',
            'gameModel',
            'routesEnum',

            function($rootScope, $location, $route, gameModel, routesEnum) {
                var initialRoute = '';

                var gotoInitialRoute = function() {
                    $location.path(gameModel.games[0].route);
                    $route.reload();
                };

                var createRoutes = function(routes) {
                    _.each(routes, function(item) {
                        window.$routeProvider.when(item.route, angularAMD.route(item));
                    });

                    // static routes
                    window.$routeProvider.when(routesEnum.ROUTE_SETTINGS, angularAMD.route({
                        templateUrl: 'partials/view/settings.html',
                        controller: 'settingsController',
                        controllerUrl: 'js/controller/settings.controller'
                    }));
                };

                var gotoRoute = function(name) {
                    $location.path(name);
                };

                /**
                 * @constructor
                 */
                (function() {
                    console.log('route.service::constructor');

                    //prevent initial route change
                    var listen = $rootScope.$on('$locationChangeStart', function(event) {
                        event.preventDefault();

                        listen();
                    });
                }());

                return {
                    gotoInitialRoute: gotoInitialRoute,
                    createRoutes: createRoutes,
                    gotoRoute: gotoRoute
                }
            }
        ])
    }
);