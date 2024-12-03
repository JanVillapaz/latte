import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleNewFile = () => {
        navigate("/create-new");
    };

    const handleImportFile = () => {
        navigate("/import-file");
    };

    return (
        <div className="homepage">
            <h1>Budget Management</h1>
            <p>Select an option to start:</p>
            <button onClick={handleNewFile}>Create New Budget</button>
            <button onClick={handleImportFile}>Import Existing File</button>
        </div>
    );
};

export default HomePage;
