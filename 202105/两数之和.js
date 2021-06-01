//两数之和  nums = [2,1,4,6] target = 6

//时间复杂度 O(n) 哈希查找
function twoSum(nums,target) {
    let map = {} //key是值 val是下标
    for(let i =0;i<nums.length;i++) {
        //如果targe减去当前循环到的数 === 之前循环到的某一项 
        if(map[target-nums[i]]!==undefined) {
            
            return [i,map[target-nums[i]]]
        }
        map[nums[i]] = i
        // console.log(map)
    }
}

console.log(twoSum([2,1,4,6],6))