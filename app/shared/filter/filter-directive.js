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
                filterItems: '=',
                filterKey: '=',
                filterValue: '=',
                filterText: '=',
            },
            link: function (scope, element, attrs) {

                //filter given key/value pair
                element.on('click', function () {

                    //setup filter config
                    scope.filterConfig = {
                        type: scope.vmFilter.filterType, //type of fitler (i.e. filter, orderBy)
                        items: scope.vmFilter.filterItems, //list of original messages (i.e. Inbox, Draft, Sent, etc.)
                        key: scope.vmFilter.filterKey,
                        value: scope.vmFilter.filterValue,
                        valueExclude: '!' + scope.vmFilter.filterValue,
                        text: scope.vmFilter.filterText,
                        predicate: null
                    }

                    //check if a key is set
                    if (scope.filterConfig.key) {
                        scope.filterConfig.predicate = {
                            [scope.filterConfig.key]: scope.filterConfig.value
                        }
                        scope.filterConfig.predicateExclude = {
                            [scope.filterConfig.key]: scope.filterConfig.valueExclude
                        }
                    } else {
                        scope.filterConfig.predicate = scope.filterConfig.value;
                        scope.filterConfig.predicateExclude = scope.filterConfig.valueExclude;
                    }

                    //list of filtered messages
                    scope.temporaryMessages = FilterService.filter.item(scope.filterConfig.type, scope.filterConfig.items, scope.filterConfig.predicate);

                    //list of filtered excluded messages
                    scope.temporaryExcludeMessages = FilterService.filter.item(scope.filterConfig.type, scope.filterConfig.items, scope.filterConfig.predicateExclude);


                    //console.log(scope.filterConfig.predicate)
                    //console.log(scope.filterConfig.keyValue)
                    //console.log(scope.temporaryExcludeMessages)
                    //console.log(scope.temporaryMessages)

                    scope.temporaryMessages = scope.temporaryMessages.concat(scope.temporaryExcludeMessages);

                    //console.log(scope.temporaryMessages)
                    //setup mail items
                    scope.mail = {
                        messages: scope.temporaryMessages,
                        selected: scope.filterConfig.text ? element.text() : null
                    }

                    //broadcast mail items
                    UtilitiesService.broadcast('mail', scope.mail);
                });

            }
        };
    }
]);