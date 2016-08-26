//AlertService
mailModule.service('AlertService', [function () {
    var alertServiceData = [];

    //Alerts
    this.alerts = {
        add: function (type, message, dismissal) {
            alertServiceData.push({
                type: type,
                message: message,
                dismissal: dismissal
            });
        },
        close: function (alert) {
            this.remove(alertServiceData.indexOf(alert));
        },
        remove: function (index) {
            alertServiceData.splice(index, 1);
        },
        data: function () {
            return alertServiceData;
        }
    };
}]);