const express = require('express');
const Backendless = require('backendless');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;


//configure body-parser for express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.get('/', (req, res) => res.send('Hello World!'));

app.route('/high-scores')
    .get( (request, response) => {
        console.log("responding");
        Backendless.initApp("59FE682A-E700-AB72-FF67-F5C494C10500" , 'B1178B46-7137-47DC-88AB-576BBE0500F5');
        Backendless.Data.of("highScores").find()
            .then( (returnedArray) => {
                console.log(returnedArray);
                response.send(returnedArray);
            })
            .catch(function (error) {
                console.log(error)
            });
    })
    .post( (request, response) => {
        Backendless.initApp("59FE682A-E700-AB72-FF67-F5C494C10500" , 'B1178B46-7137-47DC-88AB-576BBE0500F5');
        console.log("trying to submit");
        let cats = request.body;
        console.log(cats);
        // Backendless.Data.of("highScores").save((object))
        //             .then(function (response) {
        //                 console.log(response);
        //                 response.send("saved the score!")
        //             })
        //             .catch(function (error) {
        //                 console.log(error);
        //                 response.send("error saving")
        //             });
        //         console.log("got hee", );
        response.send(JSON.stringify("whats up from /post"));
        console.log("end post")
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));