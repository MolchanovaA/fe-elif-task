import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import Header from "./components/Header";
import RoutesComponent from "./components/routes/RoutesComponent";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
