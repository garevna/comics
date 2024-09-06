const host = location.href

const { formatString } = require('../helpers').default
const { playerStyles } = require('../css').default
const { media } = require('../configs').default

document.head
  .appendChild(document.createElement('style'))
  .textContent = playerStyles

const [playButton, mediaButton] = [1, 2].map(() => document.body.appendChild(document.createElement('button')))

const audio = document.body.appendChild(document.createElement('audio'))
audio.setAttribute('crossorigin', 'anonymous')

const audioContext = new AudioContext(window.AudioContext || window.webkitAudioContext)
const track = audioContext.createMediaElementSource(audio)
track.connect(audioContext.destination)

Object.assign(playButton, {
  playing: false,
  className: 'play-button',
  onclick () {
    audioContext.state === 'suspended' && audioContext.resume()
    if (this.playing) audio.pause()
    else audio.play()
    this.className = this.playing ? 'play-button' : 'play-button paused'
    this.playing = !this.playing
  }
})

Object.assign(mediaButton, {
  className: 'media-button',
  innerText: '♫',
  media: Number(localStorage.getItem('media')) || 0,
  onclick () {
    playButton.playing && playButton.dispatchEvent(new Event('click'))
    this.media = this.media >= media.length - 1 ? 0 : this.media + 1
    localStorage.setItem('media', this.media)
    audio.setAttribute('src', `${host}/sounds/${media[this.media]}.mp3`)
    !playButton.playing && playButton.dispatchEvent(new Event('click'))
    demo.innerText = formatString(media[this.media])
  }
})

audio.setAttribute('src', `${host}/sounds/${media[mediaButton.media]}.mp3`)

const demo = document.body.appendChild(document.createElement('h4'))
Object.assign(demo, {
  innerText: formatString(media[mediaButton.media]),
  className: 'music-title'
})

audio.addEventListener('ended', () => {
  Object.assign(playButton, {
    playing: false,
    className: 'play-button'
  })
}, false)
