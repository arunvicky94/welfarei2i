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
    .controller('LoginController', function($rootScope, $state, userService) {
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
             $rootScope.token = response.data.token;
             $state.go('home.form');
           }
        });
      }
    });
