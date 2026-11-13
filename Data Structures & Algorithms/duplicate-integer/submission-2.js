class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
    let n = nums.length;
    for (let i =0;i<n ; i++){
        for (let j =1; i + j < n; j++){
            if(nums[i]==nums[i+j]){
                return true;
            }                

        }
        
    }
    return false;


    }
}
