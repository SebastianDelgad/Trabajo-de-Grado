import React from "react";
import { useDropzone } from "react-dropzone";

export function Upload(props) {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>
          Arrastre y suelte el archivo aquí, o haga clic para seleccionar el
          archivo
        </p>
      </div>
      <aside>
        <h4>Archivo</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Archivos rechazados</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </section>
  );
}
