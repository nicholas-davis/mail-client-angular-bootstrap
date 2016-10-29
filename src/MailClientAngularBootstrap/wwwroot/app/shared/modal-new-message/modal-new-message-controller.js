//ModalNewMessageController
mailModule.controller('modalNewMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig', 'AlertService', 'UtilitiesService',
    function ($scope, $timeout, $uibModalInstance, modalConfig, AlertService, UtilitiesService) {

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

                //Check subject line
                if ($scope.formEntry.subject) {
                    //Show confirmed alert
                    AlertService.alerts.add('success', 'Message was sent to ' + $scope.formEntry.to, 7000);

                    //Close modal
                    $uibModalInstance.close();

                    //add service here 
                } else {
                    AlertService.alerts.add('info', 'Oops! You forgot to add a subject', 5000);
                }

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