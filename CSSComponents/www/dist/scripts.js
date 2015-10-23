angular.module('starter')
	.controller('ButtonsCtrl', ['$scope', ButtonsCtrl]);

function ButtonsCtrl($scope){
	$scope.buttons = [
		{tipo: 'button-light'},
		{tipo: 'button-stable'},
		{tipo: 'button-positive'},
		{tipo: 'button-calm'},
		{tipo: 'button-balanced'},
		{tipo: 'button-energized'},
		{tipo: 'button-assertive'},
		{tipo: 'button-royal'},
		{tipo: 'button-dark'}
	];
}


angular.module('starter')
	.controller('FooterCtrl',FooterCtrl);
	
function FooterCtrl($scope){
	$scope.footer = 'I\'m a footer';
	$scope.header = 'I\m a header';
}


angular.module('starter')
	.controller('HeaderCtrl', HeaderCtrl);
	
function HeaderCtrl($scope){
}


angular.module('starter')
	.controller('SubHeaderCtrl', SubHeaderCtrl);
	
function SubHeaderCtrl($scope){
}

