import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainPlaceholder from "./components/MainPlaceholder/MainPlaceholder"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainPlaceholder />
    </>
  );
}

export default App;
