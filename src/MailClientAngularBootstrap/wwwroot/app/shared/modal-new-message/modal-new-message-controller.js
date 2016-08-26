//ModalNewMessageController
mailModule.controller('modalNewMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig', 'AlertService',
    function ($scope, $timeout, $uibModalInstance, modalConfig, AlertService) {

        //Modal configuration
        $scope.modal = {
            loadingText: 'Loading ' + modalConfig.title + '...',
            title: modalConfig.title,
            instanceData: modalConfig.instanceData,
            btnActionText: modalConfig.btnActionText,
            btnCancelText: modalConfig.btnCancelText,
            action: function () {
                AlertService.alerts.add('success', 'hello', 2000)
            },
            cancel: function () {
                $uibModalInstance.dismiss('cancel');
            }
        };

        $scope.isLoading = true;
        $uibModalInstance.rendered.then(function () {
            $timeout(function () {
                $scope.isLoading = false;
            }, 500);
        });

    }
]);