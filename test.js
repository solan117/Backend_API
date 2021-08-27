const express = require("express");
const app = express();
const fetch = require('node-fetch');

app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/allmakes", async(request, response) =>{
    const api_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json';
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    var return_data = [];
    for(let i=0;i<data.Results.length;i++){
        return_data.push({Make_Name: data.Results[i].Make_Name});
    }
    response.json(return_data);
});

app.get("/makeyear", async(request, response) =>{

    const make = request.query.makeid
    const year = request.query.yearid

    const api_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/'+make+'/modelyear/'+year+'?format=json';
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    var return_data = [];
    for(let i=0;i<data.Results.length;i++){
        return_data.push({Model_ID: data.Results[i].Model_ID, Model_Name:data.Results[i].Model_Name});
    }
    response.json(return_data);
});

app.get("/vin", async(request, response) =>{

    const vin = request.query.vinid
    
    const api_url = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/'+vin+'?format=JSON';
    const fetch_response = await fetch(api_url);
    const data = await fetch_response.json();
    response.json({Make:data.Results[0].Make,Model:data.Results[0].Model,ModelYear:data.Results[0].ModelYear});
});

app.listen(port, function() {
    console.log("listening on 3000");
});