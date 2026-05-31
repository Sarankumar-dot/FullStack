const form = document.getElementById('studentForm');


const data = [];
form.addEventListener('submit', (value) => {
  value.preventDefault();

   const name = document.getElementById('namee').value;
   const email = document.getElementById('email').value;

   console.log(name, email);

   const obj = {
     name : name , 
     email : email
   }

   data.push(obj);

   console.log(data);
})




