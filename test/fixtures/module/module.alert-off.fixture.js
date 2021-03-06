

var pmx = require('../../..');

var conf = pmx.initModule({
  alert_enabled : false
});

var probe = pmx.probe();
var slow_val = 0;

var dt = probe.metric({
  name  : 'probe-test',
  alert : {
    mode     : 'threshold',
    value    : 30,
    msg      : 'val too high'
  }
});

setInterval(function() {
  slow_val++;
  dt.set(slow_val);
}, 50);
