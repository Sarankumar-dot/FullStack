const form = document.getElementById("formm");

const button = document.getElementById("getData");

const updateBut = document.getElementById("updateData");

const deleteBut = document.getElementById("deleteData");

deleteBut.addEventListener("click", async (e) => {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value;

  const data = {
    studentId,
  };

  try {
    const response = await fetch("http://localhost:3000/deleteStudent", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    alert(res.message);
  } catch (e) {
    alert(e.message);
  }
});
updateBut.addEventListener("click", async (e) => {
  e.preventDefault();

  const studentId = document.getElementById("studentId").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const obj = { studentId, email, password };
  try {
    const response = await fetch("http://localhost:3000/updateStudent", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    const res = await response.json();
    alert(res.message);
  } catch (e) {
    console.log(e.message);
  }
});

button.addEventListener("click", async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/getStudentData", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const res = await response.json();

    let para = document.getElementById("output-p-tag");

    para.innerHTML = "";

    res.forEach((student) => {
      para.innerHTML += `
    <p>Email: ${student.email}, Password: ${student.password}</p>
  `;
    });
  } catch (e) {
    console.log(e.message);
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const obj = {
    email,
    password,
  };

  try {
    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const output = await response.json();
    alert(output.message);
  } catch (e) {
    alert(output.message);
  }
});
