var App = angular.module('App', []);

App.factory('userFactory', ['$http', function($http) {

    // private variables
    var _users = [];

     return {
         // model data
         model: { users: _users },
         
         load : function() {
             // load logic here

             $http.get('list.json')
                 .then(function(res){
                     for (var i = 0; i < res.data.length; i++)
                      _users.push(res.data[i]);
                 });
         },
         
         first :  {order : "first"},

         last : {order: "last"},

         reOrder : {order: ""}
         }
     
}]);


App.controller('appCtrl',['userFactory', '$scope', function(userFactory, $scope) {

userFactory.load();
$scope.list = userFactory.model.users;

$scope.showBool = false;
$scope.button= {text:"load"};

$scope.sortFirst = function() {
    $scope.sortOrder = userFactory.first.order;
}

$scope.sortLast = function() {
    $scope.sortOrder = userFactory.last.order;
}

$scope.reOrder = function() {
    $scope.sortOrder = userFactory.reOrder.order;
}

$scope.reload = function() {
    $scope.showBool = !$scope.showBool;

    if ($scope.showBool)
        $scope.button= {text:"reload"};
    else
        $scope.button= {text:"load"};
}
}]);
