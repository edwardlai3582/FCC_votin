app.controller('projectsController', ['$scope','$window','pFac', function($scope,$window,pFac) {

  $scope.clickup = function(){
        var y = $window.pageYOffset;
        var id = setInterval(function(){
            if(y<=0) clearInterval(id);
            $window.scrollBy(0, -10);
            y-=10;
        },10);  
  };
  
  $scope.projectList=pFac.projectList;
   

     
}]);


/*
     {
        title:'',
        tech:'',
        desc:[
                {d:""},
             ],
        imgs:[
                {image: './pics/projects/image01.png', description: 'Image 01'},
             ]  
      },

*/