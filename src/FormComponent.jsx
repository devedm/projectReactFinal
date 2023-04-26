import React, { useState } from "react";

export default function FormComponent({ patients, setPatients }) {
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
      details,
    };

    setPatients([...patients, information]);
    setPet("");
    setOwner("");
    setDateIn("");
    setHourIn("");
    setDetails("");
  }

  const labelClassCss = "block text-gray-700 text-sm font-bold mb-2";
  const inputClassCss =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const buttonClassCss =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action=""
      >
        <div className="mb-4">
          <label className={labelClassCss} htmlFor="pet">
            Nombre Mascota
          </label>
          <input
            className={inputClassCss}
            id="pet"
            type="text"
            value={pet}
            onChange={(e) => {
              setPet(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className={labelClassCss} htmlFor="owner">
            Nombre Dueño
          </label>
          <input
            className={inputClassCss}
            id="owner"
            type="text"
            value={owner}
            onChange={(e) => {
              setOwner(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className={labelClassCss} htmlFor="dateIn">
            Fecha de Ingreso
          </label>
          <input
            className={inputClassCss}
            id="dateIn"
            type="date"
            value={dateIn}
            onChange={(e) => {
              setDateIn(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className={labelClassCss} htmlFor="hourIn">
            Hora de Ingreso
          </label>
          <input
            className={inputClassCss}
            id="hourIn"
            type="time"
            value={hourIn}
            onChange={(e) => {
              setHourIn(e.target.value);
            }}
          />
        </div>

        <div className="mb-4">
          <label className={labelClassCss} htmlFor="details">
            Detalles
          </label>
          <textarea
            className={inputClassCss}
            id="details"
            type="text"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
        </div>

        <button className={buttonClassCss} onClick={addPatient} type="button">
          Agregar
        </button>
      </form>
    </div>
  );
}
