//ArchiveService
archiveModule.factory('ArchiveService', ['config', '$http',
    function (config, $http) {
        return {
            getArchiveMail: function () {
                return $http.get(config.apiUrl + '/archive.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
