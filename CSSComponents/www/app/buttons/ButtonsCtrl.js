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

