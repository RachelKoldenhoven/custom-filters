app.controller('myController', function($scope) {

  $scope.friends = [
    {
      name: 'Michael'
    },
    {
      name: 'Wes'
    },
    {
      name: 'Robby'
    },
    {
      name: 'Zach'
    }
  ];

});


app.controller('zenController', function($scope, $http){


  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
  });

  $http.get('../app/music.json').then(function(data) {
    $scope.musicData = data.data.results;
  })

});