// var data = [];
// for (var i = 0; i < 100; i++) {
//   data.push(Math.random());
// }

console.log(data)
var tempData = data.response.songs

var container = d3.select(".container");

var margin = {top: 20, right: 30, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

container
  .selectAll("div")
    .data(tempData)
  .enter().append("div")
    .style({
      "width" : function(d) { return d.song_hotttnesss * 100 + "%";},
      "margin" : "10px",
      "height" : "25px",
      "font-family" : "Helvetica Nueue,Helvetica,Sans-Sarif",
      "background-color" : "green",
      "padding-top" : "10px"
      })
    .text(function(d) { return d.artist_name; });

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%")

container.append("g")
    .attr("class", "y axis")
    .call(yAxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Frequency");


