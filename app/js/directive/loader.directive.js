/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD'],

    function(angularAMD) {
        'use strict';

        angularAMD.directive('loader', [

            function() {
                return {
                    restrict: 'E',
                    scope: {},
                    template:   '<div class="loader">' +
                                    '<div class="sk-folding-cube">' +
                                        '<div class="sk-cube1 sk-cube"></div>' +
                                        '<div class="sk-cube2 sk-cube"></div>' +
                                        '<div class="sk-cube4 sk-cube"></div>' +
                                        '<div class="sk-cube3 sk-cube"></div>' +
                                    '</div>' +
                                    //'<div class="title">GameBoard</div>' +
                                '<div>',
                    replace: true,
                    link: function (scope, element, attributes) {
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