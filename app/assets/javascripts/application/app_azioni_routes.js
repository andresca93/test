app.azioni_routes = function(ctl, $scope, $http){
  // current route object
	ctl.route = {
		id:     undefined,
		title:  undefined,
		descr:  undefined,
		status: undefined
	};

	ctl.new_route = function () {
		if (!ctl.is_logged()) return ;
		if (!ctl.checkNewRouteForm()) return ;
		$http({
      url:      '/route/new_route',
      method:   "GET",
      params:   { 
        title:  ctl.route_title, 
        descr:  ctl.route_descr, 
        status: ctl.route_status
      },
      dataType: "json"
    }).then(
    function successCallback(response) {
      ctl.route.id     = response.data.id;
      ctl.route.title  = response.data.title;
      ctl.route.descr  = (response.data.descr != undefined) ? response.data.descr : undefined;
      ctl.route.status = response.data.status;

      console.log("CURRENT_ROUTE: ", ctl.route);
    }, function errorCallback(response) {
      console.log("Error", response);
    });
	};

  ctl.user_routes = [];
  ctl.user_routes_loaded=false;
  ctl.get_user_routes = function() {
    if (!ctl.is_logged()) return ;
    $http({
      url:      '/route/get_user_routes',
      method:   "GET",
      dataType: "json"
    }).then(
    function successCallback(response) {
      ctl.user_routes_loaded=true;
      ctl.user_routes = response.data;
      console.log("MY_ROUTES: ", ctl.user_routes);
    }, function errorCallback(response) {
      console.log("Error", response);
    });
  };

  ctl.show_route = function(route) {
    console.log("aaaaa");
    ctl.choose_route(route);
    ctl.changeCurrentElement('show_route');
  };

  ctl.choose_route = function(route) {
    if (!ctl.is_logged()) return ;
    ctl.route.id     = route.id;
    ctl.route.title  = route.title;
    ctl.route.descr  = route.descr;
    ctl.route.status = route.status;
  };

  ctl.is_selected_route = function() {
    return (ctl.route.id != undefined) ? true : false; 
  };

};