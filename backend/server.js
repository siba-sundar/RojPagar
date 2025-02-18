// server.js
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT
//import jobRoutes from './routes/jobRoutes.js';

// setup restarted 
// MongoDB Connection
const connectToDatabase = require('./database/connection')
connectToDatabase()

const app = express();

// Middleware
app.use(express.json());

app.use(cors())

// Routes
//app.use('/api', jobRoutes);



app.get('/', (req, res) => {
    res.send('<center><h1>Welcome to Roj Pagar Backend</h1>' +
        '<h3><a href="https://github.com/Aryan-Sheregar/RojPagar.git" target="_blank">Visit Repository</a></h3></center>')
})





// Start the server
app.listen(PORT, () => {
    console.log(`RojPagar Backend listening on http://localhost:${PORT}`)
})


module.exports = app