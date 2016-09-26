/**
 * Created by psmit on 12/24/2015.
 */
define([
        'angularAMD'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('plyxalButton', [
            '$parse',
            '$timeout',

            function($parse, $timeout) {
                return {
                    restrict: 'E',
                    scope: {
                        'image': '=?image',
                        'clickHandler': '&clickHandler',
                        'label': '=?label',
                        'disabled': '=?disabled'
                    },
                    template:   '<div class="plyxal-button" ng-class="{disabled: disabled}">' +
                                    '<div class="plyxal-button-inner" ng-click="internalClickHandler($event)" style="background-image: url(\'{{image}}\')">{{label}}</div>' +
                                '</div>',
                    replace: true,
                    link: function (scope, element, attributes) {

                        /**
                         *
                         * @type {*|jQuery|HTMLElement}
                         */
                        var inner = element.find('.plyxal-button-inner');

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
                                fn();
                            }, 200);
                        };

                        scope.interactionEnd = interactionEnd;
                        scope.interactionStart = interactionStart;
                        scope.internalClickHandler = internalClickHandler;

                        /**
                         * @constructor
                         */
                        (function() {
                            // console.log('button.directive::constructor');

                            $(element).bind('touchstart', interactionStart);
                            $(element).bind('mousedown', interactionStart);
                        }())
                    }
                }
            }
        ])
    }
);