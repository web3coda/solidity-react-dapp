//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract NumberStorage {
    uint public storedNumber;

    // Storing function
    function setNumber(uint _number) public {
        storedNumber = _number;
    }

    //Reading function
    function getNumber() public view returns (uint) {
        return storedNumber;
    }
}