//InboxController
var inboxModule = angular.module('mailClientApp.inbox', []);

inboxModule.controller('InboxController', ['$scope', '$stateParams', '$state', 'InboxService',
    function ($scope, $stateParams, $state, InboxService) {

        //Inbox data
        InboxService.getInboxMail().then(function (response) {
            $scope.mail = response;
        });

    }
]);