<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Document</title>
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css">
</head>
<body>
<section class="container">
  <div class="row white">
				<div class="block">

					<div class="col-xs-12 col-sm-6 col-md-3">
							<ul class="pricing p-green">
								<li>
									<img src="http://bread.pp.ua/n/settings_g.svg" alt="">
									<big>Start</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$199</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-3">
							<ul class="pricing p-yel">
								<li>
									<img src="http://bread.pp.ua/n/settings_y.svg" alt="">
									<big>Good</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$299</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-3">
							<ul class="pricing p-red">
								<li>
									<img src="http://bread.pp.ua/n/settings_r.svg" alt="">
									<big>Ultima</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$399</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>

					<div class="col-xs-12 col-sm-6 col-md-3">
							<ul class="pricing p-blue">
								<li>
									<img src="http://bread.pp.ua/n/settings_b.svg" alt="">
									<big>Vip</big>
								</li>
								<li>Responsive Design</li>
								<li>Color Customization</li>
								<li>HTML5 & CSS3</li>
								<li>Styled elements</li>
								<li>
									<h3>$799</h3>
									<span>per month</span>
								</li>
								<li>
									<button>Join Now</button>
								</li>
							</ul>
					</div>


				</div><!-- /block -->
			</div><!-- /row -->
  </section>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</body>
</html>


//Define some test data
var WeedData = [
  {id:1, type:"Sativa", rind:"mould", age:"4 weeks", color:"white", image:"brie.jpg"},
  {id:2, type:"Indigo", rind:"none", age:"1 year", color:"yellow", image:"cheddar.jpg"},
  {id:3, type:"Goud", rind:"wax", age:"6 months", color:"cream", image:"gouda.jpg"},
  {id:4, type:"Swiss", rind:"none", age:"9 months", color:"yellow", image:"swiss.jpg"},
]

//define Tabulator
var table = new Tabulator("#example-table", {
  height:"311px",
  layout:"fitColumns",
  resizableColumns:false,
  data:cheeseData,
  columns:[
      {title:"Cheese", field:"type", sorter:"string"},
  ],
  rowFormatter:function(row){
      var element = row.getElement(),
      data = row.getData(),
      width = element.offsetWidth,
      rowTable, cellContents;

      //clear current row data
      while(element.firstChild) element.removeChild(element.firstChild);

      //define a table layout structure and set width of row
      rowTable = document.createElement("table")
      rowTable.style.width = (width - 18) + "px";

      rowTabletr = document.createElement("tr");

      //add image on left of row
      cellContents = "<td><img src='/sample_data/row_formatter/" + data.image + "'></td>";

      //add row data on right hand side
      cellContents += "<td><div><strong>Type:</strong> " + data.type + "</div><div><strong>Age:</strong> " + data.age + "</div><div><strong>Rind:</strong> " + data.rind + "</div><div><strong>Colour:</strong> " + data.color + "</div></td>"

      rowTabletr.innerHTML = cellContents;

      rowTable.appendChild(rowTabletr);

      //append newly formatted contents to the row
      element.append(rowTable);
  },
});
