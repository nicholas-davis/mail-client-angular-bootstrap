//ModalReplyMessageController
mailModule.controller('modalReplyMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig',
    function ($scope, $timeout, $uibModalInstance, modalConfig) {
        console.log('$uibModalInstance', $uibModalInstance)
        console.log('modalConfig', modalConfig)


        $scope.isLoading = true;

        //Modal configuration
        $scope.modal = {
            title: modalConfig.title,
            instanceData: modalConfig.instanceData,
            btnActionText: modalConfig.btnActionText,
            btnCancelText: modalConfig.btnCancelText,
            action: function () {

            },
            cancel: function () {
                $uibModalInstance.dismiss('cancel');
            }
        };

        $uibModalInstance.rendered.then(function () {
            $timeout(function () {
                $scope.isLoading = false;
            }, 5000000);
        });

    }
]);