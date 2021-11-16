var url = "var url = "https://c.tenor.com/COljs_3NzNgAAAAC/420-421.gif";
d3.json(url, function(error, data) {

  if (!error) {
    d3.select("#banner")
      .style("background-image", "url('" + data[0].url + "')");
  }

});";
d3.json(url, function(error, data) {

  if (!error) {
    d3.select("#banner")
      .style("background-image", "url('" + data[0].url + "')");
  }

});