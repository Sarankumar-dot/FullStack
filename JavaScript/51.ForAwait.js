// for await is a loop 
// supppose you have multiple fetch urls and you are wishing that every api fetches must be in a sequential order
// so we are using for await loop

// array of urls

const urls = ["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3"
];

// for using await the basic rule is you need to declare a async function

async function fetchData(){
    for await (const url of urls){ // for of returns the value of the array
        let response = await fetch(url);
        let data = await response.json();// response.json converts the raw data into javascript object
        console.log(data.title);
    }
}

fetchData();