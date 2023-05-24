const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

// Variables to store the generated private key, public key, and address
let private_key, public_key, address;

// Generate 3 sets of private key, public key, and address
for (let x = 0; x < 3; x++) {
  // Generate a random private key
  private_key = secp.utils.randomPrivateKey();

  // Derive the corresponding public key
  public_key = secp.getPublicKey(private_key);

  // Extract the address from the public key
  address = public_key.slice(1);
  address = address.slice(12);

  // Log the generated private key, public key, and address
  console.log('private key: ', toHex(private_key));
  console.log('full public key: ', toHex(public_key));
  console.log('ETH address: ', toHex(address));
}

/**
 * This script generates 3 sets of private key, public key, and Ethereum address. 
 * It uses the ethereum-cryptography library to generate the private key, derive the public key, 
 * and extract the address from the public key. The generated values are then logged to the console.
 */