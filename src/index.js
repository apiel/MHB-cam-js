const express = require('express');
const cam = require('./cam');

const app = express();

app.get('/take', async (req, res) => {
    await cam.saveCamToDrive();
    res.send('ok');
});

const port = process.env.PORT || 3010;
app.listen(port, () => console.log(`Cam listen on ${port}`));
