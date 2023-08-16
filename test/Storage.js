//imports the expect function from the Chai (https://www.chaijs.com/) JavaScript assertion library for later use.
const {expect}  = require("chai");

//defines a new Mocha test suite named “NumberStorage Smart Contract” that may contain one or more tests. The second argument is a callback function that contains the actual test cases.
describe("NumberStorage Smart Contract", function(){
    
    //defines a new test case.
    //“Should set the value of storedNumber value to the value passed in” is the name of the test case
    //async callback function that contains the actual test code
    it("Should set the value of storedNumber value to the value passed in", async function(){
        
        //uses the ethers.js library to get a contract factory for the NumberStorage smart contract. A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts and NumberStorage is a factory for instances of our contract.
        const NumberStorage = await ethers.getContractFactory("NumberStorage");
        
        //deploys a new instance of the NumberStorage smart contract. And, after the contract is deployed, we can use the numberStorage variable to call our contract methods.
        const numberStorage = await NumberStorage.deploy();
        
        //sets the value of the storedNumber variable in the NumberStorage contract to 21.
        await numberStorage.setNumber(21)
        
        //logs the current value of storedNumber to the console
        console.log(await numberStorage.storedNumber())
        
        //uses the expect function to assert that the value of storedNumber is equal to 21. If the assertion fails, the test will fail.
        expect(await numberStorage.storedNumber()).to.equal(21)
    })
})