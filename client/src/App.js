import { useEffect } from "react";
import DropDown from "./components/DropDown";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((response) => {
        debugger;
      });
  }, []);

  return (
    <div style={{ margin: "20px auto" }}>
      <DropDown />
    </div>
  );
}

export default App;
