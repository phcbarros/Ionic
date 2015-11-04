angular.module('starter')
	.controller('CardsCtrl', CardsCtrl);

function CardsCtrl($scope){
	
	$scope.list = [
		{icon: 'ion-home', text: 'Endereço'},
		{icon: 'ion-ios-telephone', text: 'Telefone'},
		{icon: 'ion-wifi', text: 'Senha do Wifi'},
		{icon: 'ion-card', text: 'Informação do Cartão'}	
	];
	
}