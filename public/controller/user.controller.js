angular
    .module('welfareApp')
    .controller('SignupController', function(userService) {
      var vm = this;
      vm.user = {};
      // vm.users = [];
      vm.saveUser = function() {
        console.log("controlle calling" + vm.user);
        userService.saveUser(vm.user)
        .then(function(response){
           console.log(response);
        });
      }
    })
    .controller('LoginController', function($rootScope, $state, userService, $window) {
      var vm = this;
      vm.userLogin = {};
      $rootScope.token = '';
      // vm.users = [];
      vm.loginUser = function() {
        console.log("controlle calling" + vm.userLogin);
        userService.loginUser(vm.userLogin)
        .then(function(response){
           console.log(response.data.token);
           if(200 == response.status) {
             vm.getUser(response.data.token);
             if("admin" == user.role) {
             $rootScope.token = response.data.token;
             $state.go('home.adminPage');
           } else if ("employee" == user.role) {
             $rootScope.token = response.data.token;
             $state.go('home.form');
           }
           }
        });
      }
      vm.getUser = function(response) {
        user = response.split('.')[1];
        user = $window.atob(user);
        user = JSON.parse(user);
        console.log(user);
        return user;
      }
    });
