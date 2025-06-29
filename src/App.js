import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ Correct (named export)

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const addTask = () => {
    const updated = [...tasks, { text: task, done: false }];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const logout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">My Todo App</h2>
      {!user ? (
        <GoogleLogin
          onSuccess={(res) => {
            const decoded = jwtDecode(res.credential);
            setUser(decoded);
          }}
          onError={() => console.log("Login failed")}
        />
      ) : (
        <>
          <div className="d-flex justify-content-between mb-3">
            <h5>Welcome, {user.name}</h5>
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>

          <div className="input-group mb-3">
            <input
              className="form-control"
              placeholder="Enter task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add
            </button>
          </div>

          <ul className="list-group">
            {tasks.map((t, i) => (
              <li
                key={i}
                className={`list-group-item d-flex justify-content-between ${
                  t.done ? "list-group-item-success" : ""
                }`}
              >
                {t.text}
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => toggleTask(i)}
                >
                  {t.done ? "Undo" : "Done"}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
