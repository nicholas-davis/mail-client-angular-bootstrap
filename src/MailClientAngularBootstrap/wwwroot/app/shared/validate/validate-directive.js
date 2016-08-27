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
                id: '@',
                elementType: "@",
                elementClass: '@',
                labelClass: '@',
                labeText: '@',
                placeholder: '@'
            },
            link: function (scope, element, attrs) {

            }
        };
    }
]);