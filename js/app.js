"use strict";

class App{
	constructor(){
	this.firstloor = [
			{
				"id":1,
				"rooms":"CompLab1",
				"name":"Computer Laboratory 1",
			},
			{
				"id":2,
				"rooms":"Imaclab",
				"name":"Imac Laboratory",
			},
			];
		
				this.secondFloor = [
			{
				"id":1,
				"rooms":"Complab2",
				"name":"Computer Laboratory 2",
			},
			];	
			
	
		this.thirdfloor = [
			{
				"id":1,
				"rooms":"Complab 3",	
				"name":"Computer Laboratory 3",
			},
			{
				"id":2,
				"rooms":"Ciscolab",
				"name":"Cisco Laboratory",
			},
			];

			
		this.fourthfloor = [

			{
				"id":1,
				"rooms":"Room401",
				"name":"Room 401",
			},
			{
				"id":2,
				"rooms":"Room 402",
				"name":"Room 402",
			},
			{
				"id":3,
				"rooms":"Room 403",
				"name":"Room 403",
			},
			{
				"id":4,
				"rooms":"Room 404",
				"name":"Room 404",
			},
			{
				"id":5,
				"rooms":"Room 405",
				"name":"Room 405",
			},
				
					{
				"id":6,
				"rooms":"Room 400",
				"name":"Room 400",
			},
				{
				"id":7,
				"rooms":"Front Office",
				"name":"Front Office",
			},
				{
				"id":8,
				"rooms":"Restaurant Lab",
				"name":"HRM Minibar Laboratory",
			},
			];

				this.fifthfloor = [
					{
				"id":1,
				"rooms":"Digital Lab",
				"name":"Digital Laboratory",
			},
				{
				"id":2,
				"rooms":"Enercon Lab",
				"name":"Enercon Laboratory",
			},
				{
				"id":3,
				"rooms":"Chem Lab",
				"name":"Chemistry Laboratory",
			},

			{
				"id":4,
				"rooms":"Physics Lab",
				"name":"Physics Laboratory",
			},
			{
				"id":5,
				"rooms":"AVR",
				"name":"Audio Visual Laboratory",
			},
				
			
			];



	
	
		this.floors=[
			{
				"id":1,
				"floor":"1st ",
				"name":"Floor",
				"image":"img/1stfloor.png",
				"color":"red;",
				"onclick":"component.firstLoader()",
				
			},
				{
				"id":2,
				"floor":"2nd ",
				"name":"Floor",
				"image":"img/2ndfloor.png",
				"color":"blue;",
					"onclick":"component.secondLoader()",
				
			},
				{
				"id":3,
				"floor":"3rd ",
				"name":"Floor",
			"image":"img/3rdfloor.png",
			"color":"green;",
				"onclick":"component.thirdLoader()",
				
			},
				{
				"id":4,
				"floor":"4th ",
				"name":"Floor",
				"image":"img/4thfloor.png",
				"color":"purple;",
					"onclick":"component.fourthLoader()",
				
			},
				{
				"id":5,
				"floor":"5th ",
				"name":"Floor",
				"image":"img/5thfloor.png",
				"color":"teal;",
					"onclick":"component.fifthLoader()",
				
			},
		];


  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

}

class Component extends App{
	constructor(){

		super();
	}

	homePage(){
		let html = `
		<br>
				<div class="center-align">
			<img class="app_logo"src="img/amalogo.png" />
			</div>
			<h3 class="app_name"><b>Room Availability</b></h3>
			<h6 class="app_desc">Romaing Guard Dashboard</h6>
			<div class="center-align">
				<img style="height: 220px;" src="img/transparent.png" />
			</div>

			<div class="center-align">
<br>
  <a style="color: white; font-size: 23px;"class="btn-floating btn-large waves-effect waves-light cyan"onclick="component.preloader()"><i class="material-icons"></i><b>Room Schedules</b></a
<div class="center-align">

<h6 class="color: black;"><br><br><br><br><br>By John Edbriel Finney</h5>
<h6 class="color: black;">And Norberto Laudernorio</h5>
<h6 class="color: black;">@MobileProg</h5>
</div>

				</div>				
			</div>
		`;
		this.reRender(html,$('#app')[0]);
			
	
}

	preloader(){
		let html= `
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Loading Room Schedules. . .</b></h5>
			</center>
		`;
		this.reRender(html,$('#app')[0]);
			setTimeout(function(){
				component.firstPage();
			},5000);
		}
		logoutLoader(){
			let html=`
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Signing out. . .</b></h5>
			</center>
			`;
				this.reRender(html,$('#app')[0]);
				setTimeout(function(){
				component.homePage();
			},3000);

		}
			firstLoader(){
			let html=`
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Loading 1st Floor. . .</b></h5>
			</center>
			`;
				this.reRender(html,$('#app')[0]);
				setTimeout(function(){
				component.firstFloor();
			},3000);
				
		}
			secondLoader(){
			let html=`
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Loading 2nd Floor. . .</b></h5>
			</center>
			`;
				this.reRender(html,$('#app')[0]);
				setTimeout(function(){
				component.secondFloor();
			},3000);
				
		}
			thirdLoader(){
			let html=`
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Loading 3rd Floor. . .</b></h5>
			</center>
			`;
				this.reRender(html,$('#app')[0]);
				setTimeout(function(){
				component.thirdFloor();
			},3000);
				
		}
			fourthLoader(){
			let html=`
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Loading 4th Floor. . .</b></h5>
			</center>
			`;
				this.reRender(html,$('#app')[0]);
				setTimeout(function(){
				component.fourthFloor();
			},3000);
				
		}
		fifthLoader(){
			let html=`
			<center style="margin-top:45%;">
			<img style="height: 250px;"src="img/LOADING.gif">
			<h5 style="color: white;"><b>Loading 5th Floor. . .</b></h5>
			</center>
			`;
				this.reRender(html,$('#app')[0]);
				setTimeout(function(){
				component.FifthFloor();
			},3000);
				
		}
		firstPage(){
(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

			let html=`
			  <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><b>Room Availability</b></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
      <div class="center-align">
        <img style="height: 280px;"src="img/room.jpg">
        <h3 style="color: black; "><b>Room Availability</b></h3>
                <div class="divider">
        </div>
        <div class="center-align">
                <li><a style="color: red; font-size: 23px;"href="#"onclick="component.firstLoader()"><b>1st Floor</b></a></li>
                 <li><a style="color: blue; font-size: 23px;"href="#"onclick="component.secondLoader()"><b>2nd Floor</b></a></li>
                  <li><a style="color: green; font-size: 23px;"href="#"onclick="component.thirdLoader()"><b>3rd Floor</b></a></li>
                   <li><a style="color: purple; font-size: 23px;"href="#"onclick="component.fourthLoader()"><b>4th Floor</b></a></li>
                    <li><a style="color: teal; font-size: 23px;"href="#"onclick="component.fifthLoader()"><b>5th Floor</b></a></li>
                      <li><div class="divider"></div></li>
                 <li><a style="color: black; font-size: 23px;"href="#" onclick="component.logoutLoader()"><b>Logout</b></a></li>
                    </div>
          
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
      </nav>
    `;
    html+=`
    <div class="center-align">
			<img style="height: 230px;"src="img/school.jpg" />
			</div>
         <ul class="collection">
    `
    ;

    for(let i =0; i < this.floors.length;i++){
    html+=`


    <li style="min-height: 96px; background-color: ${this.floors[i].color} color: white;"class="collection-item avatar">
      <img src="${this.floors[i].image}" alt="" class="circle">
      <span class="title"><b>${this.floors[i].floor}${this.floors[i].name}</b></span>
      <p><b>AMACC Davao </b><br>
         <b>Floor Building</b>
      </p>
      <a href="#"onclick="${this.floors[i].onclick}" class="secondary-content"><i class="material-icons" style="color: white;"><b>input</b></i><p style="color: white;"><b>Check</b></p></a>

    </li>
            
			`;
				}
			html+=`</ul>`;

		

			this.reRender(html,$('#app')[0]);

		}
		firstFloor(){
			(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
	
			let html=`
			 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><b>1st Floor</b></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
      <div class="center-align">
        <img style="height: 280px;"src="img/1stfloor.png">
        <h3 style="color: black; "><b>Room Availability</b></h3>
                <div class="divider">
        </div>
        <div class="center-align">
                <li><a style="color: red; font-size: 23px;"href="#"onclick="component.firstLoader()"><b>1st Floor</b></a></li>
                 <li><a style="color: blue; font-size: 23px;"href="#"onclick="component.secondLoader()"><b>2nd Floor</b></a></li>
                  <li><a style="color: green; font-size: 23px;"href="#"onclick="component.thirdLoader()"><b>3rd Floor</b></a></li>
                   <li><a style="color: purple; font-size: 23px;"href="#"onclick="component.fourthLoader()"><b>4th Floor</b></a></li>
                    <li><a style="color: teal; font-size: 23px;"href="#"onclick="component.fifthLoader()"><b>5th Floor</b></a></li>
                      <li><div class="divider"></div></li>
                 <li><a style="color: black; font-size: 23px;"href="#" onclick="component.logoutLoader()"><b>Logout</b></a></li>
                    </div>
          
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
      </nav>
`;
for(let i =0; i <this.firstloor.length;i++){
html+=`
			`;
}

			this.reRender(html,$('#app')[0]);
		}
		secondFloor(){
			(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
	
			let html=`
					 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><b>2nd Floor</b></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
      <div class="center-align">
        <img style="height: 280px;"src="img/2ndfloor.png">
        <h3 style="color: black; "><b>Room Availability</b></h3>
                <div class="divider">
        </div>
        <div class="center-align">
                <li><a style="color: red; font-size: 23px;"href="#"onclick="component.firstLoader()"><b>1st Floor</b></a></li>
                 <li><a style="color: blue; font-size: 23px;"href="#"onclick="component.secondLoader()"><b>2nd Floor</b></a></li>
                  <li><a style="color: green; font-size: 23px;"href="#"onclick="component.thirdLoader()"><b>3rd Floor</b></a></li>
                   <li><a style="color: purple; font-size: 23px;"href="#"onclick="component.fourthLoader()"><b>4th Floor</b></a></li>
                    <li><a style="color: teal; font-size: 23px;"href="#"onclick="component.fifthLoader()"><b>5th Floor</b></a></li>
                      <li><div class="divider"></div></li>
                 <li><a style="color: black; font-size: 23px;"href="#" onclick="component.logoutLoader()"><b>Logout</b></a></li>
                    </div>
          
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
      </nav>

			`;


			this.reRender(html,$('#app')[0]);
		}
		thirdFloor(){
			(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
	
			let html=`
					 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><b>3rd Floor</b></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
      <div class="center-align">
        <img style="height: 280px;"src="img/3rdfloor.png">
        <h3 style="color: black; "><b>Room Availability</b></h3>
                <div class="divider">
        </div>
        <div class="center-align">
                <li><a style="color: red; font-size: 23px;"href="#"onclick="component.firstLoader()"><b>1st Floor</b></a></li>
                 <li><a style="color: blue; font-size: 23px;"href="#"onclick="component.secondLoader()"><b>2nd Floor</b></a></li>
                  <li><a style="color: green; font-size: 23px;"href="#"onclick="component.thirdLoader()"><b>3rd Floor</b></a></li>
                   <li><a style="color: purple; font-size: 23px;"href="#"onclick="component.fourthLoader()"><b>4th Floor</b></a></li>
                    <li><a style="color: teal; font-size: 23px;"href="#"onclick="component.fifthLoader()"><b>5th Floor</b></a></li>
                      <li><div class="divider"></div></li>
                 <li><a style="color: black; font-size: 23px;"href="#" onclick="component.logoutLoader()"><b>Logout</b></a></li>
                    </div>
          
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
      </nav>

			`;


			this.reRender(html,$('#app')[0]);
		}
		fourthFloor(){
			(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
	
			let html=`
			
		 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><b>4th Floor</b></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
      <div class="center-align">
        <img style="height: 280px;"src="img/4thfloor.png">
        <h3 style="color: black; "><b>Room Availability</b></h3>
                <div class="divider">
        </div>
        <div class="center-align">
                <li><a style="color: red; font-size: 23px;"href="#"onclick="component.firstLoader()"><b>1st Floor</b></a></li>
                 <li><a style="color: blue; font-size: 23px;"href="#"onclick="component.secondLoader()"><b>2nd Floor</b></a></li>
                  <li><a style="color: green; font-size: 23px;"href="#"onclick="component.thirdLoader()"><b>3rd Floor</b></a></li>
                   <li><a style="color: purple; font-size: 23px;"href="#"onclick="component.fourthLoader()"><b>4th Floor</b></a></li>
                    <li><a style="color: teal; font-size: 23px;"href="#"onclick="component.fifthLoader()"><b>5th Floor</b></a></li>
                      <li><div class="divider"></div></li>
                 <li><a style="color: black; font-size: 23px;"href="#" onclick="component.logoutLoader()"><b>Logout</b></a></li>
                    </div>
          
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
      </nav>
			`;


			this.reRender(html,$('#app')[0]);
		}
		FifthFloor(){
			(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
	
			let html=`
			
		 <nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><b>5th Floor</b></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
      <div class="center-align">
        <img style="height: 280px;"src="img/5thfloor.png">
        <h3 style="color: black; "><b>Room Availability</b></h3>
                <div class="divider">
        </div>
        <div class="center-align">
                <li><a style="color: red; font-size: 23px;"href="#"onclick="component.firstLoader()"><b>1st Floor</b></a></li>
                 <li><a style="color: blue; font-size: 23px;"href="#"onclick="component.secondLoader()"><b>2nd Floor</b></a></li>
                  <li><a style="color: green; font-size: 23px;"href="#"onclick="component.thirdLoader()"><b>3rd Floor</b></a></li>
                   <li><a style="color: purple; font-size: 23px;"href="#"onclick="component.fourthLoader()"><b>4th Floor</b></a></li>
                    <li><a style="color: teal; font-size: 23px;"href="#"onclick="component.fifthLoader()"><b>5th Floor</b></a></li>
                      <li><div class="divider"></div></li>
                 <li><a style="color: black; font-size: 23px;"href="#" onclick="component.logoutLoader()"><b>Logout</b></a></li>
                    </div>
          
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
      </nav>
			`;


			this.reRender(html,$('#app')[0]);
		}
	}


		


let component = new Component();
component.homePage();



