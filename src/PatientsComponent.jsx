import React from "react";

export default function PatientsComponent({ patients }) {
  return (
    <div>
      {patients.map((patient, index) => (
        <div
          key={patient.pet + "-" + index}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left"
        >
          <p className="text-gray-700 text-base">Mascota: {patient.pet}</p>
          <p className="text-gray-700 text-base">Dueño: {patient.owner}</p>
          <p className="text-gray-700 text-base">Ingreso: {patient.dateIn}</p>
          <p className="text-gray-700 text-base">Hora: {patient.hourIn}</p>
          <p className="text-gray-700 text-base">Detalles: {patient.details}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >Eliminar</button>
        </div>
      ))}
    </div>
  );
}
