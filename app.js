const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey , This is my aws devops project, created with the help of awsdevops getting started documentation.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
