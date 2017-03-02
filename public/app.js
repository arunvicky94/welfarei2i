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
              controller: 'FundController',
              controllerAs: 'FundCtrl'
          }).state('home.funds', {
              url: '/funds',
              templateUrl: 'views/fundgrid.html',
              controller: 'FundController',
              controllerAs: 'FundCtrl'
          }).state('home.adminPage', {
              url: '/admin',
              templateUrl: 'views/adminPage.html',
              controller: 'AdminControll',
              controllerAs: 'AdminCtrl'
          });
    }]);
