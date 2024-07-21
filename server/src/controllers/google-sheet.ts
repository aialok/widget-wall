import { TryCatch } from "../midddlewares/error";
import { transformSheetData } from "../utils/filter-data";
import ErrorHandler from "../utils/utility-class";

export const saveGoogleSheetToDB = TryCatch(async (req, res, next) => {
  const rawData = req.body;
  // Extract the sheet data and store it in db
  const transformedData = transformSheetData(rawData);

  // Store in DB

  console.log(transformedData);

  return res.status(200).json({
    message: "Data stored successfully",
    data: transformedData,
  });
});
