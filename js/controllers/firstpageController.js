app.controller('firstpageController', ['$scope','$window', function($scope,$window) {

  $scope.qq="pop";
   
    $scope.parallex=function() {
      var cloud= document.getElementById("cloud");
      var square= document.getElementById("square");
      var taipei= document.getElementById("wrapper101");    
      var stop=parseInt($window.getComputedStyle(square).getPropertyValue('top').replace("px", ""));
      var sleft=parseInt($window.getComputedStyle(square).getPropertyValue('left').replace("px", "")); 
      var ctop=parseInt($window.getComputedStyle(cloud).getPropertyValue('top').replace("px", ""));
      var cleft=parseInt($window.getComputedStyle(cloud).getPropertyValue('left').replace("px", ""));     
      var tbottom=parseInt($window.getComputedStyle(taipei).getPropertyValue('bottom').replace("px", ""));
      var tright=parseInt($window.getComputedStyle(taipei).getPropertyValue('right').replace("px", ""));      
        
      document.onmousemove = function (e) {
        square.style.top = String(stop+(e.clientY-$window.innerHeight/2)*0.1)+"px";
        square.style.left = String(sleft+(e.clientX-$window.innerWidth/2)*0.1)+"px";
        cloud.style.top = String(ctop-(e.clientY-$window.innerHeight/2)*0.07)+"px";
        cloud.style.left = String(cleft-(e.clientX-$window.innerWidth/2)*0.03)+"px"; 
          
        taipei.style.bottom = String(tbottom+(e.clientY-$window.innerHeight/2)*0.02)+"px";
        taipei.style.right = String(tright+(e.clientX-$window.innerWidth/2)*0.02)+"px";   
      };
    };
  
}]);