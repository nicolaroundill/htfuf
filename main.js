//variable for scrollChange01 - changing the potato image
var imageSet02 = 1;
var imageSet03 = 1;
var imageSet04 = 1;
var imageSet05 = 1;
var imageSet06 = 1;
//so you can change the function to begin earlier
var yPadding = 600;
var scrollCount = 0;

window.onload = function(){
	parallax();
	
	//change potato image
	$(window).scroll(scrollChange01);
	$(window).scroll(scrollChange02);
	$(window).scroll(scrollChange03);
	$(window).scroll(scrollChange04);
	$(window).scroll(scrollChange05);
	$(window).scroll(scrollChange06);
	$(window).scroll(scrollChange07);

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


//function to toggle timer gif when scrolling
function scrollChange01(){
	var yImage01 = window.scrollY;
	var imageSource01 = document.getElementById("timerImage");

	var part01y = $("#part01").offset().top;

	if (yImage01 > part01y - yPadding && yImage01 < 3000){
		imageSource01.src = "src/img/timer.gif";
	} else {
		imageSource01.src = "src/img/timer.png";
	}
}


//function to change potatoes when scrolling
function scrollChange02(){
	//find position on screen from scrolling
	var yImage02 = window.scrollY;
	//take all info from "potato-img" id, assigned to the container the potato section is in
	var imageSource02 = document.getElementById("potato-img");
	
	//finds the position of the top of the potato section/container
	var part02y = $("#part02").offset().top;

	//log scrolls to make sure it's working
	console.log(scrollCount);

	//if the current scroll position is greater than the beginning of the content container 
	//(minus 200), AND the current scroll position is greater than this BIG number;
	if (yImage02 > part02y - yPadding && yImage02 < 100000000){
		//and if current scroll position is divisible by 10;
		if (yImage02 % 10 === 0) {
			//AND if this variable is less than 6 (because I only have 5 images to choose from), then:
			if (imageSet02 < 6){
				//change the image source to the next image
				imageSource02.src = "src/img/potatoes0" + imageSet02 + ".png";
				//add a number to the image source
				imageSet02 ++;
				//console log that mofooooooo
			}
		}
	}
}


//function to change oven when scrolling
function scrollChange03(){
	var yImage03 = window.scrollY;
	var imageSource03 = document.getElementById("oven");
	var part03y = $("#part03").offset().top;

	if (yImage03 > part03y - 700 && yImage03 < 100000000){
		if (yImage03 % 10 === 0) {
			if (imageSet03 < 8){
				imageSource03.src = "src/img/oven0" + imageSet03 + ".png";
				imageSet03 ++;
			}
		}
	}
}

//function to change peas when scrolling
function scrollChange04(){
	var yImage04 = window.scrollY;
	var imageSource04 = document.getElementById("peas");
	var part04y = $("#part04").offset().top;

	if (yImage04 > part04y - yPadding && yImage04 < 100000000){
		if (yImage04 % 10 === 0) {
			if (imageSet04 == 1) {
				imageSource04.src = "src/img/peas01.png";
				imageSet04 = imageSet04 * -1;
			} else if (imageSet04 == -1) {
				imageSource04.src = "src/img/peas02.png";
				imageSet04 = imageSet04 * -1;
			}
		}
	}
}

//function to change cutting chicken when scrolling
function scrollChange05(){
	var yImage05 = window.scrollY;
	var imageSource05 = document.getElementById("cuttingChicken");
	var part05y = $("#part05").offset().top;

	if (yImage05 > part05y - yPadding && yImage05 < 100000000){
		if (yImage05 % 10 === 0) {
			if (imageSet05 < 8){
				imageSource05.src = "src/img/cutting0" + imageSet05 + ".png";
				imageSet05 ++;
			}
		}
	}
}

//function to change tinfoil oven when scrolling
function scrollChange06(){
	var yImage06 = window.scrollY;
	var imageSource06 = document.getElementById("tinfoil");
	var part06y = $("#part06").offset().top;

	if (yImage06 > part06y - yPadding && yImage06 < 100000000){
		if (yImage06 % 10 === 0) {
			if (imageSet06 == 1) {
				imageSource06.src = "src/img/tinfoil02.png";
				imageSet06 = imageSet06 * -1;
			} else if (imageSet06 == -1) {
				imageSource06.src = "src/img/tinfoil03.png";
				imageSet06 = imageSet06 * -1;
			}
		}
	}
}

//function to change final image when scrolling
function scrollChange07(){
	var yImage07 = window.scrollY;
	var imageSource07 = document.getElementById("served");
	var part07y = $("#part07").offset().top;

	if ($(window).scrollTop() + $(window).height() == $(document).height()){
		imageSource07.src = "src/img/served02.png";
	} else {
		imageSource07.src = "src/img/served01.png";
	}
}
