
var pmx = require('../../..');

var conf = pmx.initModule({
  alert_enabled : true
});

var probe = pmx.probe();
var slow_val = 0;

var dt = probe.metric({
  name  : 'probe-test'
});

setInterval(function() {
  slow_val++;
  dt.set(slow_val);
}, 50);
