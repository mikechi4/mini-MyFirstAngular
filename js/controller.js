angular.module('friendsList')
	.controller('mainCtrl', function($scope){
		$scope.friends = ['Jared', 'Ryan', 'Andrew']; 
		$scope.addFriend = function(name){
			$scope.friends.push(name);
		}
	});