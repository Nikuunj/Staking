// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import { ERC20 } from '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import { Ownable } from '@openzeppelin/contracts/access/Ownable.sol';

contract OrcaContract is ERC20, Ownable {

    address stakingContract;
    
    constructor() ERC20("Orca", "ORC")  Ownable(msg.sender) {

    }

    
    function mint(address _account,uint256 _amount) external {
        require(msg.sender == stakingContract);
        _mint(_account, _amount);
    }

    function updateStaking(address _stakingContract) public onlyOwner {
        stakingContract = _stakingContract;
    }
}