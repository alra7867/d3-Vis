<script type="text/javascript">

d3.csv("data/random.csv", function(error,data){

    data.forEach(function(d){
      d.x=parseFloat(d.x);
      d.y=parseFloat(d.y);

    });


    var margin={top:30, bottom:30, left:50,right:20};

    var width=600 - margin.left - margin.right;
    var height= 400- margin.top- margin.bottom;


    var xVal = d3.scaleLinear().range([0,width]);
    var yVal = d3.scaleLinear().range([height,0]);


    xVal.domain([1,1 +d3.max(data,function(d) {return d.x})]);
    yVal.domain([1,1 + d3.max(data,function(d) {return d.y})]);


    var svg= d3.select("#barchart")
               .append("svg")
               .attr("height",height+margin.top +margin.bottom)
               .attr("width",width+ margin.left+ margin.right)
               .append("g")
               .attr("transform","translate(" + margin.left + "," + margin.top + ")" );


</script>
