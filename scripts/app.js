angular.module('simple-signup', [
	'ngAnimate'
])
.directive('optIn', [
	function () {
		return {
			restrict: 'E',
			replace: true,
			transclude: true,
			templateUrl: 'templates/optIn.html',
			link: function (scope, element, attributes) {
				
			}
		};
	}
]);