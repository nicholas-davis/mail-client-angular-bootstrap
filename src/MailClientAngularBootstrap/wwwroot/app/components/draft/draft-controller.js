//DraftController
var draftModule = angular.module('mailClientApp.draft', []);

draftModule.controller('DraftController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'DraftService', '$timeout',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, DraftService, $timeout) {

        //Draft data
        DraftService.getDraftMail().then(function (response) {
            $scope.mail = response;

            $timeout(function () {
                UtilitiesService.broadcast('mail', $scope.mail);
            });
        });
    }
]);