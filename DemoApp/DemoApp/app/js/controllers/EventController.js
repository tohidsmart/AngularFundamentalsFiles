'user strict';

eventsApp.controller('EventController', function ($scope) {
	$scope.boolValue=false
	$scope.snippet = "<span>hi there</span>"
	$scope.myStyle = { 'color': 'red' };
	$scope.event = {
		name: 'Angular boot Camp',
		date: '1/1/2016',
		time: '10:30 A.M',
		location: {
			address: 'Google headquarters',
			city: 'Mountain view',
			province: 'CA'
		},
		imageUrl: '/img/angularjs-logo.png',
		sessions: [
			{
				name: ' Angualar Directive',
				creatorName: 'Bob smith',
				duration: ' 1 hours',
				level: 'Advanced',
				abstract: 'In this session you will learn ins and outs of directives',
				upVoteCount:0
			},
			{
				name: 'Angular Scope for fun and profit',
				creatorName: 'John doe',
				duration: ' 30 min',
				level: 'Introductory',
				abstract: 'This will take a closer look at scopes',
				upVoteCount: 0
			},
			{
				name: 'Well behaved Controllers',
				creatorName: 'John doe',
				duration: ' 2 hours',
				level: 'Intermediate',
				abstract: 'Controller are the begining of every thing angualr does',
				upVoteCount: 0
			}
		]
	}

	$scope.upVoteSession = function (session) {
		session.upVoteCount += 1;
	}

	$scope.downVoteSession = function (session) {
		session.upVoteCount -= 1;
	}

})