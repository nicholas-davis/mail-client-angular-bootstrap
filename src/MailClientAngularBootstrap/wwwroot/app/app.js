//Mail Client App
var mailClientApp = angular.module('mailClientApp', [
  'mailClientApp.mail',
  'mailClientApp.inbox',
  'mailClientApp.draft',
  'mailClientApp.sent',
  'mailClientApp.archive',
  'mailClientApp.trash',
  'angularMoment',
  'ui.bootstrap',
  'ui.router'
]);

mailClientApp.run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
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
            url: null, //without :messageID === pretty URL
            templateUrl: 'app/components/message/message-view.html',
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
            },
            controller: function ($scope, $stateParams, $filter) {
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
                    "message": $stateParams.message,
                    "date": $stateParams.date,
                    "tags": $stateParams.tags
                }
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