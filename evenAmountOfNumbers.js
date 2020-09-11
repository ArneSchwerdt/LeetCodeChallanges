// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/

var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var arr = []

for(var i = 0; i < 1000000; i++) {
	arr.push(Math.round(Math.random() * 100000))
}

var findNumbers1 = function(nums) {
	var len = nums.length
	var countEven = 0
	for(var i = 0; i < len; i++) {
		var digits = nums[i].toString().length
		if (digits % 2 == 0) {
			countEven++
		}
	}
	return countEven
}

var findNumbers2 = function(nums) {
	var len = nums.length
	var countEven = 0
	for(var i = 0; i < len; i++) {
		var digits = Math.ceil(Math.log10(nums[i] + 1)) 	
		if (digits % 2 == 0) {
			countEven++
		}
	} 
	return countEven
}

var findNumbers3 = function(nums) {
	var len = nums.length
	var countEven = 0
	var lookup = []

	for(var i = 0; i <= 100000; i++) {
		lookup[i] = i.toString().length % 2 ? 0 : 1
	}

	for(var i = 0; i < len; i++) {
		countEven += lookup[nums[i]]
	} 
	return countEven
}

suite.add('string cast', () => findNumbers1(arr))
.add('log10', () => findNumbers2(arr))
.add('table lookup', () => findNumbers3(arr))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run()
