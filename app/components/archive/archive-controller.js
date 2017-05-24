//ArchiveController
var archiveModule = angular.module('mailClientApp.archive', []);

archiveModule.controller('ArchiveController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'ArchiveService',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, ArchiveService) {

        //Archive data
        ArchiveService.getArchiveMail().then(function (response) {
            $scope.mail = response;

            //broadcast mail items
            UtilitiesService.broadcast('mail', $scope.mail);

        });
    }
]);