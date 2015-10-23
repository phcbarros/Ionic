angular.module('starter')
	.controller('FooterCtrl',FooterCtrl);
	
function FooterCtrl($scope){
	$scope.footer = 'I\'m a footer';
	$scope.header = 'I\m a header';
}

