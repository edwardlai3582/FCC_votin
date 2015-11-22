app.controller('headerController', ['$scope','$window', function($scope,$window) {

 $scope.left=["0", "-650px"]; 
 $scope.neversleepleft=$scope.left[1];
 $scope.dillaleft=$scope.left[1];    
 $scope.myname="Edward Lai";
    
    
 $scope.neversleepshow=function(){
   console.log("qqqqq");     
   if($window.innerWidth>870){     
        $scope.neversleepleft=$scope.left[0];
      }   
 };
 
 $scope.neversleephide=function(){
   $scope.neversleepleft=$scope.left[1];  
 };
 
 $scope.dillashow=function(){
   if($window.innerWidth>700){     
        $scope.dillaleft=$scope.left[0];
      }   
 };
 
 $scope.dillahide=function(){
   $scope.dillaleft=$scope.left[1];  
 };


    /*    
    var div_menu = document.getElementById('headithard'); 
    window.onscroll = function (e) {  
        if (div_menu)
            div_menu.style.top = window.pageYOffset + 'px';
    } 
    */
 
}]);