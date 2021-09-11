import React, { useState } from "react";

export const UploadPDF = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid file");
      }
    } else {
      console.log("select your file");
    }
  };

  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      console.log(pdfFile);
    }
  };

  return (
    <div>
      <form
        className="form-group"
        method="post"
        action="/pdf"
        encType="multipart/form-data"
        onSubmit={handlePdfFileSubmit}
      >
        <input
          type="file"
          className="form-control"
          name="inputFile"
          onChange={handlePdfFileChange}
        />
        {pdfFileError && (
          <div className="alert alert-danger">{pdfFileError}</div>
        )}
        <button className="btn btn-outline-danger btn-block" type="submit">
           Generar
        </button>
      </form>
    </div>
  );
};
