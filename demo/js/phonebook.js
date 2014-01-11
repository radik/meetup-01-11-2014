// function PhonebookController($scope) {
// 	$scope.persons=['Batman', 'Robin', 'Joker'];
// 	$scope.newPerson = 'Undefined';

// 	$scope.addNewPerson = function(){
// 		$scope.persons.push($scope.newPerson);
// 	};
// }

var app = angular.module('phonebook', []);

app.controller('PhonebookController', function($scope, personService){
	$scope.persons = [];
	$scope.persons = personService.list();
	$scope.view = 'list';
});

app.directive('phoneCard', function(){
	return {
		restrict: 'E',
		scope:{
			person:'='
		},
		// template: '<div class="media">'+
  //         '<a class="pull-left" href="#">'+
  //           '<img class="media-object" style="width: 64px; height: 64px;" src="img/{{person.photo}}">'+
  //         '</a>'+
  //         '<div class="media-body">'+
  //           '<h4 class="media-heading">{{person.name}}<span class="label label-default">{{person.company}}</span></h4>'+
  //           '<p>{{person.phone}}</p>'+
  //         '</div>'+
  //       '</div>',
        templateUrl: 'partials/phonecard.html'
	};
});

app.factory('personService', function(){

	function list(){
		return [
		{
			"name":"Iron Man",
			"phone":"777-77-77",
			"company":"Stark Inc.",
			"photo":"iron-man.jpeg"
		},
		{
			"name":"Баба Яга",
			"phone":"123-00-00",
			"company":"Дремучий лес",
			"photo":"baba-yaga.jpg"
		},
		{
			"name":"Batman",
			"phone":"111-11-11",
			"company":"Wayne Inc.",
			"photo":"batman.jpg"
		},
		{
			"name":"Black Widow",
			"phone":"333-33-78",
			"company":"Avengers",
			"photo":"black-widow.jpg"
		},
		{
			"name":"Captain America",
			"phone":"555-55-55",
			"company":"Avengers",
			"photo":"captain-america.jpg"
		},
		{
			"name":"Darth Vader",
			"phone":"131-13-13",
			"company":"Dark Side Ltd.",
			"photo":"darth-vader.jpg"
		},
		{
			"name":"Hulk",
			"phone":"888-88-88",
			"company":"Avengers",
			"photo":"hulk.jpg"
		},
		{
			"name":"Joker",
			"phone":"000-00-00",
			"company":"Unemployed",
			"photo":"joker.png"
		},
		{
			"name":"Luke Skywalker",
			"phone":"999-99-99",
			"company":"The Force Ltd.",
			"photo":"luke-skywalker.jpg"
		},
		{
			"name":"Yoda",
			"phone":"900-90-90",
			"company":"The Force Ltd.",
			"photo":"yoda.jpg"
		}
	];
	}

	return {
		list: list
	};
});