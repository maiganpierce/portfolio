(function () {
	'use strict';

	angular.module('app', [])
		.controller('MyController', [ '$scope', '$window', function($scope, $window)
		{
			$scope.projects = [
			{
				title:"Twitch Status App",
				description:"Uses JavaScript, HTML, CSS, AngularJS, Bootstrap",
				url:"https://maiganpierce.github.io/Twitch-Status-App/",
				background:"content/placeholder1.png"
			},
			{
				title:"Weather App",
				description:'Uses HTML, CSS, JavaScript',
				url:"https://codepen.io/maiganpierce/full/veMmgw/",
				background:"content/placeholder1.png"
			},
			{
				title:'Random Quote Machine',
				description:'Uses JavaScript, AngularJS, HTML, CSS, Bootstrap',
				url:"https://codepen.io/maiganpierce/full/GMebGO/",
				background:"content/placeholder1.png"
			}];

			$scope.onClickProject = function(url){
				$window.open(url, '_blank');
			};

		}]);

})();