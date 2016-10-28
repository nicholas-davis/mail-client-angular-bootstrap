//ModalNewMessageController
mailModule.controller('modalNewMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig', 'AlertService',
    function ($scope, $timeout, $uibModalInstance, modalConfig, AlertService) {
        console.log('modalNewMessageController', modalConfig.instanceData)

        ///Build form
        $scope.formEntry = {
            to: null,
            from: modalConfig.instanceData.email,
            subject: null,
            message: null
        };

        //Modal configuration
        $scope.modal = {
            loadingText: 'Loading ' + modalConfig.title + '...',
            title: modalConfig.title,
            instanceData: modalConfig.instanceData,
            btnActionText: modalConfig.btnActionText,
            btnCancelText: modalConfig.btnCancelText,
            action: function () {
                AlertService.alerts.add('success', 'hello', 5000)

                console.log($scope.formEntry)
                //for (var i = 0; i < $scope.formEntry.length; i++) {
                //}
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