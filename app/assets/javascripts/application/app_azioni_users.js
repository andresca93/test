app.azioni_users = function(ctl, $scope, $http){
  // current user object
  ctl.user = {
    checked:  false,
    id:       undefined,
    email:    undefined,
    name:     undefined,
    surname:  undefined,
    country:  undefined,
    city:     undefined,
    fb_email: undefined,
    gl_email: undefined,
  };

  // function to check user's status through angular ajax request
  ctl.user_check = function() {
    $http({
      url:      '/users/user_check',
      method:   "GET",
      dataType: "json"
    }).then(
    function successCallback(response) {
      ctl.user.checked  = true;
      ctl.user.id       = response.data.id;
      ctl.user.email    = response.data.email;
      ctl.user.name     = (response.data.name     != undefined) ? response.data.name     : undefined;
      ctl.user.surname  = (response.data.surname  != undefined) ? response.data.surname  : undefined;
      ctl.user.country  = (response.data.country  != undefined) ? response.data.country  : undefined;
      ctl.user.city     = (response.data.city     != undefined) ? response.data.city     : undefined;
      ctl.user.fb_email = (response.data.fb_email != undefined) ? response.data.fb_email : undefined;
      ctl.user.gl_email = (response.data.gl_email != undefined) ? response.data.gl_email : undefined;
      ctl.init_user_profile();
      console.log("USER: ", ctl.user);
    }, function errorCallback(response) {
      ctl.user.checked  = true;
      console.log("Error", response);
    });
  };

  ctl.init_user_profile = function() {
    // inizializzo le informazioni utili al profilo utente
    ctl.get_user_routes();
  };

  // return true if is a logged user
  ctl.is_logged = function() {
    return (ctl.user.id != undefined) ? true : false;
  };

  ctl.user_check();
};