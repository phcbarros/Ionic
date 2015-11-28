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
angular.module('starter')
	.controller('FooterCtrl',FooterCtrl);
	
function FooterCtrl($scope){
	$scope.footer = 'I\'m a footer';
	$scope.header = 'I\m a header';
}


angular.module("starter")
	.controller("FormsCtrl", FormsCtrl);

function FormsCtrl() {}
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
angular.module("starter")
	.controller("RangeCtrl", RangeCtrl);
	
function RangeCtrl($scope){}
angular.module("starter")
	.controller("SelectCtrl", SelectCtrl);
	
function SelectCtrl($scope){
	$scope.lightsabers = [{name: "Red"}, {name: "Blue"}, {name:"Green"}];
	$scope.fighters = ["A wing", "ARC-170", "Delta 7"];
	$scope.droids = ["R2-D2", "B1", "2-1B", "IT-O"];
}
angular.module('starter')
	.controller('SubHeaderCtrl', SubHeaderCtrl);
	
function SubHeaderCtrl($scope){
}


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