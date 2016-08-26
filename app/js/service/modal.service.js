/**
 * Created by psmit on 8/26/2016.
 */
define([
        'angularAMD'
    ],

    function(angularAMD) {
        'use strict';

        angularAMD.service('modalService', [
            '$modal',

            function($modal) {
                var internalModal;

                var showWifiConnectionModal = function(wifiNetwork) {
                    return internalModal = $modal.open({
                        templateUrl: 'partials/modal/wifi.modal.html',
                        controller: 'wifiModalController',
                        backdrop: 'static',
                        size: 'md',
                        resolve: {
                            wifiNetwork: function() {
                                return wifiNetwork
                            },
                            load: ['$q', '$rootScope', function ($q, $rootScope) {
                                var defer = $q.defer();

                                require(['js/controller/modal/wifi.modal.controller'], function () {
                                    defer.resolve();
                                    $rootScope.$apply();
                                });

                                return defer.promise;
                            }]
                        }
                    }).result;
                };

                return {
                    showWifiConnectionModal: showWifiConnectionModal
                };
            }
        ])
    }
);