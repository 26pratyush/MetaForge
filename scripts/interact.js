const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  // Replace this with the address from your deploy log
  const deployedAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const GameAssets = await ethers.getContractFactory("GameAssets");
  const gameAssets = GameAssets.attach(deployedAddress);

  console.log("Minting Epic Sword to:", deployer.address);
  await gameAssets.mintEpicSword(deployer.address, 1);

  const balance = await gameAssets.balanceOf(deployer.address, 1);
  console.log("Balance of Epic Sword:", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
