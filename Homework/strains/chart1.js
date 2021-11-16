d3.select("#chart1")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("Cannabis Strains");
    tooltip.select("#value").html("Differences between strains");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });
  var img = document.createElement("img"); 
 
img.src = "https://th.bing.com/th/id/OIP.jsWb9dvwGKxheIiTTyGZQAHaEH?w=315&h=180&c=7&r=0&o=5&dpr=2.2&pid=1.7"; 
var src = document.getElementById("x"); 
 
src.appendChild(img); 
