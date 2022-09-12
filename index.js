require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { pacientRoutes, paymentRoutes } = require('./routes');

const app = express();


app.use(cors({}));
app.use(express.json());
app.use('/pacients', pacientRoutes);
app.use('/payments', paymentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

