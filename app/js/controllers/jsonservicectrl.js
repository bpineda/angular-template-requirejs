define([], function() {
  return [  '$scope',
            '$http',
            'GetLocation',
            function( $scope,
                      $http,
                      GetLocation)
            {

              console.log(123);
              $scope.welcomeMessage = 'JSON Service Controller';

              $scope.$apply();

            }];
});
