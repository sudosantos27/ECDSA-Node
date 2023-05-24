import axios from "axios"; // Importing the Axios library

const server = axios.create({
  baseURL: "http://localhost:3042", // Setting the base URL for requests
});

export default server; // Exporting the configured Axios instance
