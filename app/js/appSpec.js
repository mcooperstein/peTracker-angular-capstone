//this test checks to make sure html templates load as expected

describe("Routes", function () {
    beforeEach(module("myApp"));

    //when route is '/partials/homepage', does homepage load properly ?
    it("should load the homepage", function () {
        inject(["$route", "$rootScope", "$location", "$httpBackend", function ($route, $rootScope, $location, $httpBackend) {
            var route = $route.routes["/homepage"];
            $httpBackend.whenGET(route.templateUrl).respond("...");

            $rootScope.$apply(function () {
                $location.path(route.originalPath);
            });

            expect($route.current.templateUrl).toBe("./partials/homepage.html");
        }]);
    });
});
