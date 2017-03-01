angular
    .module('welfareApp')
    .controller('FundController', function($rootScope, fundService, $rootScope, $window) {
      var vm = this;
      vm.fundRequest = {};

      // vm.users = [];
      vm.requestFund = function() {
        console.log("controlle calling" + vm.fundRequest);
        console.log($rootScope.token);
        fundService.fundRequest({fund: vm.fundRequest, token: $rootScope.token, user: vm.getUser()})
        .then(function(response){
           console.log(response);
           if(404 == response.status) {
                alert("You are not elligible for request fund");
            }
        });
      }
      vm.getFundByUserId = function() {
        console.log("get functioncontrolle calling");
        console.log($rootScope.token);
        fundService.getFundByUserId(vm.getUser()._id)
        .then(function(response){
           console.log(response);
           vm.funds = response.data;
        });
      }
      vm.getUser = function(){
        payload = $rootScope.token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        console.log(payload);
        return payload;
      }

    });
