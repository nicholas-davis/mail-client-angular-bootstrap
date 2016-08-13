//Mail Client App
var mailClientApp = angular.module('mailClientApp', [
  'mailClientApp.mail',
  'mailClientApp.inbox',
  'mailClientApp.draft',
  'mailClientApp.sent',
  'mailClientApp.archive',
  'mailClientApp.trash',
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
            params: {
                messageID: null,
            },
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
            },
        }).state('Mail.Inbox.Message', {
            url: "^/inbox", //without :messageID === pretty URL
        }).state('Mail.Draft', {
            url: '^/draft',
            templateUrl: 'app/components/draft/draft-view.html',
            controller: "DraftController",
            controllerAs: "draft",
            resolve: {
                pageTitle: [
                    '$stateParams', function ($stateParams) {
                        $stateParams.pageTitle = "Draft";
                    }
                ]
            }
        }).state('Mail.Sent', {
            url: '^/sent',
            templateUrl: 'app/components/sent/sent-view.html',
            controller: "SentController",
            controllerAs: "sent",
            resolve: {
                pageTitle: [
                    '$stateParams', function ($stateParams) {
                        $stateParams.pageTitle = "Sent";
                    }
                ]
            }
        }).state('Mail.Archive', {
            url: '^/archive',
            templateUrl: 'app/components/archive/archive-view.html',
            controller: "ArchiveController",
            controllerAs: "archive",
            resolve: {
                pageTitle: [
                    '$stateParams', function ($stateParams) {
                        $stateParams.pageTitle = "Archive";
                    }
                ]
            }
        }).state('Mail.Trash', {
            url: '^/trash',
            templateUrl: 'app/components/trash/trash-view.html',
            controller: "TrashController",
            controllerAs: "trash",
            resolve: {
                pageTitle: [
                    '$stateParams', function ($stateParams) {
                        $stateParams.pageTitle = "Trash";
                    }
                ]
            }
        });
    }
]);

mailClientApp.constant('config', {
    apiUrl: window.location.origin + '/app/api/',
    baseUrl: '/',
});