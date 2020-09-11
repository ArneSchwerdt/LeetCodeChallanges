var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var arr = []

for(var i = 0; i < 1000000; i++) {
}

suite.add('', () => {})
.on('cycle', function(event) {
    console.log(String(event.target))
})
.run()
