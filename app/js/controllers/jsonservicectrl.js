define([], function() {
  return [  '$scope',
            '$http',
            'GetLocation',
            function( $scope,
                      $http,
                      GetLocation)
            {

              $scope.callJSONService =  function()
                                        {

                                          //
                                          GetLocation.get(  function( response )
                                                            {

                                                              $scope.JSONLocationData = response;

                                                            },
                                                            function( error )
                                                            {

                                                              alert('error');

                                                            });

                                        }
              $scope.welcomeMessage = 'JSON Service Controller';
              $scope.callJSONService();

              $scope.$apply();

            }];
});
