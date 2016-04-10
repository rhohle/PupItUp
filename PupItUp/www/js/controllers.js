/**
 * Created by otcincmac on 4/10/16.
 */

angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope, $state) {
    $scope.switchPage = function(){
      document.location.href= "#/SmilePic";
    }
  })
  .controller('SmilePicCtrl', function($scope){

  });
