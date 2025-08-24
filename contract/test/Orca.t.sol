// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "forge-std/Test.sol";

import "src/Orca.sol";

contract TestContract is Test {
    OrcaContract c;

    function setUp() public {
        c = new OrcaContract();
    }

    function testMint() public {
        assertEq(c.balanceOf(address(this)), 0, "ok");

        // only staking contract can mint
        c.updateStaking(address(this));
        c.mint(address(this), 10);
        assertEq(c.balanceOf(address(this)), 10, "ok");
    }

    function test_Retreve_mint() public {
        assertEq(c.balanceOf(address(this)), 0, "ok");
        vm.expectRevert();
        c.mint(address(this), 10);
        assertEq(c.balanceOf(address(this)), 0, "ok");   
    }

    function testUpgradeStacking() public {
        c.updateStaking(address(0xB35447212722e8a710042C206f447EA016bcE2e3));
    }

    function test_Retreve_UpgradeStacking() public {
        vm.startPrank(address(0xB35447212722e8a710042C206f447EA016bcE2e3));
        vm.expectRevert();
        c.updateStaking(address(0xB35447212722e8a710042C206f447EA016bcE2e3));
    }
}
