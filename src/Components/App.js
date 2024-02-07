import { useState } from "react";
import Form from "./Form";
import Stats from "./stats";
import Packedlist from "./PackedList";
import Logo from "./Logo";

export default function App() {
  const [items, setItem] = useState([]);

  function handleAdditems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDelete(id) {
    console.log(id);
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearlist() {
    setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAdditems} />
      <Packedlist
        items={items}
        onDeleteitems={handleDelete}
        onhandleToggle={handleToggle}
        onClearlist={handleClearlist}
      />
      <Stats items={items} />
    </div>
  );
}
