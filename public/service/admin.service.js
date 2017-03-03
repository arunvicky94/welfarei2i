angular
    .module('welfareApp')
    .service('adminService', function ($http, $window) {
        var config = { headers: {Authorization: 'Bearer ' + $window.localStorage['user-token'] }}
        this.getFunds = function () {
            console.log("service calling");
            return $http.get('/api/funds', config);
        }
        this.getFundsByStatus = function (status) {
            console.log("service calling", status);
            return $http.get('/api/funds/' + status, config);
        }
        this.updateFund = function (fund) {
            console.log(fund);
            return $http.put('/api/fund', fund, config);
        }
    });
