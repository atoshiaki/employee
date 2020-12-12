import "./App.css";
import Footer from "./components/Footer";
import AllUsers from "./pages/AllUsers";

function App() {
  return (
    <div style={{background: "bottom"}} className="App">
      <h1>User Directory</h1>
      <AllUsers/>
      <Footer/>
    </div>
  );
}

export default App;