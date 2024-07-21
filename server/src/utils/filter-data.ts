export function transformSheetData(data: any) {
  if (!data.Sheet1 || !Array.isArray(data.Sheet1) || data.Sheet1.length < 2) {
    throw new Error("Invalid data structure");
  }

  const [headers, ...rows] = data.Sheet1;

  const result: { [key: string]: string[] } = {};

  // Initialize arrays for each header
  headers.forEach((header: string) => {
    result[header] = [];
  });

  // Populate the arrays with non-empty values
  rows.forEach((row: string[]) => {
    row.forEach((value: string, index: number) => {
      if (value !== "") {
        result[headers[index]].push(value);
      }
    });
  });

  return result;
}
