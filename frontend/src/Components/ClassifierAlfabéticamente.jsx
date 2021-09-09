import React, { useEffect, useState } from "react";

export const ClassifierAlfabéticamente = () => {
  const [equipos, setEquipo] = useState([]);

  useEffect(() => {
    //console.log("useEffect");
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("http://127.0.0.1:5000/get");
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
        <li key={item.key}> Nombre:  {item.docente} - Asignatura:  {item.asignatura} - Promedio:  {item.promedio_calificación}  - total observaciones muy negativas: {item.total_muy_neg} 
          - total observaciones negativas: {item.total_neg}  - total observaciones neutrales: {item.total_neu}  - total observaciones positivas: {item.total_pos} 
          - total observaciones muy positivas: {item.total_muy_pos}  - total observaciones {item.total_observaciones} </li>
      ))}
    </div>
  );
};
