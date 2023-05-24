# Alchemy Ethereum Developer Bootcamp - Week 1 Project

This project is part of the first week's assignment for the Alchemy Ethereum Developer Bootcamp. It involves building a client-server application for handling Ethereum transactions. The project includes a client-side application written in React and a server-side API built with Express.

## Project Overview

The project consists of two main components: the client and the server.

### Client

The client folder contains the front-end application built with React. It provides a user interface for interacting with Ethereum wallets and initiating transactions. The key files in the client folder are:

- `index.html`: The main HTML file that serves as the entry point for the client application.
- `src/App.jsx`: The main React component that renders the wallet and transfer components.
- `src/Wallet.jsx`: A component that displays the user's wallet address and balance.
- `src/Transfer.jsx`: A component that allows the user to send Ethereum transactions.

### Server

The server folder contains the back-end API built with Express. It handles requests from the client, such as retrieving wallet balances and processing transactions. The key files in the server folder are:

- `server.js`: The main server file that sets up the Express application and defines the API endpoints.
- `constants/accounts.js`: A file that defines a list of Ethereum accounts with their addresses, private keys, and public keys.
- `scripts/generate.js`: A script that generates random private keys, public keys, and Ethereum addresses.
- `scripts/hashMessage.js`: A script that calculates the hash of a given message using the Ethereum Keccak-256 hashing algorithm.
- `scripts/signMessage.js`: A script that signs a given message using a private key and the secp256k1 elliptic curve algorithm.
- `scripts/recover.js`: A script that recovers the public key from a signed message using the secp256k1 elliptic curve algorithm.

The server implements two API endpoints:

- `GET /balance/:address`: Retrieves the balance of a given Ethereum address.
- `POST /send`: Processes a transaction by deducting the specified amount from the sender's balance and adding it to the recipient's balance.

## Dependencies

The project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Express: A fast and minimalist web framework for Node.js.
- Axios: A promise-based HTTP client for making API requests.
- ethereum-cryptography: A library for working with Ethereum cryptography, including key generation, signing, and hashing.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Video instructions
For an overview of this project as well as getting started instructions, check out the following video:

https://www.loom.com/share/0d3c74890b8e44a5918c4cacb3f646c4
 
### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.
