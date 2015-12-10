/**
 * Created by psmit on 12/8/2015.
 */
define([
        'angularAMD',
        'js/locator/service.locator'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('systemService', [
            'gameModel',
            'serviceLocator',

            function(gameModel, serviceLocator) {
                /**
                 *
                 */
                var launchGame = function() {
                    var success = function(result) {
                        console.log('system.service::launchGame::success: ', result);
                    };

                    var fail = function(error) {
                        console.log('system.service::launchGame::fail: ', error);
                    };

                    return serviceLocator.launch(gameModel.selectedGame.launchCommand)
                        .then(success, fail);
                };

                return {
                    launchGame: launchGame
                }
            }
        ])
    }
);