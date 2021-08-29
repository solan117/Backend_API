const express = require('express');
const app = express();
const fetch = require('node-fetch');
const VPIC_API_BASE_URL = 'https://vpic.nhtsa.dot.gov/api';
const VPIC_API_DEFAULT_FORMAT = 'json';
const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');


app.use(express.json());
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/makes', async (request, response) => {
  const makeApiUrl = `${VPIC_API_BASE_URL}/vehicles/getallmakes?format=${VPIC_API_DEFAULT_FORMAT}`;
  const res = await fetch(makeApiUrl);
  const fetchedMakes = await res.json();

  const allMakes = fetchedMakes.Results.map((makes) => {
    return { makeName: makes.Make_Name };
  });

  response.json({ makes: allMakes });

});

app.get('/models', async (request, response) => {
  const make = request.query.make;
  const year = request.query.year;
  const modelsApiUrl = `${VPIC_API_BASE_URL}/vehicles/getmodelsformakeyear/make/${make}/modelyear/${year}?format=${VPIC_API_DEFAULT_FORMAT}`;

  const res = await fetch(modelsApiUrl);
  const fetchedModels = await res.json();

  const allModels = fetchedModels.Results.map((model) => {
    return {
      modelId: model.Model_ID,
      modelName: model.Model_Name,
    };
  });

  response.json({ models: allModels });

});

app.get('/vin', async (request, response) => {
  const vin = request.query.vin;

  const modelsApiUrl = `${VPIC_API_BASE_URL}/vehicles/decodevinvalues/${vin}?format=${VPIC_API_DEFAULT_FORMAT}`;
  const res = await fetch(modelsApiUrl);
  const fetchedVin = await res.json();

  response.json({
    make: fetchedVin.Results[0].Make,
    modelName: fetchedVin.Results[0].Model,
    modelYear: fetchedVin.Results[0].ModelYear,
  });
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, function () {
  console.log('listening on 3000');
});