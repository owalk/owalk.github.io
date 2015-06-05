var App = angular.module('App', []);

App.factory('userFactory', function() {

    // some private variables
    var _users = [];
/*
  //I want to use this but it was giving errors about a semi colon when i had it included?
    var _service {
       // model data
       model: { users: _users },
       load:  _load
    };
*/   

     function _load() {
        // load logic here
     var users = [  { first: "john", last: "doe" } ];
        //once this is working, get data from external find.
}
     return users; // exposes _service which contains references
});


App.controller('appCtrl',['$scope','$http', function($scope, $http) {

    $http.get('list.json')
        .then(function(res){
            $scope.list = res.data;
        });

//I think this line isn't correct, so keeping it as a comment till i figure out syntax.
//$scope.list = userFactory.users;

$scope.showBool = false;
$scope.button= {text:"load"};

$scope.sortFirst = function() {
    $scope.sortOrder = 'first';
}

$scope.reOrder = function() {
    $scope.sortOrder = 'reorder';
}

$scope.sortLast = function() {
    
    $scope.sortOrder = 'last';
}

$scope.reload = function() {
    $scope.showBool = !$scope.showBool;

    if ($scope.showBool)
        $scope.button= {text:"reload"};
    else
        $scope.button= {text:"load"};
}
}]);
