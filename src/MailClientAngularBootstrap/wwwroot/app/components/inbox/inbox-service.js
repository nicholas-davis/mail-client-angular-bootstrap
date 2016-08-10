//InboxService
inboxModule.factory('InboxService', ['config', '$http',
    function (config, $http) {
        return {
            getInboxMail: function () {
                return $http.get(config.apiUrl + '/inbox.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);
