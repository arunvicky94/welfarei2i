angular
    .module('welfareApp')
    .controller('SignupController', function (userService) {
        var vm = this;
        vm.user = {};
        // vm.users = [];
        vm.saveUser = function () {
            console.log("controlle calling" + vm.user);
            userService.saveUser(vm.user)
                .then(function (response) {
                    console.log(response);
                    alert("Your details added succesfully");
                    vm.user = {};
                }, function (error) {
                    console.log(error)
                    alert("Error while adding your details. Please try again"
                     + " : " + error.status + " : " + error.statusText);
                    vm.user = {};
                });
        }
    })
    .controller('LoginController', function ($window, $state, userService, $scope, $rootScope) {
        var vm = this;
        vm.userLogin = {};
        $rootScope.showNav = false;
        vm.loginUser = function () {
            console.log("controlle calling" + vm.userLogin);
            // userService.showNav = true;
            userService.loginUser(vm.userLogin)
                .then(function (response) {
                    $rootScope.showNav = true;
                    //$rootScope.loggedIn = true;
                    $window.localStorage['loggedIn'] = true;
                        vm.getUser(response.data.token);
                        $rootScope.userName = user.name;
                    if ("admin" == user.role) {
                        $window.localStorage['isAdmin'] = true;
                        $window.localStorage['user-token'] = response.data.token;
                        $state.go('home.adminPage');
                        console.log("--------admin page-------");
                    } else if ("employee" == user.role) {
                        $window.localStorage['user-token'] = response.data.token;
                        $state.go('home.funds');
                    }
                }, function (error) {
                    alert(" Unable to login. Please try again"
                    + " : " + error.status + " : " + error.statusText);
                });
        }

        vm.getUser = function (response) {
            user = response.split('.')[1];
            user = $window.atob(user);
            user = JSON.parse(user);
            console.log(user);
            return user;
        }

        vm.logoutUser = function () {
            if (confirm("Are you sure to logout")) {
                $window.localStorage.removeItem('user-token');
                $window.localStorage.removeItem('isAdmin');
                $window.localStorage.removeItem('loggedIn');
                $state.go('home.login');
                $rootScope.loggedIn = false;
            }
        }

    });
