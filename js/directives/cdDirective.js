app.directive('changeDirective', function () { 
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {    
      element.on('click', function () {
        scope.$emit('picchange', attrs.changeDirective);
      });
    }
  };  
});