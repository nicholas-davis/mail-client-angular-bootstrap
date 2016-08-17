//TrashController
var trashModule = angular.module('mailClientApp.trash', []);

trashModule.controller('TrashController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'TrashService', '$timeout',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, TrashService, $timeout) {

        //Trash data
        TrashService.getTrashMail().then(function (response) {
            $scope.mail = response;

            $timeout(function () {
                UtilitiesService.broadcast('mail', $scope.mail);
            });
        });
    }
]);