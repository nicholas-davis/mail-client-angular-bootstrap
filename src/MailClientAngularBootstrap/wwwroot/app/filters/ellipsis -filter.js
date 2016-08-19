//EllipsisFilter
mailModule.filter('ellipsis', [
    function () {
        return function (text, length) {
            return text.substring(0, length).replace(/\W*\s(\S)*$/, '...');
        };
    }
]);


