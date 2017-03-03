angular
    .module('welfareApp')
    .controller('FundController', function ($window, userService, fundService, $rootScope, $window) {
        var vm = this;
        vm.fundRequest = {};

        vm.requestFund = function () {
            $rootScope.showNav = true;
            console.log("controlle calling" + vm.fundRequest);
            console.log($window.localStorage['user-token']);
            fundService.fundRequest({fund: vm.fundRequest, user: vm.getUser() })
                .then(function (response) {
                    console.log(response);
                    alert("Your request sent succesfully")
                    vm.fundRequest = {};
                }, function (error) {
                    alert("You are not elligible for request fund"
                     + " : " + error.status + " : " + error.statusText);
                    vm.fundRequest = {};
                });
        }
        vm.getFundByUserId = function () {
            $rootScope.showNav = true;
            console.log("get functioncontrolle calling");
            console.log($window.localStorage['user-token']);
            fundService.getFundByUserId(vm.getUser()._id)
                .then(function (response) {
                    console.log(response);
                    vm.funds = response.data;
                }, function (error) {
                    alert("Unable to get fund details" + " : "
                    + error.status + " : " + error.statusText);
                });
        }
        vm.getUser = function () {
            user = $window.localStorage['user-token'].split('.')[1];
            user = $window.atob(user);
            user = JSON.parse(user);
            console.log(user);
            return user;
        }

    });
