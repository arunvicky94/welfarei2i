angular
    .module('welfareApp')
    .controller('FormController', function($rootScope, formService, $rootScope, $window) {
      var vm = this;
      vm.fundRequest = {};

      // vm.users = [];
      vm.requestFund = function() {
        console.log("controlle calling" + vm.fundRequest);
        console.log($rootScope.token);
        formService.fundRequest({fund: vm.fundRequest, token: $rootScope.token, user: vm.getUser()})
        .then(function(response){
           console.log(response);
        });
      }
      vm.getUser = function(){
        payload = $rootScope.token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return payload;
      }

    });
