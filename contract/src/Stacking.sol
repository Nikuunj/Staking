// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import { Ownable } from '@openzeppelin/contracts/access/Ownable.sol';

interface IOrca {
    function mint(address _account, uint256 _amount) external;
}

contract StakingContract is Ownable {

    uint256 totalBalance;
    address orcaAddress;

    uint256 public rewardRate = 138888888888888;

    mapping(address => uint256) balances;
    mapping(address => uint) unclaimedRewards;
    mapping(address => uint) lastUpdateTime;

    constructor() Ownable(msg.sender) {

    }

    function stake() public payable {
        require(msg.value > 0); 

        if(lastUpdateTime[msg.sender] != 0) {
            lastUpdateTime[msg.sender]  = block.timestamp;
        } else {
            unclaimedRewards[msg.sender]  += ((block.timestamp - lastUpdateTime[msg.sender]) * balances[msg.sender]  * rewardRate) / 1e18;
            lastUpdateTime[msg.sender] = block.timestamp;
        }
        balances[msg.sender] += msg.value;
    }

    function unstake(uint _amount) public {
        require(balances[msg.sender] >= _amount);

        unclaimedRewards[msg.sender]  += ((block.timestamp - lastUpdateTime[msg.sender]) * balances[msg.sender] * rewardRate) / 1e18;
        lastUpdateTime[msg.sender] = block.timestamp;
        
        payable(msg.sender).transfer(_amount);
        balances[msg.sender] -= _amount;
    }


    function getRewards(address _address) public view returns (uint) {
        uint currnetReward = unclaimedRewards[_address];
        uint updateTime = lastUpdateTime[_address];
        uint newReward = ((block.timestamp - updateTime) * balances[_address] * rewardRate) / 1e18;
        return currnetReward + newReward;
    }

    
    function claimRewards() public {
        uint256 currnetReward = unclaimedRewards[msg.sender];
        uint256 updateTime = lastUpdateTime[msg.sender];
        uint256 newReward = ((block.timestamp - updateTime) * balances[msg.sender] * rewardRate) / 1e18;

        IOrca(orcaAddress).mint(msg.sender, newReward + currnetReward);
        unclaimedRewards[msg.sender] = 0;

        lastUpdateTime[msg.sender] = block.timestamp;
    } 

    function balanceOf(address _address) public view returns (uint256) {
        return balances[_address];
    }

    function setOrcaAddress(address _orcaAddress) public onlyOwner {
        orcaAddress = _orcaAddress;
    }
}