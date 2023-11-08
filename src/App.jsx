import { useState } from "react";
import "./App.css";
import "./reset.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";
function App() {
  const [cards, setCards] = useState([
    {
      id: uuid(),
      title: "Sample Title1",
      content: "Sample Content1",
      isDone: false,
    },
    {
      id: uuid(),
      title: "Sample Title2",
      content: "Sample Content2",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    setCards([...cards, newCard]);
  };

  const handleCompleteCancelBtn = (item) => {
    const updateCards = cards.map((card) => {
      return card.id === item.id ? { ...card, isDone: !card.isDone } : card;
    });
    setCards(updateCards);
  };
  const handleDeleteBtn = (item) => {
    const updateCards = cards.filter((card) => {
      return card.id !== item.id;
    });
    setCards(updateCards);
  };

  return (
    <>
      <header style={{ backgroundColor: "red" }}>
        <h1>Todo List</h1>
        <Input
          handleFormSubmit={handleFormSubmit}
          title={title}
          content={content}
          handleTitle={handleTitle}
          handleContent={handleContent}
        />
      </header>
      <main>
        <TodoList 
        cards={cards}
        handleCompleteCancelBtn={handleCompleteCancelBtn}
        handleDeleteBtn={handleDeleteBtn}
        listIsDone={false}/>
                <TodoList 
        cards={cards}
        handleCompleteCancelBtn={handleCompleteCancelBtn}
        handleDeleteBtn={handleDeleteBtn}
        listIsDone={true}/>
      </main>
      <footer style={{ backgroundColor: "yellow" }}>footer</footer>
    </>
  );
}

export default App;
