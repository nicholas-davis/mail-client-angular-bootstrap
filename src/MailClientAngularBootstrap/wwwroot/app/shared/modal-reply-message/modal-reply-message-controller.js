//ModalReplyMessageController
mailModule.controller('modalReplyMessageController', ['$scope', '$uibModalInstance', 'modalConfig',
    function ($scope, $uibModalInstance, modalConfig) {
        console.log('$uibModalInstance', $uibModalInstance)
        console.log('modalConfig', modalConfig)

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
    }
]);