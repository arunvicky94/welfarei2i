angular
    .module('welfareApp')
    .service('formService', function($http) {
      this.fundRequest = function(fundRequest) {
        console.log(fundRequest);
        console.log("service calling" + fundRequest);
        return $http.post('/api/fund', fundRequest);
      }

    });
