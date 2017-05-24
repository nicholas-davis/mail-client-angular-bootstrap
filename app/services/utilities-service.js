//UserService
mailModule.factory('UtilitiesService', ['$rootScope', '$q',
    function ($rootScope, $q) {
        return {
            broadcast: function (message, data) {
                $rootScope.$broadcast(message, data);
            },
            async: function (node) {
                var deferred = $q.defer();

                if (node) {
                    deferred.resolve(node);
                } else {
                    deferred.reject();
                }

                return deferred.promise;
            }
        };
    }
]);