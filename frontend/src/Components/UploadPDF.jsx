import { useState } from "react";

export const UploadPDF = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  return (
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
        <div className="mt-4 mb-4 col-4 col-sm-4 col-xs-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
          <input
            className="btn btn-outline-danger btn-block"
            type="submit"
          ></input>
        </div>
      </form>
    </div>
  );
};
