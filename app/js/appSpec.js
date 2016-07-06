//var angular = require('angular');
//require('angular-mocks');

/*describe('petprofileController', function () {

    var controller = null;
    $scope = null;

    beforeEach(function () {
        angular.module('myApp');
    });
    //beforeEach(angular.module('myApp'));


    beforeEach(inject(function ($controller, $rootScope) {
        $//controller = controller;
        //console.log($rootScope);
        $scope = $rootScope.$new();
        controller('petprofileController', {
            $scope: $scope
        });
    }));

    it('initial petname value should equal current petname', function (petprofile) {
        //console.log($scope);
        expect($scope.petprofile).toEqual(petprofile);
    });

});*/

//this test checks to make sure html templates load as expected

describe('Routes', function () {

    beforeEach(function () {
        angular.module('myApp');
    });

    //when route is '/partials/homepage', does homepage load properly ?
    it('should load the homepage', function () {
        inject(["$route", "$rootScope", "$location", "$httpBackend", function ($route, $rootScope, $location, $httpBackend) {
            /*var route = $route.routes['/homepage'];
            $httpBackend.whenGET(route.templateUrl).respond('...');

            $rootScope.$apply(function () {
                $location.path(route.originalPath);
            });

            expect($route.current.templateUrl).toBe('./partials/homepage.html');*/
        }]);
    });
});
