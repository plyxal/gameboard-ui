/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'js/directive/control/plyxal.button.directive',
        'js/model/enum/routes.enum'],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('sideNav', [
            '$parse',
            'routesEnum',

            function($parse, routesEnum) {
                return {
                    restrict: 'E',
                    scope: {
                        'games': '=games',
                        'selectionChanged': '&selectionChanged',
                        'systemButtonClicked': '&systemButtonClicked'
                    },
                    template:   '<div class="side-nav">' +
                                    '<div class="nav-container">' +
                                        '<plyxal-button class="nav-button" ng-repeat="game in games" click-handler="selectGame(game)" image="game.logoUrl"></plyxal-button>' +
                                    '</div>' +
                                    '<div class="system-bar">' +
                                        '<plyxal-button class="system-button" image="\'assets/images/settings-icon-white.png\'" click-handler="sysbarButtonClicked(\'' + routesEnum.ROUTE_SETTINGS + '\')"></plyxal-button>' +
                                        '<plyxal-button class="system-button" image="\'assets/images/account-icon-white.png\'" click-handler="sysbarButtonClicked(\'' + routesEnum.ROUTE_ACCOUNTS + '\')"></plyxal-button>' +
                                        '<plyxal-button class="system-button" image="\'assets/images/store-icon-white.png\'" click-handler="sysbarButtonClicked(\'' + routesEnum.ROUTE_STORE + '\')"></plyxal-button>' +
                                    '</div>' +
                                '</div>',
                    replace: true,
                    link: function (scope, element, attributes) {
                        /**
                         *
                         */
                        var downItem;

                        /**
                         *
                         */
                        var selectGame = function(game) {
                            var fn = $parse(scope.selectionChanged);
                            fn({selectedGame: game});
                        };

                        var sysbarButtonClicked = function(route) {
                            // console.log('sysbarButtonClicked::route: ', route);
                            var fn = $parse(scope.systemButtonClicked);
                            fn({route: route});
                        };

                        //expose scope methods
                        scope.selectGame = selectGame;
                        scope.sysbarButtonClicked = sysbarButtonClicked;

                        /**
                         * @constructor
                         */
                        (function() {
                            // console.log('nav.directive::constructor');
                        }())
                    }
                }
            }
        ])
    }
);