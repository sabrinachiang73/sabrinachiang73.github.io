//popup code
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}
document.getElementById("pictures").onclick = unhideLightbox;


function unhideLightbox1() {
	unhideLightbox("hidden-a21");
}
document.getElementById("a21-pic").onclick = unhideLightbox1;


function unhideLightbox2() {
	unhideLightbox("hidden-nova");
}
document.getElementById("novaspero-pic").onclick = unhideLightbox2;


function unhideLightbox3() {
	unhideLightbox("hidden-rwanda");
}
document.getElementById("rwanda-pic").onclick = unhideLightbox3;


function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');

}


function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;
