d3.select("#chart2")
  .on("mousemove", function() {

    var tooltip = d3.select("#tooltip")
      .style("display", "block")
      .style("top", d3.event.pageY + 20 + "px")
      .style("left", d3.event.pageX + 20 + "px");

    tooltip.select("#title").html("3 Strains Graphs");
    tooltip.select("#value").html("graph displaying Percentage of Indica and Sativa");

  })
  .on("mouseout", function() {
    d3.select("#tooltip")
      .style("display", "none");
  });

