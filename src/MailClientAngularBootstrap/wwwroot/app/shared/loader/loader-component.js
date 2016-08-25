//LoaderDirective
mailModule.component('loader', {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/shared/loader/loader-view.html', 
    controller: 'loaderController', 
    controllerAs: 'vmLoader',
    bindToController: {
       
    }
});