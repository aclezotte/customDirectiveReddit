var app = angular.module("customReddit", []);

app.controller("redditCtrl", ["$scope", "$http", function($scope, $http){
    
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
    
    $scope.posts = [
        {
            title: "Very proud mama",
            thumb: "https://a.thumbs.redditmedia.com/qzcNN6Z75dO01dkkhaP2401jKMNF9Exi5BhnRwm6vf0.jpg",
            link: "https://www.reddit.com/r/aww/comments/5zq000/very_proud_mama/"
            
        },
        {
            title: "Corgi races are a thing",
            thumb: "https://b.thumbs.redditmedia.com/WozcPuILWZF77RtWU13SkffvcblrBCKcXmuzjJ8te1k.jpg",
            link: "https://www.reddit.com/r/aww/comments/5zq7nr/corgi_races_are_a_thing/"
            
        },
        {
            title: "I got it, I got it...FLOOOP",
            thumb: "https://b.thumbs.redditmedia.com/kU9afVoh3OFZeAbcKGS9FHexvoivVdjpZ30O5scYc5c.jpg",
            link: "https://www.reddit.com/r/aww/comments/5znxw2/i_got_it_i_got_itflooop/"
            
        }    
    ];
    
     $scope.jsonObject = [];
    
    $scope.subTab = "";
    
    $scope.noSticky = false;
    
    $scope.setTab = function(tab, hot){
        $scope.subTab = tab;
        if(hot){
            $scope.noSticky = false;
        }else{
            $scope.noSticky = true;
        }
        $scope.getReddit();
    };
    
     $scope.getReddit = function(){
         $http({
             method: "GET",
             url: "https://www.reddit.com/r/aww" + $scope.subTab + ".json"
         }).then(function successCallback(response) {
             $scope.jsonObject = response.data.data.children;
         });
     }
     
     $scope.getReddit();
    
}]);

app.directive("linkBar", function(){
    
    return {
        restrict: "E",
        templateUrl: "view/links.html",
        replace: false
    };
    
});

app.directive("animalHeader", function(){
    
    return {
        restrict: "E",
        templateUrl: "view/header.html",
        replace: false
    };

});

app.directive("tabBar", function() {
    
    return {
        restrict: "E",
        templateUrl: "view/tabs.html",
        replace: false
    };
    
});

app.directive("sideBar", function() {
    
    return {
        restrict: "E",
        templateUrl: "view/sidebar.html",
        replace: false
    };
    
});

app.directive("redditPosts", function() {
    
    return {
        restrict: "E",
        templateUrl: "view/posts.html",
        replace: false
    };
    
});