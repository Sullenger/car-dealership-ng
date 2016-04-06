
var requestor = function() {
    var url = "assets/packets/vehicles.json";
    $.get(url).success(function(res) {
        drawCollection(res)
    })
}

function drawCollection(collection) {

    for (var i = 0; i < collection.length; i++) {
        $('.cars').append('<div class="panel car panel-success"><div class="panel-heading"><h3 class="panel-title cars-title' + [i] + '"></h3></div><div class="panel-body cars-body' + [i] + '"></div></ div>');

        $('.cars-title' + [i] + '').append
            ('<h4>' + collection[i].year + ' ' + collection[i].make + ' - ' + collection[i].model + ' ' + collection[i].price + '</h4>');
        $('.cars-body' + [i] + '').append
            ('<p>' + 'Description: ' + collection[i].description + '<br/>' + 'Color: ' + collection[i].color + '<br/>' + 'Odometer: ' + collection[i].miles + '<br/>' + 'Vehicle VIN: ' + collection[i]._id + '<br/>' + 'Fuel Economy: ' + collection[i].highwayMileage.high + '-' + collection[i].highwayMileage.low + 'mpg' + '</p>');
    }
}

requestor();


$(document).ready(function() {
    // $('#btnSort').click(function(e) {
    //     $("#ddlList").html($('#ddlList option').sort(function(x, y) {
    //         return $(x).text() < $(y).text() ? -1 : 1;
    //     }))
    //     $("#ddlList").get(0).selectedIndex = 0;
    //     e.preventDefault();
    // });

    $('#priceSort').click(function(e) {
        $('.cars-title').html($('collection[i].year').sort(function(x, y) {
            debugger;
            return $(x).val() < $(y).val() ? -1 : 1;
        }))
        $("#lotList").get(0).selectedIndex = 0;
        e.preventDefault();
    });
});