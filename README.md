![image](https://github.com/user-attachments/assets/0421aa10-ead2-4756-b492-a111a5131541)

# MetaForge

**MetaForge** is a cross-platform NFT-based in-game asset management system that enables players to mint, view, and manage game assets as NFTs. Built with Solidity smart contracts, Hardhat for development, and Vite for the frontend, MetaForge showcases interoperability between multiple games using shared NFT assets.

## 🛠️ Features

* **ERC-1155 Smart Contract**: Supports multiple token types within a single contract.
* **Cross-Game Asset Sharing**: Assets minted in one game are accessible in another.
* **IPFS Integration via Pinata**: Stores and retrieves NFT metadata and images.
* **MetaMask Integration**: Facilitates wallet connections and transaction signing.
* **Dynamic Inventory Display**: Shows owned NFTs with metadata and attributes.

## 📁 Project Structure

```
MetaForge/
├── contracts/             # Solidity smart contracts
│   └── GameAssets.sol
├── scripts/               # Deployment scripts
│   └── deploy.js
├── metadata/              # NFT metadata JSON files
│   ├── 1.json             # Epic Sword
│   └── 2.json             # Golden Axe
├── game-a/                # Frontend for Game A
│   ├── index.html
│   ├── mint.html
│   └── inventory.html
├── game-b/                # Frontend for Game B
│   ├── index.html
│   ├── mint.html
│   └── inventory.html
├── hardhat.config.js      # Hardhat configuration
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v14 or later)
* [MetaMask](https://metamask.io/) browser extension
* [Pinata](https://www.pinata.cloud/) account for IPFS storage

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/26pratyush/MetaForge.git
   cd MetaForge
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start Hardhat local node:**

   ```bash
   npx hardhat node
   ```

4. **Deploy the smart contract:**

   In a new terminal window:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

   Note the deployed contract address for frontend integration.

5. **Configure Frontend:**

   * Update the contract address in `game-a/mint.html` and `game-b/mint.html` to match the deployed address.
   * Ensure the ABI (`GameAssets.json`) is accessible to the frontend.

6. **Start Frontend Servers:**

   For Game A:

   ```bash
   cd game-a
   npm install
   npm run dev
   ```

   For Game B:

   ```bash
   cd game-b
   npm install
   npm run dev
   ```

   Access the games at `http://localhost:5173/`.

## 🧪 Usage

1. **Connect Wallet:**

   * Open the game in your browser.
   * Click on "Connect Wallet" to link your MetaMask account.

2. **Mint NFT:**

   * Click on "Mint Epic Sword" or "Mint Golden Axe" to mint the respective NFT.
   * Confirm the transaction in MetaMask.

3. **View Inventory:**

   * Click on "View Inventory" to see your owned NFTs along with their metadata and attributes.

## 📄 Metadata Structure

Each NFT has an associated JSON metadata file stored on IPFS via Pinata. Example structure:

```json
{
  "name": "Epic Sword",
  "description": "A powerful sword forged in the flames of destiny.",
  "image": "https://gateway.pinata.cloud/ipfs/<imageCID>",
  "attributes": [
    { "trait_type": "Power", "value": 100 },
    { "trait_type": "Durability", "value": 80 },
    { "trait_type": "Level Required", "value": 5 }
  ]
}
```

## 🔗 Resources

* [Hardhat Documentation](https://hardhat.org/getting-started/)
* [Ethers.js Documentation](https://docs.ethers.io/v5/)
* [Vite Documentation](https://vitejs.dev/guide/)
* [Pinata Cloud](https://www.pinata.cloud/)
