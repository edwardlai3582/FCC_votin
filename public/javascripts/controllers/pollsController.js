app.controller('pollsController', ['$scope','authF','pollF','pollSingle',function($scope, authF, pollF,pollSingle){
    $scope.poll= pollSingle[0];
    
    $scope.formdata={voteId:null, other:null};
    
    $scope.isLoggedIn= authF.isLoggedIn;
    
    $scope.notYetVoted= function(){
        for(var i=0; i<$scope.poll.userVoted.length; i++){
            if($scope.poll.userVoted[i]===authF.currentUserId()){
                return false;
            }
        }
        return true;
    }

    
    
    $scope.vote= function(){
        console.log("dfgdfg");
        
        if($scope.formdata.voteId===null){
            console.log("please select an option");
            $scope.error={message:"please select an option"};
            return;
        }
        
        if($scope.formdata.voteId===""){
            if($scope.formdata.other===null){
                console.log("please input your option");
                $scope.error={message:"please input your option"};
                return;
            }
            $scope.formdata.voteId=$scope.formdata.other;    
        }
        
        pollF.vote($scope.poll._id, $scope.formdata.voteId).success(function(data){
            for(var i=0; i< $scope.poll.options.length; i++){
                if($scope.poll.options[i]._id=== $scope.formdata.voteId){
                    $scope.poll.options[i].votes++;
                    break;
                }     
            }
            if(i===$scope.poll.options.length){
                $scope.poll.options.push( {optionTitle : $scope.formdata.voteId, votes:  1});    
            }
            $scope.poll.userVoted.push(authF.currentUserId());
            
            //$scope.notYetVoted();
            $scope.error=false;
        }).error(function(error){
            console.log("damn");
            $scope.error = error;
        });    
    }

    
}])