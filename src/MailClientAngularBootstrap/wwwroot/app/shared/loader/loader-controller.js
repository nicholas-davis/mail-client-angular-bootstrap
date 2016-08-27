//LoaderController
mailModule.controller('loaderController', ['$scope', '$timeout',
    function ($scope, $timeout) {

        //Give feedback to user
        $timeout(function () {
            $scope.$ctrl.text = 'Still loading...';
        }, 10000).then($timeout(function () {
            $scope.$ctrl.text = 'Something went wrong';
        }, 30000));  
    }
]);