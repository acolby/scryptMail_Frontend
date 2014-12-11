var smartApp = angular.module('smartApp', [
  	'ngRoute',
  	//'ngAnimate', // this is buggy, jarviswidget will not work with ngAnimate :(
  	'ui.bootstrap',
  	'app.controllers',
  	'app.main',
  	'app.navigation',
  	'app.localize',
  	'app.activity',
  	'app.smartui',
  	'summernote',
  	'ngTagsInput'
]);

smartApp.config(['$routeProvider', '$provide', function($routeProvider, $provide) {
	$routeProvider
		.when('/mail', {
			templateUrl: 'views/controllers/mail.html',
			controller: 'MailCtrl'
		})
		.when('/settings', {
			templateUrl: 'views/controllers/settings.html',
			controller: 'SettingsCtrl'
		})
		.when('/compose', {
			templateUrl: 'views/controllers/compose.html',
			controller: 'ComposeCtrl'
		})
		.otherwise({
			redirectTo: '/mail'
		});

	// error logger
	$provide.decorator('$log', ['$delegate',
		function($delegate) {
			// create a new function to be returned below as the $log service (instead of the $delegate)
			function logger() {
				// if $log fn is called directly, default to "info" message
				logger.info.apply(logger, arguments);
			}

			// add all the $log props into our new logger fn
			angular.extend(logger, $delegate);
			return logger;
		}
	]); 

}]);