//LoaderDirective
mailModule.component('loader', [
    function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/shared/loader/loader-view.html', 
            controller: 'loaderController', 
            controllerAs: 'vmLoader',
            bindToController: {
                hero: '='
            },
            link: function (scope) {
                
            }
        };
    }
]);