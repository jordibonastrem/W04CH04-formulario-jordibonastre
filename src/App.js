import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalData from "./components/PersonalData/PersonalData";

function App() {
  const testUser = {
    username: "Jordi",
    password: "Bonastre",
  };
  return (
    <>
      <PersonalData></PersonalData>
    </>
  );
}

export default App;
