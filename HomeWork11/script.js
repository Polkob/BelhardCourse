(function ($) {
    $(document).ready(function () {
  
      let playerSelector = ".player";
      $(playerSelector).each(function () {
        let player = $(this),
          playButton = player.find(".play"),
          soundButton = player.find(".sound"),
          restartButton = player.find(".restart"),
          fullscreenButton = player.find(".fullscreen"),
          video = player.find("video"),
          videoElement = video[0],
          progress = player.find(".progress"),
          progressBar = progress.find("span"),
          volumeControl = player.find(".volume-control"),
          volumeBar = volumeControl.find(".volume-bar");
  
        let playText = "Пуск",
          pauseText = "Пауза",
          pauseClass = "pause",
          mutedClass = "muted";
  
        playButton.on("click", function () {
          if (videoElement.paused) {
            startVideo();
          } else {
            pauseVideo();
          }
        });
  
        soundButton.on("click", function () {
          if (videoElement.muted) {
            unmuteVideo();
          } else {
            muteVideo();
          }
        });

  
        volumeControl.on("click", function (event) {
          let percents = (event.pageX - $(this).offset().left) / $(this).width();
          videoElement.volume = percents;
          volumeBar.css("width", videoElement.volume*100 + "%");
          updateVolumeIcon(videoElement.volume);
          if (videoElement.volume > 0) {
            videoElement.muted = false;
            soundButton.removeClass(mutedClass);
          }
        });
  
        restartButton.on("click", restartVideo);
  
        fullscreenButton.on("click", openFullscreen);
  
        function startVideo() {
          playButton.text(pauseText);
          playButton.addClass(pauseClass);
          videoElement.play();
        }
  
        function pauseVideo() {
          playButton.text(playText);
          playButton.removeClass(pauseClass);
          videoElement.pause();
        }
  
        function muteVideo() {
          videoElement.muted = true;
          soundButton.addClass(mutedClass);
          updateVolumeIcon(0);
        }
  
        function unmuteVideo() {
          videoElement.muted = false;
          soundButton.removeClass(mutedClass);
          updateVolumeIcon(videoElement.volume);
        }
  
        function restartVideo() {
          videoElement.currentTime = 0;
          startVideo();
        }
  
        function openFullscreen() {
          videoElement.requestFullscreen();
        }
  
        video.on("timeupdate", function () {
          let value = (100 * videoElement.currentTime) / videoElement.duration;
          updateProgressBar(value);
        });
  
        function updateProgressBar(value) {
          progressBar.css("width", value + "%");
        }
  
        function updateVolumeIcon(volume) {
          let color;
          if (volume === 0 || videoElement.muted) {
            color = "#ccc"; 
          } else if (volume > 0 && volume <= 0.25) {
            color = "#ff0000"; 
          } else if (volume > 0.25 && volume <= 0.5) {
            color = "#ff9900"; 
          } else if (volume > 0.5 && volume <= 0.75) {
            color = "#ffff00"; 
          } else if (volume > 0.75 && volume <= 1) {
            color = "black"; 
          }
          soundButton.css("background-color", color);
        }
  
        progress.on("click", mouseHandler);
  
        function mouseHandler(event) {
          let percents = (event.pageX - $(this).offset().left) / $(this).width();
          videoElement.currentTime = percents * videoElement.duration;
        }

      });
    });
  })(jQuery);
