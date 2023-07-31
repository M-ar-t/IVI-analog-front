import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/Navbar/Navbar";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>   
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
