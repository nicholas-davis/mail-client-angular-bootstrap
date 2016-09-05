//SentController
var sentModule = angular.module('mailClientApp.sent', []);

sentModule.controller('SentController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'SentService',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, SentService) {

        //Sent data
        SentService.getSentMail().then(function (response) {
            $scope.mail = response;

            //broadcast mail items
            UtilitiesService.broadcast('mail', $scope.mail);

        });

    }
]);