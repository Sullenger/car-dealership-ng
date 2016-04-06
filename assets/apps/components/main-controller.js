app.controller('MainController', function($scope, $http) {
    $scope.carLot = [];

    $http.get('assets/packets/vehicles.json').success(function(data) {
        
        data.forEach(function(key) {
            // debugger;
            this.push(key);
        }, $scope.carLot);

    });

});

// beautyApp.controller('ubeautycntrl',function($scope,$http){

//     $http.get('http://localhost/Find-Beauty/media/services.json').success(function(data) {
//         $scope.services=data.services;
//         $scope.services1=data.services1;
//     });

//     $scope.Add = function(){

//         $http.get('http://localhost/Find-Beauty/media/services_show.json').success(function(data) {
//             console.log(angular.toJson(data.services));
//             $scope.services.push(data.services);

//         });

//     };

//     $scope.ViewMore = function(){

// });