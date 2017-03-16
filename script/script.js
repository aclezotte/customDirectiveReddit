var app = angular.module("customReddit", []);

app.controller("redditCtrl", function($scope){
    
    $scope.links = [
        "MY SUBREDDITS",
        "DASHBOARD",
        "FRONT",
        "POPULAR",
        "ALL",
        "RANDOM",
        "MYRANDOM",
        "FRIENDS",
        "SAVED",
        "EDIT"
    ];
    
    $scope.tabs = [
        "hot",
        "new",
        "rising",
        "controversial",
        "top",
        "gilded",
        "wiki"
    ];
    
});

app.directive("linkBar", function(){
    
    return {
        restrict: "E",
        templateUrl: "links.html",
        replace: false
    };
    
});

app.directive("animalHeader", function(){
    
    return {
        restrict: "E",
        templateUrl: "header.html",
        replace: false
    };

});

app.directive("tabBar", function() {
    
    return {
        restrict: "E",
        templateUrl: "tabs.html",
        replace: false
    };
    
});