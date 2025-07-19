const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Movie API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
