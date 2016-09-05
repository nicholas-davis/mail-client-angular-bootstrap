//InboxController
var inboxModule = angular.module('mailClientApp.inbox', []);

inboxModule.controller('InboxController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'InboxService',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, InboxService) {

        //Inbox data
        InboxService.getInboxMail().then(function (response) {
            $scope.mail = response;

            //broadcast mail items
            UtilitiesService.broadcast('mail', $scope.mail);

        });
    }
]);