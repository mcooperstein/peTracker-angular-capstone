app.controller('MainController', ['$scope', '$addEvents', '$checkEvents', '$clearCompleted', function ($scope, $addEvents, $checkEvents, $clearCompleted) {
    $scope.today = new Date();

    $scope.petprofile = [
        //Riley
        {
            petname: 'Riley',
            image: 'images/Riley.jpg',
            medical: {
                neutered: 'Moe was neutered at SPCA on 1/25/16',
                rabies: 'Got all shots/vaccinations on 3/3/16',
                checkup: '1 year checkup at Vet on 5/30/16'
            }
        },
        //Moe
        {
            petname: 'Moe',
            image: 'images/Moe.jpg'
        }
    ];
}]);

app.controller('moeController', ['$scope', '$addEvents', '$checkEvents', '$clearCompleted', function ($scope, $addEvents, $checkEvents, $clearCompleted) {
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
}]);

app.controller('petprofileController', ['$scope', '$addEvents', '$checkEvents', '$clearCompleted', function ($scope, $addEvents, $checkEvents, $clearCompleted) {

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

app.controller('dailylogController', ['$scope', '$addEvents', '$checkEvents', '$clearCompleted', function ($scope, $addEvents, $checkEvents, $clearCompleted) {
    $scope.events = [];

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

app.controller('medicalController', ['$scope', '$addEvents', '$checkEvents', '$clearCompleted', function ($scope, $addEvents, $checkEvents, $clearCompleted) {





}]);
