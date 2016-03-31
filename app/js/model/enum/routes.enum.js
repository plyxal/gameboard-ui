/**
 * Created by psmit on 2/11/2016.
 */
define([
        'angularAMD' ],

    function(angularAMD) {
        'use strict';

        angularAMD.factory('routesEnum', function() {
            var ROUTE_SETTINGS = '/settings';
            var ROUTE_ACCOUNTS = '/accounts';
            var ROUTE_STORE = '/store';

            return {
                ROUTE_SETTINGS: ROUTE_SETTINGS,
                ROUTE_ACCOUNTS: ROUTE_ACCOUNTS,
                ROUTE_STORE: ROUTE_STORE
            }
        })
    }
);