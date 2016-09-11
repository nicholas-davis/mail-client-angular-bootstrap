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
            },
            link: function (scope, element, attrs, key) {

                //filter given key/value pair
                element.on('click', function () {

                    //Setup filter config
                    scope.filterConfig = {
                        type: scope.vmFilter.filterType,
                        items: scope.vmFilter.filterItems, //list of original messages (i.e. Inbox, Draft, Sent, etc.)
                        key: scope.vmFilter.filterKey,
                        value: scope.vmFilter.filterValue,
                        predicate: null
                    }

                    //Check if a key is set
                    if (scope.filterConfig.key) {
                        scope.filterConfig.predicate = {
                            [scope.filterConfig.key] : scope.filterConfig.value
                        }
                    } else {
                        scope.filterConfig.predicate = scope.filterConfig.value
                    }

                    //list of filtered messages
                    scope.temporaryMessages = FilterService.filter.item(scope.filterConfig.type, scope.filterConfig.items, scope.filterConfig.predicate);


                    //console.log(scope.filterConfig.predicate)
                    //console.log(scope.filterConfig.keyValue)
                    //console.log(scope.vmFilter.filterItems)
                    console.log(scope.temporaryMessages)



                    Array.prototype.move = function (from, to) {
                        this.splice(0, 0, this.splice(3, 1)[0]);
                        return this;
                    };

                    var arr = ['a', 'b', 'c', 'd', 'e'];
                    arr.splice(0, 0, arr.splice(3, 1)[0]);//["a", "d", "b", "c", "e"]


                    console.log(arr)

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