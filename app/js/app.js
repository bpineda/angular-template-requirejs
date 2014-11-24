'use strict';

define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'factories',
	'angularRoute',
	'angularResource',
	],	function (	angular,
	             		filters,
	             		services,
	             		directives,
	             		controllers,
	             		factories
	             	)
			{

				// Declare app level module which depends on filters, and services

				return angular
								.module('myApp', [	'ngRoute',
								        						'ngResource',
																		'myApp.filters',
																		'myApp.services',
																		'myApp.directives',
																		'myApp.controllers'
																				])
								.constant(	'API_HOST',
								          	'http://www.telize.com')
				;

			}
);
