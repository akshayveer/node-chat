const path = require('path');
const publicPath = path.join(__dirname, '../public');
const express = require('express');

const app = express();

app.use(express.static(publicPath));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
