import React, { useEffect, useState, setState } from "react";
import axios from "axios";

export const ClassifierAlfabéticamente = () => {
  const [getMessage, setGetMessage] = useState();

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/')
      .then((response) => response.data)
      .then((data) => {
        setGetMessage(data);
        console.log(this.state.getMessage);
      });

    // [...]
  }, []);

  return <div> Cargando {getMessage}</div>;
};
