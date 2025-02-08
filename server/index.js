// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./src/config/db'); // if using Sequelize or a similar approach
const loadRoutes = require('./src/routes/loadRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection (if using Sequelize)
db.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Routes
// You can create a dedicated router in /routes. For now, just a test:
app.use('/api/loads', loadRoutes); // Connect the router to the /api/loads path 
//app.get('/', (req, res) => {
//  res.json({ message: 'Dispatch.ai backend is running!' });
//});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
