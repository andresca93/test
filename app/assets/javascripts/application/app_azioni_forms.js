app.azioni_forms = function(ctl, $scope){

	// check create new route form
	ctl.route_title  = "";
	ctl.route_descr  = "";
	ctl.route_status = "draft";
	
	ctl.checkNewRouteForm = function() {
		route_permitted_status = ["public", "private", "draft"];
		// TODO gestione errori provenienti dal form di creazione route
		if (ctl.route_title.length < 5) {
			console.log("Il titolo deve avere almeno 5 caratteri")
			return false;
		}
		console.log(ctl.route_status);
		if (route_permitted_status.indexOf(ctl.route_status)<0) {
			console.log("Errore nello status della route");
			return false;
		}
		return true;
	};

	// check edit route form
	ctl.checkEditRouteForm = function() {
	};
};
