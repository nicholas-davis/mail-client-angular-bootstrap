//ListMailItems Directive
mailModule.directive('listMailItems', [
    function () {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/list-mail-items/list-mail-items-view.html',
            controllerAs: 'vm',
            bindToController: {
                mail: '=mail'
            },
            controller: function ($scope) {

                console.log('ListMailItems Directive - ', $scope)
            }
        };
    }
]);