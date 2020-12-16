import './App.css';
import Map from './components/Map/index'
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import Jumbotron from "./components/Jumbotron/index"
import Subtitle from "./components/Subtitle/index"
import Services from "./components/Services/index"
import Reviews from "./components/Reviews/index"

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Subtitle />
      <Services />
      <Map />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
