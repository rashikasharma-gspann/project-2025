import * as XLSX from "xlsx";
import * as fs from "fs"; 

export function writeResultToExcel(filePath: string, sheetName: string, rowData: any) {
  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    worksheet = workbook.Sheets[sheetName];
  } else {
   
    workbook = XLSX.utils.book_new();
  }

 
  if (!worksheet) {
    worksheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
  }

  
  const existingData = XLSX.utils.sheet_to_json(worksheet);

  
  existingData.push(rowData);

  
  const newSheet = XLSX.utils.json_to_sheet(existingData);
  workbook.Sheets[sheetName] = newSheet;

  
  XLSX.writeFile(workbook, filePath);
}