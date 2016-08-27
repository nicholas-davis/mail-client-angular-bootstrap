//MailController
var mailModule = angular.module('mailClientApp.mail', []);

mailModule.controller('MailController', ['$scope', '$stateParams', '$state', '$q', 'UserService', 'MailService', 'AlertService',
    function ($scope, $stateParams, $state, $q, UserService, MailService, AlertService) {

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
        $scope.isLoading = true;
        $scope.$on("mail", function mailEvent(event, mail) {

            //Mail
            $scope.asyncMail = function () {
                var deferred = $q.defer();

                if (mail) {
                    deferred.resolve(mail);
                }

                return deferred.promise;
            }
            
            //Mail promise
            $scope.asyncMail().then(function (mail) {
                $scope.mail = mail;
            }).finally(function () {
                //Hide loader
                $scope.isLoading = false
            });
        });

        //Get the number of unread messages
        MailService.getMailConfig().then(function (response) {
            $scope.inboxUnread = response.inbox.unread;
        });

        //Toggle css class
        $scope.selectMessageItem = function (mail) {
            $scope.selectedMessageItem = mail;
        };



    }
]);