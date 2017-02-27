angular
    .module('welfareApp')
    .controller('LoginController', function(userService) {
      var vm = this;
      vm.user = {};
      // vm.users = [];
      vm.addUser = function() {
        console.log("controlle calling" + vm.user);
        bookingService.saveUser(vm.user);
      }
    }).controller('SignupController', function(userService) {
      var vm = this;
      vm.user = {};
      // vm.users = [];
      vm.saveUser = function() {
        console.log("controlle calling" + vm.user);
        userService.saveUser(vm.user);
      }
    });
