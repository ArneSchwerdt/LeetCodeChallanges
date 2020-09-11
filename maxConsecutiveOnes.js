// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3238/

var Benchmark = require('benchmark')
var suite = new Benchmark.Suite
var arr = []

for(var i = 0; i < 1000000; i++) {
	arr.push(Math.round(Math.random()))
}

var findMaxConsecutiveOnes1 = function(nums) {
	var onesArr = nums.join('').split('0')
	return onesArr.reduce((max, ones) => {
		var len = ones.length
		return len > max ? len : max
	},0)
}

var findMaxConsecutiveOnes2 = function(nums) {
    var maxCount = 0
    var count = 0
    for(const v of nums) {
		count = v == 1 ? count + 1 : 0
        maxCount = count > maxCount ? count : maxCount
   }
    return maxCount
};

var findMaxConsecutiveOnes3 = function(nums) {
    var maxCount = 0
    var count = 0
    for(const v of nums) {
        count = (count + v) * v
        maxCount = count > maxCount ? count : maxCount
   }
    return maxCount
};
suite.add('ArrayToString', () => findMaxConsecutiveOnes1(arr))
.add('ForIf', () => findMaxConsecutiveOnes2(arr))
.add('ForTimesZero', () => findMaxConsecutiveOnes3(arr))
.on('cycle', function(event) {
   console.log(String(event.target));
})
.run()
