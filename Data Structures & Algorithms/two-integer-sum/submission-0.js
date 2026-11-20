class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let n = nums.length;
    let output =[]
    for (let i =0; i<n ; i++){
        for (let j=1;i+j<n ;j++){
            if(nums[i]+nums[i+j] == target){
                output.push(i);
                output.push(i+j)
            }
        }
    }
    return output    
    }
}
