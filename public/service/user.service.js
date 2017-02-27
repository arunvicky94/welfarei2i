angular
    .module('welfareApp')
    .service('userService', function($http) {
        this.saveUser = function(user) {
          console.log(user);
          console.log("service calling" + user);
          return $http.post('/api/user', user);
        }
    });
