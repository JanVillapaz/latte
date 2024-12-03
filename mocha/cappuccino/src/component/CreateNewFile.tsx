import React from "react";
import { createNewExcel } from "../services/excelService";

const CreateNewFile: React.FC = () => {
    const createFile = async () => {
        try {
            const response = await createNewExcel();
            if (response.data) {
                const url = window.URL.createObjectURL(response.data);
                const a = document.createElement("a");
                a.href = url;
                a.download = "budget.xlsx";
                a.click();
                window.URL.revokeObjectURL(url);
                alert("New budget file created!");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while creating the file.");
        }
    };

    return (
        <div className="create-new-file">
            <h2>Create a New Budget File</h2>
            <button onClick={createFile}>Generate File</button>
        </div>
    );
};

export default CreateNewFile;
