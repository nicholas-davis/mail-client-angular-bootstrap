//FolderService
mailModule.factory('FolderService', ['config', '$http',
    function (config, $http) {
        return {
            getFolders: function () {
                return $http.get(config.apiUrl + '/folder.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
