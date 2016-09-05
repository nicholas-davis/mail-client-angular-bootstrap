//filterDirective
mailModule.directive('filter', ['UtilitiesService', 'FilterService',
    function (UtilitiesService, FilterService) {
        return {
            restrict: 'A',
            scope: {},
            controller: 'filterController',
            controllerAs: 'vmFilter',
            bindToController: {
                filterType: '@',
                filterKeyValue: '=',
                filterItems: '=',
            },
            link: function (scope, element, attrs, key) {

                //filter given key/value pair
                element.on('click', function () {

                    //list of original messages (i.e. Inbox, Draft, Sent, etc.)
                    scope.messages = scope.vmFilter.filterItems;

                    //list of filtered messages
                    scope.temporaryMessages = FilterService.filter.item(scope.vmFilter.filterType, scope.messages, { $: "date" });

                    //Setup mail items
                    scope.mail = {
                        messages: scope.temporaryMessages
                    }

                    //broadcast mail items
                    UtilitiesService.broadcast('mail', scope.mail);

                });

            }
        };
    }
]);