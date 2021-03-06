'use strict';

define(['angular', 'services'], function (angular)
{

	/* Controllers */

	return angular.module('myApp.controllers', ['myApp.services'])
		// Sample controller where service is being used

		.controller('NavCtrl',
		            	['$scope',
		            	'$injector',
		            	'$route',
		            	'$location',
		            	function (	$scope,
		            	          	$injector,
		            	          	$route,
		            	          	$location)
		            	{

										require(['controllers/navctrl'], function(navctrl)
										{

											$injector.invoke(navctrl, this, {'$scope': $scope});

										});

									}])

		.controller(	'MyCtrl1',
		            	[	'$scope',
		            		'version',
		            		function (	$scope,
		            		          	version)
		            		{

											$scope.scopedAppVersion = version;
											$scope.title = 'View 1';

										}])

		// More involved example where controller is required from an external file
		.controller(	'MyCtrl2',
		            	[	'$scope',
		            		'$injector',
		            		function(	$scope,
		            		         	$injector)
		            		{

											require(	['controllers/myctrl2'],
											        	function( myctrl2 )
											        	{

																	// injector method takes an array of modules as the first argument
																	// if you want your controller to be able to use components from
																	// any of your other modules, make sure you include it together with 'ng'
																	// Furthermore we need to pass on the $scope as it's unique to this controller

																	$injector.invoke(myctrl2, this, {'$scope': $scope});

																});

										}])

		.controller(	'JsonServiceCtrl',
		            	[	'$scope',
		            		'$injector',
		            		function(	$scope,
		            		         	$injector)
		            		{

											require(	['controllers/jsonservicectrl'],
											        	function( jsonservicectrl )
											        	{

																	// injector method takes an array of modules as the first argument
																	// if you want your controller to be able to use components from
																	// any of your other modules, make sure you include it together with 'ng'
																	// Furthermore we need to pass on the $scope as it's unique to this controller

																	$injector.invoke(jsonservicectrl, this, {'$scope': $scope});

																});

										}])

		;//End of all controllers

});
