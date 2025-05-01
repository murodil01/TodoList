import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useTodos } from "../context/TodoContext";
import { useState } from "react";

export default function TodoList() {
  const { todos, dispatch } = useTodos();
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    if (!editText.trim()) return;
    dispatch({ type: "UPDATE", payload: { id, text: editText } });
    setEditingId(null);
  };

  return (
    <List
      sx={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "white",
        p: 2,
        marginTop: 2,
      }}
    >
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <>
              {editingId === todo.id ? (
                <IconButton onClick={() => handleUpdate(todo.id)}>
                  <SaveIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setEditingId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  <EditIcon />
                </IconButton>
              )}
              <IconButton
                onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <Checkbox
            edge="start"
            checked={todo.isCompleted}
            onChange={() => dispatch({ type: "TOGGLE", payload: todo.id })}
          />
          {editingId === todo.id ? (
            <TextField
              fullWidth
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
                opacity: todo.isCompleted ? 0.5 : 1,
              }}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
