import { ExcelResponse } from "../types/Excel";

const BASE_URL = "http://localhost:8080/api/excel";

export const createNewExcel = async (): Promise<ExcelResponse> => {
    // const response = await fetch(`${BASE_URL}/new`, { method: "POST" });
    const response = await fetch(`${BASE_URL}/generate-file`, { method: "POST" });

    if (!response.ok) {
        throw new Error("Failed to create a new Excel file.");
    }

    const blob = await response.blob();
    return { success: true, message: "File created successfully.", data: blob };
};

export const importExcelFile = async (file: File): Promise<ExcelResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${BASE_URL}/import`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to import Excel file.");
    }

    return { success: true, message: "File imported successfully." };
};