const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('helloworld', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
})();

app.get('/', (req, res) => {
    console.log('request from', req.ip);
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});