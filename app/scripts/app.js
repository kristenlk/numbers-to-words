(function n2wAppIIFE(){
  var app = angular.module('n2wApp', ['ngRoute', 'ngMessages']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'n2wController',
              controllerAs: 'n2wCtrl',
              templateUrl: 'app/views/n2w.html'
            }
           )
      .otherwise({redirectTo: '/'});
  });

})();
