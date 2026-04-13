// /server/utils/contractReader.js
const ethers = require('ethers');
require('dotenv').config();

const provider = new ethers.providers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

const ERC20_ABI = [
  "function decimals() view returns (uint8)"
];

async function getContractData() {
  const address = process.env.SEPOLIA_TEST_CONTRACT;
  
  if (!address || !ethers.utils.isAddress(address)) {
    throw new Error('Invalid or missing SEPOLIA_TEST_CONTRACT in environment');
  }

  const contract = new ethers.Contract(address, ERC20_ABI, provider);
  const decimals = await contract.decimals();
  
  return {
    address,
    decimals: Number(decimals), 
    chainId: process.env.ETHEREUM_CHAIN_ID,
    network: 'Sepolia Testnet',
    fetchedAt: new Date().toISOString()
  };
}

module.exports = { getContractData };