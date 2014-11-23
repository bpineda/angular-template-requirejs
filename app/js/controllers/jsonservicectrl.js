define([], function() {
  return [  '$scope',
            '$http',
            function( $scope,
                      $http)
            {

              $scope.welcomeMessage = 'JSON Service Controller';

              $scope.$apply();

            }];
});
