angular
    .module('welfareApp')
    .service('fundService', function ($http, $window) {
      var config = { headers: {Authorization: 'Bearer ' + $window.localStorage['user-token'] }}
        this.fundRequest = function (fundRequest) {
            console.log("service calling" + fundRequest);
            return $http.post('/api/fund', fundRequest, config);
        }

        this.getFundByUserId = function (id) {
            console.log("service calling", id);
            return $http.get('/api/fund/' + id, config);
        }

    });
