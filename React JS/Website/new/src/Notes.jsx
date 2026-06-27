import React, { useState } from "react";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDesc(e) {
    setDesc(e.target.value);
  }

 function addNotes() {
   if (title.trim() !== "" && desc.trim() !== "") {
     setNotes([
       ...notes,
       {
         title,
         description: desc,
       },
     ]);

     setTitle("");
     setDesc("");
   }
 }


  function deleteNote(i){
    setNotes(notes.filter((value,index) => index != i))
  }

  function editNotes(i){
    setNotes(notes.map((value,index) => {
        if(index === i){
            return{
            title : title,
            description : desc
            }
        }

        return value;
    }))

    
  }
  return (
    <div className="container" style={{ margin: "300px" }}>
      <input
        style={{ width: "400px" }}
        value={title}
        type="text"
        className="form-control"
        required
        placeholder="enter title"
        onChange={handleTitle}
      />
      <input
        style={{ width: "400px" }}
        value={desc}
        type="text"
        className="form-control"
        required
        placeholder="enter description"
        onChange={handleDesc}
      />

      <button className="btn btn-primary" onClick={addNotes}>
        add notes
      </button>

      {notes.length > 0 &&
        notes.map((value, index) => (
          <div key={index}>
            <p>
              {index + 1} : {value.title}
            </p>
            <p>{value.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => deleteNote(index)}
            >
              remove note
            </button>

            <button className="btn btn-success" onClick={() => editNotes(index)}>
              edit notes
            </button>
          </div>
        ))}
    </div>
  );
};

export default Notes;
