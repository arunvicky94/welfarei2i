angular
    .module('welfareApp',['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/home/login')
      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'views/home.html',
              controller: 'LoginController',
              controllerAs: 'LoginCtrl'
          })

          .state('home.login', {
              url: '/login',
              templateUrl: 'views/login.html',
              controller: 'LoginController',
              controllerAs: 'LoginCtrl',
              data: {
                  requiresLogin: false,
                  requiresAdmin: false
              }
          })

          .state('home.signup', {
              url: '/signup',
              templateUrl: 'views/signup.html',
              controller: 'SignupController',
              controllerAs: 'SignupCtrl',
              data: {
                  requiresLogin: false,
                  requiresAdmin: false
              }
          })

          .state('home.form', {
              url: '/form',
              templateUrl: 'views/requestForm.html',
              controller: 'FundController',
              controllerAs: 'FundCtrl',
              data: {
                  requiresLogin: true,
                  requiresAdmin: false
              }
          })

          .state('home.funds', {
              url: '/funds',
              templateUrl: 'views/fundgrid.html',
              controller: 'FundController',
              controllerAs: 'FundCtrl',
              data: {
                  requiresLogin: true,
                  requiresAdmin: false
              }
          })

          .state('home.adminPage', {
              url: '/admin',
              templateUrl: 'views/adminPage.html',
              controller: 'AdminControll',
              controllerAs: 'AdminCtrl',
              data: {
                  requiresLogin: true,
                  requiresAdmin: true
              }
          });
    }])

    .run(['$rootScope', '$state', '$timeout', '$window', function($rootScope, $state, $timeout, $window) {
      $rootScope.$on('$stateChangeStart', function(event, toState) {
          console.log('state change');
          if (toState.data.requiresLogin) {
              console.log('requiresLogin true');
              if (!$window.localStorage['loggedIn']) {
                  console.log('loggedIn false');
                  $timeout(function() {
                      $state.go('home.login');
                  });
              }
          } else if (!toState.data.requiresLogin) {
              if($window.localStorage['isAdmin']) {
                $state.go('home.adminPage');
              } else {
                $state.go('home.funds');
              }
          }
          if (toState.data.requiresAdmin) {
              console.log('requiresAdmin true');
              if (!$window.localStorage['isAdmin']) {
                  console.log('isAdmin false');
                  $timeout(function() {
                      $state.go('home.funds');
                  });

              }
          }
      })
  }]);
