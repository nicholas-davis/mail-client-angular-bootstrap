//AlertController
mailModule.controller('alertController', ['$scope', 'AlertService',
    function ($scope, AlertService) {
        $scope.alerts = AlertService.alerts.data(); //required

        $scope.closeAlert = function (index) {
            AlertService.alerts.remove(index);
        };
    }
]);