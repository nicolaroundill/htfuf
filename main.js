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

	var parallax1 = document.getElementById('parallax1');
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

//Function to change images when scrolling
function scrollChange01(){
	var yImageOne = window.scrollY;
	var imageSource = document.getElementById("potato-img");
	//var part02 = document.getElementById("part02");
	var yPadding = 200;
	var part02y = $("#part02").offset().top;


	console.log(scrollCount);

	if (yImageOne > part02y - yPadding && yImageOne < 100000000){
		if (yImageOne % 10 === 0) {
			if (imageSet < 6){
				imageSource.src = "src/img/potatoes0" + imageSet + ".png";
				imageSet ++;
				console.log(imageSet);
			}
		}
	}

/*
	//when YOffset is between beginning point and end point 
	if (yImageOne > 100 && yImageOne < 10000){
		//for every scroll that is divisible by 50
		for (imageSet; imageSet < 5; imageSet++){
			if (yImageOne % 50 === 0) {
				//change variable imageSet to imageSet + 1
				console.log(imageSet);
				//change image source to "src/img/timer0" + imageSet + ".png"
				imageSource.src = "src/img/potatoes0" + imageSet + ".png";
			}
			
		}

	}
*/
	
	
	
}
