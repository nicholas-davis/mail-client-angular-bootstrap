//ModalDirective
mailModule.directive('modal', ['$uibModal',
    function ($uibModal) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'app/shared/modal/modal-view.html', //display btn
            controller: 'modalController', //Only for btn, not modal instance
            controllerAs: 'vmModal',
            bindToController: {
                title: '@', //modal title
                size: '@', //modal size
                templateUrl: '@', //modal template
                instance: '@', //modal instance - controller name as a string
                instanceData: '=',  // data that can be passed on to the modal that is being loaded 
                cssClass: '@', //add classes to btn or link without commas
                btnText: '@', //btn or dropdown text
                btnIcon: '@', //btn icon
                btnActionText: '@', //modal confirm btn
                btnCancelText: '@' //modal cancel btn
            },
            link: function (scope) {
                var modalInstance = null;
 
                //trigger modal
                scope.showModal = function () {
                    modalInstance = $uibModal.open({
                        templateUrl: scope.vmModal.templateUrl, //display modal
                        size: scope.vmModal.size, //config modal size ie. sm, md and lg
                        controller: scope.vmModal.instance, // attach controller to given page controller 
                        backdrop: 'static',
                        resolve: {
                            modalConfig: {
                                title: scope.vmModal.title,
                                instanceData: scope.vmModal.instanceData,
                                btnActionText: scope.vmModal.btnActionText,
                                btnCancelText: scope.vmModal.btnCancelText
                            }
                        }
                    });

                    modalInstance.opened.then(function () {
                        scope.isOpen = true;
                    });

                    modalInstance.result.then(function () {
                        scope.isOpen = false;
                    }, function () {
                        scope.isOpen = false;
                    });

                };
            }
        };
    }
]);