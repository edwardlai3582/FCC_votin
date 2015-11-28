app.controller('navController', ['$scope','authF',function($scope, authF){
    $scope.isLoggedIn = authF.isLoggedIn;
    $scope.currentUser = authF.currentUser;
    $scope.logOut = authF.logOut;
}])