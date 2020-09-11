var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var writeByIndex = function() {
	var nums = []
	for(var i = 0; i < 10000000; i++) {
		nums[i] = i
	}
}

var writeByIndexWithPredefinedArray = function() {
	var nums = new Array(10000000)
	for(var i = 0; i < 10000000; i++) {
		nums[i] = i
	}
}

var writeByIndexWithPredefinedArrayReverse = function() {
	var nums = new Array(10000000)
	for(var i = 10000000 - 1; i >= 0; i--) {
		nums[i] = i
	}
}

var writeByPush = function() {
	var nums = []
	for(var i = 0; i < 10000000; i++) {
		nums.push(i)
	}
}

suite
.add('WriteByIndex', () => writeByIndex())
.add('WriteByIndexWithPredefinedArray', () => writeByIndexWithPredefinedArray())
.add('WriteByIndexWithPredefinedArrayReverse', () => writeByIndexWithPredefinedArrayReverse())
.add('WriteByPush', () => writeByPush())
.on('cycle', function(event) {
    console.log(String(event.target));
})
.run()