const exp = require("express")

const app = exp();

app.get('/',(req , res) => {

    console.log("request made");
    // res.send("saran");

    // we can also send files
    res.status(200).sendFile("./data/index.html", { root: __dirname });
    console.log("data sent");
})

app.get('/about',(req , res) => {
    res.sendFile('./data/about.html' , {root : __dirname});
})

// for redirecting
app.get('/joinus' , (req, res) => {
    res.redirect('/about');
})

// for not found page use 

app.use((req,res) => {
    res.status(404).sendFile('./data/notfound.html',{root : __dirname});
})



app.listen(3000,'localhost',(() => {
    console.log("app is listening");
}))

