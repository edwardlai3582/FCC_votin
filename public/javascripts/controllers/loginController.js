app.controller('loginController', ['$scope','$state','authF',function($scope, $state, authF){
    $scope.user = {};

    $scope.logIn = function(){
        authF.logIn($scope.user).error(function(error){
            $scope.error = error;
        }).then(function(){
            $state.go('firstpage');
        });
    };
    
}])