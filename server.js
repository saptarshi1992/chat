const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app)
const PORT = 4000 || process.env.PORT;
app.use(express.static(path.join(__dirname, 'public')));
server.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});