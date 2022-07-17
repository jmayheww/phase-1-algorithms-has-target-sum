/* I am trying to create a function that finds two
integers within an array and evaluates whether they amount to a target value,
passed as the second argument in the function. For example, if I have an
array [1, 2, 3, 4] and a target of 6, my function should return true because 2 + 4 amount to 6.
*/

function hasTargetSum(array, target) {
  // iterate through the array to find first num
  for (let i = 0; i < array.length; i++) {
    // find complementary number that adds together with first number to equal target
    // (comp = target - num)
    const complement = target - array[i];
    // iterate through rest of array
    for (let j = i + 1; j < array.length; j++) {
      // check if any number is the complement
      // if so, return true
      if (array[j] === complement) return true;
    }
    // if i reach the end of the array, return false
  }
  return false;
}

hasTargetSum([1, 4, 7, 3], 5);
console.log("hasTargetSum([1, 4, 7, 3], 5);: ", hasTargetSum([1, 4, 7, 3], 5));

/*
  Runtime: O(n^2)
  Space: O(n)
*/

/*
  Create function that assesses values of elements in an array
  and evaluates whether any two elements add up to the sum of target.
  The function initially assigns a variable, i, to iterates through the array
  in order to find the first number. From there, we can determine the complementary
  number as the target number minus the first number, array[i]. To find whether the array
  has the complementary number, we iterate through the array again with new variable, j.
  if j equates to the complementary number, then we return true. Otherwise, we iterate through to
  the end of the array, which equates to false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
