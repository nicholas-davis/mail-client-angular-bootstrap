//AlertDirective
mailModule.component('alert', {
    templateUrl: 'app/shared/alert/alert-view.html',
    controller: 'alertController',
    bindings: {
        alerts: '@',
    }
});