//imports the hardhat-toolbox module for additional functionality for the Hardhat development environment
require("@nomicfoundation/hardhat-toolbox");

//boilerplate config that we have covered earlier
/** @type import(‘hardhat/config’).HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  
  //specifies network configuration options for Hardhat
  networks: {
    
    //defines configuration options for the hardhat networ
    hardhat: {
      chainId: 1337,
    },
    
    //defines configuration options for the ganache network
    ganache: {
      url: "http://127.0.0.1:8545",
      accounts: [
        `0xf72ceaaa935cfc259264319c8c1504964caf0789c41c990f0464b2a85d9eb140`,
      ],
    }
  }
};