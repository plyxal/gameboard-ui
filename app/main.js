/**
 * Created by Paul on 8/11/2015.
 */
require.config({
    // alias libraries paths
    paths: {
        'jquery': 'lib/jquery/dist/jquery.min',

        'angular': 'lib/angular/angular.min',
        'angular-route': 'lib/angular-route/angular-route.min',
        'angular-bootstrap': 'lib/angular-bootstrap/ui-bootstrap.min',
        'angular-bootstrap-tpls': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
        'angular-animate': 'lib/angular-animate/angular-animate.min',
        'angular-css': 'lib/angular-css/angular-css.min',
        'angularjs-slider': 'lib/angularjs-slider/dist/rzslider.min',
        'angular-virtual-keyboard': 'lib/angular-virtual-keyboard/release/angular-virtual-keyboard.min',

        'tween-max': 'lib/gsap/src/minified/TweenMax.min',
        'timeline-max': 'lib/gsap/src/minified/TimelineMax.min',

        'angularAMD': 'lib/angularAMD/angularAMD.min',
        'ngload': 'lib/angularAMD/ngload.min',

        'd3': 'lib/d3/d3.min',

        'lodash': 'lib/lodash/lodash.min'
    },

    // Add angular modules that do not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'angular-bootstrap-tpls': {
            deps: ['angular-bootstrap']
        },
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-animate': ['angular'],
        'angular-css': {
            deps: ['angular', 'angular-route']
        },
        'tween-max': {
            exports: 'TweenMax'
        },
        'timeline-max' : ['tween-max'],
        'd3': {
            exports: 'd3'
        },
        'angular-virtual-keyboard': {
            deps: ['angular']
        }
    },

    priority: [
        'angular'
    ],

    // kick start application
    deps: [
        'app'
    ]
});