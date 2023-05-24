import Wallet from "./Wallet"; // Importing the Wallet component
import Transfer from "./Transfer"; // Importing the Transfer component
import "./App.scss"; // Importing the CSS styles for the App component
import { useState } from "react"; // Importing the useState hook from React

function App() {
  // Defining state variables using the useState hook
  const [balance, setBalance] = useState(0); // State for the balance value
  const [address, setAddress] = useState(""); // State for the address value

  return (
    <div className="app"> {/* Root element of the App component */}
      {/* Rendering the Wallet component and passing props */}
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
      />
      {/* Rendering the Transfer component and passing props */}
      <Transfer setBalance={setBalance} address={address} />
    </div>
  );
}

export default App; // Exporting the App component as the default export
