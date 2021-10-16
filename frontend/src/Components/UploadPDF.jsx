import { useState } from "react";
import { useHistory } from "react-router-dom";

export const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  let history = useHistory();

  function redirection() {
    history.push("/classifierAlfabetico");
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();

    formData.append("File", selectedFile);

    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        console.log("Success:", result);
        if (result.ok) {
          redirection();
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="row">
      <div className="col-8 col-sm-8 col-xs-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
        <input type="file" name="File" onChange={changeHandler} />
        {isSelected ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
            <p>Filetype: {selectedFile.type}</p>
            <p>Size in bytes: {selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
      </div>
      <div className="col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <button
          className="btn btn-outline-danger btn-block"
          type="submit"
          onClick={handleSubmission}
        >
          Evaluar
        </button>
      </div>
    </div>
  );
};
