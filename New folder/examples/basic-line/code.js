$.getJSON('http://localhost/blog/data1.json', function (data) {
    var arr2 = [];
    for (var i = 0; i < data.length; i++) {
        var k = 0;
            var data1 = []
            data1.push(data[i][k]);
            k = k + 2; 
            data1.push(data[i][k]);
            arr2.push(data1);
    }

    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 10
        },

        title: {
            text: 'TEMPERATURE READINGS'
        },

        series: [{
            name: 'Temperature',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });

     Highcharts.stockChart('container1', {
        rangeSelector: {
            selected: 10
        },

        title: {
            text: 'HUMIDITY READINGS'
        },

        series: [{
            name: 'Humidity',
            data: arr2,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});
