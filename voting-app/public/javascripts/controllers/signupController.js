app.controller('signupController', ['$scope','$state','auth',function($scope, $state, auth){
    $scope.user = {};

    $scope.signup = function(){
        auth.register($scope.user).error(function(error){
            $scope.error = error;
        }).then(function(){
            $state.go('firstpage');
        });
    };

}])