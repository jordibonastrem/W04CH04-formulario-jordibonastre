import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AccessData from "./components/AccessData/AccessData";
import UserContext from "./components/context/UserContext";

function App() {
  const testUser = {
    username: "Jordi",
    password: "Bonastre",
  };
  return (
    <>
      <UserContext.Provider value={testUser}></UserContext.Provider>
    </>
  );
}

export default App;
