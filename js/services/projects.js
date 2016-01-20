app.factory('projects', ['$http', function($http) {
var data = {
  "project": [
    {
      "name": "Website",
      "image":"img/website.png",
      "update": "2016-01-12",
      "info": "My Website, Made using Angular Javascript, HTML and CSS",
      "extra":"",
      "link1":"",
      "github":"Source code at github: ",
      "gitimage":"img/smallgit.png",
      "link2":"https://github.com/SirMrJames/Website"
    },
    {
      "name": "JS Text Game (incomplete)",
      "image":"img/textbasedgame.png",
      "update": "2016-01-10",
      "info": "Made in JavaScript. Basically done to practice objects, and other javascript tools. Also uses some HTML",
      "extra": "Click Here to Play",
      "link1":"http://www.jamessalehi.com/game.html",
      "github":"Source Code at github:",
      "gitimage":"img/smallgit.png",
      "link2":"https://github.com/SirMrJames/Fortress-JS-TEXT-GAME"
    },
    {
      "name": "Biology Thesis",
      "image":"img/thesis.png",
      "update": "2014-04-23",
      "info": "Thesis done in my Biology Undergraduate on The effect of Octopamine , heavily used Skillspector and Microsoft Office as well as did a lot of Lab work, worked mostly individually but guided by Professor Jeff Dawson.  ",
      "extra":"Click Here to read the Thesis",
      "link1":"/thesis.pdf",
      "github":"",
      "gitimage":"",
      "link2":""
    },
  ]
};
return data;
}]);
