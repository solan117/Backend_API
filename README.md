# NHTSA RESTful Web API to perform operations 



**Instructions on how to run the app locally**

1. Clone project from GitHub or download zip file and unzip.
2. Run npm install command to install all necessary dependencies.
3. Run npm start to start the project. 
4. Go on http://localhost:3000/ 

**Overview of the project**

In this project I have used NHTSA API to perform several tasks.

This project is built using Node.js, Express.js for backend development and HTML to create a simple web page to consume API.

Here is the screenshot of the page on project startup.

<img src="C:\Users\Karan\Pictures\Screenshots\Screenshot (4).png" alt="Screenshot (4)" style="zoom:50%;" />

You can see there are three functionalities available in this project.

1. Get a list of all makes

   User just need to click on the button and it will provide you all makes in JSON format.

2. Get a list of all models filtered by make and year

   User need to enter their choice of make and year to get list of model name and model id in JSON format.

3. Get car details by VIN

   User need to provide VIN number and they will get the year, make, and model of the vehicle.

**API Documentation**

In this project I have used three different kind of api to perform tasks.

1. Get a list of all makes - https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json

    {
       "makeName": "ASTON MARTIN"
     },
     {
       "makeName": "TESLA"
     },
     {
       "makeName": "JAGUAR"
     }

   This is the snippet of what you get as response.

2. Get a list of all models filtered by a make and year -  https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/honda/modelyear/2015?format=json

   {
       "modelId": 1861,
       "modelName": "Accord"
     },
     {
       "modelId": 1863,
       "modelName": "Civic"
     }

   This is the snippet of what you get as response.

   -  Range for Year - 1981 to 2021.
   - If you enter any year before 1981 or after 2999 then you will receive empty response.
   - If you enter any year between 2022 to 2999 then you will receive same response.
   - If you enter any wrong make name then you will receive empty response.
   - 

3. Get Vehicle details by a VIN number - https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/3GKFK16T71G254432?format=json

   ​	{
     "Make": "GMC",
     "Model": "Yukon XL",
     "ModelYear": "2001"
   ​	}

   This is what you get as response.

   - If you enter any wrong VIN number then you will receive empty response.
