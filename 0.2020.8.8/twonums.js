const nums = [2, 7, 11, 15], target = 9;

var twoSum = function(nums, target) {
  const len = nums.length;
  let ret = [];
  nums.forEach((item, idx) => {
    for(let i = idx + 1; i<= len; i++) {
        if (item + nums[i] === target) {
          ret = [idx, i];
          break;
        }
    }
  })
  return ret;
};

twoSum(nums, target);
console.log(twoSum(nums, target))