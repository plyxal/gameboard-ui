/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'js/directive/control/plyxal.button.directive'],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('sideNav', [
            '$parse',

            function($parse) {
                return {
                    restrict: 'E',
                    scope: {
                        'games': '=games',
                        'selectionChanged': '&selectionChanged'
                    },
                    template:   '<div class="side-nav">' +
                                    '<div class="nav-container">' +
                                        '<plyxal-button class="nav-button" ng-repeat="game in games" click-handler="selectGame(game)" image="game.logoUrl"></plyxal-button>' +
                                    '</div>' +
                                    '<div class="system-bar">' +
                                        '<div class="settings"></div>' +
                                        '<div class="account"></div>' +
                                        '<div class="store"></div>' +
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
                        scope.selectGame = function(game) {
                            console.log('selectGame: ', game);
                            var fn = $parse(scope.selectionChanged);
                            fn({selectedGame: game});
                        };

                        /**
                         * @constructor
                         */
                        (function() {
                            console.log('nav.directive::constructor');
                        }())
                    }
                }
            }
        ])
    }
);