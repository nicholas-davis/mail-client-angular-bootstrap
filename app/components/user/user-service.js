//UserService
mailModule.factory('UserService', ['config', '$http',
    function (config, $http) {
        return {
            getUser: function () {
                return $http.get(config.apiUrl + '/user.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
