//InboxController
var inboxModule = angular.module('mailClientApp.inbox', []);

inboxModule.controller('InboxController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'InboxService', '$timeout',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, InboxService, $timeout) {

        //Inbox data
        InboxService.getInboxMail().then(function (response) {
            $scope.mail = response;

            $timeout(function () {
                UtilitiesService.broadcast('mail', $scope.mail);
            });
        });

        //Message ID
        $scope.messageID = $stateParams.messageID;
    }
]);