/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angularAMD'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.controller('skylandersController', [
            '$scope',

            function($scope) {
                /**
                 * constructor
                 */
                (function() {
                    console.log('skylanders.controller::constructor');
                }());
            }
        ])
    }
);