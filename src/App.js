import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalData from "./components/PersonalData/PersonalData";
import AccessData from "./components/AccessData/AccessData";

function App() {
  const testUser = {
    username: "Jordi",
    password: "Bonastre",
  };
  return (
    <>
      <PersonalData></PersonalData>
      <AccessData></AccessData>
    </>
  );
}

export default App;
