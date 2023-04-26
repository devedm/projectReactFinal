import { useState } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "./FormComponent";
import PatientsComponent from "./PatientsComponent";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <HeaderComponent title="Crear Cita" />
        <FormComponent patients={patients} setPatients={setPatients} />
      </div>
      <div>
        <HeaderComponent title="Citas" />
        <PatientsComponent patients={patients} setPatients={setPatients}/>
      </div>
    </div>
  );
}

export default App;
