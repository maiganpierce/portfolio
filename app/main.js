(function () {
   'use strict';

    angular.module('app', [])
        .controller('MyController', [ '$scope', function($scope){
          $scope.projects = [
            {
              title:"Twitch Status App",
              description:"An application that displays a list of your favorite Twitch streamers and their current status. Uses JavaScript, HTML, CSS, AngularJS, Bootstrap",
              url:"https://maiganpierce.github.io/Twitch-Status-App/",
              background:"content/placeholder1.png"
            },
            {
              title:"Weather App",
              description:'An application that displays the weather at your current location. Uses HTML, CSS, JavaScript, AngularJS',
              url:"#",
              background:"content/placeholder1.png"
            },
            {
              title:'Random Quote Machine',
              description:'Application that generates quotes using a free API. If you find a quote you like, easily post it to Twitter! Uses JavaScript, AngularJS, HTML, CSS, Bootstrap',
              url:"https://codepen.io/maiganpierce/full/GMebGO/",
              background:"content/placeholder1.png"
            }]
        }
      
    ]);

})();