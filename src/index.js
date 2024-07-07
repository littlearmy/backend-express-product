const express = require('express');
const bodyParser = require('body-parser');
const { listen } = require('express/lib/application');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./routes/routes');
routes(app);

// app.use("/", (req,res,next) => {
//     res.json({
//         nama: "Isuh",
//         alamat: "Durian"
//     })
// })



app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});