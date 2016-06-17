var app = angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate']);
/*.run(function ($rootScope) {
    $rootScope.addEvents = function () {
        if ($rootScope.addText.length >= 1) {
            $rootScope.events.push({
                text: $rootScope.addText
            });
        }
        $rootScope.addText = "";
    };

    $rootScope.checkEvents = function (event) {
        if ($rootScope.event.done == true) {
            delete $rootScope.event.done;
        }
    };

    $rootScope.clearCompleted = function () {
        var doneEvents = $rootScope.events;
        $rootScope.events = [];
        angular.forEach(doneEvents, function (event) {
            if (!event.done) {
                $rootScope.events.push(event);
            }
        });
    };
});*/

app.config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
            $routeProvider.when('/homepage', {
                    templateUrl: './petprofiles/homepage.html',
                    controller: 'MainController'
                })
                .when('/petname', {
                    templateUrl: './petprofiles/petname.html',
                    controller: 'petprofileController'
                })
                .when('/moe', {
                    templateUrl: './petprofiles/moe.html',
                    controller: 'petprofileController'
                })
                .when('/daylog', {
                    templateUrl: './petprofiles/daylog.html',
                    controller: 'dailylogController'
                })
                .when('/medical', {
                    templateUrl: './petprofiles/medical.html',
                    controller: 'medicalController'
                })
                .when('/appointments', {
                    templateUrl: './petprofiles/appointments.html',
                    controller: 'appointmentsController'
                })
                .when('/moedaylog', {
                    templateUrl: './petprofiles/moedaylog.html',
                    controller: 'dailylogController'
                })
                .when('/moemedical', {
                    templateUrl: './petprofiles/moemedical.html',
                    controller: 'medicalController'
                })
                .when('/moeappointments', {
                    templateUrl: './petprofiles/moeappointments.html',
                    controller: 'appointmentsController'
                })
                .otherwise({
                    redirectTo: '/homepage'
                })
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
        $rootScope.$on('addEvents', function () {
            if ($rootScope.addText.length >= 1) {
                $rootScope.events.push({
                    text: $rootScope.addText
                });
            }
            $rootScope.addText = "";
        });
        $rootScope.$on('checkEvents', function (event) {
            if ($rootScope.event.done == true) {
                delete $rootScope.event.done;
            }
        });
        $rootScope.$on('clearCompleted', function () {
            var doneEvents = $rootScope.events;
            $rootScope.events = [];
            angular.forEach(doneEvents, function (event) {
                if (!event.done) {
                    $rootScope.events.push(event);
                }
            });
        });
    });
app.controller('MainController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.today = new Date();

    $scope.events = [];

    $scope.pees = [
        {
            text: "8am went pee",
            text: "Fed at 7:30am"
        }
    ];

    $scope.petprofile = [
        //Riley
        {
            petname: 'Riley',
            image: 'images/Riley.jpg'
        },
        //Moe
        {
            petname: 'Moe',
            image: 'images/Moe.jpg'
        }
    ];
    $scope.rileymedical = [
        //neutered
        {
            text: "Riley was neutered at SPCA on 2/28/04"
        },
        //rabies
        {
            text: "Got last rabies/DA2PP vaccinations 9/3/14 (3-year vaccine)"
        },
        //checkups
        {
            text: "Annual checkup at Vet on 4/25/15, vet found 3 fleas."
        },
        {
            text: "Annual checkup at Vet on 5/30/16, had 2 teeth pulled."
        }
    ];

    $scope.moemedical = [
        //neutered
        {
            text: "Moe was neutered at SPCA on 1/15/16"
        },
        //rabies
        {
            text: "Got rabies/DA2PP shots (3-year vaccines) 3/3/16"
        },
        //checkup
        {
            text: "1 year checkup at Vet on 5/30/16, very healthy"
        }
    ];


    $scope.addEvents = function () {
        if ($scope.addText.length >= 1) {
            $scope.events.push({
                text: $scope.addText
            });
        }
        $scope.addText = "";
    };

    $scope.checkEvents = function (event) {
        if ($scope.event.done == true) {
            delete $scope.event.done;
        }
    };

    $scope.clearCompleted = function () {
        var doneEvents = $scope.events;
        $scope.events = [];
        angular.forEach(doneEvents, function (event) {
            if (!event.done) {
                $scope.events.push(event);
            }
        });
    };

}]);

/*app.controller('moeController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.moedaylog = [
        {
            pee: 'Went pee  at 8am',
            fed: 'Fed breakfast 9am',
            run: 'Taken for run 10am',
            poo: 'Pooped in backyard at 11am'
        }
    ];
    $scope.moemedical = [
        {
            neutered: 'Moe was neutered at SPCA on 1/25/16.',
            rabies: 'Got all shots/vaccinations on 3/3/16',
            checkup: '1 year checkup at Vet on 5/30/16'
        }
    ];
    $scope.moeappointments = [
        {
            vet: 'Vet checkup on 7/7/16',
            groomer: 'Grooming apt on 7/15/16'
        }
    ];
}]);*/

app.controller('petprofileController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.petprofile = [
        //Riley
        {
            petname: 'Riley',
            image: 'images/Riley.jpg'

        },
        //Moe
        {
            petname: 'Moe',
            image: 'images/Moe.jpg'
        }
    ];
}]);

app.controller('dailylogController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.events = [];

    $scope.moes = [
        {
            text: "8am put outside, but didn't do anything"
        }
    ];

    $scope.pees = [
        {
            text: "8am went pee",
            text: "Fed at 730am"
        }
    ];

    $scope.today = new Date();
    /*$scope.events = [
        {
            text: 'Went pee at 8am'
        },
        {
            text: 'Fed Breakfast at 9am'
        },
        {
            text: 'Taken for run at 10am'
        },
        {
            text: 'Pooped in backyard at 11am'
        }
    ];*/

    $scope.addEvents = function () {
        if ($scope.addText.length >= 1) {
            $scope.events.push({
                text: $scope.addText
            });
        }
        $scope.addText = "";
    };

    $scope.checkEvents = function (event) {
        if ($scope.event.done == true) {
            delete $scope.event.done;
        }
    };

    $scope.clearCompleted = function () {
        var doneEvents = $scope.events;
        $scope.events = [];
        angular.forEach(doneEvents, function (event) {
            if (!event.done) {
                $scope.events.push(event);
            }
        });
    };

}]);

app.controller('medicalController', ['$scope', '$rootScope', function ($scope, $rootScope) {





}]);

app.controller('appointmentsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    //$scope.events = [];

    $scope.rileyappointments = [
        //vet
        {
            text: "Vet checkup on 6/15/16"
        },
        //groomer
        {
            text: "Grooming Appointment on 7/1/16"
        }
    ];

    $scope.moeappointments = [
        //vet
        {
            text: "Vet checkup on 6/25/16"
        },
        //groomer
        {
            text: "Grooming Appointment on 6/26/16"
        },
        {
            text: "Grooming Appointment on 8/3/16"
        }
    ];

    $scope.addAppointments = function () {
        if ($scope.addText.length >= 1) {
            $scope.rileyappointments.push({
                text: $scope.addText
            });
        }
        $scope.addText = "";
    };

    $scope.addMoeAppointments = function () {
        if ($scope.addText.length >= 1) {
            $scope.moeappointments.push({
                text: $scope.addText
            });
        }
        $scope.addText = "";
    };

    $scope.checkAppointments = function (appointment) {
        if ($scope.appointment.done == true) {
            delete $scope.appointment.done;
        }
    };

    $scope.clearCompleted = function () {
        var doneAppointments = $scope.rileyappointments;
        $scope.rileyappointments = [];
        angular.forEach(doneAppointments, function (appointment) {
            if (!appointment.done) {
                $scope.rileyappointments.push(appointment);
            }
        });
    };

    $scope.clearMoeCompleted = function () {
        var doneAppointments = $scope.moeappointments;
        $scope.moeappointments = [];
        angular.forEach(doneAppointments, function (appointment) {
            if (!appointment.done) {
                $scope.moeappointments.push(appointment);
            }
        });
    };


}]);
