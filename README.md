This app is for people who want to discipline they time or just for people who wants to set a reminder of their events.
 
To run the code first please run the following commands that installs the packages in the cli:
- npm install express pug body-parser 
- npm install express-validator
- npm install jsonwebtoken bcrypt

Then run the app by running this in the cli:
- node app.js
And here you go!

In my app I have the not used code middleware/auth.middlewar.js, it basically verifies the token obtained from the login, however I could not use it in the events list part, it is just thought that the token is absent, and the reason I am uploading it, is the effort that I have been made. 

My project tree/structure: 
/event-planning-app
  app.js
  package.json
  package-lock.json
  /middleware
    middlewar.js
  /public
    /styles
      style.css
  /routes
    events.js
  /controllers
    events.controller.js
    Auth.controllers.js
  /views
    auth.pug
    create-event.pug
    error.pug
    events.pug
    index.pug
    layout.pug
    update-event.pug


    
    

