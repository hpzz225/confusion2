// import logo from './logo.svg';
import "./App.css";
import Navigation from "./components/Navigation";
import Player from "./components/Players";
import Footer from "./components/Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
        <Player />
        <Footer />
      </div>
    </div>
  );
}

export default App;
