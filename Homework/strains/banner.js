var url = "https://th.bing.com/th/id/OIP.nA48noRrPUqUoVYKtGwl8gHaEL?w=309&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7";

d3.json(url, function(error, data) {

  if (!error) {
    d3.select("#banner")
      .style("background-image", "url('" + data[0].url + "')");
  }

});

var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([100, 0]);

d3.select(window)
  .on("scroll", function() {
    var y = bannerPosition(window.scrollY);
    d3.select("#banner")
      .style("background-position", "50% " + y + "%");
  }); 