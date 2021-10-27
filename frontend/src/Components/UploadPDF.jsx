import { useState } from "react";

export const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [cargando, setCargando] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const submitFile = () => {
    setCargando(true);
  };

  return (
    <div className="container mt-3 bg-light rounded-6">
      <div className="row">
        <form
          action="http://127.0.0.1:5000/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="mt-4 mb-4 col-8 col-sm-8 col-xs-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
            <input type="file" name="File" onChange={changeHandler} />
            {isSelected ? (
              <div>
                <p>Tamaño en bytes: {selectedFile.size}</p>
                <p>
                  Fecha de modificación:{" "}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
          <div className="mt-4 mb-4 col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <input
              onClick={submitFile}
              className="btn btn-outline-danger btn-block"
              type="submit"
            ></input>
          </div>
          {cargando ? (
              <div class="spinner-border text-danger" role="status">
                 <span class="visually-hidden">Loading...</span>
              </div>
            ) : (
              <p></p>
            )}
        </form>
      </div>
    </div>
  );
};
