import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState(""); // State for the send amount
  const [recipient, setRecipient] = useState(""); // State for the recipient address

  // Helper function to update state values
  const setValue = (setter) => (evt) => setter(evt.target.value);

  // Function to handle the transfer form submission
  async function transfer(evt) {
    evt.preventDefault();

    try {
      // Send a POST request to the server's "send" endpoint
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });

      // Update the balance state with the response from the server
      setBalance(balance);
    } catch (ex) {
      // Display an alert with the error message from the server
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
