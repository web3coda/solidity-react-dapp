async function main() {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const numberStorage = await hre.ethers.getContractAt("NumberStorage", contractAddress);
    const storeNum = await numberStorage.setNumber(26);
    console.log("Transaction hash:", storeNum.hash);
	console.log(await numberStorage.storedNumber())

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });