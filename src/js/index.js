// Javascript Entry Point

import $ from 'jquery';


// $('.section1').on('click', function() {
//   $('.section2').toggleClass('altPosition2');
//   $('.section3').toggleClass('altPosition3');
// });

// $('.section2').on('click', function() {
//   $('.section2').hasClass('altPosition2') ? $('.section2').toggleClass('altPosition2'): $('.section3').toggleClass('altPosition3');
  
// });

// $('.section3').on('click', function() {
//   $('.section2').hasClass('altPosition2') ? $('.section2').removeClass('altPosition2') : $('.section2').toggleClass('altPosition2');
//   $('.section3').toggleClass('altPosition3');
// });



/////After trying to figure out a jquery approach that ensured sections wouldn't ever overlap regardless of height and click order, I tried this very long javascript approach

var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");

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
