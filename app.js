const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
require('./api/database');
const router = require('./api/routes/bookDirectoryRoutes');

app.use(express.json());
app.use(router);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});