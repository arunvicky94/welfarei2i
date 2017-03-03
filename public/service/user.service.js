angular
    .module('welfareApp')
    .service('userService', function ($http, $window) {
      var config = { headers: {Authorization: 'Bearer ' + $window.localStorage['user-token'] }}
      this.showNav = false;
        this.loginUser = function (userLogin) {
            console.log(userLogin);
            console.log("service calling" + userLogin);
            return $http.post('/api/login', userLogin);
        }
        this.saveUser = function (user) {
            console.log(user);
            console.log("service calling" + user);
            return $http.post('/api/user', user);
        }
    });
