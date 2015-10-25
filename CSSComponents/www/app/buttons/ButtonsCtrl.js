angular.module('starter')
	.controller('ButtonsCtrl', ['$scope', ButtonsCtrl]);

function ButtonsCtrl($scope){
	$scope.buttons = [
		{tipo: 'button-small button-light'},
		{tipo: 'button-large button-block button-stable'},
		{tipo: 'button-positive'},
		{tipo: 'button-calm'},
		{tipo: 'button-balanced'},
		{tipo: 'button-block button-energized'},
		{tipo: 'button-clear button-assertive'},
		{tipo: 'button-outline button-royal'},
		{tipo: 'button-full button-dark'}
	];
	
	$scope.icons =[
		{tipo: 'icon-left ion-home'},
		{tipo: 'icon ion-gear-a'}
	];
}

