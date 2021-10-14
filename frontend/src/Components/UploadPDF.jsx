import React, {useState} from 'react';
import axios from 'axios';
import { storage } from "../firebase";

export const UploadPDF = () => {
  const [txt, setTxt] = useState("");
	const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  
	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

  const upload = () => {
    if (txt == null) return;
    storage.ref(`/PDF/${txt.name}`).put(txt).on("state_changed", alert("Archivo almacenado y se está evaluando, tenga paciencia"), alert);
  };

	const handleSubmission = () => {
		const formData = new FormData();
    upload()

		formData.append('File', selectedFile);

		axios.post("http://127.0.0.1:5000/upload", formData)
    
			.then(result => 
				console.log('Success:', result)
			)
			.catch(error => 
				console.error('Error:', error)
			);
	};

	return(
   <div>
			<input type="file" name="File" onChange={changeHandler} />
			{isSelected ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button  className ="btn btn-outline-danger btn-block" type="submit" onClick={handleSubmission}>Evaluar</button>
			</div>
		</div>
	)
};
