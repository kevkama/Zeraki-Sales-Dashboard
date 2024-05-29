# ZerakiSalesDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project Overview

The Zeraki Dashboard is a web-based application designed to provide comprehensive insights and analytics for educational institutions. It offers various features including signups overview, revenue tracking, invoice management, and detailed information about schools. The dashboard is built using Angular for the front-end and leverages a mock JSON-based database to simulate real data.

## Features

Metrics Overview: Displays top metrics such as total collections, signups, and bounced cheques.
Signups Visualization: Visualizes signups by product and school type.
Revenue Tracking: Tracks total revenue and revenue by product.
Invoices Management: Lists upcoming invoices with details like school name, amount due, and due date.
School Details: Provides detailed information about each school including balance and contact info.
Collections: Tracks payment collections against invoices.

## Key Design Decisions

Component-Based Architecture: The application is built using Angular's component-based architecture to promote modularity and reusability.
Responsive Design: CSS flexbox and media queries ensure the dashboard is responsive and visually appealing on various devices.
Mock Database: Utilizes a JSON file to simulate database operations, allowing for easy setup and testing without a back-end server.
Card Layout: Information is displayed in card layouts to enhance readability and organization.

### Setup Instructions
## Prerequisites

Node.js (version 12.x or higher)
Angular CLI
Installation

## Clone the Repository

git clone https://github.com/kevkama/zeraki-dashboard.git
cd zeraki-dashboard
Install Dependencies
npm install

## For the mock database 

run comand 'ng watch json-server
