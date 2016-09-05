//TrashController
var trashModule = angular.module('mailClientApp.trash', []);

trashModule.controller('TrashController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'TrashService',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, TrashService) {

        //Trash data
        TrashService.getTrashMail().then(function (response) {
            $scope.mail = response;

            //broadcast mail items
            UtilitiesService.broadcast('mail', $scope.mail);

        });
    }
]);