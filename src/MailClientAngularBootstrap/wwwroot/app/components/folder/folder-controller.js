//FolderController
mailModule.controller('FolderController', ['$scope', 'FolderService',
    function ($scope, FolderService) {

        //Folder data
        FolderService.getFolders().then(function (response) {
            $scope.folders = response;
        });
    
    }
]);