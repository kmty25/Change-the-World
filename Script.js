// JavaScript File
$(function() {
    $("#map").vectorMap({
        map: "continents_mill",
        series: {
            regions: [{
                values: {
                    'NA': '#66C2A5',
                    'SA': '#C8EEFF',
                    'AF': '#FC8D62',
                    'EU': '#6600cc',
                    'AS': '#E78AC3',
                    'OC': '#A6D854'
                },
                attribute: 'fill'
            }]
        },
        onRegionClick: function(event, code) {
            console.log(code);
            window.location.href = "charities.html#" + code 
        }
    });

});
