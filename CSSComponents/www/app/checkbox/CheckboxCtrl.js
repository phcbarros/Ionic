angular.module("starter")
	.controller("CheckboxCtrl", CheckboxCtrl);
	
function CheckboxCtrl($scope){
	$scope.items = [
		{ name: "Flux Capacitor", classe: "checkbox-dark", checked: true},
		{ name: "1.21 Gigawatts", classe: "checkbox-positive", checked: true},
		{ name: "Delorean", classe: "checkbox-assertive", checked: false},
		{ name: "88 MPH", classe: "checkbox-calm", checked: true},
		{ name: "Plutonium resupply", classe: "checkbox-royal", checked: false}
	];
}