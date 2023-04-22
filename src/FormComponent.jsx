import React, { useState } from "react";
import "./FormComponent.css";

export default function FormComponent() {
  const [patients, setPatients] = useState([]);
  const [pet, setPet] = useState("");
  const [owner, setOwner] = useState("");

  function addPatient() {
    const information = {
      pet,
      owner,
    };
    setPatients([...patients, information]);

    setPet("");
    setOwner("");
  }

  return (
    <div>
      <form className="inputForm" action="">
        <label htmlFor="pet">Nombre Mascota</label>
        <input id="pet" type="text" value={pet} onChange={(e) => { setPet(e.target.value)}}/>
        <label htmlFor="owner">Nombre Dueño</label>
        <input id="owner" type="text" value={owner} onChange={(e) => { setOwner(e.target.value)}}/>
        <button onClick={addPatient} type="button">
          Agregar
        </button>
      </form>
    </div>
  );
}
