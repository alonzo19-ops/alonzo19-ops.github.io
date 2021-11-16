d3.select("#chart2")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("5 Strains Graphs");
    tooltip.select("#value").html("graph displaying levels of thc/cbd");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });
  var img = document.createElement("img"); 
 
img.src = "https://d3atagt0rnqk7k.cloudfront.net/wp-content/uploads/2018/02/28122155/Lab-B.png"; 
var src = document.getElementById("x"); 
 
src.appendChild(img); 
