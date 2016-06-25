'use strict';

/**
 * @ngdoc overview
 * @name whiteLotusApp
 * @description
 * # whiteLotusApp
 *
 * Main module of the application.
 */
angular
    .module('whiteLotusApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'whiteLotusApp',
        'personApp.signin',

        'personApp.personControllers',
        'personApp.pythagoreanSquare',
        'personApp.baZi',

        'personApp.services'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('persons', {
                url: '/persons',
                templateUrl: 'views/persons.html',
                controller: 'PersonListController'
            })
            .state('viewPerson', {
                url: '/persons/:id/view',
                templateUrl: 'views/person-view.html',
                controller: 'PersonViewController'
            })
            .state('viewPSquareReport', {
                url: '/persons/:id/psihomatrix',
                templateUrl: 'views/person-ps-report.html',
                controller: 'PersonPSquareReportController'
            })
            .state('viewBaZiReport', {
                url: '/persons/:id/bazi',
                templateUrl: 'views/person-bazi-report.html',
                controller: 'PersonBaZiReportController'
            })
            .state('newPerson', {
                url: '/persons/new',
                templateUrl: 'views/person-add.html',
                controller: 'PersonCreateController'
            })
            .state('editPerson', {
                url: '/persons/:id/edit',
                templateUrl: 'views/person-edit.html',
                controller: 'PersonEditController'
            });
    });
/*.run(function ($state) {
 $state.go('home');
 }
 );*/
