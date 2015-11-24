app.controller('loginController', ['$scope','$state','auth',function($scope, $state, auth){
    $scope.user = {};

    $scope.logIn = function(){
        auth.logIn($scope.user).error(function(error){
            $scope.error = error;
        }).then(function(){
            $state.go('firstpage');
        });
    };
    
}])