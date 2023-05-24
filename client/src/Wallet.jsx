import server from "./server";

function Wallet({ address, setAddress, balance, setBalance }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);

    if (address) {
      // Send a GET request to the server's "balance" endpoint for the specified address
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      
      // Update the balance state with the response from the server
      setBalance(balance);
    } else {
      // Set the balance to 0 if no address is provided
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input
          placeholder="Type an address, for example: 0x1"
          value={address}
          onChange={onChange}
        ></input>
      </label>

      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
