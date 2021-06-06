/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    //双指针解法
    nums.sort((a,b) => a-b)
    let arr = []
    for(let i =0;i<nums.length;i++) {
        let j = i+1
        let k = nums.length - 1
        //排除固定数字重复情况
        if(i>0&&nums[i]===nums[i-1]) {
            continue
        }
        //和太大了
        while(j<k) {
            console.log(i,j,k)
            if(nums[i]+nums[j]+nums[k]===0) {
                arr.push([nums[i],nums[k],nums[j]])
                k--
                j++
                //排除重复情况
                while(j<k&&nums[j]===nums[j-1]) {
                    j++
                }
                while(j<k&&nums[k]===nums[k+1]) {
                    k--
                }

            }else if(nums[i]+nums[j]+nums[k]<0) {
                j++
                //排除重复情况
                while(j<k&&nums[j]===nums[j-1]) {
                    j++
                }
            }else if(nums[i]+nums[j]+nums[k]>0) {
                k--
                while(j<k&&nums[k]===nums[k+1]) {
                    k--
                }
            }
        }
    }
    return arr
};
console.log(threeSum([-1,0,2,1,-1,-4]))