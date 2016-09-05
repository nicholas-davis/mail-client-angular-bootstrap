//IndexFilter
mailModule.filter('index', [
    function () {
        return function (array, type) {
            return array.indexOf(type) > -1;
        };
    }
]);


