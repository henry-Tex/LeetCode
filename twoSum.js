var twoSum = function(nums, target) {
    let arrayNums =[];
    let result = null;
    for (let index = 0; index < nums.length; index++) {
        for (let index2 = index+1; index2 < nums.length; index2++) {
            result = nums[index] + nums[index2];
            if (result === target) return arrayNums = [index,index2];
        }
    }
};
