var img = document.createElement("img"); 
 
img.src = "http://www.gettyimages.com/detail/https://www.bing.com/images/search?view=detailV2&ccid=nA48noRr&id=058658D268B43DD0B412802A1C7071D13757A2E3&thid=OIP.nA48noRrPUqUoVYKtGwl8gHaEL&mediaurl=https%3a%2f%2fwww.wikileaf.com%2fthestash%2fwp-content%2fuploads%2f2018%2f08%2fcannabinoids.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.9c0e3c9e846b3d4a94a1560ab46c25f2%3frik%3d46JXN9FxcBwqgA%26pid%3dImgRaw%26r%3d0&exph=769&expw=1365&q=cannabis+different+strains+drawings&simid=608055704428366510&FORM=IRPRST&ck=12F72B9CBFE7B17C221EABD2B8B150C9&selectedIndex=120"; 
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