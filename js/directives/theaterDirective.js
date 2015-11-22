app.directive('theater', function ($window) {
  return {
      restrict: 'E',
      template:'<div class="pdfdiv" id="pdfmodal">'+
                 '<div class="pdfwrapper">'+ 
                   '<img src="./images/siteuse/cancel-circle.png" ng-click="closetheater()">'+
                   '<object data="{{pdfsrc}}" type="application/pdf" width="800px" height="1110px"></object>'+
                  '</div>'+
                '</div>',
      scope: {
        pdfsrc:   '@',
      }, 
      link: function (scope, elm, attrs) {
          scope.closeModal = null;
          
          scope.$on("openT",function (event, data) {
              console.log("get openT");
              console.log("pdfsrc="+scope.pdfsrc);
              scope.closeModal = scope.modal(); 
              console.log("theater opened");
          });
          
          scope.closetheater=function(){
            if (scope.closeModal) {
              scope.closeModal();
              scope.closeModal = null;
            }
          }; 
          
          
          scope.modal=function(){
              var $backdrop, $modal, $page, $body, close;
              var open=function() {

              $modal = angular.element(elm[0].querySelector('#pdfmodal'));
              //document.getElementById("pdfmodal");//$(DEFAULT.modal);
              oldmodalclassname=$modal.className;

              $page = angular.element(document.getElementById("aboutmewrap"));//$(DEFAULT.page);
              $backdrop  = document.createElement('div');
              $backdrop.style.cssText = 'position:fixed;width:100%;height:100%;top:0px;left:0px;z-index:100;background:rgba(0, 0, 0, 0.7);';
              $backdrop.onmousedown =  scope.closetheater;    
              document.body.appendChild($backdrop);

              ///////set back fixed  
              var scrollTop = $window.scrollTop; 
     
              $page.css('position', 'fixed');
              $page.css('top' ,  -scrollTop+'px');
              $page.css('height', '100%');  
              //$modal.className = 'theater';
              $modal.removeClass(oldmodalclassname);
              $modal.addClass('theater');


              close = function () {
                  $backdrop.remove();
                  $page.css('overflowY', '');
                  $page.css('position', '');
                  $page.css('top ', '');

                  $modal.addClass(oldmodalclassname);
                  $modal.removeClass('theater');
                  $window.scrollTop=  scrollTop; 
              };



              };
              open();    
              return close;
       };
     }
  };
});


