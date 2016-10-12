/**
 * Created by Paul on 8/18/2015.
 */
define([
        'angularAMD',
        'js/service/route.service',
        'js/model/game.model',
        'js/model/app.model'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('appController', [
            '$scope',
            'routeService',
            'gameModel',
            'appModel',

            function($scope, routeService, gameModel, appModel) {
                /**
                 *
                 */
                var selectedGameChanged = function(game) {
                    gameModel.selectedGame = game;
                    routeService.gotoRoute(game.route);
                };

                var systemButtonClicked = function(route) {
                    routeService.gotoRoute(route);
                };

                /**
                 * constructor
                 */
                (function() {
                    // console.log('app.controller::constructor');
                }());

                //expose scope props/functions
                $scope.appModel = appModel;
                $scope.games = gameModel;

                $scope.selectedGameChanged = selectedGameChanged;
                $scope.systemButtonClicked = systemButtonClicked;
            }
        ])
    }
);