// var data = [];
// for (var i = 0; i < 100; i++) {
//   data.push(Math.random());
// }


var tempData = chicago.response.songs;

var container = d3.select(".container");

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



