const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

// Function to hash a message
function hashMessage(message) {
  // Convert the message to bytes
  let bytes = utf8ToBytes(message);

  // Hash the bytes using keccak256 algorithm
  return keccak256(bytes);
}

// Export the hashMessage function to make it available for other modules
module.exports = hashMessage;


/**
 * This file exports a function named hashMessage that takes a message as input, converts it to 
 * bytes using utf8ToBytes function, and then hashes the bytes using the keccak256 algorithm. 
 * The resulting hash is returned.
 */