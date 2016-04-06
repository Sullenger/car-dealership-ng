app.controller('MainController', function($scope, $http) {
    $scope.carLot = [];

    $http.get('assets/packets/vehicles.json').success(function(data) {
        data.forEach(function(key) {
            this.push(key);
        }, $scope.carLot);
    });
});
