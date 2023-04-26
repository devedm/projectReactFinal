import { useState } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "./FormComponent";
import PatientsComponent from "./PatientsComponent";

function App() {
  const [patients, setPatients] = useState([]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center h-screen">
        <HeaderComponent title="Crear Cita" />
        <FormComponent patients={patients} setPatients={setPatients} />
      </div>
      <div className="flex flex-col items-center h-screen">
        <HeaderComponent title="Citas" />
        <PatientsComponent patients={patients}/>
      </div>
    </div>
  );
}

export default App;
