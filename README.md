## 📦 Blockchain Test Task: Contract Data API

### 🎯 Objective
Add a backend endpoint to fetch smart contract state (EVM/Sepolia) into the existing project.

### ✅ Implemented
- `GET /api/v1/contract` — returns `decimals()`, contract address, `chainId`, and timestamp
- Integration via `ethers.js v5` + public Sepolia RPC (no third-party API dependencies)
- Contract address moved to `.env` for easy reconfiguration
- Code follows the existing MVC structure: `routes/contractRoute.js` → `controllers/contractController.js` → `utils/contractReader.js`
- Secure Docker setup ready (non-root `appuser`, read-only filesystem, `cap_drop: ALL`)

### 🖥️ How to Run
**Locally:**
```bash
cd server
npm install
node server.js
# In another terminal:
curl http://localhost:5000/api/v1/contract
**In Docker:**
```bash
docker compose up -d
curl http://localhost:5000/api/v1/contract

You`ll get JSON:

{
  "success": true,
  "data": {
    "address": "0xf531B8F309Be94191af87605CfBf600D71C2cFe0",
    "decimals": 18,
    "chainId": "11155111",
    "network": "Sepolia Testnet",
    "fetchedAt": "2026-04-13T..."
  }
}