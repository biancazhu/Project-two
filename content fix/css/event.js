// JavaScript Document

function submenuOpen(){

	var mq = window.matchMedia('(max-width:200px) and (min-width: 0px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:140px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:400px) and (min-width: 201px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:130px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:600px) and (min-width: 401px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:200px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:700px) and (min-width: 601px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:230px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:800px) and (min-width: 701px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:230px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:900px) and (min-width: 801px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:230px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:1000px) and (min-width: 901px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:260px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:1300px) and (min-width: 1001px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:290px; transition:all 0.4s ease-in-out';
		} 

	var mq = window.matchMedia('(max-width:1600px) and (min-width: 1301px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:310px; transition:all 0.4s ease-in-out';
		}

	var mq = window.matchMedia('(max-width:2500px) and (min-width: 1601px)');
		if(mq.matches) {
			document.getElementById('sub-menu').style.cssText='height:330px; transition:all 0.4s ease-in-out';
		}
}

function submenuClose(){
	
	document.getElementById('sub-menu').style.cssText='height:0px; transition:all 0.4s ease-in-out; visibility:hidden';



}


function reviewOpen(){
	
	document.getElementById('review-box').style.cssText='visibility:visible; opacity:1; transition:all 0.2s ease-in-out';
	
	

}


function reviewClose(){
	
	document.getElementById('review-box').style.cssText='visibility:hidden; opacity:0; transition:all 0.2s ease-in-out';
}


function cartOpen(){
	
	document.getElementById('cart-box').style.cssText='visibility:visible; opacity:1; transition:all 0.2s ease-in-out';
	
	

}


function cartClose(){
	
	document.getElementById('cart-box').style.cssText='visibility:hidden; opacity:0; transition:all 0.2s ease-in-out';
}



function billOpen(){
	
	document.getElementById('check-out-box').style.cssText='visibility:visible; opacity:1; transition:all 0.2s ease-in-out';
	
	

}


function billClose(){
	
	document.getElementById('check-out-box').style.cssText='visibility:hidden; opacity:0; transition:all 0.2s ease-in-out';
}