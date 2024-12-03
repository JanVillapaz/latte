package com.apollojan.matcha.controller;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

@RestController
@RequestMapping("/api/excel")
public class ExcelController {

    @PostMapping("/new")
    public ResponseEntity<Resource> createNewExcel() throws IOException {
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Budget");

        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("Date");
        headerRow.createCell(1).setCellValue("Category");
        headerRow.createCell(2).setCellValue("Amount");
        headerRow.createCell(3).setCellValue("Notes");

        File tempFile = File.createTempFile("budget_", ".xlsx");
        tempFile.deleteOnExit(); // Ensure cleanup

        try (FileOutputStream fos = new FileOutputStream(tempFile)) {
            workbook.write(fos);
            workbook.close();
        }

        Resource resource = new UrlResource(tempFile.toURI());

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"budget.xlsx\"")
                .body(resource);
    }


    @PostMapping("/generate-file")
    public ResponseEntity<String> generateFile() {
        try {
            // Create the workbook and sheets
            Workbook workbook = new XSSFWorkbook();
            Sheet currentMonthSheet = workbook.createSheet("Current Month");
            Sheet previousMonthsSheet = workbook.createSheet("Previous Months");
            Sheet comparisonSheet = workbook.createSheet("Comparison");

            // Populate the "Current Month" sheet with headers
            Row headerRow = currentMonthSheet.createRow(0);
            headerRow.createCell(0).setCellValue("Date");
            headerRow.createCell(1).setCellValue("Description");
            headerRow.createCell(2).setCellValue("Category");
            headerRow.createCell(3).setCellValue("Amount");

            // Populate the "Previous Months" sheet with headers
            Row prevHeaderRow = previousMonthsSheet.createRow(0);
            prevHeaderRow.createCell(0).setCellValue("Month");
            prevHeaderRow.createCell(1).setCellValue("Total Expenses");

            // Populate the "Comparison" sheet with example headers
            Row comparisonHeaderRow = comparisonSheet.createRow(0);
            comparisonHeaderRow.createCell(0).setCellValue("Month");
            comparisonHeaderRow.createCell(1).setCellValue("Total Expenses");
            comparisonHeaderRow.createCell(2).setCellValue("Difference from Previous Month");

            // Write the workbook to a file
            File file = new File("budget.xlsx");
            FileOutputStream fos = new FileOutputStream(file);
            workbook.write(fos);
            fos.close();

            return ResponseEntity.ok("File generated successfully!");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while creating the file.");
        }
    }

}