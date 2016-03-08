// Javascript Entry Point


var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");


/////try changing the functions to check if the current target is open or closed.


var secTwoDefaultPosition = true;
var secThreeDefaultPosition = true;

section1.addEventListener('click', function(e){
	
	if(secTwoDefaultPosition || secThreeDefaultPosition){
		section2.style.top = section1.offsetHeight + "px";
		section3.style.top = (section1.offsetHeight + 80) + "px";
		secThreeDefaultPosition = false;
		secTwoDefaultPosition = false;

	}else{
		section2.style.top = "80px";
		section3.style.top = "160px";
		secThreeDefaultPosition = true;
		secTwoDefaultPosition = true;
	}
})

section2.addEventListener('click', function(e){
	if(secTwoDefaultPosition && secThreeDefaultPosition){
		section3.style.top = (section2.offsetHeight + 80) + "px";
		secThreeDefaultPosition = false;
		secTwoDefaultPosition = false;
	}else if(!secTwoDefaultPosition){
		section2.style.top = "80px";
		secTwoDefaultPosition = true;
		section3.style.top = (section2.offsetHeight + 80) + "px";
		secThreeDefaultPosition = false;
	}
	else{
		section3.style.top = "160px";
		secThreeDefaultPosition = true;
		secTwoDefaultPosition = true;
	}
})

section3.addEventListener('click', function(e){
	if(!secThreeDefaultPosition){
		section3.style.top = "160px";
		section2.style.top = "80px";
		secTwoDefaultPosition = true;
		secThreeDefaultPosition = true;
	}else{
		section3.style.top = (section2.offsetHeight + 80) + "px";
		secThreeDefaultPosition = false;
	}
})
