// server/src/routes/loadRoutes.js
const express = require('express');
const router = express.Router();
const loadController = require('../controllers/loadController');

// GET /api/loads
//router.get('/', loadController.getAggregatedLoads);

//For testing rounter returns an array of loads
router.get('/', (req, res) => {
    // Return some data, e.g., an array of loads
    res.json([
      { id: 1, origin: 'Chicago', destination: 'Los Angeles' },
      { id: 2, origin: 'Dallas', destination: 'Houston' }
    ]);
  });

module.exports = router;
