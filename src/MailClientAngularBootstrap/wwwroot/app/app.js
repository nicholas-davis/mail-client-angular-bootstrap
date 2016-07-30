//Mail Client App
var mailClientApp = angular.module('mailClientApp', [
  'ui.bootstrap',
  'ui.router'
]); 

mailClientApp.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
       
        $rootScope.$on('$stateChangeSuccess', function () {
            //Page title
            $rootScope.pageTitle = $stateParams.pageTitle;
            //If modal is opened, discard modal when the user clicks on back btn
            //$uibModalStack.dismissAll('cancel');
        });
    }
]);

mailClientApp.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/inbox");

        $stateProvider.state('Mail', { //parent   
            abstract: true,
            templateUrl: 'app/components/mail/mail-view.html',
            controller: "MailController",
            controllerAs: "mail",
        }).state('Mail.Inbox', {
            url: '^/inbox',
            templateUrl: 'app/components/inbox/inbox-view.html',
            controller: "InboxController",
            controllerAs: "inbox",
            resolve: {
                pageTitle: [
                    '$stateParams', function ($stateParams) {
                        $stateParams.pageTitle = "Inbox"; 
                    }
                ]
            }
        });
    }
]);