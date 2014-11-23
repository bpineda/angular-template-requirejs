define([], function() {
    return [    '$scope',
                '$http',
                '$route',
                '$location',
                '$rootScope',
                function(   $scope,
                            $http,
                            $route,
                            $location,
                            $rootScope)
                {

                    $scope.current_url = $route.current.originalPath;
                    $scope.isLoggedIn = true;

                    $scope.$on("$locationChangeStart", function(event, next, current) {
                    var current_page_array = next.split('/');
                    var current_page = current_page_array.pop();
                    $scope.current_url = '/' + current_page;
                    //console.log(current_page);
                    if(current_page == 'exit')
                    {

                        $rootScope.isLoggedIn = false;

                    }
                  });
                    $scope.$apply();

                }];
});