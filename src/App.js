import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./Header";
import Home from "./Home";
import AllCountries from "./AllCountries";
import Records from "./Records";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <AllCountries />
      <Records />
      <Footer />
    </div>
  );
}

export default App;
