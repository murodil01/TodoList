import { Container, Typography, Box } from "@mui/material";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom align="center">
          Todo List
        </Typography>
        <Box sx={{ my: 3 }}>
          <TodoForm />
        </Box>
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
