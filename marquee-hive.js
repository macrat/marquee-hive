PIXEL_PER_SEC = 1024;

starttime = new Date();


setInterval(()=>setInterval(()=>{
	document.querySelectorAll('.marquee-hive').forEach(elm => {
		deltatime = (new Date() - starttime) / 1000;
		elm.style.position = 'relative';
		elm.style.overflow = 'hidden';
		elm.style.width = elm.clientWidth + 'px';
		elm.style.left = ((deltatime * PIXEL_PER_SEC) % (document.body.clientWidth + elm.clientWidth) - elm.clientWidth) + 'px';
		console.log(((deltatime * PIXEL_PER_SEC) % (document.body.clientWidth + elm.clientWidth) - elm.clientWidth) + 'px');
	});
},1),1);
