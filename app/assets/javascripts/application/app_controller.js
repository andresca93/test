var app = angular.module('app', []);

app.controller('AppCtrl', function($scope, $http) {
	var ctl = this;

	ctl.apply = function(my_timeout) { 
		my_timeout = my_timeout || 50; 
		setTimeout(function () { 
			$scope.$apply(); 
		}, my_timeout); 
	};

	// element to show, initialy se to index
	ctl.current_elem="index";
	// function to set the enviroment to show
	ctl.changeCurrentElement = function(new_elem) {
		if (!new_elem) return ;
		ctl.current_elem = new_elem;
		if (new_elem == "index") {
			// imposto variabili per index
		} else if (new_elem == "profile") {
			// imposto variabili per profilo
		}
		console.log("current_elem: ", new_elem);
		ctl.apply();
	};
	app.changeCurrentElement = ctl.changeCurrentElement;

	// MODULI
	app.azioni_forms(ctl, $scope);
	app.azioni_users(ctl, $scope, $http);
	app.azioni_routes(ctl, $scope, $http);
	app.azioni_stages(ctl, $scope, $http);


});