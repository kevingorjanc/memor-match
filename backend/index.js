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
        let queryBuilder = Backendless.DataQueryBuilder.create();
        queryBuilder.setSortBy( ["compositeScore"] );
        Backendless.Data.of("highScores").find( queryBuilder )
            .then( (returnedArray) => {
                console.log(returnedArray.length);
                response.send(returnedArray);
            })
            .catch(function (error) {
                console.log(error);
                response.send(error);
            });
    })
    .post( (request, response) => {
        Backendless.initApp("59FE682A-E700-AB72-FF67-F5C494C10500" , 'B1178B46-7137-47DC-88AB-576BBE0500F5');
        console.log("trying to submit");
        let cats = request.body;
        Backendless.Data.of("highScores").save((cats))
                    .then(function (res) {
                        console.log(res);
                        response.send(JSON.stringify(res));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));