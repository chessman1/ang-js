var app = angular.module("angularApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider


        .when("/", {
        templateUrl: "home.html",
        controller: "mainController"
    })


    .when("/about", {
        templateUrl: "about.html",
        controller: "aboutController"
    })


    .when("/contact", {
        templateUrl: "contacts.html",
        controller: "contactController"
    });
});


app.controller("mainController", function($scope) {
    $scope.message = "Hello! Welcome to our website!";
});

app.controller("aboutController", function($scope) {
    $scope.message = "This is our website info!";
});

app.controller("contactController", function($scope) {
    $scope.message = "Contact us!";
});
