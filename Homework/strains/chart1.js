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

  var bar_ctx = document.getElementById('chart1').getContext('2d');

  var purple_pink_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
  purple_pink_gradient.addColorStop(0, 'pink');
  purple_pink_gradient.addColorStop(1, 'purple');

  var chart1 = new Chart (bar_ctx, {
    type: 'bar',
    data: {
        labels: ["Wonder Woman", "Werewolf","Platinum"],
        datasets: [{
            label: '# of Cannabinoids',
            data: [55, 45, 30],
            backgroundColor: purple_pink_gradient,
            hoverBackgroundColor: purple_pink_gradient,
            hoverBorderWidth: 2
        }]
    },
  options: {
    scales : {
        yAxes: [{
          categorySpacing: 0,
          barthickness: 20
        }],
        xAxes: [{
          ticks: {
             beginAtZero:true
          }
        }]
    }
  }
});
    
