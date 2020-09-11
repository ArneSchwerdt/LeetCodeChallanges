// https://leetcode.com/explore/featured/card/fun-with-arrays/525/inserting-items-into-an-array/3253/

var Benchmark = require('benchmark')
var suite = new Benchmark.Suite

var m = 3
var n = 3
var arr1 = new Array(m + n)
var arr2 = new Array(n)

for(var i = 0; i < m + n; i++) {
    arr1[i] = 0
}

for(var i = 0; i < n; i++) {
    arr1[i] = (i * 5) + Math.round(5 * Math.random())
    arr2[i] = (i * 5) + Math.round(5 * Math.random())
}

var merge1 = function(nums1, m, nums2, n) {
    var len1 = m + n
    var len2 = n 

    for(var i = 0; m + i < len1; i++) {
        nums1[m + i] = nums2[i]
    }

    for(var i = 0; i < nums1.length - 1; i++) {
        for(var j = i + 1; j < nums1.length; j++) {
            if(nums1[i] > nums1[j]) {
                var temp = nums1[i]
                nums1[i] = nums1[j]
                nums1[j] = temp
            }
        }
    }
}

var merge2 = function(nums1, m, nums2, n) {
    var i = m + n - 1
    var j = m - 1
    var k = n - 1

    while(k + 1 > 0 && i >= 0) {
        if (nums1[j] > nums2[k]) {
            nums1[i] = nums1[j]
            j--
        } else {
            nums1[i] = nums2[k]
            k--
        }
        i--
    }
}

// m = 0
// n = 3
// arr1 = [0,0,0]
// arr2 = [1,2,3]

// console.log(arr1)
// console.log(arr2)
// merge1(arr1, m, arr2, n)
// console.log(arr1)

suite
.add('MergeSort', () => merge1(arr1, m, arr2, n))
.add('ThreePointer', () => merge2(arr1, m, arr2, n))
.on('cycle', function(event) {
    console.log(String(event.target))
})
.run()