var img = document.createElement("img"); 
 
img.src = "https://th.bing.com/th/id/OIP.2wFmiEDkw75OicYAYLi6IgHaFP?w=291&h=206&c=7&r=0&o=5&dpr=2.2&pid=1.7"; 
var src = document.getElementById("x"); 
 

var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([100, 0]);

d3.select(window)
  .on("scroll", function() {
    var y = bannerPosition(window.scrollY);
    d3.select("#banner")
      .style("background-position", "50% " + y + "%");
  }); 