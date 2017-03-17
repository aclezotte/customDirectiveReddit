var app = angular.module("customReddit");

app.factory("redditFactory", function($http){
    
    var jsonObject = {};
    
    return {
        
        getReddit: function() {
            var promise = $http({
                method: "GET",
                url: "https://www.reddit.com/r/aww.json"
            }).then(function successCallback(response) {
                jsonObject = response;
                console.log(jsonObject);
            });

            return promise;
        },
        returnReddit: function() {
            console.log(jsonObject);
            return jsonObject;
        }
        
    };
    
});