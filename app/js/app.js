var app = angular.module('myApp', ['ngMessages', 'ngRoute', 'ngAnimate']);

app.value('petprofile', [
    //Riley
    {
        petname: 'Riley',
        image: 'images/Riley.jpg',
        medical: {
            neutered: "Riley was neutered at SPCA on 2/28/04",
            rabies: "Got last rabies/DA2PP vaccinations 9/3/14 (3-year vaccine)",
            checkup: "Annual checkup at Vet on 4/25/15, vet found 3 fleas.",
            vet: "Annual checkup at Vet on 5/30/16, had 2 teeth pulled."
        },
        appointments: ["Vet checkup on 6/15/16", "Grooming Appointment on 7/1/16"],
        actions: ["Riley peed 8am", "Riley fed 9am"]
    },
    //Moe
    {
        petname: 'Moe',
        image: 'images/Moe.jpg',
        medical: {
            neutered: "Moe was neutered at SPCA on 1/15/16",
            rabies: "Got rabies/DA2PP shots (3-year vaccines) 3/3/16",
            checkup: "1 year checkup at Vet on 5/30/16, very healthy"
        },
        appointments: ["Vet checkup on 6/25/16", "Grooming Appointment on 6/26/16", "Grooming Appointment on 8/3/16"],
        actions: ["Moe peed 7am", "Moe ran 10am"]

    }
]);


app.config(['$locationProvider', '$routeProvider',
            function ($locationProvider, $routeProvider) {
            $routeProvider
                .when('/homepage', {
                    templateUrl: './partials/homepage.html',
                    controller: 'MainController'
                })
                .when('/petprofile/:petname', {
                    templateUrl: './partials/petprofile.html',
                    controller: 'petprofileController',
                    resolve: {
                        petname: function (petprofile, $route, $location) {
                            var petname = $route.current.params.petname;

                            //                            angular.forEach(petprofile, function (value, key) {
                            //                                if (value.petname === petname) {
                            //                                    return petname;
                            //                                }
                            //                            });
                            return petname;
                        }
                    }
                })
                .when('/daylog/:petname', {
                    templateUrl: './partials/daylog.html',
                    controller: 'dailylogController',
                    resolve: {
                        petname: function (petprofile, $route, $location) {
                                var petname = $route.current.params.petname;

                                //                            angular.forEach(petprofile, function (value, key) {
                                //                                if (value.petname === petname) {
                                //                                    return petname;
                                //                                }
                                //                            });
                                return petname;
                            }
                            /*actions: function (petprofile, $route, $location) {
                                var actions = $route.current.params.events;
                                if (value.petname === "Riley") {
                                    return petprofile[0].actions
                                } else {
                                    return petprofile[1].actions
                                }
                            }*/
                    }
                })
                .when('/medical/:petname', {
                    templateUrl: './partials/medical.html',
                    controller: 'medicalController',
                    resolve: {
                        petname: function (petprofile, $route, $location) {
                            var petname = $route.current.params.petname;

                            //                            angular.forEach(petprofile, function (value, key) {
                            //                                if (value.petname === petname) {
                            //                                    return petname;
                            //                                }
                            //                            });
                            return petname;
                        }
                    }
                })
                .when('/appointments/:petname', {
                    templateUrl: './partials/appointments.html',
                    controller: 'appointmentsController',
                    resolve: {
                        petname: function (petprofile, $route, $location) {
                            var petname = $route.current.params.petname;

                            //                            angular.forEach(petprofile, function (value, key) {
                            //                                if (value.petname === petname) {
                            //                                    return petname;
                            //                                }
                            //                            });
                            return petname;
                        }
                    }
                })
                /*.when('/moedaylog', {
                    templateUrl: './partials/moedaylog.html',
                    controller: 'dailylogController'
                })
                .when('/moemedical', {
                    templateUrl: './partials/moemedical.html',
                    controller: 'medicalController'
                })
                .when('/moeappointments', {
                    templateUrl: './partials/moeappointments.html',
                    controller: 'appointmentsController'
                })*/
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
    });
app.controller('MainController', ['$scope', 'petprofile', function ($scope, petprofile) {
    $scope.petprofile = petprofile;
    //console.log(petname);
    $scope.today = new Date();

    $scope.events = [];

    $scope.pees = [
        {
            text: "8am went pee",
            text: "Fed at 7:30am"
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


app.controller('petprofileController', ['$scope', 'petprofile', 'petname', function ($scope, petprofile, petname) {
    $scope.petprofile = petprofile;
    $scope.petname = petname;
    //console.log(petname);
}]);

app.controller('dailylogController', ['$scope', 'petprofile', 'petname', function ($scope, petprofile, petname) {
    $scope.petprofile = petprofile;
    $scope.petname = petname;
    /*$scope.actions = actions;*/
    console.log(petname);
    $scope.events = [];
    $scope.today = new Date();
    $scope.actions = ["Moe pooped 8am", "Moe fed 9am", "Riley fed 7am", "Riley pee 730am", "actions[4]", "actions[5]"];

    $scope.displayActions = function () {
        if ($scope.petname == "Moe") {
            //This shows actions[0] and actions[1], but leaves out actions[4] and actions[5]
            $scope.actions.splice(2, 2)
        } else {
            //This shows entire actions array
            //$scope.actions.splice(0, 2, 'Riley fed 7am', 'Riley poo 8am')
            //This shows nothing
            //$scope.actions.splice(0, 4)
            //This shows 3 items I 'pop' into array
            $scope.actions.splice(0, 4, 'Riley fed 7am', 'Riley poo 730am', 'Riley run 9am')
                //This shows all 4 items I pop into array plus actions[4] and actions[5]
                //$scope.actions.splice(0, 4, 'Riley fed 7am', 'Riley poo 730am', 'Riley run 9am', "Riley pee and poo 12pm")

        }
        return $scope.actions
    };

    /*$scope.actions = [
        {
            moe: "Moe pooped 8am"
        },
        {
            moe: "Moe fed 9am"
        },
        {
            riley: "Riley fed 7am"
        },
        {
            riley: "Riley peed 730am"
        }
    ];

    $scope.displayActions = function () {
        if ($scope.petname == "Moe") {
            $scope.actions = $scope.actions.splice(2, 2);
        } else {
            $scope.actions = $scope.actions.splice(0, 2);
        }
        return $scope.actions
    };*/

    /*$scope.actions = {
        moe: "Moe pooped 8am",
        moe: "Moe fed 9am",
        riley: "Riley fed 7am",
        riley: "Riley peed 730am"
    };*/
    /*$scope.actions = {
        Moe: ["Moe pooped 8am", "Moe fed 9am"],
        Riley: ["Riley fed 7am", "Riley peed 730am"]
    };

    var displayActions = function (actionsArray, inputPetname) {

        var petActionKey = 0;
        var petAction = [];
        for (var actionPetName in actionsArray) {
            if (actionPetName === inputPetname) {
                petAction[petActionKey] = actionsArray[actionPetName];
                petActionKey++;
            }
        };
        return petAction;
    };
    console.log(displayActions($scope.actions, "Riley"));*/

    //$scope.actions = [];

    /*var riley = ["Riley fed 7am", "Riley pee 730am", "Riley run at 9am"];
    var moe = ['Moe pooped 8am', 'Moe fed 9am'];

    $scope.actions = function () {
        if ($scope.petname == "Riley") {
            $scope.actions = riley;
        } else {
            $scope.actions = moe;
        }
        return $scope.actions
    };

    console.log($scope.actions);*/



    /*$scope.addActions = function () {
        if ($scope.petname == "Riley") {
            $scope.actions.push({
                text: "Riley went pee 8am",
                text: "Riley went poo 9am"
            });
        } else if ($scope.petname == "Moe") {
            $scope.actions.push({
                text: "Moe fed at 8am",
                text: "Moe pee and poo 10am"
            });
        } else {
            $scope.actions.push({
                text: "error loading info"
            });
        }
    };*/

    /*$scope.actions = function () {
        if ($scope.petname == "Riley") {
            return "Riley went pee"
        } else if ($scope.petname == "Moe") {
            return "Moe went poo"
        } else {
            return "error"
        }
    };*/

    /*$scope.addActions = function () {
        if ($scope.petname == "Riley") {
            $scope.actions.push({
                text: $scope.text
            });
            $scope.text = "Riley went pee";
        }
        //$scope.addText = "Riley went pee";
        else if ($scope.petname == "Moe") {
            $scope.actions.push({
                text: $scope.text
            });
            $scope.text = "Moe went poo"
        } else {
            $scope.actions.push({
                text: $scope.text
            });
            $scope.text = "Error"
        }
    };*/

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

app.controller('medicalController', ['$scope', 'petprofile', 'petname', function ($scope, petprofile, petname) {
    $scope.petprofile = petprofile;
    $scope.petname = petname;
    //console.log(petname);
    $scope.events = [];
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

    $scope.medicals = ["Moe was neutered at SPCA on 1/15/16", "Moe got rabies/DA2PP shots (3-year vaccines) 3/3/16", "1 year checkup at Vet on 5/30/16, very healthy", "Riley pee 730am", "medicals[4]", "medicals[5]"];

    $scope.displayMedicals = function () {
        if ($scope.petname == "Moe") {
            //This shows actions[0] and actions[1], but leaves out actions[4] and actions[5]
            $scope.medicals.splice(3, 3)
        } else {

            //This shows 4 items I 'pop' into array
            $scope.medicals.splice(0, 5, 'Riley was neutered at SPCA on 2/28/04', 'Got last rabies/DA2PP vaccinations 9/3/14 (3-year vaccine)', 'Annual checkup at Vet on 4/25/15, vet found 3 fleas.', 'Riley got 2 teeth pulled at annual checkup 6/21/16')
                //This shows all 5 items I pop into array plus medicals[4] and medicals[5]
                //$scope.medicals.splice(0, 4, 'Riley fed 7am', 'Riley poo 730am', 'Riley run 9am', "Riley pee and poo 12pm", "Riley fed 6pm")
        }
        return $scope.medicals
    };

}]);

app.controller('appointmentsController', ['$scope', 'petprofile', 'petname', function ($scope, petprofile, petname) {
    $scope.petprofile = petprofile;
    $scope.petname = petname;
    //console.log(petname);
    /*$scope.appointments = [{
        text: "Moe"
    }, {
        text: "Riley"
    }, {
        text: "Poop"
    }];*/
    //$scope.events = [];
    //$scope.events = [];


    /*$scope.checkEvents = function (event) {
        if (event.done == true) {
            console.log(event);
            delete event.done;
        }
    };*/

    /*$scope.checkAppointments = function (appointment) {
        if (appointment.done == true) {
            delete appointment.done;
        }
    };*/

    /*$scope.appointments = [{
        text: "Moe grooming apt 6/3/16"
    }, {
        text: "Moe grooming apt 7/15/16"
    }, {
        text: "Moe vet appointment 9/16/16"
    }, {
        text: "appointments[3]"
    }, {
        text: "appointments[4]"
    }, {
        text: "appointments[5]"
    }];*/

    /*$scope.displayAppointments = function () {
        if ($scope.petname == "Moe") {
            $scope.appointments.splice(3, 3)
        } else if ($scope.petname == "Riley") {
            $scope.appointments = [{
                text: "Riley grooming apt 6/13/16"
            }, {
                text: "Riley grooming apt 7/5/16"
            }, {
                text: "Riley vet appointment 11/16/16"
            }, {
                text: "appointments[3]"
            }, {
                text: "appointments[4]"
            }, {
                text: "appointments[5]"
            }]
            return $scope.appointments.splice(3, 3)
        } else {
            $scope.appointments = [{
                text: "Error"
            }]
        }
        return $scope.appointments
    };*/
    $scope.riley = [{
        text: "Riley grooming apt 6/13/16"
    }, {
        text: "Riley grooming apt 7/5/16"
    }, {
        text: "Riley vet appointment 11/16/16"
    }];

    $scope.moe = [{
        text: "Moe grooming apt 6/3/16"
    }, {
        text: "Moe grooming apt 7/15/16"
    }, {
        text: "Moe vet appointment 9/16/16"
    }];

    $scope.appointments = [];

    $scope.displayAppointments = function () {
        if ($scope.petname == "Moe") {
            $scope.appointments = $scope.moe;
        } else if ($scope.petname == "Riley") {
            $scope.appointments = $scope.riley;
        } else {
            $scope.appointments = function () {
                return "error";
            }
        }
        return $scope.appointments;
        //return $scope.displayAppointments();
    };
    //console.log($scope.appointments);

    $scope.addAppointments = function () {
        if ($scope.addText.length >= 1) {
            $scope.appointments.push({
                text: $scope.addText
            });
        }
        $scope.addText = "";
    };

    /*$scope.addAppointments = function () {
        if ($scope.addText.length >= 1) {
            $scope.appointments.push({
                text: $scope.addText
            });
        }
        $scope.addText = "";
    };*/


    /*$scope.checkAppointments = function (appointment) {
        if (appointment.done == true) {
            console.log(appointment);
            delete appointment;
        }
    };*/

    $scope.customArrayRemove = function (arr, item) {
        //for (var i = arr.length; i--;) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            console.log(item);
            if (arr[i] === item) {
                console.log("deleting");
                arr.splice(i, 1);
            }
            //console.log(arr[i]);
        }
        return arr;
    }

    $scope.clearCompleted = function () {
        //console.log($scope.appointments);
        var doneAppointments = $scope.appointments;
        //$scope.appointments = [];
        //var doneEvents = $scope.events;
        //$scope.events = [];
        angular.forEach(doneAppointments, function (appointment) {
            //console.log(appointment.done);
            if (appointment.done == true) {
                $scope.appointments = $scope.customArrayRemove($scope.appointments, appointment);
                //$scope.appointments.pop(this.appointment);
                //$scope.appointments.push(appointment);
            }

        });
        /*angular.forEach(doneEvents, function (event) {
            if (!event.done) {
                $scope.events.push(event);
            }
        });*/
        console.log($scope.appointments);
    };


}]);
