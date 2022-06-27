let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon.onclick = function() {
     //mySong.play();
     if(mySong.paused){
          mySong.play();
          icon.src = "./pause.png";
     }
     else{
          mySong.pause();
          icon.src = "./play.png";
     }
}