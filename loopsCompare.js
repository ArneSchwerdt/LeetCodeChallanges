var Benchmark = require('benchmark')    
var suite = new Benchmark.Suite    
    
var arr = []    
    
for(var i = 0; i < 1000000; i++) {    
	arr[i] = i
} 

var forEach = function(nums) {
	nums.forEach((num) => {
		num++
	})
}

var forOf = function(nums) {
	for(var num of nums) {
		num++
	}
}


var forI = function(nums) {
	var len = nums.length
	for(var i = 0; i < len; i++) {
		nums[i]++
	}
}

var whileLoop = function(nums) {
	var i = 0
	var len = nums.length
	while(i < len) {
		nums[i]++
		i++
	}
}

suite.add('forEach', () => forEach(arr)) 
.add('forOf', () => forOf(arr)) 
.add('forI', () => forI(arr)) 
.add('while', () => whileLoop(arr)) 
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run()
