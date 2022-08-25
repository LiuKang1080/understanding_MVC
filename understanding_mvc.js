// Understanding MVC

/*
MVC:
    - Stands for Model - View - Controller
    - MVC is NOT a framework or a library, it is a architectural paradigm for programming.
    - It is how we organize and structure our code.
    
    - It is very popular, it is used by many famous frameworks.
    - Programmers as a by product of using MVC also enact DRY principles (Don't Repeat Yourself)
        - Using MVC reduces copied code.
    
    - To fully understand MVC we need to know the entire flow process on how a website works:
        1) The Client uses a web browser [client side HTML, CSS, and JS], and makes a request to a website by going to that site.
        2) The request gets sent to a Linux / Windows server. The Server runs server side languages [JS on the backend].
        3) The server gnerally does NOT store any information / data.
        4) The server goes out to the database where information / data is stored long term.
            - The databse can be relational or non-relational, MVC doesn't care which one is used. Everything is treated as just
                a databse.
        5) The databse gathers all of the information that was requested, and smend that information back to the server.
        6) The server processes the data.
        7) The server sends the data back to the client for final client side rendering.

    - The Client - Server - Database structure exists with or without MVC.
    - MVC follows the 3 pillars above, and maps each pillar to a specific role.
        - The MVC strcuture / code exists in the backend / on the server
        - MVC is mapped to client, server, database like this:
            - The Model is mapped to the Database
            - The View is mapped to the Client
            - The Controller is mapped to the Server

        - If we are dealing with reading and writing to a database we will be working with the Model, not the view or the controller
        - If we are dealing with how we webpage looks and is rendered, we will be dealing with the View
        - If we are dealing with how things get from the Client to the Database, then we arew working with the controller.


The Model:
    - Anything we do to interact with the data.
    - Adding and retrieving items to and from the DB
    - Processing data to and from the DB
    - The Model ONLY speaks to the controller!
    - The Controller NEVER talks to the database directly, it ONLY talks to the Model.
    - The Model is the ONLY thing that is connected / talks to the database.
    - The Model NEVER talks to the View.


The View:
    - This is the only thing the client side user sees, the user sees nothing else on the backend.
    - This is the HTML / CSS rendering.
    - The View ONLY talks to the controller.
        - Technically the View only LISTENS to the Controller.
        - The Controller tells what the View to do, and the View listens and never talks back.
        - The View never makes decisions for itself, it only follows the directions that the Controller provides.
    - The View NEVER talks to the Model.


The Controller:
    - This is ALL of the server-side logic.
    - The Controller process GET, PUT, POST, and DELETE requests. This IS the REST API.
    - The COntroller listens for requests, and provides a response. We as devs choose HOW to respond.
    - The Controller is the middle man, between the View and the Model.
        1) It takes in information from the user.
        2) Processes the information and talks to the database is needed through the Model.
        3) Recieves information from the DB through the Model.
        4) Tells the View how to present the new information to the viewer.
    - This is the main logic, and the bulk of the backend.


The Route / Route Processor:
    - All frameworks have a Route processor.
    - Since there are multiple Controllers within an application the Router sends the request to a specific Controller BASED on
        the webpage URL.
    - Each Controller is listening for a SPECIFIC Request! EX)
        mysite.com/profile
        mysite.com/login
        mysite.com/checkout

        - Each of those URL links has a different Controller
        - the Login Controller ONLY deals with the requests that are tied to that URL, it does NOT deal with anything related to
            the /checkout

    - The Router sends the request info to the specific Controller that is in charage of that specific request, since it is the
        ONLY thing that can deal with the specific request.
    - The Router processes what the User wants, and sends the request to the specific Controller that can handle that request.


General MVC flow:
    1) Start with the user, the user goes to a page, a Request is made
    2) The Router is listening to what the user wants, it finds the specfic Controller that is designed to handle that specific
        request from the user.
    3) The Controller processes the request. If the request needs data from the database, the Controller goes to the Model
    4) The Model takes in the query request goes to the database, fetches / changes the information in the database, and gives
        the new information back to the Controller.
    5) The Controller takes the new information and gives it to the View while also telling the View 
        "place the data at these locations"
    6) The View embeds the new data into HTML and CSS. The View gets compiled and finally sent back to the user
    7) The web browser recieves the template and renders the page using the Chrome Engine / Firefox Engine . . . 

    - The order itself does not actually matter for MVC [MCV, VMC, VCM, CVM, CMV], what really matters is the FLOW / PROCESS

    ===== ===== =====

    user --> browser --> user request --> router --> controller --> model --> database --> model --> controller --> view response
    --> browser final render --> user
    
    ===== ===== =====
*/


console.log("Understanding MVC . . .");
console.log("I finally understand MVC !!!");
