﻿'use strict';

eventsApp.controller('EditEventController', function EditEventCOntroller($scope) {

	$scope.saveEvent = function (event,newEventForm) {
		if(newEventForm.$valid){

		}
	}
	$scope.cancelEdit=function(){
		window.location = "/EventDetails.html";
	}

});