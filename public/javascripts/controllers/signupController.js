app.controller('signupController', ['$scope','$state','authF',function($scope, $state, authF){
    $scope.user = {};

    $scope.signup = function(){
        authF.register($scope.user).error(function(error){
            $scope.error = error;
        }).then(function(){
            $state.go('firstpage');
        });
    };

}])