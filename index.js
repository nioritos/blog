const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8888;


app.set('view engine', 'ejs')


app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`It's runnig on http://localhost:${port}`)
});