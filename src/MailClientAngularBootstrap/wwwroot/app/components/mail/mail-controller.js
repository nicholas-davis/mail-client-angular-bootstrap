//MailController
var mailModule = angular.module('mailClientApp.mail', []);

mailModule.controller('MailController', ['$scope', '$stateParams', '$state', 'UserService',
    function ($scope, $stateParams, $state, UserService) {

        //User basic data
        UserService.getUser().then(function (response) {
            $scope.user = response.user[0];
            $scope.user = {
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName
            }
        });

    }
]);