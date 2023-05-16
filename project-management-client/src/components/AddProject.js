// src/components/AddProject.js

import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000";

function AddProject({ refreshProjects }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {                          // <== ADD
    e.preventDefault();
 
    const requestBody = { title, description };

    axios
      .post(`${API_URL}/projects`, requestBody)
      .then((response) => {
        console.log("New project", response.data)
        // Reset the state
        setTitle("");
        setDescription("");
        refreshProjects()
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
