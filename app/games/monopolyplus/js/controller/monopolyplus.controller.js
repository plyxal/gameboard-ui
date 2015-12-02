/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD',
        'angular-css'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('monopolyplusController', [
            '$scope',
            '$css',

            function($scope, $css) {
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
            }
        ])
    }
);