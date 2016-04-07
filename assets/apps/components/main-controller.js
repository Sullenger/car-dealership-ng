app.controller('MainController', function($scope, $http) {
    $scope.pageSize = 50;
    $scope.sYear = 1900;
    $scope.eYear = 2016;
    $scope.carLot = [];

    $http.get('assets/packets/vehicles.json').success(function(data) {
        data.forEach(function(key) {
            var currency = key.price;
            key.price = Number(currency.replace(/[^0-9\.]+/g, ""));
            this.push(key);
        }, $scope.carLot);
    });
});
