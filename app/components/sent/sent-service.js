//SentService
sentModule.factory('SentService', ['config', '$http',
    function (config, $http) {
        return {
            getSentMail: function () {
                return $http.get(config.apiUrl + '/sent.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
