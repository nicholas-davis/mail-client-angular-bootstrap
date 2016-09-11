//FilterService
mailModule.service('FilterService', ['$filter', function ($filter) {

    //filter
    this.filter = {
        activeFilters: {},
        item: function (type, array, expression, boolean) {
            return $filter(type)(array, expression, boolean);
        },
        push: function (index, array, list) {
            for (var index; index < list.length; index++) {
                array.push(list[index]);
            }
        }
    };
}]);