var App = angular.module('App', []);

App.factory('userFactory', userFactory);

function userFactory() {

    function _load() {
        // load logic here
        _users = [ { first: 'jay', last: 'desm' } ];
    }


    // some private variables
    var _users = [];
    var _service {
        // model data
        model: { users: _users },
        load:  _load
    }
    return _service; // exposes _service which contains references
}


App.controller('appCtrl',['$scope','$http', function($scope, $http) {

    $http.get('list.json')
        .then(function(res){
            $scope.list = res.data;
        });

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
