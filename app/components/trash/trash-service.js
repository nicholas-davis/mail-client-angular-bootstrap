//TrashService
trashModule.factory('TrashService', ['config', '$http',
    function (config, $http) {
        return {
            getTrashMail: function () {
                return $http.get(config.apiUrl + '/trash.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
