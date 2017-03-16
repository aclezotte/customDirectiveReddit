var app = angular.module("customReddit", []);

app.controller("redditCtrl", ["$scope", "$http", "redditFactory", function($scope, $http, redditFactory){
    
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
    
    $scope.jsonObject = {};
    
    var promise = $http({
            method: "GET",
            url: "https://www.reddit.com/r/aww.json"
        }).then(function successCallback(response) {
            $scope.jsonObject = response;
            console.log($scope.jsonObject);
        });
    
    return promise;
    
    $scope.posts = $scope.jsonObject.data.data.children;
    console.log($scope.posts);
    
    // redditFactory.getReddit();
    
    // $scope.jsonInfo = redditFactory.returnReddit();
    // console.log($scope.jsonInfo);
    
}]);

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

app.directive("sideBar", function() {
    
    return {
        restrict: "E",
        templateUrl: "sidebar.html",
        replace: false
    };
    
});