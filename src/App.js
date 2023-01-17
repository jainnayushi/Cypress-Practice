import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import Trial from "./Trial";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState(""); // Input entered
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false); // Flag for editing
  const [editID, setEditID] = useState(null); // To note which item to edit
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <section className="section-center">
        <form className="notion-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}

          <h3>Notion Remake</h3>
          <div className="form-control">
            <input
              type="text"
              className="notion"
              placeholder="Enter Task"
              data-input="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn" data-submit="submit">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="notion-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              className="clear-btn"
              onClick={clearList}
              data-clear="clear"
            >
              clear items
            </button>
            <Trial />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
