const { google } = require("googleapis");


async function getValues(apiKey, spreadsheetId, range) {
  const sheets = google.sheets({ version: "v4", auth: apiKey });

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const numRows = response.data.values ? response.data.values.length : 0;
    console.log(`${numRows} rows retrieved.`);
    return response.data;
  } catch (err) {
    console.error("The API returned an error:", err);
    throw err;
  }
}

// Usage
const API_KEY = "AIzaSyBwh2oNKj-73qx2LfprAjlo4Xa3SqCiDV4";
const SPREADSHEET_ID = '1IZmAvtpfItZ1k8ZL75a0kKoh4qTBVohPWIoNMwnaxOM';
const RANGE = 'Sheet1!A:Z';



async function  processedData(){
  const data = await getValues(API_KEY, SPREADSHEET_ID, RANGE)

  const rawData = data;
  
  const processedData = rawData.values[0].reduce((acc, header, index) => {
    acc[header] = rawData.values.slice(1).map(row => row[index]);
    return acc;
  }, {});

  console.log(processedData);
  
  // console.log(JSON.stringify(processedData, null, 2));
  
}  

  
processedData();