app.azioni_routes = function(ctl, $scope, $http){
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

  //ctl.edit_route = function() {
  //  if (!ctl.is_logged()) return ;
  //  if (!ctl.is_selected_route()) return ;
  //  if (!ctl.checkEditRouteForm()) return ;
  //  $http({
  //    url:      '/route/edit_route',
  //    method:   "GET",
  //    params:   {
  //      title: ctl.route_title, 
  //      descr: ctl.route_descr, 
  //      status: ctl.route_status
  //    },
  //    dataType: "json"
  //  }).then(
  //  function successCallback(response) {
  //    ctl.route.id     = response.data.id;
  //    ctl.route.title  = response.data.title;
  //    ctl.route.descr  = (response.data.descr != undefined) ? response.data.descr : undefined;
  //    ctl.route.status = response.data.status;
//
  //    console.log("CURRENT_ROUTE: ", ctl.route);
  //  }, function errorCallback(response) {
  //    console.log("Error", response);
  //  });    
  //};

  ctl.is_selected_route = function() {
    return (ctl.route.id != undefined) ? true : false; 
  };

};