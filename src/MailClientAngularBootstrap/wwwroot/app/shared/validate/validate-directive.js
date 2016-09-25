//ValidateDirective
mailModule.directive('validate', ['$compile',
    function ($compile) {
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
                placeholder: '@',
                isRequired: '@',
                isDisabled: '@',
                isEmail: '@',
            },
            link: function (scope, element, attrs, vmValidate) {
                console.log(vmValidate)

                //Set field to required
                if (vmValidate.isRequired) {
                    scope.isRequired = vmValidate.isRequired;
                }

                //Set field to disabled
                if (vmValidate.isDisabled) {
                    scope.isDisabled = vmValidate.isDisabled;
                }

                //Check email address and/or email address by separated comma values
                if (vmValidate.isEmail) {
                    scope.isEmail = /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/;
                }
            }
        };
    }
]);