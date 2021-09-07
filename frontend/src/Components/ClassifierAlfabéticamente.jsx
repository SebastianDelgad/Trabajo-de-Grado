import React, { useEffect, useState } from "react";

export const ClassifierAlfabéticamente = () => {
  const [equipos, setEquipo] = useState([]);

  useEffect(() => {
    //console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://127.0.0.1:5000/");
    const info = await data.json();
    console.log(info);
    info.data.map((element) => {
      console.log(element);
    });
    setEquipo(info.data);
  };

  return (
    <div>
      <h1>Evaluaciones</h1>
      {equipos.map((item) => (
        <li> Nombre:  {item.docente} - Asignatura:  {item.asignatura} - Promedio:  {item.calificación}</li>
      ))}
    </div>
  );
};
