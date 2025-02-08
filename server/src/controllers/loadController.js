// server/src/controllers/loadController.js
const { loadDATData, loadTruckstopData } = require('../services/loadService');

exports.getAggregatedLoads = async (req, res) => {
  try {
    // extract query parameters from req.query
    const { origin, destination, equipment } = req.query;

    // call each API
    const [datLoads, truckstopLoads] = await Promise.all([
      loadDATData({ origin, destination, equipment }),
      loadTruckstopData({ origin, destination, equipment })
    ]);

    // transform into a unified format
    const unifiedLoads = [...datLoads, ...truckstopLoads].map(load => ({
      // map fields like "originCity", "destinationCity", "rate", "distance", etc.
    }));

    return res.json(unifiedLoads);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

