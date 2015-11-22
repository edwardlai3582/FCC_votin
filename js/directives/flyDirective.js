app.directive("flyaway", function($window) {
  return {
        restrict: 'A',
        link: function(scope, element, attrs){
            
          var lastposition=0;  
          
          angular.element($window).bind("scroll", function(){
            var wScroll = $window.pageYOffset;
            var title=element[0];//document.getElementById("ptp");
            var fontsize=parseInt($window.getComputedStyle(title).getPropertyValue('font-size').replace("px", ""));
            //console.log(lastposition);
            if(wScroll <201){    
              if(wScroll > lastposition){
                title.style.transform = "translate(0px, "+ wScroll  +"%)";
                if(fontsize>10)title.style.fontSize = (fontsize-3)+"px";    
              }
              else if(wScroll < lastposition){
                title.style.transform = "translate(0px, "+ wScroll  +"%)";
                if(fontsize<50)title.style.fontSize = (fontsize+3)+"px";  
              }
              if(wScroll===0){
                title.style.fontSize = "50px";
              }    
            }
            lastposition = wScroll;   
          });
 
        }
  };
});


/*
var lastposition=0;
window.addEventListener('scroll', function() {

  var wScroll = window.pageYOffset;
  var title=document.getElementById("ptp");
  var fontsize=parseInt(getComputedStyle(title).getPropertyValue('font-size').replace("px", ""));
  console.log(wScroll);
    if(wScroll <201){    
      if(wScroll > lastposition){
        title.style.transform = "translate(0px, "+ wScroll  +"%)";
        if(fontsize>10)title.style.fontSize = (fontsize-3)+"px";    
      }
      else if(wScroll < lastposition){
        title.style.transform = "translate(0px, "+ wScroll  +"%)";
        if(fontsize<50)title.style.fontSize = (fontsize+3)+"px";  
      }
      if(wScroll===0){
        title.style.fontSize = "50px";
      }    
    }
  lastposition = wScroll;   
});
*/