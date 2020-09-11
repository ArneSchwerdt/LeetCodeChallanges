// https://leetcode.com/problems/running-sum-of-1d-array/

var Benchmark = require('benchmark')
var suite = new Benchmark.Suite
var arr = []

for(var i = 0; i < 1000; i++) {
    arr.push(i);
}

var runningSum1 = function(nums) {
    return nums.map((num, i) => {
		return nums
		.slice(0, i + 1)
		.reduce((prev, curr) => {
            return prev + curr
        }, 0)
    })
}

var runningSum2 = function(nums) {
	var len = nums.length
	var prev = 0
	var result = new Array(len)
	for(i = 0; i < len; i++) {
		var curr = prev + nums[i]
		result[i] = curr
		prev = curr
	}

	return result
}

suite
.add('MapSliceReduce', () => runningSum1(arr))
.add('for', () => runningSum2(arr))
.on('cycle', function(event) {
    console.log(String(event.target))
})
.run()
