// TOPIC: HEADERS , QUERY PARAMS AND EXPRESS 

// IF WE GO ON A LOCAL HOST THEN http://localhost:3000/add?a=1&b=2 , here a and b are called query parameters 

//// express framework -> basically a chain of middlewares, even the last route handler is basically a middleware only

/* HTTP SERVER - it is a program which handles 
 (a) listens for http requests (b) processes them (c) sends back http responses 

 i.e. if we open google on browser, that is also a request sended to google server somwhere it is located , google's http server listens to it , decides what to do and sends back http responds

=> a machine can have multiple servers(processes) and each server is being handled by diff ports(3000,3001)
NOTE : one port can run only one process, not more than one , on a single machine we can have multiple ports(3000,3001)
 */

// METHODS - whatever method used for any website , it is the reposibility for the other side website also that whatever method is used to accessed the website it perfrom that operation only      

// HEADERS: 
// is the extra metadata , it is of no use for request handler
//i.e. if we open google in browser than going on inspect and then on network we can see 'request headers'& 'response header' which contains some data

// DEFINITON: 'HEADER' are key-value pairs sent between a 'client'(like a web browser) and a 'server' in an HTTP response or request. They convey metadata about the request or response , such as content type , auth info. etc
// ex: Authorization(sends the user the auth info), content-type( type of info client is sending(json, binary etc)) , Referer ( which URL is this request coming from )
// inside the request header this is somehow the password of individuals and goggle recognizes it and send some response(html,json)

// Request headers: the headers the 'client ' sends out in the request are known as request headers
// Response headers: the headers the 'server' responds with are known as the response headers

// FETCH API
// 2 high level ways a browser can send requests to an HTTP server 
//1st way : (default GET request) When you type a URL into the browser’s address bar and press Enter, the browser sends an HTTP GET request to the server. This request is used to retrieve resources like HTML pages, images, or other content.

//2nd way : from an HTML or JS 
// HTML Forms: When a user submits a form on a webpage, the browser sends an HTTP request based on the form’s method attribute, which can be GET or POST. Forms with method="POST" typically send data to the server for processing (e.g., form submissions).

// JavaScript (Fetch API): JavaScript running in the browser can make HTTP requests to a server using APIs the fetch API. These requests can be of various types (GET, POST, PUT, DELETE, etc.) and are commonly used for asynchronous data retrieval and manipulation (e.g., AJAX reques