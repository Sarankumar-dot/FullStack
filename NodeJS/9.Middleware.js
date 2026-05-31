// normal way 
// Browser -> Request -> Server -> Response -> Browser

// before the Response going to the browser we can do something in the server which is called middlesware
// Browser -> Request -> Server(middleware) -> Response -> Browser

const exp = require('express');

const app = exp();

app.listen(3000,'localhost',()=> {
    console.log("app is listening");
})


// this is a middleware which acts before response and the next method is used to say that the middleware is executed and you can begin the next process
app.use((req,res,next) => {
    console.log(req.method);
    console.log(req.hostname);
    next();
})

app.get('/' ,(req, res) => {
    res.sendFile('./data/index.html' , {root:__dirname})
})