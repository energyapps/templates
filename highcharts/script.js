//updated 11/13/13

var items = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,50,50],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,103,102,78,87],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,119,295,364,416,390,407,600,750,1087],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,17,26,55,58,42,54,44,51,71],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,144,1259,971,338,334,494,411,450,455,433,621,758,1092],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,61,47,32,52,25,52,133,70,84,44,109,231,167,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,150,450,800,900,1350,1450,1950,2100,2000,1800,1550,1700,1100,1300],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,9,16,16,26,19,8,15,23,22,15,208,63,66,35,40],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,89,38,34,59,118,172,167,81,158,180,147,157,177,150,175,110,115],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,911,1654,1086,695,688,1047,1652,1889,1766,1361,874,693,786,599,678,584,817,1791,1152,2095],
[0,0,0,0,0,0,0,0,0,0,0,0,0,112,115,326,30,11,79,0,0,0,-2,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,76,36,44,56,79,85,33,33,37,36,30,42,77,257,337,31,127,91,39,46,30,20,28],
[0,16,16,0,0,8,0,1,1,0,17,101,182,0,2,0,0,0,127,6,1,0,0,3,0,1,1,0,0,60,53,58,182,137,111],
[19,87,67,298,573,1142,1708,931,1362,1031,849,672,954,676,478,579,370,510,535,395,685,984,1579,1539,1489,650,653,2236,1937,2138,2225,1864,2420,1953,2002],
[326,321,281,608,493,481,561,125,302,723,1108,1139,1529,603,1023,2289,1462,1680,1760,1849,2831,2851,2961,1519,2633,1140,1626,1478,1306,1607,2698,1788,3351,1766,2022],
];

var cars = ["Fiat 500E","Chevrolet Spark","Ford Fusion Energi","Honda Accord","Ford C-Max Energi","Toyota RAV4 EV","Tesla Model S*","Honda Fit EV","Ford Focus","Toyota Prius PHEV","BMW Active E","Mitsubishi I EV","Mercedes Benz Smart ED","Nissan Leaf","Chevrolet Volt"];

var date = ["Dec 2010","Jan 2011","Feb 2011","Mar 2011","Apr 2011","May 2011","Jun 2011","Jul 2011","Aug 2011","Sep 2011","Oct 2011","Nov 2011","Dec 2011","Jan 2012","Feb 2012","Mar 2012","Apr 2012","May 2012","Jun 2012","Jul 2012","Aug 2012","Sep 2012","Oct 2012","Nov 2012","Dec 2012","Jan 2013","Feb 2013","Mar 2013","Apr 2013","May 2013","Jun 2013","Jul 2013","Aug 2013","Sep 2012","Oct 2012"];
(function ($) {
$(document).ready(function() {
	
        $('#container').highcharts({
            chart: {
                type: 'column',
                zoomType: 'xy',
                borderRadius: 0,
	            backgroundColor: '#FFFFFF'
            },
            title: {	           
	            style: {
	            	color: '#333333',
					fontSize: '16px'
	            },
	          	text: 'Visualizing Electric Vehicle Sales',
	          	floating: true
	        },
            colors: [
			   '#C71877',
			   '#D8474F',
			   '#E97627',
			   '#FBA500',
			   '#DFBC00',
			   '#C3D400', 
			   '#A8EC00',
			   '#74B639',
			   '#408072',
			   '#26658F',
			   '#0D4AAC',
			   '#3B3D9E',
			   '#6A3191',
			   '#982484',
			   '#C71877'			   
			],
            legend: {
            	layout: 'vertical',
            	verticalAlign: 'top',
            	align: 'left',
            	floating: true,
            	x: 55,
            	y: 15,
            	backgroundColor: '#FFFFFF',
            	borderRadius: 1,
            	width: 170,
            	title: {
            		text:'Toggle models on/off',
            		style: {
            			fontStyle: 'italic'
            		}
            	}
            },
            xAxis: {
                categories: date,
                labels: {
                	rotation: -45,
                	y: 10,
                	align: "right"
                },
                tickInterval: 3
            },
            yAxis: {
                min: 0,
                max: 11000,
                title: {
                    text: 'Total Cars Sold'
                }                
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        'Total: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [

				{
					name: cars[0],
					data: items[0]
				},
				{
					name: cars[1],
					data: items[1]
				},
				{
					name: cars[2],
					data: items[2]
				},
				{
					name: cars[3],
					data: items[3]
				},
				{
					name: cars[4],
					data: items[4]
				},
				{
					name: cars[5],
					data: items[5]
				},
				{
					name: cars[6],
					data: items[6]
				},
				{
					name: cars[7],
					data: items[7]
				},
				{
					name: cars[8],
					data: items[8]
				},
				{
					name: cars[9],
					data: items[9]
				},
				{
					name: cars[10],
					data: items[10]
				},
				{
					name: cars[11],
					data: items[11]
				},
				{
					name: cars[12],
					data: items[12]
				},
				{
					name: cars[13],
					data: items[13]
				},
				{
					name: cars[14],
					data: items[14]
				}
            ]
        });
    });
}(jQuery));    
