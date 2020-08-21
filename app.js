(function () {
'use strict';

angular.module('CheckerApp', [])
.controller('CheckerController', CheckerController);
CheckerController.$inject=['$scope'];
function CheckerController ($scope) {
  $scope.name ="";
  $scope.message="Please enter data first";
  $scope.count=0;
  $scope.checkItemCount=function(){
      var x=$scope.name.split(",");
      x=x.filter(Boolean);
      $scope.count=x.length;
      sayMessage($scope.count);
  }
  function sayMessage(){
    if( $scope.count ===0){
      $scope.message="Please enter data first";
    } else if($scope.count>=1 && $scope.count<=3){
      $scope.message="Enjoy!";
    } else{
      $scope.message="Too much!";
    };
  }
}
})();
