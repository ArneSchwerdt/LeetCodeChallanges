// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

var Benchmark = require('benchmark')    
var Timsort = require('timsort')    
var suite = new Benchmark.Suite    
    
var arr = []    
    
for(var i = 0; i < 10000; i++) {    
	arr[i] = Math.round((Math.random() - 0.5) * 20000)
} 
arr.sort((a,b) => a - b)

var sortedSquare1 = function(nums) {
	return nums.map((num) => Math.pow(num, 2)).sort((a,b) => a - b)
}

var sortedSquare2 = function(nums) {
	var len = nums.length
	var result = new Array(len)

	for (var i = 0; i < len; i++) {
		result[i] = Math.pow(nums[i], 2)
	}

	return result.sort((a,b) => a-b)
}

var sortedSquare3 = function(nums) {
	var len = nums.length
	var result = new Array(len)

	for (var i = 0; i < len; i++) {
		result[i] = Math.pow(nums[i], 2)
	}

	Timsort.sort(result, (a,b) => a-b)
	return result
}

var sortedSquare4 = function(nums) {
	nums = [...nums]
	var result = new Array(nums.length)    
	var len = nums.length
    
	for (var i = 0, j = len - 1; i < nums.length; i++, j--) {    
    	var biggest = nums[i] * -1     
    	if (biggest < nums[nums.length - 1]) {           
        	biggest = nums[nums.length - 1]    
			result[j] = Math.pow(biggest, 2)    
        	i--    
        	nums.pop()    
		} else {
			result[j] = Math.pow(biggest, 2)    
		}         
	}
	return result
}

// console.log(arr)
// console.log(sortedSquare2(arr))

suite.add('MapSort', () => sortedSquare1(arr))
.add('ForSort', () => sortedSquare2(arr))
.add('ForTimSort', () => sortedSquare3(arr))
.add('LeftRightCompare', () => sortedSquare4(arr))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run()
