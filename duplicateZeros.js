// https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3240/

var Benchmark = require('benchmark')    
var suite = new Benchmark.Suite    

const len = 10000

var arr = new Array(len)    
for(var i = 0; i < len; i++) {    
	arr[i] = Math.round(Math.random() * 9)
}

var duplicateZeros1 = function(nums) {
	var len = nums.length
		
	for(var i = 0; i < len; i++) {
		if (nums[i] == 0) {
			for(var j = len - 1; j > i; j--) {
				nums[j] = nums[j - 1]
			}
			i++
		}
	}
}

// console.log(arr)
// console.log(duplicateZeros1([1,0,2,3,0,4,5,0]))

suite
.add('ForFor', () => duplicateZeros1(arr))
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run()
