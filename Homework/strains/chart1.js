d3.select("#chart1")
selectall()
.data(goals)
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

  anychart.chart1(function()
  {

    var data= {
      header: ["strain", "Cannaboids"],
      rows: [
        ["Wonder Woman", 55],
        ["werewolf", 45]
      ]};
      
  var stackedBar = chart1(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        x: {
            stacked: true
        },
        y: {
          stacked: true 
        }
        }
      }
    });
