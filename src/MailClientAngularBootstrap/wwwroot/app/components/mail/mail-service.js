//MailService
mailModule.service('MailService', ['config', '$http',
    function (config, $http) {
        return {
            getMailConfig: function () {
                return $http.get(config.apiUrl + '/mail.json').then(function (response) {
                    return response.data;
                });
            }
        };
    }
]);

