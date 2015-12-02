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
                /**
                 * constructor
                 */
                (function() {
                    console.log('battle.controller::constructor');

                    $timeout(function() {
                        appModel.inGame = true;
                    })
                }());
            }
        ])
    }
);