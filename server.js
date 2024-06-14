const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = 8000;





app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
