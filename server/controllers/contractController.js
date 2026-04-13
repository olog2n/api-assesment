// /server/controllers/contractController.js
const { getContractData } = require('../utils/contractReader');

exports.getContractInfo = async (req, res) => {
  try {
    const data = await getContractData(); 
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Contract fetch error:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
};