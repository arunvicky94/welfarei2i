angular
    .module('welfareApp')
    .controller('AdminControll', function($window, adminService, $rootScope) {
      var vm = this;
      vm.fundRequest = {};

      vm.getFunds = function() {
          adminService.getFunds()
          .then(function(response){
              vm.funds = response.data;
          }, function(error){
              alert("Unable to get fund details"
              + " : " + error.status + " : " +  error.statusText);
          });
      }

      vm.getFundsByStatus = function (status) {
          $rootScope.showNav = true;
          console.log($window.localStorage['user-token']);
          adminService.getFundsByStatus(status)
          .then(function (response) {
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
            fund.status = "Accept";
          adminService.updateFund(fund)
          .then(function(response){
          }, function(error) {
            alert("Unable to accept fund request. please try again"
             + " : " + error.status + " : " +  error.statusText);
          });
      }

      vm.rejectFund = function (fund) {
          fund.status = "Reject";
          adminService.updateFund(fund)
          .then(function(response){
          }, function(error){
              alert("Unable to reject fund request. please try again"
              + " : " + error.status + " : " +  error.statusText);
          });
      }
    });
