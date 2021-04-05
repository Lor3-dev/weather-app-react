import "./styles.css";
import "./Footer.css";
import "./ListCities.css";
import "./Search.css";
import "./Weather.css";
import "./Forecast.css";
import ListCities from "./ListCities";
import Search from "./Search";
import Weather from "./Weather";
import Footer from "./Footer";
import Forecast from "./Forecast";
export default function App() {
  return (
    <div className=" weather-app-wrapper">
      <div className="App">
        <ListCities />
        <Search />
        <Weather />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
