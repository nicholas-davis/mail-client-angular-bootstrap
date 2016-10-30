//ModalReplyMessageController
mailModule.controller('modalReplyMessageController', ['$scope', '$timeout', '$uibModalInstance', 'modalConfig', 'AlertService',
    function ($scope, $timeout, $uibModalInstance, modalConfig, AlertService) {
        
        //Build form
        $scope.formEntry = {
            to: modalConfig.instanceData.from.email,
            from: modalConfig.instanceData.to.email,
            subject: modalConfig.instanceData.subject,
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
                console.log($scope.formEntry)
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

        //Subject line
        $scope.modal.instanceData.subject = 'Re: ' + $scope.modal.instanceData.subject;

        $scope.isLoading = true;
        $uibModalInstance.rendered.then(function () {
            $timeout(function () {
                $scope.isLoading = false;
            }, 1000);
        });

    }
]).directive('contenteditable', function () {
      return {
          restrict: 'A', // only activate on element attribute
          require: '?ngModel', // get a hold of NgModelController
          link: function (scope, element, attrs, ngModel) {
              if (!ngModel) return; // do nothing if no ng-model

              // Specify how UI should be updated
              ngModel.$render = function () {
                  element.html(ngModel.$viewValue || '');
              };

              // Listen for change events to enable binding
              element.on('blur keyup change', function () {
                  scope.$apply(readViewText);
              });

              // No need to initialize, AngularJS will initialize the text based on ng-model attribute

              // Write data to the model
              function readViewText() {
                  var html = element.html();
                  // When we clear the content editable the browser leaves a <br> behind
                  // If strip-br attribute is provided then we strip this out
                  if (attrs.stripBr && html == '<br>') {
                      html = '';
                  }
                  ngModel.$setViewValue(html);
              }
          }
      };
  });