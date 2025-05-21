import { ethers } from "ethers";
import abi from "../artifacts/contracts/GameAssets.sol/GameAssets.json";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

let provider;
let signer;
let contract;

document.addEventListener("DOMContentLoaded", () => {
  const connectBtn = document.getElementById("connectButton");
  const mintBtn = document.getElementById("mintButton");
  const status = document.getElementById("status");

  // Check if elements are found
  if (!connectBtn || !mintBtn || !status) {
    console.error("Could not find one or more elements in the DOM");
    return;
  }

  connectBtn.onclick = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer);
      status.innerText = `Connected: ${await signer.getAddress()}`;
    } else {
      alert("MetaMask not found!");
    }
  };

  mintBtn.onclick = async () => {
    if (!contract) return alert("Please connect wallet first.");

    const tx = await contract.mintEpicSword(await signer.getAddress(), 1);
    await tx.wait();
    status.innerText = "Minted Epic Sword!";
  };
});
