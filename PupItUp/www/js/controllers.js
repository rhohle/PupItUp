/**
 * Created by otcincmac on 4/10/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state) {
    numbs = [1,2,3,4,5,6];
    $scope.switchPage = function(){
      var rand = numbs[Math.floor(Math.random()*numbs.length)];
      if (rand === 1){
        document.location.href= "#/Dog1";
      }
      else if (rand === 2){
        document.location.href= "#/Dog2";
      }
      else if (rand === 3){
        document.location.href= "#/Dog3";
      }
      else if (rand === 4){
        document.location.href= "#/Dog4";
      }
      else if (rand === 5){
        document.location.href= "#/Dog5";
      }
      else{
        document.location.href ="#/Dog6";
      }
    }
  })
  .controller('Dog1Ctrl', function($scope){

  })

.controller('Dog2Ctrl', function($scope){

})
.controller('Dog3Ctrl', function($scope){

})
.controller('Dog4Ctrl', function($scope){

})
.controller('Dog5Ctrl', function($scope){

})  
.controller('Dog6Ctrl', function($scope){

  });
