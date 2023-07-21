# Bank Transactions App
# Author: Judy Chelangat

This is a React application that displays a list of recent bank transactions and allows users to add new transactions and filter transactions based on their description.

# Project Overview
The Bank Transactions App is designed to provide users with a simple interface to view and manage their recent bank transactions. It fetches transaction data from a local server running JSON DB server, which provides a convenient way to simulate a backend for development and testing.

# Getting Started
 # Prerequisites
Before setting up the project, ensure you have the following installed: </br>

Node.js (https://nodejs.org) for running the application and installing dependencies. </br>
JSON Server (https://github.com/typicode/json-server) to serve as the backend and provide transaction data.</br>
# Project Setup
Clone this GitHub repository to your local machine.</br>
Navigate to the project folder using the command line or terminal.</br>
Install the required dependencies by running npm install.</br>
Create a db.json file in the project directory and populate it with sample transaction data. For example:
json
Copy code
{
  "transactions": [
    { "id": 1, "description": "Groceries", "amount": 50 },
    { "id": 2, "description": "Gasoline", "amount": 30 },
    { "id": 3, "description": "Restaurant", "amount": 25 }
  ]
}</br>
# Starting the Application
Start the JSON DB server by running the following command:

json-server --watch db.json --port 8001</br>
To launch the Bank Transactions App, run:
npm start</br>
The application should open in your default web browser at http://localhost:3000.

# Features
The Bank Transactions App comes with the following features:</br>

Transaction Table: The main page displays a table listing all transactions, including their description and amount.</br>

Add New Transaction: Users can fill out a form to add a new transaction to the table. Please note that the new transaction is not persisted to the backend but only displayed in the table temporarily.</br>

Filter Transactions: Users can filter transactions by typing into the search bar. Only transactions with descriptions matching the search term will be shown in the transactions table.</br>

# Contributing
This project is not open for external contributions as it is an individual project for learning purposes. However, feedback and suggestions are welcome. </br>

# contact
email judysigilai75@gmail.com

# License
This project is licensed under the MIT License.

# Acknowledgments
Thank you to the team at Moringa School for providing the guidance and resources to complete this project.





