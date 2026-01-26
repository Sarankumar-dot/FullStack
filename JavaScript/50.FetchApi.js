//JSON.parse // JSON.stringify are covered in this

// we are using fetch api to fetch data from a url 
//we use fetch api which internally uses promises to handle asychronous code


// get - is used to fetch data from the server
// eg for getting data from a url
fetch('https://jsonplaceholder.typicode.com/posts/1')
//the fetch is actually a promise so we can access the data using then and catch the errors using catch
.then((response) => response.json()) // response.json converts the raw data into javascript object
.then((any) => console.log("get result : ",any))
.catch((error) => console.error("error " , error));


// post - is used to send data to the server
// eg for posting data to a url
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST", // mentioning the method of what we are doing
    headers :{
        "Content-type":"application/json"
    },//header contains the data type we are going to send
    // body contains our data which need to be sended
    body: JSON.stringify({
        title : "my post",
        body:"this is a post",
        userId:1
    }) // here we are writing the data in js but the post method only accepts json format so we are using the JSON.stringify(); to convert the js to json format
})
// after we completed sending the data a response will be sended back to us for receiving it we have to use 
.then((response) =>response.json())
.then((value) =>console.log("POST value is :",value))
.catch((e) => console.error("error is : ", e));

// put - is used to update the data in the server
// delete - is used to delete the data from the server


// in js if you have to convert a js object to json you have to use JSON.stringify()

const obj = {
    name:"saran",
    age:21
};

let json;
setTimeout(()=>{
    json = JSON.stringify(obj);
    console.log(json); // this will print a json string like this '{"name":"saran","age":21}'
},4000)

// converting a json in to js object

setTimeout(() =>{
    let parsedObject = JSON.parse(json);
    console.log(parsedObject);
},5000)



