//ValidateDirective
mailModule.directive('validate', [
    function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'app/shared/validate/validate-view.html',
            controller: 'validateController',
            controllerAs: 'vmValidate',
            bindToController: {
                form: '=',
                id: '@',
                value: '=',
                elementType: "@",
                elementClass: '@',
                labelClass: '@',
                labelText: '@',
                placeholder: '@',
                isRequired: '@',
                isDisabled: '@',
                isEmail: '@',
            },
            link: function (scope, element, attrs, vmValidate) {

                //Set field to required
                if (attrs.isRequired) {
                    scope.isRequired = attrs.isRequired;
                }

                //Set field to disabled
                if (attrs.isDisabled) {
                    scope.isDisabled = attrs.isDisabled;
                }

                //Check email address and/or email address by separated comma values
                if (attrs.isEmail) {
                    scope.isEmail = /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/;
                }
            }
        };
    }
]);