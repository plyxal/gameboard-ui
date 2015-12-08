/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'angular-css',
        'js/model/game.model'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('monopolyplusController', [
            '$scope',
            '$css',
            'serviceLocator',
            'gameModel',

            function($scope, $css, serviceLocator, gameModel) {
                var launch = function() {
                    var result = function(result) {
                        //$('.stats').html(JSON.stringify(result.data));
                    };

                    serviceLocator.launch(gameModel.selectedGame.launchCommand)
                        .then(result);
                };

                /**
                 * constructor
                 */
                (function() {
                    console.log('monopolyplus.controller::constructor');

                    //// Binds stylesheet(s) to scope create/destroy events (recommended over add/remove)
                    //$css.bind({
                    //    href: 'games/monopolyplus/assets/css/monopolyplus.css'
                    //}, $scope);
                }());

                $scope.launch = launch;
            }
        ])
    }
);