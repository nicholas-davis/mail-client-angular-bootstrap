//FolderController
mailModule.controller('FolderController', ['$scope', 'UtilitiesService', 'FolderService',
    function ($scope, UtilitiesService, FolderService) {

        //Folder data
        FolderService.getFolders().then(function (response) {
            $scope.folders = response;
        });

    }
]);