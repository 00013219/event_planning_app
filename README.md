This app is for people who want to discipline they time or just for people who wants to set a reminder of their events.

Link to the GitHub repository: https://github.com/00013219/event_planning_app
Link to the website: https://event-planning-app-popn.onrender.com

Step-by-step on how to run the code:
 
1) To run the code first please run the following commands that installs the packages in the cli:
- npm install express pug body-parser 
- npm install express-validator
- npm install jsonwebtoken bcrypt

2) Then run the app by running this in the cli:
- node app.js
And here you go!

Here is the list of packages and framework I have used:
- Express JS
- Pugor
- Body Parser
- express-validator
- Json Web Token
- bcrypt

In my app, I have the auth.middleware.js middleware code, which verifies the token obtained from the login. However, I couldn't integrate it into the events list section. It simply says that the token is absent. Despite my efforts, I haven't been able to make it work. Nonetheless, I'm sharing it here to show the work I've put into it.

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






