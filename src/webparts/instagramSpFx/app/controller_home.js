var InstagramSPFx = angular.module('instafeed', ['ui.bootstrap']);
var user_id = '464793431';
var access_token = '464793431.64a12cb.9e7f0e0fd8ba4361be3205810e02cb73';

 InstagramSPFx.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPhotos : function(callback) {
        var endpoint = 'https://api.instagram.com/v1/users/';
        endpoint += user_id;
        endpoint += '/media/recent/?';
        endpoint += '?count=99';
        endpoint += '&callback=JSON_CALLBACK';
        endpoint += '&access_token=' + access_token;
        $http.jsonp(endpoint)
        .success(function(response) {
          callback(response.data);
        })
        .error(function(xhr, status, err) {
          console.error(status, err);
        })
      }
    }
  }]);

  InstagramSPFx.controller('ShowImages', function($scope, InstagramAPI) {
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];

    InstagramAPI.fetchPhotos(function(data) {
      $scope.pics = data;
    });
  });