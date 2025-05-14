"use client";
import React, { useRef, useState } from "react";

const Todolist = () => {
  const inputRef = useRef(null);
  const [items, setItems] = useState([]);

  const addToList = () => {
    const inputVal = inputRef?.current?.value;
    console.log(`inputVal => ${inputVal}`);

    if (!inputVal) return;

    let newItem = {
      id: Date?.now(),
      itemName: inputVal,
      completed: false,
    }
    setItems([...items, newItem]);
    inputRef.current.value = "";
  }

  console.log(items);

  const deleteItem = (id) => {
    console.log(`deleteItem => ${id}`);
    setItems(items.filter(item => item.id !== id));
  }

  const markComplete = (id) => {
    console.log(`mark complete => ${id}`);
    setItems(items?.map((item) => {
      console.log(item);
      if (item?.id === id) {
        return { ...item, completed: true };
      }
      return item;
    }))
  }

  return (
    <>
      <div>
        <input placeholder="Enter todo" name="listinput" ref={inputRef} />
        <button onClick={addToList}> Add </button>

        <ul>
          {items?.map((item, index) => (
            <li key={item.id} style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              <input type="checkbox" name="itemSelect" checked={item?.completed} onChange={() => markComplete(item?.id)} />
              <p style={{ textDecoration: item?.completed ? 'line-through' : 'none' }}>
                {item?.itemName}
              </p>
              <button onClick={() => deleteItem(item?.id)}>Delete </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Todolist;


