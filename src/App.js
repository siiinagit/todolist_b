import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Deleted from "./Pages/Deleted";
import TodosContextProvider from "./Context/todosContext";

function App() {
  return (
    <div>
      <TodosContextProvider>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deleted" element={<Deleted />} />
      </Routes>
      </TodosContextProvider>
    </div>
  );
}

export default App;
