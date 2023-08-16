// Define a functional component named 'Store' that takes a single prop named 'state'
const Store = ({ state }) => {

    // Define an async function named 'storeNum' that takes an 'event' object as its parameter.
    const storeNum = async (event) => {
  
      // Prevent the default form submission behavior.
      event.preventDefault();
  
      // Retrieve the contract object from the 'state' prop.
      const { contract } = state;
  
      // Retrieve the value of the input field with an ID of 'setNumber'.
      const setNumber = document.querySelector("#setNumber").value;
  
      // Log the retrieved value and the contract object to the console.
      console.log(setNumber, contract);
  
      // Execute a write transaction on the contract to set the stored number to the retrieved value.
      const transaction = await contract.setNumber(setNumber);
  
      // Wait for the transaction to be mined and added to the blockchain.
      await transaction.wait();
  
      // Log a message to the console to indicate that the transaction has been completed.
      console.log("Transaction is done");
    };
  
    // Render a form element with an onSubmit handler set to the 'storeNum' function.
    // The form contains a label element and an input element for entering a number to store,
    // as well as a button element for submitting the form.
    // The button is disabled if the contract object in the 'state' prop is not defined.
    return (
      <>
        <form onSubmit={storeNum}>
          <label className="form-label">Enter Number </label>
          <input
            type="text"
            id="setNumber"
            placeholder="Number to Store"
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Store
          </button>
        </form>
      </>
    );
  };
  
  // Export the 'Store' component as the default export of this module.
  export default Store;