const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.port || 80;
const DIST_DIR = path.join(__dirname, 'dist');
const INDEX_FILE_PATH = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR))

app.listen(PORT, () => console.log('Server started'));

app.get(['/', '/info', '/players', '/words', '/final', '/winner/:id'], (req, res) => res.sendFile(INDEX_FILE_PATH));