'use strict';

const musicData = [
  {
    backgroundImage: "./assets/images/ferrari 1950.webp",
    posterUrl: "./assets/images/ferrari 1950.webp",
    title: "Ferrari F125",
    album: "Fórmula 1",
    year: 1950,
    artist: "Lucas Anjos dos Reis",
    musicPath: "./assets/sound/ferrari_f125.mp3",
  },
   {
    backgroundImage: "./assets/images/Alfa_Romeo_Alfetta_159.jpg",
    posterUrl: "./assets/images/Alfa_Romeo_Alfetta_159.jpg",
    title: "Alfa Romeu 159",
    album: "Fórmula 1",
    year: 1950,
    artist: "David Leite dos Anjos dos Reis",
    musicPath: "./assets/sound/Kimi Räikkönen driving the _Alfetta_ in Silverstone [6-cmqzxswRs].mp3",
  },
   {
    backgroundImage: "./assets/images/Alfa_Romeo_Alfetta_179.jpg",
    posterUrl: "./assets/images/Alfa_Romeo_Alfetta_179.jpg",
    title: "Alfa Romeo Alfetta 179",
    album: "Fórmula 1",
    year: 1982,
    artist: "Carlos Da Silva",
    musicPath: "./assets/sound/3.mp3",
  },
   {
    backgroundImage: "./assets/images/Ford Cosworth.jfif",
    posterUrl: "./assets/images/Ford Cosworth.jfif",
    title: "Ford Cosworth DFV 8",
    album: "Fórmula 1",
    year: 1992,
    artist: "Felipe da Silva dos Santos",
    musicPath: "./assets/sound/F1 Cosworth DFV.mp3",
  },
   {
    backgroundImage: "./assets/images/Ferrari 641-2.jpg",
    posterUrl: "./assets/images/Ferrari 641-2.jpg",
    title: "Ferrari 641",
    album: "Fórmula 1",
    year: 1993,
    artist: "Luana",
    musicPath: "./assets/sound/Ferrari 641 Sound.mp3",
  },
   {
    backgroundImage: "./assets/images/Ayrton_Senna-Formula_1-McLaren_F1.jpg",
    posterUrl: "./assets/images/Ayrton_Senna-Formula_1-McLaren_F1.jpg",
    title: "Mclaren",
    album: "Fórmula 1",
    year: 1993,
    artist: "Tatiane da Silva",
    musicPath: "./assets/sound/Ayrton Senna's McLaren MP4_4.mp3",
  },
   {
    backgroundImage: "./assets/images/Ferrari f 2000.jpg",
    posterUrl: "./assets/images/Ferrari f 2000.jpg",
    title: "Ferrari F2000",
    album: "Fórmula 1",
    year: 2000,
    artist: "Adriana",
    musicPath: "./assets/sound/Ferrari F2002.mp3",
  },
    {
    backgroundImage: "./assets/images/ECR F1 2000.jfif",
    posterUrl: "./assets/images/ECR F1 2000.jfif",
    title: "ECR F1 2000",
    album: "Fórmula 1",
    year: 2000,
    artist: "Luana Leite da Silva",
    musicPath: "./assets/sound/1992 Benetton B192 F1 V8.mp3",
  },
   {
    backgroundImage: "./assets/images/Sebastian_Vettel_2010_Britain.jpg",
    posterUrl: "./assets/images/Sebastian_Vettel_2010_Britain.jpg",
    title: "Red Bull ",
    album: "Fórmula 1",
    year: 2010,
    artist: "Leandro da Silva",
    musicPath: "./assets/sound/Red Bul R86.mp3",
  },
   {
    backgroundImage: "./assets/images/Mclaren MP 4 25.jpg",
    posterUrl: "./assets/images/Mclaren MP 4 25.jpg",
    title: "Mclaren MP4 25 ",
    album: "Fórmula 1",
    year: 2010,
    artist: "Leandro da Silva",
    musicPath: "./assets/sound/McLaren MP4-25 sounds.mp3",
  },
  {
    backgroundImage: "./assets/images/HD-wallpaper-mercedes-amg-f1-w11.jpg",
    posterUrl: "./assets/images/HD-wallpaper-mercedes-amg-f1-w11.jpg",
    title: "Mercedes Benz AMG F1 W11",
    album: "Fórmula 1",
    year: 2020,
    artist: "Daniela Leite da Silva",
    musicPath: "./assets/sound/Mercedes Bens AMG F1 W11.mp3",
  },

  {
    backgroundImage: "./assets/images/Red Bull.jpg",
    posterUrl: "./assets/images/Red Bull.jpg",
    title: "Red BulL R16B",
    album: "Fórmula 1",
    year: 2021,
    artist: "Daniela Leite da Silva",
    musicPath: "./assets/sound/Red Bul R86.mp3",
  },
  {
    backgroundImage: "./assets/images/Mclaren.jfif",
    posterUrl: "./assets/images/Mclaren.jfif",
    title: "Mclaren MCL 39",
    album: "Fórmula 1",
    year: 2025,
    artist: "Daniela Leite da Silva",
    musicPath: "./assets/sound/The 2025  McLaren F1 Car.mp3",
  },

   
]
/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
