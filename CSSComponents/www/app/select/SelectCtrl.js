angular.module("starter")
	.controller("SelectCtrl", SelectCtrl);
	
function SelectCtrl($scope){
	$scope.lightsabers = [{name: "Red"}, {name: "Blue"}, {name:"Green"}];
	$scope.fighters = ["A wing", "ARC-170", "Delta 7"];
	$scope.droids = ["R2-D2", "B1", "2-1B", "IT-O"];
}