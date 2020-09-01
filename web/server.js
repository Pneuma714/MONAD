const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + './index.md');
});

app.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);
});