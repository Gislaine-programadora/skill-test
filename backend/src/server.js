const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));