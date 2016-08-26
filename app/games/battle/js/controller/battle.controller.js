/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'games/battle/js/directive/control.directive',
        'js/model/app.model'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('battleController', [
            '$scope',
            'appModel',
            '$timeout',

            function($scope, appModel, $timeout) {

                var interval;

                var showingFirst = true;

                var switchImages = function() {
                    console.log('showingFirst: ', showingFirst);
                        switch(showingFirst) {
                            case true:
                                // TweenMax.fromTo('.test-image-one', .5, {opacity:1}, {opacity:0});
                                TweenMax.to('.test-image-two', .5, {opacity:1});
                                break;

                            case false:
                                // TweenMax.fromTo('.test-image-one', .5, {opacity:0}, {opacity:1});
                                TweenMax.to('.test-image-two', .5, {opacity:0});
                                break;
                        }

                    showingFirst = !showingFirst;
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('battle.controller::constructor');

                    interval = setInterval(function() {
                        switchImages();
                    }, 3000);

                    $scope.$on('destroy', function() {
                        clearInterval(interval);
                    })
                }());
            }
        ])
    }
);