//SentController
var sentModule = angular.module('mailClientApp.sent', ['ui.tinymce']);

sentModule.controller('SentController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'SentService', '$timeout',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, SentService, $timeout) {

        //Sent data
        SentService.getSentMail().then(function (response) {
            $scope.mail = response;

            $timeout(function () {
                UtilitiesService.broadcast('mail', $scope.mail);
            });

        });

    }
]);