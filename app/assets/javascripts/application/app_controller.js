var app = angular.module('app', ['ngMap']);

app.controller('AppCtrl', function($scope, $http, $location, NgMap ) {
	var ctl = this;
	// current hash in ur
	ctl.location_hash = $location.hash();

	console.log("HASH: ", ctl.location_hash);

	ctl.apply = function(my_timeout) { 
		my_timeout = my_timeout || 50; 
		setTimeout(function () { 
			$scope.$apply(); 
		}, my_timeout); 
	};

	// MODULI
	app.azioni_forms(ctl, $scope);
	app.azioni_users(ctl, $scope, $http);
	app.azioni_routes(ctl, $scope, $http);
	app.azioni_stages(ctl, $scope, $http);
	app.azioni_mappa(ctl, $scope, NgMap);
	//app.azioni_mappa(ctl,ngMap,NavigatorGeolocation);
	// function to set the enviroment to show
	ctl.changeCurrentElement = function(new_elem) {
		if (!new_elem) return ;
		ctl.current_elem = new_elem;
		console.log("current_elem: ", new_elem);
		ctl.apply();
	};
	app.changeCurrentElement = ctl.changeCurrentElement;

	// function to control hash changes
	ctl.locationHashChanged = function() {
		if (ctl.location_hash == "index" || ctl.location_hash == "")
			ctl.changeCurrentElement("index")
		else if (ctl.location_hash == "profile") {
			ctl.changeCurrentElement("profile") 
			console.log("VAD AL PROFILO");
		}
		else if (ctl.location_hash == "new_route")
			ctl.changeCurrentElement("new_route")
		else
			ctl.changeCurrentElement("index")
	};

	ctl.locationHashChanged();

	// check when url hash change
	$scope.$watch(function () {
		if (ctl.location_hash != $location.hash()) {
			ctl.location_hash = $location.hash()
			ctl.locationHashChanged();
		};
	});

});