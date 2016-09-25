//ValidateDirective
mailModule.directive('validate', [
    function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/shared/validate/validate-view.html', 
            controller: 'validateController', 
            controllerAs: 'vmValidate',
            bindToController: {
                form: '=',
                id: '=',
                elementType: "@",
                elementClass: '@',
                labelClass: '@',
                labelText: '@',
                placeholder: '@'
            },
            link: function (scope, element, attrs) {

            }
        };
    }
]);