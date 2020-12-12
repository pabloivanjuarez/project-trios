import './App.css';
import Map from './components/Map/index';
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import Jumbotron from "./components/Jumbotron/index"

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
