import React from "react"; // Importing React library
import ReactDOM from "react-dom/client"; // Importing ReactDOM library (specifically the client module)
import App from "./App"; // Importing the App component

// Using the ReactDOM.createRoot method to create a root element for rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);
