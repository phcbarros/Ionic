angular.module("starter")
	.controller("ToggleCtrl", ToggleCtrl);

function ToggleCtrl($scope){
	$scope.toggles = [
		{ content: "HTML", color: "toggle toggle-assertive", checked: true },
		{ content: "CSS3", color: "toggle toggle-calm", checked: true },
		{ content: "Flashplayer", color: "toggle toggle-balanced", checked: false },
		{ content: "Java Applets", color: "toggle toggle-energized", checked: false },
		{ content: "Javascript", color: "toggle toggle-dark", checked: true },
		{ content: "Silverlight", color: "toggle toggle-positive", checked: false }
	];
}