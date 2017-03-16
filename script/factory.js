var app = angular.module("customReddit");

app.factory("redditFactory", function($http){
    
    var jsonObject = {};
    
    return {
        
        getReddit: function(subreddit) {
            var promise = $http({
                method: "GET",
                url: "https://www.reddit.com/r/aww.json"
            }).then(function successCallback(response) {
                jsonObject = response;
                console.log(jsonObject);
            });

            return promise;
        },
        returnReddit: function() {    //return the object to the controller
            return jsonObject;
        }
        
    };
    
});