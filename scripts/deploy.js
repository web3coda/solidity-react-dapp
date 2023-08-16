//definition of an asynchronous function called main() that contains the code to deploy the NumberStorage smart contract.
async function main (){    
    const NumberStorage = await ethers.getContractFactory("NumberStorage"); // instance of contract
    const numberStorage = await NumberStorage.deploy(); // deploy contract
    console.log("NumberStorage deployed to:", numberStorage.address);
}
  

//calls the main() function, then exits the process with a status code of 0 (indicating success) once the function completes. If an error occurs, the error is logged to the console and the process exits with a status code of 1 (indicating failure).
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });