// Define the account object with initial balance and empty transactions array
const account = {
    balance: 500,
    transactions: []
};

// Simulate a delay function using a Promise that resolves after a specified time
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Define the async withdraw function to handle withdrawals from the account
async function withdraw(amount) {
    // Check if the withdrawal amount is greater than the current balance
    if (amount > account.balance) {
        throw new Error("Insufficient funds"); // Throw an error if funds are insufficient
    } else {
        account.balance -= amount; // Deduct the amount from the balance
        account.transactions.push({ type: 'withdrawal', amount }); // Record the transaction
        await delay(1000); // Simulate delay
    }
}

// Define the async deposit function to handle deposits into the account
async function deposit(amount) {
    account.balance += amount; // Add the amount to the balance
    account.transactions.push({ type: 'deposit', amount }); // Record the transaction
    await delay(1000); // Simulate delay
}

// Define the async getAccountData function to fetch account data
async function getAccountData() {
    // Create promises to fetch balance and transactions
    const balancePromise = new Promise(resolve => resolve(`Balance: $${account.balance}`));
    const transactionsPromise = new Promise(resolve => resolve(account.transactions));

    // Wait for both promises to resolve concurrently
    const [balanceMessage, transactions] = await Promise.all([balancePromise, transactionsPromise]);

    // Return the fetched data as an object
    return {
        balanceMessage,
        transactions
    };
}

// Define the main function to run the bank app program
async function main() {
    console.log("Welcome to the bank app!"); // Log a welcome message

    try {
        await deposit(200); // Perform a deposit operation
        await withdraw(100); // Perform a withdrawal operation
        const accountData = await getAccountData(); // Fetch the account data
        console.log(accountData); // Log the account data
    } catch (error) {
        console.error(error.message); // Handle any errors that occur
    }
}

// Call the main function to run the bank app program
main();
