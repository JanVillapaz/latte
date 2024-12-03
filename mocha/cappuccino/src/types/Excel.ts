export interface ExcelRow {
    date: string;
    category: string;
    amount: number;
    notes?: string;
}

export interface ExcelResponse {
    success: boolean;
    message: string;
    data?: Blob;
}
