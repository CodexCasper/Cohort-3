// Topic: HTTP servers
// whenever we visit any website let's say ( facebook or goggle ) a request is being sent by our device to that website server( wherever it is ) and that server responds with some html,css,js(if it is a website) to us 

// we can check this thing by visiting website " google "  inspect and check 'network' over there and check requests over there to a server , and some extra requests which the website would need over there 

//if we go on very first requests , then there comes => HEADER   PREVIEW   RESPONSE   
/*
HEADER => CONTAINS 
1.request url == an adress for the server 2.request method == GET 3.status code 4.remote adress ==142.250.193.228:443 the real address of the erver
RESPONSE => is a raw response serves gives to us 
preview => we can see what does the raw repsonse look like 
*/

// why HTTP protocol => so that servers can connect or talk to each other

// Request Response Model => is just a kind of communication pattern bw client( who wants to respond ) and server(who is responding)
// others protocols are websockets , webrtc , grpc

//////////////////////////////////////////////////////////////////////////////

/*DOMAIN NAME/ IP

a way to reach a server is thriugh its " DOMAIN NAME "  

every website that we visit , we are actually visiting the underlying IP adress , check by writing " nslookup -q=A example.com " command in command prompt

*/

// "ports" - are logical endpoints('doors') used by protocols to identify a specific processes running on a computer/server , helps direct traffic to correct application or service on a system   i.e 152.42.156.126:444  , '444' 

// "methods" - good way to structure your https requests 
// mainly four methods but , many more exist
// CREATE - POST request
// READ - GET request ( by deafult )
// UPDATE - PUT request
// DELETE - DELETE request


// "RESPONSE" - WHAT the server responds you to in response to the request
// types 1.PLAINTEXT 2.HTML => if it is a website( i.e. google,facebook) 3. JSON( JAVASCRIPT OBJECT NOTATION ) -if we want to fetch some data and once we get it we can render it 

// "STATUS code"
// these are three-digits nummbers returned by server to indicate the outcome of client's request. they provide information about the status of the request and the server's response

/*
types 1. 200 series ( success )=> 
    (a) 200 ok - The request was successful, and the server returned the requested resource.
    (b) 200 no contents - The request was successful, but there is no content to send in the response

  2. 400 series(client error) =>
    (a) 400 bad request - The server could not understand the request due to invalid syntax.
    (b) 401 Unauthorized - The request requires user authentication. The client must provide credentials.
    (c)403 Forbidden -  The server understood the request but refuses to authorize it.
    (d)404 Not Found - thee requested resource can not be found on the server 

  3. 500 series( server error ) =>
  (a) 500 Internal Server Error - The server encountered an unexpected condition that prevented it from fulfilling the request.
  (b) 502 Bad Gateway - The server received an invalid response from an upstream server while acting as a gateway or proxy.

  4. 300 series ( redirection ) =>
  (a) 301 Moved Permanently: The requested resource has been moved to a new URL permanently. The client should use the new URL provided in the response.
  (b) 304 Not Modified: The resource has not been modified since the last request. The client can use the cached version.

*/

// "BODY" - the BODY ( or payload ) refers to the part of an HTTP message that actually contain data being sent the server , which is actually JSON

// "ROUTE" - basically we know we have to visit this or that website but what we want to do or we can say visit in that website 
//it is an endpoint that defines how incoming requests are handled by a server i.e https//api.todo.com/user/createtodo or signup


// HEADERS - HTTP headers are key-value pairs included in HTTP requests and responses that provide metadata about the message. Why not use body?
//Even though you can use body for everything, it is a good idea to use headers for sending data that isn’t directly related with the application logic.
//For example, if you want to create a new TODO, you will send the TODO payload in the body