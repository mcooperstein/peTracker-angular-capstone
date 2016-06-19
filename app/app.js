var petprofiles = [
    //Riley
    {
        name: 'Riley',
        image: 'images/Riley.jpg'

    },
    //Moe
    {
        name: 'Moe',
        image: 'images/Moe.jpg'
    }
];

var app = angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate']);

app.config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
            $routeProvider.when('/homepage', {
                    templateUrl: './petprofiles/homepage.html',
                })
                .when('/riley', {
                    templateUrl: './petprofiles/riley.html',
                    controller: 'rileyController'
                })
                .when('/moe', {
                    templateUrl: './petprofiles/moe.html',
                    controller: 'moeController'
                })
                .when('/appointments', {
                    templateUrl: './partials/appointments.html',
                    controller: 'appointmentsController'
                })
                .otherwise({
                    redirectTo: '/homepage'
                });
    }])
    .run(function ($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function () {
            $location.path('/error');
        });
        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.isLoading = false;
        }, 2000);
    });
