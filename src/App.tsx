import React, { useState } from "react";
import Input from "./components/Input";
import Todos from "./types/Type";
import Messages from "./components/Messages";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todo, setTodo] = useState<Todos[]>([]);

  console.log(value, todo);

  const addMessage = () => {
    if (todo) {
      setTodo([...todo, { message: value, id: todo.length + 1 }]);
      setValue("");
    }
  };

  const deleteMessage = (id: number) => {
    setTodo(todo.filter(item => item.id !== id));
  };

  return (
    <div>
      <Input addMessage={addMessage} value={value} setValue={setValue}></Input>
      <Messages deleteMessage={deleteMessage} todo={todo}></Messages>
    </div>
  );
};

export default App;
