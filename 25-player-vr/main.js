var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let video;
let ambientLight;
let animationHasEnded = false;
const videoId = 'Gt6wKDnG0xA';

function createAmbientLight() {
  if (!animationHasEnded) return;

  ambientLight = new YT.Player('ambient-light', {
    videoId,
    events: {
      onReady: ambientLightReady,
      onStateChange: ambientStateChange,
    },
  });
}

window.onYouTubeIframeAPIReady = function () {
  video = new YT.Player('video', {
    videoId,
    events: {
      onStateChange: videoStateChange,
    },
  });
};

function videoStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.PLAYING:
      if (!ambientLight) return;
      ambientLight.seekTo(event.target.getCurrentTime());
      ambientLight.playVideo();
      break;
    case YT.PlayerState.PAUSED:
      if (!ambientLight) return;
      ambientLight.seekTo(event.target.getCurrentTime());
      ambientLight.pauseVideo();
      break;
  }
}

function betterAmbientLight(event) {
  event.target.mute();

  const qualityLevels = event.target.getAvailableQualityLevels();
  if (qualityLevels && qualityLevels.length && qualityLevels.length > 0) {
    qualityLevels.reverse();
    const lowerstLevel =
      qualityLevels[qualityLevels.findIndex((q) => q !== 'auto')];
    event.target.setPlaybackQuality(lowerstLevel);
  }
}

function ambientLightReady(event) {
  betterAmbientLight(event);
}

function ambientStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.BUFFERING:
    case YT.PlayerState.PLAYING:
      betterAmbientLight(event);
  }
}

const app = document.querySelector('#app');
app.addEventListener('animationend', (e) => {
  if (e.animationName !== 'appear') return;

  animationHasEnded = true;
  createAmbientLight();
});
