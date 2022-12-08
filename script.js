
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
  "video/14.mp4",
  "video/15.mp4",
  "video/16.mp4",
  "video/17.mp4",
  "video/18.mp4",
  "video/19.mp4",
  "video/20.mp4",
  "video/21.mp4",
  "video/22.mp4",
  "video/23.mp4",
  "video/24.mp4",
  "video/25.mp4",
  "video/26.mp4",
  "video/27.mp4",
  "video/28.mp4",
  "video/29.mp4",
  "video/30.mp4",
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
	 let counter = Math.floor(Math.random() * (30 - 0)) + 0;
		vds.src = videos[counter];
    video.play();
}


