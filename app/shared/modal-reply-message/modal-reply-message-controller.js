﻿//ModalReplyMessageController
mailModule.controller('modalReplyMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig', 'AlertService',
    function ($scope, $timeout, $uibModalInstance, modalConfig, AlertService) {

        //Build form
        $scope.formEntry = {
            to: modalConfig.instanceData.from.email,
            from: modalConfig.instanceData.to.email,
            subject: 'Re: ' + modalConfig.instanceData.subject,
            message: '<br /><br /><hr />' + modalConfig.instanceData.message
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
            }, 1000);
        });

    }
]);