//UserService
mailModule.factory('UtilitiesService', ['$rootScope',
    function ($rootScope) {
        return {
            broadcast: function (message, data) {
                $rootScope.$broadcast(message, data);
            }
        };
    }
]);


