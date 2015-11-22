app.directive("checkposition", function($window) {
  return {
        restrict: 'A',
        link: function(scope, element, attrs){
           scope.idd;
            scope.idu; 
           
            
          element.bind('mouseenter',function() {
            console.log('=======');
          ptop=   element[0].getBoundingClientRect().top;
          console.log('ptop='+ptop);
          pbottom=element[0].getBoundingClientRect().bottom;
          console.log('pbottom='+pbottom);
          wintop=80;
          winbottom=$window.innerHeight;  
              
            if(ptop<wintop&&pbottom>wintop&&pbottom<winbottom){
                yd=wintop-ptop-15;  
                console.log('yd='+yd); 
                //
                scope.idd = setInterval(function(){
                  if(yd<=0) clearInterval(scope.idd);
                  $window.scrollBy(0, -10);
                    console.log('scroll down');
                  yd-=10;
                },20);
              }
              
              if(ptop<winbottom&&pbottom>winbottom&&ptop>wintop){
                
                yu=pbottom-winbottom-15;  
                console.log('yu='+yu); 
                //  
                scope.idu = setInterval(function(){
                  if(yu<=0) clearInterval(scope.idu);
                  $window.scrollBy(0, 10);
                    console.log('scroll up ');
                  yu-=10;
                },20);
              }   
          });
          element.bind('mouseleave',function() {
            clearInterval(scope.idd);
            clearInterval(scope.idu);
          });    
        }
  };
});