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