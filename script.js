

// write your code here
	function threeSum(arr, target) {
    // Sort the array
    arr.sort((a, b) => a - b);
    
    let closestSum = Infinity;
    
    // For each number in the array
    for (let i = 0; i < arr.length - 2; i++) {
        // Use two pointers to find a pair that makes the sum of the three numbers closest to the target
        let start = i + 1;
        let end = arr.length - 1;
        
        while (start < end) {
            let sum = arr[i] + arr[start] + arr[end];
            
            // If the sum is closer to the target than the current closest sum, update the closest sum
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }
            
            // If the sum is less than the target, move the start pointer up
            if (sum < target) {
                start++;
            // If the sum is more than the target, move the end pointer down
            } else {
                end--;
            }
        }
    }
    
    return closestSum;
}
	
  

// threeSum(arr,target);

module.exports = threeSum;
