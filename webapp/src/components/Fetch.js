import { useState, useEffect } from "react";

// This is a functional component named 'Fetch' that receives the 'state' object as a prop.
const Fetch = ({ state }) => {
  // The 'contract' object is destructured from the 'state' object.
  const { contract } = state;

  // This creates a new state variable named 'storedNumber' and a function named 'setStoredNumber' to update it
  const [storedNumber, setStoredNumber] = useState("Not Available");

  useEffect(() => {
    const fetchNumber = async () => {
      // This fetches the 'number' value from the smart contract method 'getNumber'
      const number = await contract.getNumber();
      // The 'setStoredNumber' function is called to update the value of the 'storedNumber' state variable.
      setStoredNumber(number.toString());
    };
    // This conditionally executes the 'fetchNumber' function only if the 'contract' object is not null.
    contract && fetchNumber();
  }, [contract]);

  return (
    <>
      <label className="form-label">Stored Number : {storedNumber} </label>
    </>
  );
};

export default Fetch;