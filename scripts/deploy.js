const { ethers } = require("hardhat");

async function main() {
  const GameAssets = await ethers.getContractFactory("GameAssets");
  const uri = "ipfs://bafybeifstdvma47xyicj3kdv3rmtoybjfhhiesy7k53ejskvsx4miva5wi/{id}.json";
  const gameAssets = await GameAssets.deploy(uri);

  await gameAssets.waitForDeployment();
  console.log("GameAssets deployed to:", await gameAssets.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});