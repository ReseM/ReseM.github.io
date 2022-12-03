
let videos = [ // Список ссылок на видео
 "video/1.mp4",
  "video/2.mp4",
  "video/3.mp4",
  "video/4.mp4",
  "video/5.mp4",
  "video/6.mp4",
  "video/7.mp4",
  "video/8.mp4",
  "video/9.mp4",
  "video/10.mp4",
  "video/11.mp4",
  "video/12.mp4",
  "video/13.mp4",
];

var video = "bn2.mp4";



btn.addEventListener('click', _ => {
     vds.src = videos[counter] 
     if (counter > videos.length) counter = 0
    counter++
});

window.onload = function() {
	video = document.getElementById("vds");
};



function play() {
	 let counter = Math.floor(Math.random() * (13 - 0)) + 0;
		vds.src = videos[counter];
    video.play();
}


