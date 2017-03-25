//MailController
var mailModule = angular.module('mailClientApp.mail', []);

mailModule.controller('MailController', ['$scope', '$state', '$stateParams', 'UtilitiesService', 'UserService', 'MailService', 'AlertService', 'FilterService',
    function ($scope, $state, $stateParams, UtilitiesService, UserService, MailService, AlertService, FilterService) {
        
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

            //Mail promise
            UtilitiesService.async(mail).then(function () {
                //Selected text item
                $scope.sortTest = mail.selected;
               
                //Set predicate
                if (typeof $scope.predicate === 'undefined') {
                    $scope.predicate = '-date'
                } else {
                    $scope.predicate = FilterService.filter.item('lowercase', $scope.sortTest);
                }

                //print messages
                $scope.mail = mail;
            }).catch(function () {
                //Display alert for user 
                AlertService.alerts.add('danger', 'Something went wrong', 20000)
            }).finally(function () {
                //Hide loader
                $scope.isLoading = false;
            });
            
        });

        //Get the number of unread messages
        MailService.getMailConfig().then(function (response) {
            $scope.inboxUnread = response.inbox.unread;
        });

        //Toggle css class
        $scope.selectMessageItem = function (mail) {
            $scope.selectedMessageItem = mail;
            console.log($scope.selectedMessageItem)
        };

    }
]);