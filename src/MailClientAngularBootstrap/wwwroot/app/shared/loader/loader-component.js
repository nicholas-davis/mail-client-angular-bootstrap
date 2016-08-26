//LoaderDirective
mailModule.component('loader', {
    templateUrl: 'app/shared/loader/loader-view.html', 
    controller: 'loaderController', 
    bindings: {
        text: '=',
    }
});