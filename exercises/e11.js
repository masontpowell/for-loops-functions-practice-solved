// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
 let withdrawalTotals = [];

 for (let i = 0; i < array.length; i++) {
  let withdrawalAmounts = array[i].withdrawals;
  let sum = 0;
  
  if (withdrawalAmounts && withdrawalAmounts.length > 0) {
    for (let x = 0; x < withdrawalAmounts.length; x++) {
      sum += withdrawalAmounts[x];
    }
  } else {
    sum = 0;
  }

  withdrawalTotals.push(sum);
 }
 return withdrawalTotals;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
