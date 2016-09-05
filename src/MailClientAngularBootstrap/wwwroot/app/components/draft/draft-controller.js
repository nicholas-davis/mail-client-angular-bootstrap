//DraftController
var draftModule = angular.module('mailClientApp.draft', []);

draftModule.controller('DraftController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'DraftService',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, DraftService) {

        //Draft data
        DraftService.getDraftMail().then(function (response) {
            $scope.mail = response;

            //broadcast mail items
            UtilitiesService.broadcast('mail', $scope.mail);

        });
    }
]);