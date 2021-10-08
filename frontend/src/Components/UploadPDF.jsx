import React, { useState } from "react";
import { storage } from "../firebase";

export const UploadPDF = () => {

  

  const [txt, setTxt] = useState("");
  const handleTxtFileChange = (e) => {
    setTxt(e.target.files[0])
  }
  const upload = () => {
    if (txt == null) return;
    storage.ref(`/PDF/${txt.name}`).put(txt).on("state_changed", alert("Archivo almacenado y se está evaluando"), alert);
  };

  return (
    <div>
      <form
        action="http://127.0.0.1:5000/upload"
        method="POST"
        encType="multipart/form-data"
      >
        <input type="file" name="archivo" onChange={handleTxtFileChange} />
        <input className ="btn btn-outline-danger btn-block" type="submit" onClick={upload}></input>
      </form>
    </div>
  );
};
