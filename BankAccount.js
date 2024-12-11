class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Insufficient funds.");
      }
    }
  
    getBalance() {
      return this.balance;
    }
  }
  
  // Demonstrate the class
  const account = new BankAccount(123456789, 1000.00);
  console.log(`Initial balance: $${account.getBalance()}`);
  
  account.deposit(500.00);
  console.log(`Deposited $500, new balance: $${account.getBalance()}`);
  
  account.withdraw(200.00);
  console.log(`Withdrew $200, new balance: $${account.getBalance()}`);
  
  account.withdraw(2000.00); 