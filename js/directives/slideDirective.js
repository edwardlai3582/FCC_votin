app.directive('slide', function () {
  return {
      restrict: 'E',
      template:'<div class="slidewrapper">'+
                '<img src="./images/siteuse/right.png" class="prevB" id="prev" ng-click="onClickPrev()">'+ 
                '<div class="swindow">'+
                 '<div class="party" id="partA">'+
                   '<div class="imgwrapper" ng-repeat="pic in source">'+
                     '<img src="{{pic.image}}">'+  
                   '</div>'+  
                 '</div>'+
                 '<div class="party" id="partB">'+     
                   '<div class="imgwrapper" ng-repeat="pic in source">'+
                     '<img src="{{pic.image}}">'+  
                   '</div>'+    
                 '</div>'+
               '</div>'+
               '<img src="./images/siteuse/left.png" class="nextB" id="next" ng-click="onClickNext()">'+
               '</div>',
      scope: {
        source:   '=',
      }, 
  
            
      link: function (scope, elm, attrs) {
        scope.uA = angular.element(elm[0].querySelector('#partA'));
        scope.uB = angular.element(elm[0].querySelector('#partB'));
        scope.nextB=angular.element(elm[0].querySelector('#next'));
        scope.prevB=angular.element(elm[0].querySelector('#prev'));

        scope.currentImage=0;  
        scope.currentU=1;  
          
        scope.imageNumber = scope.source.length;
	    scope.imageWidth = 250;
        scope.uWidth=parseInt(scope.imageNumber * scope.imageWidth);
        scope.uA.css('width', scope.uWidth+"px");
        scope.uB.css('width', scope.uWidth+"px");
        scope.uA.css('left', "0px");  
        scope.uB.css('left', parseInt(-1*scope.uWidth)+"px"); 
        /////  
        scope.Aleft= 0;
        scope.Bleft= parseInt(-1*scope.uWidth);
        if(scope.imageNumber<=1){
          scope.nextB.css('display', 'none');
          scope.prevB.css('display', 'none');
        }  
////////////////////////////////////////////////
    scope.slideTo=function(imageToGo){
        var direction;
        var duration=500;
        var start = new Date;
    
        if(scope.currentImage==0){
          if(imageToGo==scope.imageNumber-1){direction = 1;}
          else{direction = -1;}      
        }
        else if(scope.currentImage==scope.imageNumber-1){
          if(imageToGo==0){direction = -1;}
          else{direction = 1;}  
        }
        else{
          direction = scope.currentImage > imageToGo ? 1 : -1;
        }

        //*****************************************
          if(scope.currentU==1){
          if(scope.currentImage==0 && direction==1){ 
              scope.uB.css('left',   parseInt(-1 * scope.uWidth)+"px");  
              scope.Bleft= -1 * scope.uWidth;
              scope.currentU=2;
          }
          else if(scope.currentImage==scope.imageNumber-1 && direction==-1){
              scope.uB.css('left',   parseInt(scope.imageWidth)+"px");  
              scope.Bleft= scope.imageWidth;
              scope.currentU=2;
          }   
        }
     //current is B
        else if(scope.currentU==2){
          if(scope.currentImage==0 && direction==1){ 
              scope.uA.css('left',   parseInt(-1 * scope.uWidth)+"px"); 
              scope.Aleft= -1 * scope.uWidth;
              scope.currentU=1;
          }
          else if(scope.currentImage==scope.imageNumber-1 && direction==-1){
              scope.uA.css('left',   parseInt(scope.imageWidth)+"px"); 
              scope.Aleft= scope.imageWidth;
              scope.currentU=1;
          }   
        }   
    
    //**********************************************
        var id = setInterval(function(){
            var timePassed = new Date - start;
            var progress = timePassed / duration;
            if (progress > 1){
                progress = 1;
            }

            scope.uA.css('left',   parseInt(scope.Aleft + direction * progress * scope.imageWidth )+"px"); 
            scope.uB.css('left',   parseInt(scope.Bleft + direction * progress * scope.imageWidth )+"px"); 

            if (progress == 1){
                clearInterval(id);
                scope.prevB.on( "click",scope.onClickPrev);
                scope.nextB.on( "click",scope.onClickNext);

                scope.currentImage = imageToGo;
                scope.Aleft= scope.Aleft + direction * scope.imageWidth;
                scope.Bleft= scope.Bleft + direction * scope.imageWidth;
            }
        }, 16);
    }

    scope.onClickNext=function(){
        console.log("CLICK prev");
        scope.prevB.off( "click");
        scope.nextB.off( "click");
        if(scope.currentImage == 0){
          scope.slideTo(scope.imageNumber-1);
        }
        else{
         scope.slideTo(scope.currentImage-1);    
        }	
    }

    scope.onClickPrev=function(){
        console.log("CLICK next");
        scope.prevB.off( "click");
        scope.nextB.off( "click");

        scope.slideTo((scope.currentImage+1)%scope.imageNumber);  
    }
          
////////////////////////////////////////////////          
    }
    };
});
      