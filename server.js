const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit',(req, res) => {
    const{name,email,age,gender,picture} = req.body;
    //server side validation
    console.log(name)
    console.log(email)
    console.log(age)
    console.log(gender)
    if(!name || !email || !age) {
        console.log('Please check all fields once')
        return res.status(400).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <style>

        body{
        font-family:Arial,sans-serif;
        background-color:#f4f4f9;
        display:flex;
        align-items:center;
        justify-content: center;
        height:100vh;
        margin:0;
        }
        
        .container{
        background-color:red;
        border-radius:10px;
        box-shadow:0 40px 8px rgba(0,0,0,0.1);
        width: 400px;
        padding:20px;
        
        text-align:center;
        }

        h1{
        color:#fff;
        margin-bottom:20px;
        }

        p{
        color:#fff;
        margin-bottom:20px;
        }

        </style>
        </head>
        <body>
        <div class="container">
        <h1>SERVER VALIDATION ERROR</h1>
        <p>YOUR DETAILS ARE INCOMPLETE</p>
        </div>
        </body>
        </html>
        `);
    }
    if(!/\S+@\S+\.\S+/.test(email)) {
        console.log('Format of Email is not correct')
        return res.status(400).send(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <style>

        body{
        font-family:Arial,sans-serif;
        background-color:#f4f4f9;
        display:flex;
        align-items:center;
        justify-content: center;
        height:100vh;
        margin:0;
        }
        
        .container{
        background-color:red;
        border-radius:10px;
        box-shadow:0 40px 8px rgba(0,0,0,0.1);
        width: 400px;
        padding:20px;
        
        text-align:center;
        }

        h1{
        color:#fff;
        margin-bottom:20px;
        }

        p{
        color:#fff;
        margin-bottom:20px;
        }

        </style>
        </head>
        <body>
        <div class="container">
        <h1>SERVER VALIDATION ERROR</h1>
        <p>We Couldn't Process that Email</p>
        <P>Kindly Verify and Try Again</P>
        </div>
        </body>
        </html>`)
    }
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <style>

        body{
        font-family:Arial,sans-serif;
        background-color:#f4f4f9;
        display:flex;
        align-items:center;
        justify-content: center;
        height:100vh;
        margin:0;
        }
        
        .container{
        background-color:pink;
        border-radius:10px;
        box-shadow:0 40px 8px rgba(0,0,0,0.1);
        width: 400px;
        padding:20px;
        
        text-align:center;
        }

        h1{
        color:#fff;
        margin-bottom:20px;
        }

        p{
        color:#fff;
        margin-bottom:20px;
        }

        a{
        display:inline-block;
        padding:10px 20px;
        background-color:#5cb85c;
        color:white;
        text-decoration:none;
        border-radius:5px;
        transition:background-color 0.3s;
        }

        a:hover{
        background-color:yellow;
        }
        </style>
        </head>
        <body>
        <div class="container">
        <h1>Thank You</h1>
        <p>Your Response is Recorded</p>
        <p>Name:${name}</p>
        <p>Email:${email}</p>
        <p>Age:${age}</p>
        <p>Gender:${gender}</p>
        </div>
        </body>
        </html>
        `);
});
app.listen(port, () =>{
    console.log(`server is running on ${port}`);
});