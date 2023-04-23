import React, { useState } from "react";
import "./FormComponent.css";

export default function FormComponent() {
  const [patients, setPatients] = useState([]);
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [hourIn, setHourIn] = useState("");
  const [details, setDetails] = useState("");

  function addPatient() {
    const information = {
      pet,
      owner,
      dateIn,
      hourIn,
      details
    };
    
    setPatients([...patients, information]);

    setPet("");
    setOwner("");
    setDateIn("");
    setHourIn("");
    setDetails("");
  }

  return (
    <div>
      <form className="inputForm" action="">

        <label htmlFor="pet">Nombre Mascota</label>
        <input id="pet" type="text" value={pet} onChange={(e) => { setPet(e.target.value)}} required/>

        <label htmlFor="owner">Nombre Dueño</label>
        <input id="owner" type="text" value={owner} onChange={(e) => { setOwner(e.target.value)}} required/>

        <label htmlFor="dateIn">Fecha de Ingreso</label>
        <input id="dateIn" type="date" value={dateIn} onChange={(e) => { setDateIn(e.target.value)}} required/>

        <label htmlFor="hourIn">Hora de Ingreso</label>
        <input id="hourIn" type="time" value={hourIn} onChange={(e) => { setHourIn(e.target.value)}} required/>

        <label htmlFor="details">Detalles</label>
        <textarea id="details" type="text" value={details} onChange={(e) => { setDetails(e.target.value)}} required/>

        <button onClick={addPatient} type="button">
          Agregar
        </button>
      </form>
    </div>
  );
}
