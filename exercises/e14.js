
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let accountsWithWrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    let sumDeposits = 0;
    let sumWithdrawals = 0;

    if (account.deposits) {
      for (let x = 0; x < account.deposits.length; x++) {
        sumDeposits += account.deposits[x];
      }
    }

    if (account.withdrawals) {
      for (let x = 0; x < account.withdrawals.length; x++) {
        sumWithdrawals += account.withdrawals[x];
      }
    }
    
    let actualBalance = sumDeposits - sumWithdrawals;

    if (actualBalance !== account.balance) {
      accountsWithWrongBalance.push(account);
    }
  }
  return accountsWithWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
