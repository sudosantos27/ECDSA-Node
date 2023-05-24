const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const accounts = require("../server/constants/accounts");
const hashing = require("./scripts/hashMessage");
const sign = require("./scripts/signMessage");
const recover = require("./scripts/recover");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

// Enable Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());

// Initialize balances with some default values
const balances = {
  [accounts[0].address]: 100,
  [accounts[1].address]: 50,
  [accounts[2].address]: 75,
};

// Get balance for a specific address
app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

// Send transaction from one address to another
app.post("/send", async (req, res) => {
  const { sender, recipient, amount } = req.body;
  let privateKeySender = getPrivateKeyByAddress(sender);
  let transaction = {
    senderAddress: sender,
    recipientAddress: recipient,
    amount: amount,
    timestamp: new Date().getTime()
  }

  // Hash the transaction data
  let hash = hashing(JSON.stringify(transaction));

  // Sign the hash using the sender's private key
  let [signature, recoveryBit] = await sign(hash, privateKeySender);

  // Recover the public key from the signed hash
  let recovered = await recover(JSON.stringify(transaction), signature, recoveryBit);

  // Get the public key from the sender's private key
  let public_key = secp.getPublicKey(privateKeySender);
  let hexPublicKey = toHex(public_key);

  // Verify the recovered public key matches the original public key
  if(hexPublicKey == toHex(recovered))
  {
    setInitialBalance(sender);
    setInitialBalance(recipient);
    if (balances[sender] < amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= amount;
      balances[recipient] += amount;
      res.send({ balance: balances[sender]});
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

// Set initial balance for an address if it doesn't exist
function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

// Get private key for an address
function getPrivateKeyByAddress(address){
  let senderAccount = accounts.find(el=> el.address === address);
  return senderAccount.private_key;
}
