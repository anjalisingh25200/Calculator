const client = require('./connection.js')
const express = require('express')
const bodyparser = require('body-parser')
// GLOBAL.document = new JSDOM(html).window.document;
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
const app = express();
client.connect();
app.set("view engine", "ejs")
app.use(bodyparser.urlencoded({ extended: true }))
app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})


app.post("/", (req, res) => {

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    if (req.body.res == '+') {
        var result = n1 + n2;
        var output = BigInt(result);
        res.send('Result:' + output);

        // output = document.write(result.toPrecision());
        var pg = "Insert into cal(first_no, second_no, res ,ope ,time_inserted) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })

    }

    else if (req.body.res == '-') {
        var result = n1 - n2;
        var output = BigInt(result);
        res.send('Result:' + output);
        var pg = "Insert into cal(first_no, second_no, res ,ope ,time_inserted) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })

    }
    else if (req.body.res == '*') {
        var result = n1 * n2;
        var output = BigInt(result);
        res.send('Result:' + output);
        var pg = "Insert into cal(first_no, second_no, res ,ope ,time_inserted) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })
    }
    else if (req.body.res == '/') {
        var result = (n1 / n2);
        var output = BigInt(result);
        res.send('Result:' + output);
        var pg = "Insert into cal(first_no, second_no, res ,ope ,time_inserted) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })



    }
    else if (req.body.res == '%') {
        var result = n1 % n2;
        var output = BigInt(result);
        res.send('Result:' + output);
        var pg = "Insert into cal(first_no, second_no, res ,ope ,time_inserted) values('" + req.body.num1 + "', '" + req.body.num2 + "', '" + output + "', '" + req.body.res + "', current_timestamp )";
        client.query(pg, function (err, result) {
            if (!err) {
                console.log(">Inserted!");

            }
            else {
                console.log(err);
            }
        })

    }
    else if (req.body.res == 'clear') {
        var output = "";
        res.send("");
    }

    else {
        res.send(errorMessage);
    }


});

app.get('/records', (req, res) => {
    client.query("Select * from cal ", (err, result) => {
        if (!err) {
            res.render('records', { 'item': result.rows }
            );


        }
    })
});


app.listen('3000', (res) => {
    console.log("Connected to port 3000")
})
