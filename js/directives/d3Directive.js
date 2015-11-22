app.directive("d3chart", function($window) {
  return{
    restrict: "E",
    template: "<svg></svg>",
    scope: {
      height:   '@',
      width:    '@',
      chartData:  '=',
      youtubeid:'@'    
    },  
    link: function(scope, elem, attrs){
      
           var d3 = $window.d3;
           var rawSvg=elem.find('svg');
           var svg = d3.select(rawSvg[0]);
           var videolength=0;
        ////////////////////////
        ///*
   var getJSON = function(url, successHandler, errorHandler) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);
      xhr.onreadystatechange = function() {
        var status;
        var data;
        // https://xhr.spec.whatwg.org/#dom-xmlhttprequest-readystate
        if (xhr.readyState == 4) { // `DONE`
          status = xhr.status;
          if (status == 200) {
            data = JSON.parse(xhr.responseText);
            successHandler(data);
          } else {
            errorHandler(status);
          }
        }
      };
      xhr.send();
    };

    function convert_time(duration) {
        var a = duration.match(/\d+/g);
        if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
            a = [0, a[0], 0];
        }
        if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
            a = [a[0], 0, a[1]];
        }
        if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
            a = [a[0], 0, 0];
        }
        duration = 0;
        if (a.length == 3) {
            duration = duration + parseInt(a[0]) * 3600;
            duration = duration + parseInt(a[1]) * 60;
            duration = duration + parseInt(a[2]);
        }
        if (a.length == 2) {
            duration = duration + parseInt(a[0]) * 60;
            duration = duration + parseInt(a[1]);
        }
        if (a.length == 1) {
            duration = duration + parseInt(a[0]);
        }
        return duration;
    };
        
 
        //*/
        
        
                //videolength= 331;//scope.videoLength;
     
                //Width and height
                var w = scope.width;
                var h = scope.height;
                var padding = 20;

                 //Create the SVG Viewport
                 var svgContainer = svg.attr("width", w).attr("height", h);

                  
        
        var config = {"avatar_size" : 40}
     
 
        
 var backbar; 
       


        
        
scope.render = function(albumdata) {
    if (albumdata === undefined) {
                return ;
    }    
//Clear All
svg.selectAll("*").remove();  

    //Create the Scale we will use for the Axis
 var axisScale = d3.scale.linear()
                          .domain([0, videolength])
                          .range([padding, w - padding ]);
    
//Create the Axis
var xAxis = d3.svg.axis().scale(axisScale).ticks(videolength-2);
    
   backbar= svgContainer.append("rect")
  .attr("x",padding)
  .attr("y",h/2)
  .attr("width",0)
  .attr("height",6)
  .style("fill", "#F5F6CE"); 
   
    
 
//Create an SVG group Element for the Axis elements and call the xAxis function
var xAxisGroup = svgContainer.append("g").attr("class", "axis").attr("transform", "translate(0,"+h/2+")")                             .call(xAxis);
     
/////////////
      
var defs = svgContainer.append('svg:defs');
var pattern = defs.selectAll("pattern").data(albumdata).enter().append("svg:pattern")
    .attr("id", function (d,i) { return i;})
    .attr("width", config.avatar_size)
    .attr("height", config.avatar_size)
    .append("svg:image")
    .attr("xlink:href", function (d) { return d.pic;})
    .attr("width", config.avatar_size)
    .attr("height", config.avatar_size)
    .attr("x", 0)
    .attr("y", 0);
     
var circle=  svgContainer.selectAll("circle").data(albumdata).enter().append("circle")
.attr("cx", function (d) { return (d.starttime*(w - padding * 2)/videolength)+padding; })
.attr("cy", function (d,i) {
    var gap=0;
    if(i>0&&d.starttime===albumdata[i-1].starttime){
      
        gap= parseInt(d3.selectAll("circle")[0][i-1].attributes.cy.value);
    }
    if(gap===0) return h/2;
    else return gap+config.avatar_size;
})
.attr("r", config.avatar_size/2)
.on("click", function(d){
  console.log("circle JUMP");
  scope.$emit("fromd3",d.starttime) ;
})
.style("fill", function (d,i) { return "url(#"+i+")";});  
    
};

       
      scope.$on("changelength", function (event, data) { 
        //.transition().duration(3000).ease("linear")
           backbar.transition().ease("linear").duration(1000).attr("width",data*(w - padding*2)/(videolength-1)); 
          console.log("changin width");
      });   
       
/*        
scope.$watch('chartData', function(){
      scope.render(scope.chartData);
});
*/
scope.$watchCollection('chartData', function(newNames, oldNames) {
    getJSON('https://www.googleapis.com/youtube/v3/videos?id='+scope.youtubeid+'&key=AIzaSyCi-Ruza-tVs3tRqRayXwCIP-neGKBENDw&part=contentDetails', function(data) {
        videolength=convert_time(data.items[0].contentDetails.duration); 
        console.log("video length="+videolength); 
        
        scope.render(scope.chartData);
}, function(status) {
  alert('Something went wrong.');
});  
    
  
});
        
   
    }
  };
});