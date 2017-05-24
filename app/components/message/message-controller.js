//MessageController
messageModule.controller('MessageController', ['$scope', '$stateParams', '$sce',
    function ($scope, $stateParams, $sce) {

        //State params
        $scope.vmMessage = {
            "messageID": $stateParams.messageID,
            "guid": $stateParams.guid,
            "type": $stateParams.type,
            "from": {
                "firstName": $stateParams.fromFirstName,
                "lastName": $stateParams.fromLastName,
                "email": $stateParams.fromEmail
            },
            "to": {
                "firstName": $stateParams.toFirstName,
                "lastName": $stateParams.toLastName,
                "email": $stateParams.toEmail
            },
            "subject": $stateParams.subject,
            "message": $sce.trustAsHtml($stateParams.message),
            "date": $stateParams.date,
            "tags": $stateParams.tags
        }
    
    }
]);