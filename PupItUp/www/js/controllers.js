/**
 * Created by otcincmac on 4/10/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state) {
    numbs = [1,2,3];
    $scope.switchPage = function(){
      var rand = numbs[Math.floor(Math.random()*numbs.length)];
      if (rand === 1){
        document.location.href= "#/Dog1";
      }
      else if (rand === 2){
        document.location.href= "#/Dog2";
      }  
      else{
        document.location.href ="#/Dog3";
      }
    }
  })
  .controller('Dog1Ctrl', function($scope){

  })

.controller('Dog2Ctrl', function($scope){

})
.controller('Dog3Ctrl', function($scope){

});
