window.onload = choosePic;

var myPix = new Array("http://js.birulangit.website/random/img/1.jpg","http://js.birulangit.website/random/img/2.jpg","http://js.birulangit.website/random/img/3.jpg");

function choosePic() {
	randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}
