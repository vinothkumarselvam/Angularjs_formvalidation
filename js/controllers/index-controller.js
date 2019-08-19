// callback function parameter use the scope dependies.
// Scope is a speical javascript object which plays the role of joining controller with the views.
app.controller('IndexController',['$scope',function($scope) {
    $scope.message = "Login Form";
    $scope.PostData = function(){
        alert("Username: "+$scope.username+"\n Password: "+$scope.password);
    };

    $scope.languages = [
        {
            "lang_id"  : "1",
            "name"  : "Javascript",
            "version"  :  1.5,
        },
        {
            "lang_id"  : "2",
            "name"  : "PHP",
            "version"  :  7.5,
        },
        {
            "lang_id"  : "3",
            "name"  : "Angularjs",
            "version"  :  1.5,
        }
    ];


    

    $scope.onSubmit = function(){
        console.log($scope.user);
    }; 



}]);