//ModalNewMessageController
mailModule.controller('modalNewMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig',
    function ($scope, $timeout, $uibModalInstance, modalConfig) {

        //Modal configuration
        $scope.modal = {
            loadingText: 'Loading ' + modalConfig.title + '...',
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

        $scope.isLoading = true;
        $uibModalInstance.rendered.then(function () {
            $timeout(function () {
                $scope.isLoading = false;
            }, 1000);
        });
    }
]);