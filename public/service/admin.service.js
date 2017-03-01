angular
    .module('welfareApp')
    .service('adminService', function($http) {
      this.getFunds = function() {
        console.log("service calling");
        return $http.get('/api/funds');
      }
      this.acceptFund = function(fund) {
        console.log(fund);
        return $http.put('/api/fund',fund);
      }
    });
