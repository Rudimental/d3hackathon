// var data = [];
// for (var i = 0; i < 100; i++) {
//   data.push(Math.random());
// }


var chicagoData = chicago.response.artists;

var chicago = d3.select(".chicago");

chicago
  .selectAll("div")
    .data(chicagoData)
  .enter().append("div")
    .style({
      "width" : function(d) { return d.hotttnesss * 100 + "%";},
      "margin" : "10px",
      "height" : "25px",
      "font-family" : "Helvetica Nueue,Helvetica,Sans-Sarif",
      "background-color" : "green",
      "padding-top" : "10px"
      })
    .text(function(d) { return d.name; });



var austinData = austin.response.artists;

var austin = d3.select(".austin");

austin
  .selectAll("div")
    .data(austinData)
  .append("div")
    .style({
      "width" : function(d) { return d.hotttnesss * 100 + "%";},
      "margin" : "10px",
      "height" : "25px",
      "font-family" : "Helvetica Nueue,Helvetica,Sans-Sarif",
      "background-color" : "blue",
      "padding-top" : "10px"
      })
    .text(function(d) { return d.name; });


//---------------
var san_franciscoData = sanfrancisco.response.artists;

var san_francisco = d3.select(".san_francisco");

san_francisco
  .selectAll("div")
    .data(san_franciscoData)
  .append("div")
    .style({
      "width" : function(d) { return d.hotttnesss * 100 + "%";},
      "margin" : "10px",
      "height" : "25px",
      "font-family" : "Helvetica Nueue,Helvetica,Sans-Sarif",
      "background-color" : "blue",
      "padding-top" : "10px"
      })
    .text(function(d) { return d.name; });

//---------------
var new_yorkData = newyork.response.artists;

var new_york = d3.select(".new_york");

new_york
  .selectAll("div")
    .data(new_yorkData)
  .append("div")
    .style({
      "width" : function(d) { return d.hotttnesss * 100 + "%";},
      "margin" : "10px",
      "height" : "25px",
      "font-family" : "Helvetica Nueue,Helvetica,Sans-Sarif",
      "background-color" : "blue",
      "padding-top" : "10px"
      })
    .text(function(d) { return d.name; });

