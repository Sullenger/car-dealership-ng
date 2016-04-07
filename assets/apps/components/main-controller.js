app.controller('MainController', function($scope, $http) {
    $scope.carLot = [];

    $http.get('assets/packets/vehicles.json').success(function(data) {
        data.forEach(function(key) {
            var currency = key.price;
            key.price = Number(currency.replace(/[^0-9\.]+/g,""));
            this.push(key);
        }, $scope.carLot);
    });
});
