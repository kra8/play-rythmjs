import Rythm      from 'rythm.js'
import path       from 'path'

import MEDIA_PATH from './sm33089007.mp3'

const rythm       = new Rythm()
const startButton = document.querySelector('#start-button')
const stopButton  = document.querySelector('#stop-button')

rythm.setMusic(path.resolve(MEDIA_PATH))
rythm.addRythm('music-note', 'pulse', 0, 10, {
  min: 1,
  max: 1.75
})

if (startButton) {
  startButton.addEventListener('click', () => {
    rythm.start()
  })
}

if (stopButton) {
  stopButton.addEventListener('click', () => {
    rythm.stop()
  })
}
