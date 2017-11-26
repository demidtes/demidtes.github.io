function ScrollUp(){
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
	t=setInterval(
	function(){
		if(s > 0)window.scroll(0, s-=100);
		else clearInterval(t)
	},30
	);
}
window.onscroll = function () { 
	if ( window.pageYOffset > 0 ) {
		up.style.display = 'block';
	} else {
		up.style.display = 'none';
	}
};