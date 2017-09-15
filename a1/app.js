(function(){
  'use strict'
  angular.module('CountLunch', [])
  .controller('CountLunchController', function($scope){
    $scope.lunchStr="";
    $scope.replyMsg="";
    $scope.countLunchItem = function()
    {
      console.log('scope.lunchStr: '+$scope.lunchStr)
      $scope.replyMsg=doCountLunch($scope.lunchStr);
    }

    function doCountLunch(lunchStr){
      var reply="Please enter data first";
      if(lunchStr!=""){
        var c=countTokens(lunchStr);
        console.log('Items count: '+c);
        if(c>3){
          reply="Too much!";
        }else {
          reply ="Enjoy!";
        }
      }
      return reply;
    }

    function countTokens(str){
      var toks = str.split(',');
      return toks.length;

    }


  });


})();
