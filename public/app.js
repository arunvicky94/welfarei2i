angular
    .module('welfareApp',['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/login')
      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'views/home.html',
              // controller: 'LoginCtrl'
          }).state('login', {
              url: '/login',
              templateUrl: 'views/login.html',
              controller: 'LoginController',
              controllerAs: 'LoginCtrl'
          }).state('signup', {
              url: '/signup',
              templateUrl: 'views/signup.html',
              controller: 'SignupController',
              controllerAs: 'SignupCtrl'
          });
    }]);
