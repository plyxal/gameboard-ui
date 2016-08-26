/**
 * Created by psmit on 7/20/2016.
 */
define([
    'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('wifiSignal', [
            '$timeout',
            '$parse',

            function($timeout, $parse) {
                return {
                    restrict: 'E',
                    scope: {
                        network: '=?network',
                        clickHandler: '&?clickHandler'
                    },
                    template:   '<div class="wifi-signal">' +
                                    '<div class="wifi-signal-inner" ng-click="internalClickHandler()">' +
                                        '<div class="bar1"></div>' +
                                        '<div class="bar2"></div>' +
                                        '<div class="bar3"></div>' +
                                        '<div class="bar4"></div>' +
                                        '<div class="bar5"></div>' +
                                        '<div class="network-name">{{network.ssid}}</div>' +
                                        '<div class="network-secure">{{network.security}}</div>' +
                                    '</div>' +
                                '</div>',
                    replace: true,
                    link: function (scope, element, attributes) {

                        /**
                         *
                         * @type {*|jQuery|HTMLElement}
                         */
                        var inner = element.find('.wifi-signal-inner');

                        /**
                         *
                         */
                        var interactionEnd = function() {
                            setTimeout(function() {
                                inner.removeClass('interaction-start');
                            }, 100);
                        };

                        /**
                         *
                         * @param event
                         */
                        var interactionStart = function(event) {
                            // console.log('button.directive::touchStartHander::event: ', event);

                            inner.addClass('interaction-start');
                            $(element).bind('touchend', interactionEnd);
                            $(element).bind('mouseup', interactionEnd);
                        };

                        var internalClickHandler = function(event) {
                            // console.log('internalClickHandler');

                            $timeout(function() {
                                var fn = $parse(scope.clickHandler);
                                fn({network: scope.network});
                            }, 200);
                        };

                        scope.interactionEnd = interactionEnd;
                        scope.interactionStart = interactionStart;
                        scope.internalClickHandler = internalClickHandler;

                        var setBars = function() {
                            if(scope.network.signal_level > 0)
                                element.find('.bar1').css({opacity: 1});

                            if(scope.network.signal_level > 20)
                                element.find('.bar2').css({opacity: 1});

                            if(scope.network.signal_level > 40)
                                element.find('.bar3').css({opacity: 1});

                            if(scope.network.signal_level > 60)
                                element.find('.bar4').css({opacity: 1});

                            if(scope.network.signal_level > 80)
                                element.find('.bar5').css({opacity: 1});
                        };

                        /**
                         * @constructor
                         */
                        (function() {
                            console.log('nav.directive::constructor');
                            setBars();

                            $(element).bind('touchstart', interactionStart);
                            $(element).bind('mousedown', interactionStart);
                        }())
                    }
                }
            }
        ])
    }
);