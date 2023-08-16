// Import required modules and components
import './App.css'; // Importing the App.css file for styling
import { useState, useEffect } from "react"; // Importing the useState and useEffect hooks from React
import { ethers } from "ethers"; // Importing ethers library for interacting with Ethereum
import Fetch from "./components/Fetch"; // Importing the Fetch component
import Store from "./components/Store"; // Importing the Store component

function App() {

  // Set initial state using the useState hook
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  // Set initial account state using the useState hook
  const [account, setAccount] = useState("Install Metamask extension");

  // Use the useEffect hook to connect to the wallet and get user account info
  useEffect(() => {
    const connectWallet = async () => {
      // Set the contract address and ABI
      const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI = [{"inputs":[],"name":"getNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"setNumber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"storedNumber","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
      try {
        const { ethereum } = window;

        // Check if the user has a Web3-enabled browser extension (such as Metamask) installed
        if (ethereum) {
          // Get the user's account using the eth_requestAccounts method
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          // Reload the page if the user changes the Ethereum network
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          // Reload the page if the user changes accounts
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          // Create a provider object using the Web3Provider class
          const provider = new ethers.providers.Web3Provider(ethereum);
          // Get the signer object
          const signer = provider.getSigner();
          // Create a contract object using the Contract class
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          // Set the user account and state
          setAccount(account);
          setState({ provider, signer, contract });
        } 

      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  // Log the state to the console
  console.log(state);

  // Render the components with user account information and state
  return (
    <div className="App">
      <header className="App-header">
        User Account Address : {account}
        <Fetch state={state}></Fetch>
        
        <Store state={state}></Store>
        
      </header>
    </div>
  );
}

// Export the App component
export default App;