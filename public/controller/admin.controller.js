angular
    .module('welfareApp')
    .controller('AdminControll', function($window, adminService, $rootScope) {
      var vm = this;
      vm.fundRequest = {};

      vm.getFunds = function() {
        console.log("get functioncontrolle calling");
        console.log($window.localStorage['user-token']);
        adminService.getFunds()
        .then(function(response){
           console.log(response);
           vm.funds = response.data;
        }, function(error){
          alert("Unable to get fund details"
           + " : " + error.status + " : " +  error.statusText);
        });
      }

      vm.getFundsByStatus = function (status) {
          $rootScope.showNav = true;
          console.log("get functioncontrolle calling");
          console.log($window.localStorage['user-token']);
          adminService.getFundsByStatus(status)
              .then(function (response) {
                  console.log(response);
                  vm.funds = response.data;
              }, function (error) {
                  alert("Unable to get fund details" + " : "
                  + error.status + " : " + error.statusText);
              });
      }

      vm.getUser = function(){
        payload = $window.localStorage['user-token'].split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        console.log(payload);
        return payload;
      }

      vm.acceptFund = function (fund) {
          console.log("admit edit calling" + fund);
            console.log(fund);
            fund.status = "Accept";
          adminService.updateFund(fund)
          .then(function(response){
            console.log(response);
          }, function(error) {
            alert("Unable to accept fund request. please try again"
             + " : " + error.status + " : " +  error.statusText);
          });
      }

      vm.rejectFund = function (fund) {
          console.log("admit edit calling" + fund);
            fund.status = "Reject";
            console.log(fund);
          adminService.updateFund(fund)
          .then(function(response){
            console.log(response);
          }, function(error){
            alert("Unable to reject fund request. please try again"
             + " : " + error.status + " : " +  error.statusText);
          });
      }
    });
