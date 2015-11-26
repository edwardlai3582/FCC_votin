app.directive('addOption',function(){
     return function(scope, element, attrs){
          element.click(function(){
               element.parents().find('#optionsPart').append('<div class="col-sm-9 col-sm-offset-1"><input  class="form-control"  placeholder="Pepsi" ></div>');
           })
      }
})