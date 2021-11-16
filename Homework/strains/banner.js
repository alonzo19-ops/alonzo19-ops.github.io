function add_img() {
        var img = document.createElement('img')
image.src = "http://www.gettyimages.com/detail/1276624551";
document.getElementById('body').appendChild(img);
}

var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight])
  .range([100, 0]);

d3.select(window)
  .on("scroll", function() {
    var y = bannerPosition(window.scrollY);
    d3.select("#banner")
      .style("background-position", "50% " + y + "%");
  }); 