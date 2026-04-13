// /server/routes/contractRoute.js
const express = require('express');
const router = express.Router();
const { getContractInfo } = require('../controllers/contractController');

router.get('/contract', getContractInfo);

module.exports = router;