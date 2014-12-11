angular.module('app.controllers', [])
	.factory('settings', ['$rootScope', function($rootScope) {
		var settings = {};
		return settings;
	}])

	.controller('BodyCtrl', ['$routeParams', '$scope', '$location', '$window',
		function($routeParams, $scope, $location, $window) {}
	])
	.controller('NavCtrl', ['$rootScope', '$scope', '$location',
		function($rootScope, $scope, $location) {
			$scope.topPath = '';
			$rootScope.$on('$routeChangeStart', function(event) {

			});
			$rootScope.$on('$routeChangeSuccess', function() {
				var locations = $location.path().split('/');
				if (locations.length > 1) {
					$scope.topPath = locations[1];
				} else {
					$scope.topPath = '';
				}
			});
		}
	])
	.controller('MailCtrl', ['$scope', '$route', '$animate', function($scope, $route, $animate) {

	}])
	.controller('SettingsCtrl', ['$scope', '$route', '$animate', function($scope, $route, $animate) {

	}])
	.controller('ComposeCtrl', ['$scope', '$route', '$animate','$q', function($scope, $route, $animate, $q) {
		// use summernote for creating message contents
		$scope.options = {
			focus: true,
			height: 230,
			minHeight: 210,
			toolbar: [
				['style', ['bold', 'italic', 'underline']],
				['fontsize', ['fontsize']],
				['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['height', ['height']]
			]
		};
		$scope.componseText = '';

		// use angular tags for who the message is to
		$scope.tags = [];
		$scope.loadTags = function() {
            var deferred = $q.defer();
            deferred.resolve([{ text: 'acolby@live.com' },{ text: 'Tag10' }]);
            return deferred.promise;
	    };



	}]);