'use strict';

define(['angular'], function (angular)
{

    /* Factories */

    return angular.module('myApp.factories', [])

        /**
        Factory Examples:
        .factory(   'ExampleMethod1',
                    function ( $resource )
                    {

                        return $resource( 'http://path-to-the-service/' );

                    })
        .factory(   'ExampleMethod2',
                    function (  $resource,
                                VAR1,
                                VAR2)
                    {

                        return $resource( VAR1 + '/method/?param1=0&param2=' + VAR2);

                    })
        */

        .factory(   'GetLocation',
                    function ( $resource )
                    {

                        return $resource( 'http://www.telize.com/geoip?callback' );

                    })


});