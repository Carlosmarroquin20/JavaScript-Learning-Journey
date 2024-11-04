// Removes duplicates from a sorted array in-place
var removeDuplicates = function(nums) {
    let i = 1; // Position to place the next unique element

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[j - 1]) { // Check for unique element
            nums[i] = nums[j];
            i++;
        }
    }
    return i; // Number of unique elements
};
