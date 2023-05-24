const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

// Function to recover a public key from a message and signature
async function recoverKey(message, signature, recoveryBit) {
  // Hash the message using the hashMessage function
  const hashedMessage = hashMessage(message);

  // Recover the public key using the secp256k1 library's recoverPublicKey function
  return secp.recoverPublicKey(hashedMessage, signature, recoveryBit);
}

// Export the recoverKey function to make it available for other modules
module.exports = recoverKey;
