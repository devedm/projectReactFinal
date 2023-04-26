import { useState } from "react";
import "./App.css";
import HeaderComponent from "./HeaderComponent";
import FormComponent from "./FormComponent";
import PatientsComponent from "./PatientsComponent";

function App() {
  const [patients, setPatients] = useState([]);

  const deletePatient = (index) => {
    const updatedPatients = [...patients];
    updatedPatients.splice(index, 1);
    setPatients(updatedPatients);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center h-screen">
        <HeaderComponent title="Crear Cita" />
        <FormComponent patients={patients} setPatients={setPatients} />
      </div>
      <div className="flex flex-col items-center h-screen">
        <HeaderComponent
          title={patients.length === 0 ? "No hay citas" : "Lista de Citas"}
        />
        <PatientsComponent patients={patients} deletePatient={deletePatient} />
      </div>
    </div>
  );
}

export default App;
