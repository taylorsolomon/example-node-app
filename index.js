const express = require('express');

const app = express();
const port = 7357;

// http://my-api.com/
// http://localhost:7357/
app.get('/', (req, res) => {
    res.send("Hello World!");
})

// http://localhost:7357/fellows
app.get('/fellows', (req, res) => {
    const headers = req.headers;
    console.log(headers);

    const data = {
        fellows: fellows
    }

    res.send(data)
})

app.post('/fellows', (req, res) => {
    const body = req.body;
    // Persist the fellow to a db.

    res.send('Done');
})

app.listen(port, () => {
    console.log(`Example node app listening on ${port}`);
})

const fellows = [
    {
        name: "Donald",
        favoriteInstructor: "Taylor"
    },
    {
        name: "Molly",
        favoriteInstructor: "Taylor"
    },
    {
        name: "Maxim",
        favoriteInstructor: "Taylor"
    },
    {
        name: "Ethan",
        favoriteInstructor: "Taylor"
    },    
    {
        name: "Ryan",
        favoriteInstructor: "Taylor"
    },    
    {
        name: "Linhai",
        favoriteInstructor: "Taylor"
    }        
];

// Client side
// fetch('localhost:7357/fellows')
//     .then(response => response.json())
//     .then(/** yadda yada */)
