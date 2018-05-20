(function () {
   'use strict';

    angular.module('app', [])
        .controller('MyController', [ '$scope', function($scope){
          $scope.projects = [
            {
              title:"Pomodoro Clock",
              description:"A pomodoro clock designed to help you stay focused on work. Adjustable work session and break times in a convenient UI. ",
              url:"#",
              background:"content/placeholder1.png"
            },
            {
              title:"Tic Tac Toe",
              description:'Try your hand at Tic Tac Toe against the Minimax algorithm. It hasn\'t been beaten yet. ',
              url:"#",
              background:"content/placeholder1.png"
            },
            {
              title:'Simon',
              description:'Test your memory with a game of Simon. Can be set to strict mode which will set you back to the beginning if you make a mistake. ',
              url:"#",
              background:"content/placeholder1.png"
              
            },
            {
              title:'Wiki-Viewer',
              description:'Search wikipedia for interesting articles',
              url:"#",
              background:"content/placeholder1.png"
            },
            {
              title:'Javascript Calculator',
              description:'A functional online calculator made with Javascript and JQuery',
              url:"#",
              background:"content/placeholder1.png"
            },
            {
              title:'Quote Generator',
              description:'Generates quotes using a free API. Find a quote you like and post it to Twitter',
              url:"#",
              background:"content/placeholder1.png"
            }]
        }
      
    ]);

})();