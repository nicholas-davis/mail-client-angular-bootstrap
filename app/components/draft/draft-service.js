//DraftService
draftModule.factory('DraftService', ['config', '$http',
    function (config, $http) {
        return {
            getDraftMail: function () {
                return $http.get(config.apiUrl + '/draft.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
