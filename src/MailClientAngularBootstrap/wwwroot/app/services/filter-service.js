//FilterService
mailModule.service('FilterService', ['$filter', function ($filter) {

    //filter
    this.filter = {
        item: function (type, array, expression) {
            return $filter(type)(array, expression);
        },
        push: function (index, array, list) {
            for (var index; index < list.length; index++) {
                array.push(list[index]);
            }
        }
    };
}]);