import "./App.css";
import MainBody from "./layout/MainBody";
import MainHeader from "./layout/MainHeader";

function App() {
  return (
    <div className="App">
      <div className="main_app_content">
        <MainHeader />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
