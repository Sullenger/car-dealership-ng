var app = angular.module('carDealership', ['ui.bootstrap'])

.filter('startFrom', function(){
    return function(data, start){
        return data.slice(start);
    }
})