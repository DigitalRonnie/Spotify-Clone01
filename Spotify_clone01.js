function playSong(item) {
    var audioElement = card.querySelector('audio');
    
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }