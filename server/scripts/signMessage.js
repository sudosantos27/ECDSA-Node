const secp = require("ethereum-cryptography/secp256k1");

// Function to sign a message with a private key
async function signTx(message, private_key) {
  // Sign the message using the secp256k1 library's sign function
  const crypto = secp.sign(message, private_key, { recovered: true });

  // Return the signed message
  return crypto;
}

// Export the signTx function to make it available for other modules
module.exports = signTx;
