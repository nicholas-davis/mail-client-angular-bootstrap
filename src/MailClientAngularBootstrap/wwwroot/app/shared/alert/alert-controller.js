//AlertController
mailModule.controller('alertController', ['$scope', 'AlertService',
    function ($scope, AlertService) {

        //Data collection
        $scope.alerts = AlertService.alerts.data(); //required

        $scope.closeAlert = function (index) {
            AlertService.alerts.remove(index);
        };
    }
]);