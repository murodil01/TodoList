import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { dispatch } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "ADD",
      payload: { id: Date.now(), text, isCompleted: false },
    });

    setText("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 1,
        mb: 2,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px", 
        p: 2, 
        backgroundColor: "white", 
      }}
    >
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Yangi vazifa"
        variant="outlined"
      />
      <Button variant="contained" type="submit">
        Qo'shish
      </Button>
    </Box>
  );
}
