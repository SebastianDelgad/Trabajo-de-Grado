import React from "react";
import { useDropzone } from "react-dropzone";

export function Upload(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>
          Arrastre y suelte algunos archivos aquí, o haga clic para seleccionar
          archivos
        </p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
