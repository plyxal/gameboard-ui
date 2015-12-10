/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('monopolyplusController', [
            '$scope',
            'systemService',

            function($scope, systemService) {
                /**
                 * constructor
                 */
                (function() {
                    console.log('monopolyplus.controller::constructor');
                }());
            }
        ])
    }
);