//ArchiveController
var archiveModule = angular.module('mailClientApp.archive', ['ui.tinymce']);

archiveModule.controller('ArchiveController', ['$rootScope', '$scope', '$stateParams', '$state', 'UtilitiesService', 'ArchiveService', '$timeout',
    function ($rootScope, $scope, $stateParams, $state, UtilitiesService, ArchiveService, $timeout) {

        //Archive data
        ArchiveService.getArchiveMail().then(function (response) {
            $scope.mail = response;

            $timeout(function () {
                UtilitiesService.broadcast('mail', $scope.mail);
            });
        });
    }
]);