d3.select("#chart1")
.on("mousemove", function() {
  d3.select("#tooltip")

      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px")
      .html("Bar Chart showing the makeup of different strains");


    tooltip.select("#title").html("Cannabis Strains");
    tooltip.select("#value").html("Differences between strains");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });

 