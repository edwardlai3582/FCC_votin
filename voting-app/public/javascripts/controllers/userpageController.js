app.controller('userpageController', ['$scope','authF','pollF',function($scope, authF, pollF){
    $scope.user = {};
    $scope.user.username=authF.currentUser();
    $scope.user.polls=pollF.polls; 
    
    $scope.newpoll={};
    $scope.newpoll.userId=authF.currentUserId();
    $scope.optionsTitle=[{optionTitle:"Coke"},{optionTitle:"Pepsi"}];
    $scope.newpoll.options=[];
    
    $scope.newpollLink="";
    
    $scope.addOption= function(){
        $scope.optionsTitle.push({optionTitle:"New option"});
        console.log("option length="+$scope.newpoll.options.length);
    }
    
    $scope.createPoll=function(){
        pollF.createPoll($scope.newpoll).success(function(data){
            $scope.newpollLink="http://localhost:3000/#/polls/"+data._id;
            $scope.user.polls.push(data);
            
            $scope.optionsTitle=$scope.optionsTitle.splice(0,2);
            $scope.newpoll={};
            $scope.newpoll.options=[];
            
            $("#myModal").modal();
            
        }).error(function(error){
            $scope.error = error;
        });
    }
    
    $scope.deletePoll=function(pid){
        console.log("pid= "+pid);
        pollF.deletePoll(pid).success(function(data){
            $scope.user.polls=$scope.user.polls.filter(function (el) {
                        return el._id !== pid;
                       });    
        }).error(function(error){
            $scope.error = error;
        });    
    }

    
}])