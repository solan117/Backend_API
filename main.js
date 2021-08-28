const express = require('express');
const app = express();
const fetch = require('node-fetch');
const VPIC_API_BASE_URL = 'https://vpic.nhtsa.dot.gov/api';
const VPIC_API_DEFAULT_FORMAT = 'json';

app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/makes', async (request, response) => {
  const makeApiUrl = `${VPIC_API_BASE_URL}/vehicles/getallmakes?format=${VPIC_API_DEFAULT_FORMAT}`;
  const fetchedMakes = await fetch(makeApiUrl).json();

  const allMakes = fetchedMakes.Results.map((makes) => {
    return { makeName: makes.Make_Name };
  });

  response.json(allMakes);
});

app.get('/models', async (request, response) => {
  const make = request.query.make;
  const year = request.query.year;
  const modelsApiUrl = `${VPIC_API_BASE_URL}/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=${VPIC_API_DEFAULT_FORMAT}`;

  const fetchedModels = await fetch(modelsApiUrl).json();

  const allModels = fetchedModels.Results.map((model) => {
    return {
      modelId: model.Model_ID,
      modelName: model.Model_Name,
    };
  });
  response.json(allModels);
});

app.get('/vin', async (request, response) => {
  const vin = request.query.vinid;

  const api_url = `${VPIC_API_BASE_URL}/vehicles/decodevinvalues/${vin}?format=${VPIC_API_DEFAULT_FORMAT}`;
  const fetch_response = await fetch(api_url);
  const data = await fetch_response.json();
  response.json({
    Make: data.Results[0].Make,
    Model: data.Results[0].Model,
    ModelYear: data.Results[0].ModelYear,
  });
});

app.listen(port, function () {
  console.log('listening on 3000');
});