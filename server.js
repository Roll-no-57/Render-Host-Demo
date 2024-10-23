const express = require('express');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


// Define a route to handle the WolframAlpha queries
app.get('/welcome', async (req, res) => {
    
    try {
        res.json({"message": "Welcome to the simple server API"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
