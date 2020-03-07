const express = require('express');
const Backendless = require('backendless');
const app = express();
const port = 5000;

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/high-scores', (request, response) => {
    console.log("responding");
    Backendless.initApp("59FE682A-E700-AB72-FF67-F5C494C10500" , 'B1178B46-7137-47DC-88AB-576BBE0500F5');
    // let dataArray = [];
    Backendless.Data.of("highScores").find()
            .then( (returnedArray) => {
                console.log(returnedArray);
                response.send(returnedArray);
            })
            .catch(function (error) {
                console.log(error)
            });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));