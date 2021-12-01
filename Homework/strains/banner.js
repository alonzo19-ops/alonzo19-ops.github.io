var img = document.createElement("img"); 
 
img.src = "https://media.gettyimages.com/photos/cannabis-leaf-on-colored-background-picture-id1276624551?s=2048x2048"; 
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