/***                                          ***\

  Filename: routes.js
  Author: Quint Glover

  Copyright (c) 2019 University of North Alabama
  
\***                                          ***/

(
  function()
  {
    'use strict';

    angular.module
    (
      'myApp'
    ).config
    (
      Routes
    );

    Routes.$inject = ['$routeProvider'];

    function Routes($routeProvider)
    {
      $routeProvider.when
      (
        '/',
        {
          templateUrl: 'views/test.html',
          controller: 'mainCtrl'
        }
      )
    }
    
  }
)
(
);