require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.listen(PORT, () => console.log(`Server running at ${PORT}`))