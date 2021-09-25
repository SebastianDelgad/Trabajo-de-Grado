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
        action="http://127.0.0.1:5000/upload"
        method= 'POST'
        encType="multipart/form-data"
      >
        <input
          type="file"
          name="archivo"
        />
       <input type="submit"></input>
      </form>
    </div>
  );
};
