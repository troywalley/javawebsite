var modal=document.getElementsByClassName("modalcontainer")[0];
var overlays=document.getElementById("overlays");

document.addEventListener("click", ShowModal);
window.setTimeout(ShowModal,3000)
function ShowModal(){
	modal.style.display="block";
	overlays.style.display="block";
	document.addEventListener("keydown",CloseWindow)	
}
function CloseWindow(event){
	if(event.keyCode===27){
		modal.style.display="none"
		overlays.style.display="none";
	}
}
function Carousel(){
	
	var carousel=document.getElementById("carousel")
	// carousel.style.backroundSize="100% 100%"
	carousel.style.backgroundImage="url('construction1.jpg')"
	window.setTimeout(Pic2,3000)
	
	
	
	
	
}
Carousel();
function Pic2(){
	// carousel.style.backroundSize="cover"
	carousel.style.backgroundImage="url('construction2.jpeg')"
	window.setTimeout(Pic3,3000)
}
function Pic3(){
	carousel.style.backgroundImage="url('construction3.jpg')"
	window.setTimeout(Pic4,3000)
}
function Pic4(){
	carousel.style.backgroundImage="url('construction4.jpg')"
	window.setTimeout(Pic5,3000)
}
function Pic5(){
	carousel.style.backgroundImage="url('construction5.jpg')"
	window.setTimeout(Carousel,3000)
}
