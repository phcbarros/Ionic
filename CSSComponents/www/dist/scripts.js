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
	.controller('ListCtrl', ListCtrl);

function ListCtrl($scope){
	
	var _items =[],	i = 0,	l = 5;
	
	for(;l--; i++){
		_items.push({description: 'Item ' + (i + 1)});
	}
	
	$scope.items = _items;
	$scope.imagens =  [
		{ src: 'dist/img/img1.jpg', nome: 'Leões', descricao: 'Casal de leões'},
		{ src: 'dist/img/img2.jpg', nome: 'Japão', descricao: 'Cartão postal do Japão'},
		{ src: 'dist/img/img3.jpg', nome: 'Natureza', descricao: 'Natureza'}
	];
	
	
}
angular.module('starter')
	.controller('SubHeaderCtrl', SubHeaderCtrl);
	
function SubHeaderCtrl($scope){
}

