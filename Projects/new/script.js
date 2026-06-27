const form = document.getElementById("studentForm");

const data = [];
form.addEventListener("submit", async (value) => {
  value.preventDefault();

  const name = document.getElementById("namee").value;
  const email = document.getElementById("email").value;

  console.log(name, email);

  const obj = {
    name: name,
    email: email,
  };

  try {
    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    const data = await response.json();
    alert("Student added successfully");
  } catch (err) {
    alert(err.message);
  }
});
