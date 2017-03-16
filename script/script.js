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
    
});

app.directive("linkBar", function(){
    
    return {
        restrict: "E",
        templateUrl: "links.html",
        replace: false
    };
    
});