/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD'],

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
                                    '<div>' +
                                        '<div class="items-container">' +
                                            '<div class="item-container" ng-repeat="game in games" ng-click="selectGame(game)" ng-mousedown="mouseDown($event)" ng-mouseup="mouseUp($event)">' +
                                                '<div class="item">' +
                                                    '<img class="logo" ng-src="{{game.logoUrl}}"/>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
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
                            var fn = $parse(scope.selectionChanged);
                            fn({selectedGame: game});
                        };

                        /**
                         *
                         * @param $event
                         */
                        scope.mouseDown = function($event) {
                            downItem = $($event.target);
                            downItem.addClass('item-down');
                        };

                        /**
                         *
                         * @param event
                         */
                        var mouseUp = function(event) {
                            if(!downItem)
                                return;

                            downItem.removeClass('item-down');
                            downItem = null;
                        };

                        /**
                         * @constructor
                         */
                        (function() {
                            console.log('nav.directive::constructor');
                            window.addEventListener("mouseup", mouseUp);
                        }())
                    }
                }
            }
        ])
    }
);