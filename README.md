# NHTSA RESTful Web API to perform operations 

**Live demo link of the project**

https://backendapi1.herokuapp.com/

**Instructions on how to run the app locally**

1. Clone project from GitHub or download zip file and unzip.
2. Run npm install command to install all necessary dependencies.
3. Run npm start to start the project. 
4. Go on http://localhost:3000/ 

**Overview of the project**

In this project I have used NHTSA API to perform several tasks.

This project is built using Node.js, Express.js for backend development and HTML to create a simple web page to consume API.

You can see there are three functionalities available in this project.

1. Get a list of all makes

   User just need to click on the button and it will provide you all makes in JSON format.

2. Get a list of all models filtered by make and year

   User need to enter their choice of make and year to get list of model name and model id in JSON format.

3. Get car details by VIN

   User need to provide VIN number and they will get the year, make, and model of the vehicle.

4. Added swagger to auto generate documentation for REST API.
   Link for swagger.

   localhost:3000/doc

**API Documentation**

[Documentation](swagger.md)