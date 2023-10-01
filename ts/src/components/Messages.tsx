import React from "react";
import Todos from "../types/Type";

interface Props {
  todo: Todos[];
  deleteMessage: (id: number) => void;
}

const Messages: React.FC<Props> = ({ todo, deleteMessage }) => {
  return (
    <div>
      {todo.map((item, index) => (
        <div key={index}>
          {item.message} -{" "}
          <span
            onClick={() => {
              deleteMessage(item.id);
            }}
            style={{ cursor: "pointer" }}
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export default Messages;
