const axios = require('axios');

const loadDATData = async (queryParams) => {
  try {
    const response = await axios.get('https://api.dat.com/loads', {
      headers: { Authorization: `Bearer ${process.env.DAT_API_KEY}` },
      params: queryParams
    });
    return response.data; // transform if necessary
  } catch (error) {
    console.error('DAT API error:',error);
    return [];
  }
};

const loadTruckstopData = async (queryParams) => {
  try {
    const response = await axios.get('https://api.truckstop.com/loads', {
      headers: { Authorization: `Bearer ${process.env.TRUCKSTOP_API_KEY}` },
      params: queryParams
    });
    return response.data; // transform if necessary
  } catch (error) {
    console.error('Truckstop API error:',error);
    return [];
  }
};

module.exports = { loadDATData, loadTruckstopData };
