import { ethers } from "ethers";
import abi from "../../artifacts/contracts/GameAssets.sol/GameAssets.json"

const CONTRACT_ADDRESS = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545");
const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, wallet);

const EPIC_SWORD = 1;
const GOLDEN_AXE = 2;

document.addEventListener("DOMContentLoaded", async () => {
  const mintBtn = document.getElementById("mintSword");
  const inventory = document.getElementById("inventory");
  const status = document.getElementById("status");

  status.innerText = `Connected as: ${await wallet.getAddress()}`;

  mintBtn.onclick = async () => {
  try {
      const tx = await contract.mintEpicSword(wallet.address, 1);
      await tx.wait();
      alert("✅ Minted Epic Sword!");
      loadInventory();
    } catch (err) {
      console.error("Mint failed:", err);
  }
  };

  async function loadInventory() {
    inventory.innerHTML = "";
    for (let id of [EPIC_SWORD, GOLDEN_AXE]) {
      const balance = await contract.balanceOf(wallet.address, id);
      if (balance.toNumber() > 0) {
        const uri = await contract.uri(id);
        const resolved = uri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/").replace("{id}", id);
        const metadata = await fetch(resolved).then(res => res.json());

        inventory.innerHTML += `
          <div>
            <h3>${metadata.name}</h3>
            <img src="${metadata.image}" width="200"/>
            <p>${metadata.description}</p>
            <p>Owned: ${balance.toString()}</p>
          </div>
          <hr/>
        `;
      }
    }
  }

  loadInventory();
});
