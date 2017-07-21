app.azioni_stages = function(ctl, $scope, $http){
	ctl.stage = {
		id:           undefined,
		route_id:     undefined,
		quest_title:  undefined,
		quest_descr:  undefined,
		lat:          undefined,
		lng:          undefined,
		password:     undefined
	};

	ctl.new_stage = function () {
		if (!ctl.is_logged()) return ;
    if (!ctl.is_selected_route()) return ;
    // TODO
    //if (!ctl.checkNewStageForm()) return ;
		$http({
      url:      '/stage/new_stage',
      method:   "GET",
      params:   { 
        route_id:     ctl.route.id,
        quest_title:  ctl.stage_quest_title, 
        quest_descr:  ctl.stage_quest_descr, 
        lat:          ctl.stage_lat,
        lng:          ctl.stage_lng, 
        password:     ctl.stage_password
      },
      dataType: "json"
    }).then(
    function successCallback(response) {
      ctl.stage.id           = response.data.id;
      ctl.stage.route_id     = response.data.route_id;
      ctl.stage.quest_title  = response.data.quest_title;
      ctl.stage.quest_descr  = (response.data.quest_descr != undefined) ? response.data.quest_descr : undefined;
      ctl.stage.lat          = response.data.lat;
      ctl.stage.lng 				 = response.data.lng;
      ctl.stage.password     = response.data.password;
      console.log("CURRENT_STAGE: ", ctl.stage);
    }, function errorCallback(response) {
      console.log("Error", response);
    });
	};

  // get all stage of selected route
  ctl.route_stages=[];
  ctl.is_route_stage_loaded=false;
  ctl.get_stage_by_route = function() {
    if (!ctl.is_logged()) return ;
    if (!ctl.is_selected_route()) return ;
    $http({
      url:      '/stage/get_stage_by_route',
      method:   "GET",
      params:   { 
        route_id: ctl.route.id
      },
      dataType: "json"
    }).then(
    function successCallback(response) {
      ctl.is_route_stage_loaded=true;
      ctl.route_stages=response.data;
      console.log("SELECTED_ROUTE_STAGES: ", ctl.route_stages);
    }, function errorCallback(response) {
      ctl.is_route_stage_loaded=true;
      console.log("Error", response);
    });   
  };
};