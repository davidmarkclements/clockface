var spawn = require('child_process').spawn
var ansi = require('ansi-escapes')
var faces = ['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛']
var max = faces.length - 1

module.exports = function (opts) {
  opts = opts || {}
  opts.tick = 'tick' in opts ? opts.tick : 100
  opts.autostart = 'autostart' in opts ? opts.autostart : true

  opts.out = opts.out || process.stdout
  var autostart = opts.autostart
  var out = opts.out
  var tick = opts.tick
  
  var face = 0
  display(faces[face], out)
  var id

  function start() {
    out.write(ansi.cursorHide)
    id = setInterval(function () {
      face += 1
      if (face > max) face = 0
      display(faces[face], out)
    }, tick)
  }

  if (autostart) start()

  function pause() {
    clearInterval(id)
    id = null
  }

  function stop() {
    pause()
    face = 0
    out.write(ansi.cursorShow)
  }

  return {stop: stop, pause: pause, start: start}
}

function display(face, out) {
  out.write(ansi.cursorSavePosition + face + ansi.cursorRestorePosition)

}