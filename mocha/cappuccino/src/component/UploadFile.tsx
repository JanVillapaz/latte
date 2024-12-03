import { FC, useState, ChangeEvent, ReactElement } from "react";
import { importExcelFile } from "../services/excelService";

const FileUpload: FC = (): ReactElement => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const uploadFile = async () => {
        if (!file) {
            alert("Please select a file first.");
            return;
        }
        try {
            await importExcelFile(file);
            alert("File uploaded successfully!");
        } catch (error) {
            console.error(error);
            alert("An error occurred while uploading the file.");
        }
    };

    return (
        <div className="file-upload">
            <h2>Import Existing Budget File</h2>
            <input type="file" accept=".xlsx" onChange={handleFileChange}/>
            <button onClick={uploadFile}>Upload File</button>
        </div>
    );
};

export default FileUpload;