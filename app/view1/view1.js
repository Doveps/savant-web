'use strict';

angular.module('myApp.view1', ['ngRoute']) //Does that work? ['ngRoute'] 'myApp.view1'
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', [ '$scope', '$log', '$http', function($scope, $log, $http) {
  $scope.name = '';
  $scope.age;
  $scope.names = [{name:"Chris", age: 10}, {name:"Calvin", age: 15},]; //Those things are hashes. Name set to thing. Thing set to property.
  
  //Toggle hide/show table column
  //So... It's supposed to modify the class on the spot but it doesn't.
  $scope.class = "";
  
  $scope.changeClass = function(){
    //$log.debug("hey"); //Okay that's called
    if($scope.class === ""){ //It toggles, but the CSS doesn't change.
      //$log.debug("hey 2");
      $scope.class = "hideColumn";
    }
    else{
      //$log.debug("hey 3");
      $scope.class = "";
    }
  }

  //Hide and show date column
  $scope.class2 = "";
  
  $scope.changeClass2 = function(){
    //$log.debug("hey"); //Okay that's called
    if($scope.class2 === ""){ //It toggles, but the CSS doesn't change.
      //$log.debug("hey 2");
      $scope.class2 = "hideColumn";
    }
    else{
      //$log.debug("hey 3");
      $scope.class2 = "";
    }
  }

  //Hide and show ID column
  
  $scope.class3 = "";
  
  $scope.changeClass3 = function(){
    //$log.debug("hey"); //Okay that's called
    if($scope.class3 === ""){ //It toggles, but the CSS doesn't change.
      //$log.debug("hey 2");
      $scope.class3 = "hideColumn";
    }
    else{
      //$log.debug("hey 3");
      $scope.class3 = "";
    }
  }

  $scope.addName = function() {
    $scope.names.push( {'name':$scope.name, 'age':$scope.age} );
    
    $scope.name = '';
    $scope.age = 0;
    $scope.$log = $log;
    $scope.message = "what";
    log.debug("Does this button work?");
/*
    $scope.ids = '';
    $scope.times = '';

    $scope.things = [{ids:response.data}];
    $log.debug(response.data.secondary_id);
    $scope.things.push({'ids':$scope.ids});
    //$log.debug($scope.names);
*/
  };
   $http({
        method: 'GET',
        url: 'http://localhost:5000/snapshots',
        headers: {'Content-Type':'text/plain'}
     }).then(function successCallback(response){
       $log.debug('hello!!!');
       //$log.debug(response.data);
       var arrayLength = response.data.length;
       var arrayTest = ["Test1", "Test2", "Test3"];
       
       $scope.ids;
       $scope.timestamps;
       $scope.things = [];

       for(var i = 0; i < arrayLength; i++){
         //$log.debug(arrayTest[i]);
         //console.log(arrayTest[i]);

         $scope.things.push({'ids':response.data[i].secondary_id, 'timestamps':Math.floor(response.data[i].timestamp)});  
       }
      /*
      $scope.addThings = function(){
        $scope.things.push({'thing1':$scope.thing1});

      }
     */
    }, function errorCallback(response){
       $log.debug('hello!?');
       //$log.debug(response.data);
     }
    
     );
    
     /*
     $http.get("http://jsonplaceholder.typicode.com/").then(function(response){
       $log.debug(response.data);
       
     });
     */
     /*
     $http.get("http://jsonplaceholder.typicode.com/").then(function(response){
       //$scope.snapshots = response.data;
       //$log.debug($scope.snapshots);
       $log.debug(response.data); 
     });
     */
   
}]);

//http://localhost:5000/snapshots
/*
$scope.id;
$scope.things = [{id: $scope.snapshots.secondary_id}];
$scope.addThing = function(){
  

}
*/

/*
function createCORSRequest(method, url){
  var xhr = new XMLHttpRequest();

}
*/