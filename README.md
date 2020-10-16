# MEAL.LY

**MEAL.LY** _is a software application for clients to use to keep track of their customers order placed, status and delivery._

## User Story

```
AS A RESTAURANT delivering food
WE WANT TO keep track of orders leaving the restaurant
WE WANT TO see orders that are progress and delivered
WE WANT TO help the driver visualize the process
SO THAT we can be organized through the delivery system
```

## Table of contents
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies](#technologies)
* [Visuals](#visuals)
* [Credits & Contributors](#creditscontributors)

## Requirements

_Using Node and Express Web Server:_
```
* Must be backed by a MySQL Database with a Sequelize ORM
* Must have both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with Data)
* Must utilize at least one new library, package, or technology that we haven’t discussed
* Must have a polished frontend / UI
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must not expose sensitive API key information on the server
```

## Installation

To run this application, install locally using node package manager or npm.

```
* Git clone repository
* Setup in code editor
* "Npm i" to intall all dependencies for application 
* Run "node start", "node server.js" or "node ." to setup PORT at locahost 
* Then go to localhost PORT provided inside the applications code editor of file "server.js"
```
## Usage

This software application is used for clients who are in need of a simple point of sale system that keeps track of their customers order input, order pending status and order delivery status.


## Technologies
```
* Node 13.7.7 
* Express Web Server 4.17.1
* Passport 1.0.0
* MySQL2 1.7.0 
* Sequelize ORM 5.22.3
* GET and POST routes
```



## Visuals
![Main](assets\orders.png)

Main order page which shows the orders being processed/delivered while also giving easy access to restaurants using the application as well as customer input form.


![Login](assets\login.png)
![Sign-up](assets\sign-up.png)

Sign-up and login pages powered by passport authentication to protect user data.




## Credits & Contributors
<a href="https://github.com/vsteere/Project2_VS_SS_GC_AR/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=vsteere/Project2_VS_SS_GC_AR" />
</a>
