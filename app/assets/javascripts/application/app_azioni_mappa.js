app.azioni_mappa = function(ctl, $scope, NgMap){

	ctl.getPos = function(event) {
	    console.log(event.latLng.lat());
	};

};