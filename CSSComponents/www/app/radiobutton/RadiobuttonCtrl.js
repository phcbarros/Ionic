angular.module("starter")
	.controller("RadioButtonCtrl", RadioButtonCtrl);
	
function RadioButtonCtrl($scope){
	$scope.items = [
		{name: "Go", checked: false},
		{name: "Python", checked: false},
		{name: "Ruby", checked: false},
		{name: ".Net", checked: false},
		{name: "Java", checked: true},
		{name: "PHP", checked: false}
	];
}