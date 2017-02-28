angular
    .module('welfareApp',['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/home')
      $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'views/home.html',
              // controller: 'LoginCtrl'
          }).state('home.login', {
              url: '/login',
              templateUrl: 'views/login.html',
              controller: 'LoginController',
              controllerAs: 'LoginCtrl'
          }).state('home.signup', {
              url: '/signup',
              templateUrl: 'views/signup.html',
              controller: 'SignupController',
              controllerAs: 'SignupCtrl'
          }).state('home.form', {
              url: '/form',
              templateUrl: 'views/requestForm.html',
              controller: 'FormController',
              controllerAs: 'FormCtrl'
          });
    }]);
