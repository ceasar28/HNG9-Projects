## Task Description

- Setup a server (Host)
- Create an **(GET)** api endoint that returns the following json response:
  { "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }
  - SlackUsername should be a **string** datatype and your slack username
  - Backend should be a **boolean** datatype
  - Age should be an  **integer** datatype
  - Bio(description about yourself) should be a **string** datatype
- Push to **GitHub**

**Sample Input:** does not apply
\*\*\*\*None

**Sample Response Format**
{ "**slackUsername**": String, "**backend**": Boolean, "**age**": Integer, "**bio**": String }

## Study Material

- [learn http methods - w3schools](https://www.w3schools.com/tags/ref_httpmethods.asp)
- [learn http request methods - FreeCodeCamp](https://www.freecodecamp.org/news/http-request-methods-explained/)
- if you have CORS errors, you can fix it like so:
  for NodeJS Express:
  add cors to your project npm i cors
  add this to your project entry file (server.js for some, app.js for others, whatever does it for you)
  app.use(cors({
  origin: '\*'
  }));
  If you like article too then: https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/

For Laravel: you probably need to follow this article, sorry.
https://medium.com/@martinsOnuoha/fix-cors-issues-in-laravel-apis-bad89bed0150

For Go and maybe Springboot, you guys sha get the point, read about it and include the correct headers in your work. There are really just 3 of these headers, Access-Control-Allow-Origin Access-Control-Allow-Methods and Access-Control-Allow-Headers.
