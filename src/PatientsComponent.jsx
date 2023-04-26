import React from "react";

export default function PatientsComponent({ patients }) {
  return (
    <div>
      {patients.map((patient) => {
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <p className="text-gray-700 text-base">{patient.pet}</p>
        </div>;
      })}
    </div>
  );
}
