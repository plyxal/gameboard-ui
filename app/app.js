/**
 * Created by Paul on 8/11/2015.
 */
define([
        'angular',
        'angularAMD',
        'ngload',

        'd3',

        'timeline-max',

        'jquery',
        'lodash',

        'angular-route',
        'angular-bootstrap',
        'angular-bootstrap-tpls',
        'angular-animate',
        'angular-css',

        'js/controller/app.controller',
        'js/directive/loader.directive',
        'js/directive/side.nav.directive',
        'js/service/init.service'
    ],

    function(angular, angularAMD) {
        //create application instance
        var app = angular.module('app', [
            'ngRoute',
            'ui.bootstrap',
            'ngAnimate',
            'door3.css'
        ], null);

        app.config([
            '$routeProvider',

            function($routeProvider) {
                //expose routeProvider for later population by init service -psmithiv
                //TODO: make app model accessible as a provider to set this property there, window is bad.. umm kaaaayyy -psmithiv
                window.$routeProvider = $routeProvider;
            }
        ]);

        app.run([
            'initService',

            function(initService) {
                initService.init();
            }
        ]);

        return angularAMD.bootstrap(app);
    }
);