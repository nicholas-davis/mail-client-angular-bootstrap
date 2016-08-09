//InboxService
inboxModule.factory('InboxService', ['config', '$http',
    function (config, $http) {

        var inboxData = {};

        inboxData.getInboxMail = function () {
            return $http.get(config.apiUrl + '/inbox.json').then(function (response) {
                return response.data;
            });
        };

        return inboxData;
    }
]);
