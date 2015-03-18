//variable for scrollChange01 - changing the potato image
var imageSet = 1;
var scrollCount = 0;

window.onload = function(){
	parallax();
	
	//change potato image
	$(window).scroll(scrollChange01);

	//Makes Parallax scroll work
	window.addEventListener("scroll", parallax, false);
}

//Parallax knife function
function parallax() {

	//get the information of this parallax id
	var parallax1 = document.getElementById('parallax1');
	//change the information of this id to be scroll position divided by 4
	parallax1.style.top = (window.pageYOffset / 4) + 'px';
	var parallax2 = document.getElementById('parallax2');
	parallax2.style.top = (window.pageYOffset / 8) + 'px';
	var parallax3 = document.getElementById('parallax3');
	parallax3.style.top = (window.pageYOffset / 10) + 'px';
	var parallax4 = document.getElementById('parallax4');
	parallax4.style.top = (window.pageYOffset / 7) + 'px';
	var parallax5 = document.getElementById('parallax5');
	parallax5.style.top = (window.pageYOffset / 3) + 'px';
	var parallax6 = document.getElementById('parallax6');
	parallax6.style.top = (window.pageYOffset / 9) + 'px';

}

//Functions to change images when scrolling

//function to change potatoes when scrolling
function scrollChange01(){
	//find position on screen from scrolling
	var yImageOne = window.scrollY;
	//take all info from "potato-img" id, assigned to the container the potato section is in
	var imageSource = document.getElementById("potato-img");
	//so you can change the function to begin earlier
	var yPadding = 200;
	//finds the position of the top of the potato section/container
	var part02y = $("#part02").offset().top;

	//log scrolls to make sure it's working
	console.log(scrollCount);

	//if the current scroll position is greater than the beginning of the content container 
	//(minus 200), AND the current scroll position is greater than this BIG number;
	if (yImageOne > part02y - yPadding && yImageOne < 100000000){
		//and if current scroll position is divisible by 10;
		if (yImageOne % 10 === 0) {
			//AND if this variable is less than 6 (because I only have 5 images to choose from), then:
			if (imageSet < 6){
				//change the image source to the next image
				imageSource.src = "src/img/potatoes0" + imageSet + ".png";
				//add a number to the image source
				imageSet ++;
				//console log that mofooooooo
				console.log(imageSet);
			}
		}
	}


	
	
	
}
