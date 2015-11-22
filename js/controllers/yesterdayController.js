app.controller('yesterdayController', ['$scope','yFac', function($scope,yFac) {
  // Your code here
    $scope.submitted = false;
      
   

    
  $scope.showform=false;  
  //Function To Display Popup
  $scope.div_show=function(){
    $scope.showform=true;    
  }
  //Function to Hide Popup
  $scope.div_hide=function(){
    $scope.showform=false; 
    $scope.artist='';
    $scope.name='';
    $scope.starttime='';
    $scope.endtime='';
    $scope.link=''; 
    $scope.submitted = false;  
  }; 
    
$scope.addCover=function() {
    $scope.submitted = true;
  if($scope.artist==='' || $scope.name === ''|| $scope.starttime === ''
     || $scope.endtime === ''||!$scope.artist||!$scope.name||!$scope.starttime||!$scope.endtime) { 
    //alert("form not complete");  
    return; 
  }
  //post    
  $scope.covers.push({ artist: $scope.artist,
  name: $scope.name,
  starttime: $scope.starttime,
  endtime: $scope.endtime,
  link: $scope.link,
  pic: './images/siteuse/me.jpg'                     
  });
  //    
  $scope.div_hide();
} 


  $scope.play=false;
  $scope.controlpic=0;
  $scope.availpics=  [
    "../images/siteuse/play-circled.png", "../images/siteuse/pause-circled.png", "../images/siteuse/replay-circled.png" 
  ];    
  $scope.playpause=function(){
    if($scope.play) {
      console.log("PAUSE");
      $scope.$broadcast('pause');
     $scope.controlpic=0;    
     $scope.play=false;    
    } 
    else{
      console.log("PLAY");
      $scope.$broadcast('play');
      $scope.controlpic=1;    
     $scope.play=true;     
    }
  };    
    $scope.$on("videostate", function(event, data) {
    if(data==='playing'){
      $scope.controlpic=1;    
      $scope.play=true;    
    }
    else if(data==='paused'){
      $scope.controlpic=0;    
      $scope.play=false;     
    }
    else{
      $scope.controlpic=2;    
      $scope.play=false; 
    }       
  });   
    
  $scope.nowtime=0;    
  $scope.covers=yFac.covers;
  $scope.temparray=[];  
  $scope.jump = function(time) {
    console.log("JUMP");
    $scope.$broadcast('jump',time);
  }
  
  $scope.videolength=331;
  //videoduration
/*      
  $scope.$on("videoduration", function(event, data) {
    $scope.videolength=data;
  });
*/
    
  $scope.$on("fromd3", function(event, data) {
    $scope.$broadcast('jump',data);
  });    
     
  $scope.$on("timechange", function(event, data) {
    $scope.nowtime = Math.floor(data);
    ///
    $scope.$broadcast('changelength',$scope.nowtime);  
    ///  
    console.log("get time:"+$scope.nowtime);
      
    
    
    $scope.containsObject=function (obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    };

    $scope.temparray = $scope.temparray.filter(function(returnableObjects){
      return (returnableObjects.starttime <= $scope.nowtime)&&(returnableObjects.endtime >= $scope.nowtime);
     });       
    for(var i=0; i< $scope.covers.length; i++){
      if($scope.nowtime>=$scope.covers[i].starttime&&$scope.nowtime<=$scope.covers[i].endtime){
        if(!$scope.containsObject($scope.covers[i],$scope.temparray)){
          $scope.temparray.push($scope.covers[i]);
          console.log("PUSH");  
        }
      }   
    };
  
  });
    
}]);