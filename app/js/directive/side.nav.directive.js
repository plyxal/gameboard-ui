/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'js/service/route.service'],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('sideNav', [
            'routeService',

            function(routeService) {
                return {
                    restrict: 'E',
                    scope: {
                        'games': '=games'
                    },
                    template:   '<div class="side-nav">' +
                                    '<div>' +
                                        '<div class="items-container">' +
                                            '<div class="item-container" ng-repeat="game in games" ng-click="gotoRoute(game)" ng-mousedown="mouseDown($event)" ng-mouseup="mouseUp($event)">' +
                                                '<div class="item">' +
                                                    '<img class="logo" ng-src="{{game.logoUrl}}"/>' +
                                                '</div>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>',
                    replace: true,
                    link: function (scope, element, attributes) {
                        var downItem;
                        /**
                         *
                         */
                        scope.gotoRoute = function(game) {
                            //var doGo = function() {
                            //    console.log('doGo!!!: ', routeService);
                            //    routeService.gotoRoute(game.route);
                            //};
                            //
                            //setTimeout(doGo, 200);

                            routeService.gotoRoute(game.route);
                        };

                        scope.mouseDown = function($event) {
                            downItem = $($event.target);
                            downItem.addClass('item-down');
                        };

                        window.addEventListener("mouseup", function(event) {
                            if(!downItem)
                                return;

                            downItem.removeClass('item-down');
                            downItem = null;
                        });

                        /**
                         * @constructor
                         */
                        (function() {
                            console.log('nav.directive::constructor');

                            //scope.$watch(function() {
                            //    return scope.games
                            //}, function(newValue, oldValue) {
                            //
                            //})
                        }())
                    }
                }
            }
        ])
    }
);