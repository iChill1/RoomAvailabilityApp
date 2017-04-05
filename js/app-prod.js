"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.firstloor = [{
			"id": 1,
			"rooms": "CompLab1",
			"name": "Computer Laboratory 1"
		}, {
			"id": 2,
			"rooms": "Imaclab",
			"name": "Imac Laboratory"
		}];

		this.secondFloor = [{
			"id": 1,
			"rooms": "Complab2",
			"name": "Computer Laboratory 2"
		}];

		this.thirdfloor = [{
			"id": 1,
			"rooms": "Complab 3",
			"name": "Computer Laboratory 3"
		}, {
			"id": 2,
			"rooms": "Ciscolab",
			"name": "Cisco Laboratory"
		}];

		this.fourthfloor = [{
			"id": 1,
			"rooms": "Room401",
			"name": "Room 401"
		}, {
			"id": 2,
			"rooms": "Room 402",
			"name": "Room 402"
		}, {
			"id": 3,
			"rooms": "Room 403",
			"name": "Room 403"
		}, {
			"id": 4,
			"rooms": "Room 404",
			"name": "Room 404"
		}, {
			"id": 5,
			"rooms": "Room 405",
			"name": "Room 405"
		}, {
			"id": 6,
			"rooms": "Room 400",
			"name": "Room 400"
		}, {
			"id": 7,
			"rooms": "Front Office",
			"name": "Front Office"
		}, {
			"id": 8,
			"rooms": "Restaurant Lab",
			"name": "HRM Minibar Laboratory"
		}];

		this.fifthfloor = [{
			"id": 1,
			"rooms": "Digital Lab",
			"name": "Digital Laboratory"
		}, {
			"id": 2,
			"rooms": "Enercon Lab",
			"name": "Enercon Laboratory"
		}, {
			"id": 3,
			"rooms": "Chem Lab",
			"name": "Chemistry Laboratory"
		}, {
			"id": 4,
			"rooms": "Physics Lab",
			"name": "Physics Laboratory"
		}, {
			"id": 5,
			"rooms": "AVR",
			"name": "Audio Visual Laboratory"
		}];

		this.floors = [{
			"id": 1,
			"floor": "1st ",
			"name": "Floor",
			"image": "img/1stfloor.png",
			"color": "red;",
			"onclick": "component.firstLoader()"

		}, {
			"id": 2,
			"floor": "2nd ",
			"name": "Floor",
			"image": "img/2ndfloor.png",
			"color": "blue;",
			"onclick": "component.secondLoader()"

		}, {
			"id": 3,
			"floor": "3rd ",
			"name": "Floor",
			"image": "img/3rdfloor.png",
			"color": "green;",
			"onclick": "component.thirdLoader()"

		}, {
			"id": 4,
			"floor": "4th ",
			"name": "Floor",
			"image": "img/4thfloor.png",
			"color": "purple;",
			"onclick": "component.fourthLoader()"

		}, {
			"id": 5,
			"floor": "5th ",
			"name": "Floor",
			"image": "img/5thfloor.png",
			"color": "teal;",
			"onclick": "component.fifthLoader()"

		}];
	}

	_createClass(App, [{
		key: "render",
		value: function render(html, component) {

			component.innerHTML += html;
		}
	}, {
		key: "reRender",
		value: function reRender(html, component) {

			component.innerHTML = html;
		}
	}]);

	return App;
}();

var Component = function (_App) {
	_inherits(Component, _App);

	function Component() {
		_classCallCheck(this, Component);

		return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));
	}

	_createClass(Component, [{
		key: "homePage",
		value: function homePage() {
			var html = "\n\t\t<br>\n\t\t\t\t<div class=\"center-align\">\n\t\t\t<img class=\"app_logo\"src=\"img/amalogo.png\" />\n\t\t\t</div>\n\t\t\t<h3 class=\"app_name\"><b>Room Availability</b></h3>\n\t\t\t<h6 class=\"app_desc\">Romaing Guard Dashboard</h6>\n\t\t\t<div class=\"center-align\">\n\t\t\t\t<img style=\"height: 220px;\" src=\"img/transparent.png\" />\n\t\t\t</div>\n\n\t\t\t<div class=\"center-align\">\n<br>\n  <a style=\"color: white; font-size: 23px;\"class=\"btn-floating btn-large waves-effect waves-light cyan\"onclick=\"component.preloader()\"><i class=\"material-icons\"></i><b>Room Schedules</b></a\n<div class=\"center-align\">\n\n<h6 class=\"color: black;\"><br><br><br><br><br>By John Edbriel Finney</h5>\n<h6 class=\"color: black;\">And Norberto Laudernorio</h5>\n<h6 class=\"color: black;\">@MobileProg</h5>\n</div>\n\n\t\t\t\t</div>\t\t\t\t\n\t\t\t</div>\n\t\t";
			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "preloader",
		value: function preloader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Loading Room Schedules. . .</b></h5>\n\t\t\t</center>\n\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.firstPage();
			}, 5000);
		}
	}, {
		key: "logoutLoader",
		value: function logoutLoader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Signing out. . .</b></h5>\n\t\t\t</center>\n\t\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.homePage();
			}, 3000);
		}
	}, {
		key: "firstLoader",
		value: function firstLoader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Loading 1st Floor. . .</b></h5>\n\t\t\t</center>\n\t\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.firstFloor();
			}, 3000);
		}
	}, {
		key: "secondLoader",
		value: function secondLoader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Loading 2nd Floor. . .</b></h5>\n\t\t\t</center>\n\t\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.secondFloor();
			}, 3000);
		}
	}, {
		key: "thirdLoader",
		value: function thirdLoader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Loading 3rd Floor. . .</b></h5>\n\t\t\t</center>\n\t\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.thirdFloor();
			}, 3000);
		}
	}, {
		key: "fourthLoader",
		value: function fourthLoader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Loading 4th Floor. . .</b></h5>\n\t\t\t</center>\n\t\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.fourthFloor();
			}, 3000);
		}
	}, {
		key: "fifthLoader",
		value: function fifthLoader() {
			var html = "\n\t\t\t<center style=\"margin-top:45%;\">\n\t\t\t<img style=\"height: 250px;\"src=\"img/LOADING.gif\">\n\t\t\t<h5 style=\"color: white;\"><b>Loading 5th Floor. . .</b></h5>\n\t\t\t</center>\n\t\t\t";
			this.reRender(html, $('#app')[0]);
			setTimeout(function () {
				component.FifthFloor();
			}, 3000);
		}
	}, {
		key: "firstPage",
		value: function firstPage() {
			(function ($) {
				$(function () {

					$('.button-collapse').sideNav();
				}); // end of document ready
			})(jQuery); // end of jQuery name space

			var html = "\n\t\t\t  <nav class=\"light-blue lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><b>Room Availability</b></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n      <div class=\"center-align\">\n        <img style=\"height: 280px;\"src=\"img/room.jpg\">\n        <h3 style=\"color: black; \"><b>Room Availability</b></h3>\n                <div class=\"divider\">\n        </div>\n        <div class=\"center-align\">\n                <li><a style=\"color: red; font-size: 23px;\"href=\"#\"onclick=\"component.firstLoader()\"><b>1st Floor</b></a></li>\n                 <li><a style=\"color: blue; font-size: 23px;\"href=\"#\"onclick=\"component.secondLoader()\"><b>2nd Floor</b></a></li>\n                  <li><a style=\"color: green; font-size: 23px;\"href=\"#\"onclick=\"component.thirdLoader()\"><b>3rd Floor</b></a></li>\n                   <li><a style=\"color: purple; font-size: 23px;\"href=\"#\"onclick=\"component.fourthLoader()\"><b>4th Floor</b></a></li>\n                    <li><a style=\"color: teal; font-size: 23px;\"href=\"#\"onclick=\"component.fifthLoader()\"><b>5th Floor</b></a></li>\n                      <li><div class=\"divider\"></div></li>\n                 <li><a style=\"color: black; font-size: 23px;\"href=\"#\" onclick=\"component.logoutLoader()\"><b>Logout</b></a></li>\n                    </div>\n          \n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    </div>\n      </nav>\n    ";
			html += "\n    <div class=\"center-align\">\n\t\t\t<img style=\"height: 230px;\"src=\"img/school.jpg\" />\n\t\t\t</div>\n         <ul class=\"collection\">\n    ";

			for (var i = 0; i < this.floors.length; i++) {
				html += "\n\n\n    <li style=\"min-height: 96px; background-color: " + this.floors[i].color + " color: white;\"class=\"collection-item avatar\">\n      <img src=\"" + this.floors[i].image + "\" alt=\"\" class=\"circle\">\n      <span class=\"title\"><b>" + this.floors[i].floor + this.floors[i].name + "</b></span>\n      <p><b>AMACC Davao </b><br>\n         <b>Floor Building</b>\n      </p>\n      <a href=\"#\"onclick=\"" + this.floors[i].onclick + "\" class=\"secondary-content\"><i class=\"material-icons\" style=\"color: white;\"><b>input</b></i><p style=\"color: white;\"><b>Check</b></p></a>\n\n    </li>\n            \n\t\t\t";
			}
			html += "</ul>";

			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "firstFloor",
		value: function firstFloor() {
			(function ($) {
				$(function () {

					$('.button-collapse').sideNav();
				}); // end of document ready
			})(jQuery); // end of jQuery name space

			var html = "\n\t\t\t <nav class=\"light-blue lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><b>1st Floor</b></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n      <div class=\"center-align\">\n        <img style=\"height: 280px;\"src=\"img/1stfloor.png\">\n        <h3 style=\"color: black; \"><b>Room Availability</b></h3>\n                <div class=\"divider\">\n        </div>\n        <div class=\"center-align\">\n                <li><a style=\"color: red; font-size: 23px;\"href=\"#\"onclick=\"component.firstLoader()\"><b>1st Floor</b></a></li>\n                 <li><a style=\"color: blue; font-size: 23px;\"href=\"#\"onclick=\"component.secondLoader()\"><b>2nd Floor</b></a></li>\n                  <li><a style=\"color: green; font-size: 23px;\"href=\"#\"onclick=\"component.thirdLoader()\"><b>3rd Floor</b></a></li>\n                   <li><a style=\"color: purple; font-size: 23px;\"href=\"#\"onclick=\"component.fourthLoader()\"><b>4th Floor</b></a></li>\n                    <li><a style=\"color: teal; font-size: 23px;\"href=\"#\"onclick=\"component.fifthLoader()\"><b>5th Floor</b></a></li>\n                      <li><div class=\"divider\"></div></li>\n                 <li><a style=\"color: black; font-size: 23px;\"href=\"#\" onclick=\"component.logoutLoader()\"><b>Logout</b></a></li>\n                    </div>\n          \n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    </div>\n      </nav>\n";
			for (var i = 0; i < this.firstloor.length; i++) {
				html += "\n\t\t\t";
			}

			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "secondFloor",
		value: function secondFloor() {
			(function ($) {
				$(function () {

					$('.button-collapse').sideNav();
				}); // end of document ready
			})(jQuery); // end of jQuery name space

			var html = "\n\t\t\t\t\t <nav class=\"light-blue lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><b>2nd Floor</b></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n      <div class=\"center-align\">\n        <img style=\"height: 280px;\"src=\"img/2ndfloor.png\">\n        <h3 style=\"color: black; \"><b>Room Availability</b></h3>\n                <div class=\"divider\">\n        </div>\n        <div class=\"center-align\">\n                <li><a style=\"color: red; font-size: 23px;\"href=\"#\"onclick=\"component.firstLoader()\"><b>1st Floor</b></a></li>\n                 <li><a style=\"color: blue; font-size: 23px;\"href=\"#\"onclick=\"component.secondLoader()\"><b>2nd Floor</b></a></li>\n                  <li><a style=\"color: green; font-size: 23px;\"href=\"#\"onclick=\"component.thirdLoader()\"><b>3rd Floor</b></a></li>\n                   <li><a style=\"color: purple; font-size: 23px;\"href=\"#\"onclick=\"component.fourthLoader()\"><b>4th Floor</b></a></li>\n                    <li><a style=\"color: teal; font-size: 23px;\"href=\"#\"onclick=\"component.fifthLoader()\"><b>5th Floor</b></a></li>\n                      <li><div class=\"divider\"></div></li>\n                 <li><a style=\"color: black; font-size: 23px;\"href=\"#\" onclick=\"component.logoutLoader()\"><b>Logout</b></a></li>\n                    </div>\n          \n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    </div>\n      </nav>\n\n\t\t\t";

			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "thirdFloor",
		value: function thirdFloor() {
			(function ($) {
				$(function () {

					$('.button-collapse').sideNav();
				}); // end of document ready
			})(jQuery); // end of jQuery name space

			var html = "\n\t\t\t\t\t <nav class=\"light-blue lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><b>3rd Floor</b></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n      <div class=\"center-align\">\n        <img style=\"height: 280px;\"src=\"img/3rdfloor.png\">\n        <h3 style=\"color: black; \"><b>Room Availability</b></h3>\n                <div class=\"divider\">\n        </div>\n        <div class=\"center-align\">\n                <li><a style=\"color: red; font-size: 23px;\"href=\"#\"onclick=\"component.firstLoader()\"><b>1st Floor</b></a></li>\n                 <li><a style=\"color: blue; font-size: 23px;\"href=\"#\"onclick=\"component.secondLoader()\"><b>2nd Floor</b></a></li>\n                  <li><a style=\"color: green; font-size: 23px;\"href=\"#\"onclick=\"component.thirdLoader()\"><b>3rd Floor</b></a></li>\n                   <li><a style=\"color: purple; font-size: 23px;\"href=\"#\"onclick=\"component.fourthLoader()\"><b>4th Floor</b></a></li>\n                    <li><a style=\"color: teal; font-size: 23px;\"href=\"#\"onclick=\"component.fifthLoader()\"><b>5th Floor</b></a></li>\n                      <li><div class=\"divider\"></div></li>\n                 <li><a style=\"color: black; font-size: 23px;\"href=\"#\" onclick=\"component.logoutLoader()\"><b>Logout</b></a></li>\n                    </div>\n          \n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    </div>\n      </nav>\n\n\t\t\t";

			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "fourthFloor",
		value: function fourthFloor() {
			(function ($) {
				$(function () {

					$('.button-collapse').sideNav();
				}); // end of document ready
			})(jQuery); // end of jQuery name space

			var html = "\n\t\t\t\n\t\t <nav class=\"light-blue lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><b>4th Floor</b></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n      <div class=\"center-align\">\n        <img style=\"height: 280px;\"src=\"img/4thfloor.png\">\n        <h3 style=\"color: black; \"><b>Room Availability</b></h3>\n                <div class=\"divider\">\n        </div>\n        <div class=\"center-align\">\n                <li><a style=\"color: red; font-size: 23px;\"href=\"#\"onclick=\"component.firstLoader()\"><b>1st Floor</b></a></li>\n                 <li><a style=\"color: blue; font-size: 23px;\"href=\"#\"onclick=\"component.secondLoader()\"><b>2nd Floor</b></a></li>\n                  <li><a style=\"color: green; font-size: 23px;\"href=\"#\"onclick=\"component.thirdLoader()\"><b>3rd Floor</b></a></li>\n                   <li><a style=\"color: purple; font-size: 23px;\"href=\"#\"onclick=\"component.fourthLoader()\"><b>4th Floor</b></a></li>\n                    <li><a style=\"color: teal; font-size: 23px;\"href=\"#\"onclick=\"component.fifthLoader()\"><b>5th Floor</b></a></li>\n                      <li><div class=\"divider\"></div></li>\n                 <li><a style=\"color: black; font-size: 23px;\"href=\"#\" onclick=\"component.logoutLoader()\"><b>Logout</b></a></li>\n                    </div>\n          \n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    </div>\n      </nav>\n\t\t\t";

			this.reRender(html, $('#app')[0]);
		}
	}, {
		key: "FifthFloor",
		value: function FifthFloor() {
			(function ($) {
				$(function () {

					$('.button-collapse').sideNav();
				}); // end of document ready
			})(jQuery); // end of jQuery name space

			var html = "\n\t\t\t\n\t\t <nav class=\"light-blue lighten-1\" role=\"navigation\">\n    <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\"><b>5th Floor</b></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"#\">Navbar Link</a></li>\n      </ul>\n\n      <ul id=\"nav-mobile\" class=\"side-nav\">\n      <div class=\"center-align\">\n        <img style=\"height: 280px;\"src=\"img/5thfloor.png\">\n        <h3 style=\"color: black; \"><b>Room Availability</b></h3>\n                <div class=\"divider\">\n        </div>\n        <div class=\"center-align\">\n                <li><a style=\"color: red; font-size: 23px;\"href=\"#\"onclick=\"component.firstLoader()\"><b>1st Floor</b></a></li>\n                 <li><a style=\"color: blue; font-size: 23px;\"href=\"#\"onclick=\"component.secondLoader()\"><b>2nd Floor</b></a></li>\n                  <li><a style=\"color: green; font-size: 23px;\"href=\"#\"onclick=\"component.thirdLoader()\"><b>3rd Floor</b></a></li>\n                   <li><a style=\"color: purple; font-size: 23px;\"href=\"#\"onclick=\"component.fourthLoader()\"><b>4th Floor</b></a></li>\n                    <li><a style=\"color: teal; font-size: 23px;\"href=\"#\"onclick=\"component.fifthLoader()\"><b>5th Floor</b></a></li>\n                      <li><div class=\"divider\"></div></li>\n                 <li><a style=\"color: black; font-size: 23px;\"href=\"#\" onclick=\"component.logoutLoader()\"><b>Logout</b></a></li>\n                    </div>\n          \n      </ul>\n      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    </div>\n      </nav>\n\t\t\t";

			this.reRender(html, $('#app')[0]);
		}
	}]);

	return Component;
}(App);

var component = new Component();
component.homePage();