﻿//MailController
var mailModule = angular.module('mailClientApp.mail', []);

mailModule.controller('MailController', ['$scope', '$stateParams', '$state', 'UserService', 'MailService',
    function ($scope, $stateParams, $state, UserService, MailService) {

        //User's basic data
        UserService.getUser().then(function (response) {
            $scope.user = response.user[0];

            $scope.user = {
                firstName: response.user[0].firstName,
                lastName: response.user[0].lastName,
                email: response.user[0].email
            }

        });

        //User's mail
        $scope.$on("mail", function mailEvent(event, mail) {
            $scope.mail = mail;
        });

        MailService.getMailConfig().then(function (response) {
            $scope.inboxCount = response.inbox.length;
            $scope.draftCount = response.draft.length;
            $scope.sentCount = response.sent.length;
            $scope.archiveCount = response.archive.length;
            $scope.trashCount = response.trash.length;
        });
    }
]);