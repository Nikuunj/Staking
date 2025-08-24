// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/Stacking.sol";

contract TestContract is Test {
    StakingContract c;

    function setUp() public {
        c = new StakingContract();
    }

    fallback() external payable {}


    function testStake() public {
        assertEq(c.balanceOf(address(this)), 0, "ok");
        c.stake{ value: 1 ether }();
        assertEq(c.balanceOf(address(this)), 1 ether, "ok");
    }

    function testUnstake() public {
        assertEq(c.balanceOf(address(this)), 0, "ok");
        c.stake{ value: 1 ether }();
        assertEq(c.balanceOf(address(this)), 1 ether, "ok");

        c.unstake(1 ether);
        assertEq(c.balanceOf(address(this)), 0, "ok");
    }
}
