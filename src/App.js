import './App.css';
import Pages from "./Pages"
import DesktopNavbar from './Components/DesktopNavbar/DesktopNavbar';
import Footer from "./Components/Footer/Footer";

function App() {

  const url = ""; //NOTE: Add the Weather api here

  return (
    <div className="App">
      <DesktopNavbar/>
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
