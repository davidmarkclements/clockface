# clockface 🕘

Animate the unicode clock faces, in the terminal

```sh
var clock = require('clockface')({
  out: process.stdout, //default
  autostart: true, //default
  tick: 250, //default, 1/4 second
})

process.stdout.write('yaaaaay ')

setTimeout(() => clock.pause(), 10000)
setTimeout(() => clock.start(), 15000)
setTimeout(() => clock.stop(), 25000)
```