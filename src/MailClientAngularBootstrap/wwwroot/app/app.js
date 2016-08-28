//Mail Client App
var mailClientApp = angular.module('mailClientApp', [
    'ngAnimate',
    'ngMessages',
    'ngSanitize',
    'mailClientApp.mail',
    'mailClientApp.message',
    'mailClientApp.inbox',
    'mailClientApp.draft',
    'mailClientApp.sent',
    'mailClientApp.archive',
    'mailClientApp.trash',
    'angularMoment',
    'ui.bootstrap',
    'ui.router'
]);

mailClientApp.run(['$rootScope', '$state', '$stateParams', '$location',
    function ($rootScope, $state, $stateParams, $location) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            //Page title
            $rootScope.pageTitle = $stateParams.pageTitle;

            //Previous/Current state
            $rootScope.previousState = from.name;
            $rootScope.previousStateURL = from.url;
            $rootScope.currentState = to.name;
            $rootScope.currentStateURL = to.url;

            //Set active class to main tabs
            $rootScope.isActive = function (route) {
                return route === $location.path();
            }

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
        }).state('Mail.Message', {
            templateUrl: 'app/components/message/message-view.html',
            controller: "MessageController",
            controllerAs: "message",
            params: {
                messageID: null,
                guid: null,
                type: null,
                fromFirstName: null,
                fromLastName: null,
                fromEmail: null,
                toFirstName: null,
                toLastName: null,
                toEmail: null,
                subject: null,
                message: null,
                date: null,
                tags: null,
            }
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