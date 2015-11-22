app.directive('youtube', function($window) {
  return {
    restrict: "E",

    scope: {
      height:   '@',
      width:    '@',
      videoid:  '@'
    },

    template: '<div></div>',

    link: function(scope, element) {
            var onYouTubeIframeAPIReady = function() {
        player = new YT.Player(element.children()[0], {
          height: scope.height,
          width: scope.width,
          videoId: scope.videoid,//'b8LVofHWGUU',    
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }    
        });
      };
      var player;    
  if (typeof YT === "undefined") {       
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      console.log('first');
      $window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player(element.children()[0], {
          height: scope.height,
          width: scope.width,
          videoId: scope.videoid,//'b8LVofHWGUU',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }    
        });
      };
      
} else {
  onYouTubeIframeAPIReady();
    console.log('2nd');
}      



        
      function onPlayerReady(event) {
        //event.target.playVideo();
        scope.$emit("videoduration",player.getDuration()) ;
        console.log('yt ready');  
      } ;
        
      function onPlayerStateChange(event) {
        //
        var t;
        var timer_is_on = 0;

        function timedCount() {
            scope.$apply(function() {    
                scope.$emit("timechange",player.getCurrentTime());                 
                console.log("send CurrentTime: "+player.getCurrentTime()); 
            }); 
            t = setTimeout(function(){ timedCount() }, 1000);
        }

        function startCount() {
            if (!timer_is_on) {
                timer_is_on = 1;
                timedCount();
            }
        }

        function stopCount() {
            clearTimeout(t);
            timer_is_on = 0;
        }  
        //  
        if (event.data == YT.PlayerState.PLAYING ) {
            /*
            setInterval(function(){
              scope.$apply(function() {    
                scope.$emit("timechange",player.getCurrentTime()) ;    
              });    
            },1000);
            */
            scope.$emit("videostate", "playing");
            startCount();
        }
        if (event.data == YT.PlayerState.PAUSED ) {
            stopCount();
            scope.$apply(function() {    
                scope.$emit("timechange",player.getCurrentTime());
                scope.$emit("videostate", "paused");
                console.log('pause at:'+player.getCurrentTime());
            }); 
        }
        if (event.data == YT.PlayerState.ENDED ) {
            stopCount();
            scope.$emit("videostate", "ended");
        }
        if (event.data == YT.PlayerState.UNSTARTED ) {
            scope.$emit("timechange",player.getCurrentTime());
            console.log("state: UNSTARTED");
        }
        if (event.data == YT.PlayerState.BUFFERING ) {
            
            console.log("state: BUFFERING");
        }
         
          
      };    
         
      scope.$on("jump", function (event, data) { 
        player.seekTo(parseInt(data));
      });
 
      scope.$on("play", function (event, data) { 
        player.playVideo();
      });  
      scope.$on("pause", function (event, data) { 
        player.pauseVideo();
      });          
    },  
  }
});