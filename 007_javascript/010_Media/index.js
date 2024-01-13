const video = document.getElementById('video');
const audio = document.getElementById('audio');
const btnPlay = document.querySelector('#play');
const btnStop = document.querySelector('#stop');
const btnVolume = document.querySelector('#volume');

btnPlay.addEventListener('click', ()=>{
    video.play();
    document.body.style.transition = 'all .5s ease'
    document.body.style.background = 'black';
});

btnStop.addEventListener('click', () => {
    video.pause();
});

btnVolume.addEventListener('change', () => {
    audio.volume = btnVolume.value;
});
