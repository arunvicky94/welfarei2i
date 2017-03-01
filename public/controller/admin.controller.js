angular
    .module('welfareApp')
    .controller('AdminControll', function($rootScope, adminService, $rootScope, $window) {
      var vm = this;
      vm.fundRequest = {};

      vm.getFunds = function() {
        console.log("get functioncontrolle calling");
        console.log($rootScope.token);
        adminService.getFunds()
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
      vm.acceptFund = function (fund) {
          console.log("admit edit calling" + fund);
            console.log(fund);
          adminService.acceptFund(fund)
          .then(function(response){
            console.log(response);
          });

      }

    });
