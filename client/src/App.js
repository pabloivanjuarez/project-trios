import logo from './logo.svg';
import './App.css';
import Map from './components/Map/index';
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import Jumbotron from "./components/Jumbotron/index"
import Services from "./components/Services/index"


function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Services />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
