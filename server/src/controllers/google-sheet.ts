import { TryCatch } from "../midddlewares/error";
import { transformSheetData } from "../utils/filter-data";
import ErrorHandler from "../utils/utility-class";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const saveGoogleSheetToDB = TryCatch(async (req, res, next) => {
  const rawData = req.body;
  // Extract the sheet data and store it in db
  const transformedData = transformSheetData(rawData);
  if (!transformedData) {
    return next(new ErrorHandler("Invalid data", 400));
  }

  console.log(transformedData);

  // Check if announcements exist and is an array
  if (Array.isArray(transformedData.annoucements)) {
    for (const announcement of transformedData.annoucements) {
      await prisma.announcement.create({
        data: {
          description: announcement,
        },
      });
    }
  }

  // Check if googleSlideLink exists and is an array
  if (Array.isArray(transformedData.googleSlideLink)) {
    for (const link of transformedData.googleSlideLink) {
      await prisma.link.create({
        data: {
          link: link,
        },
      });
    }
  }

  console.log(transformedData);

  return res.status(200).json({
    message: "Data stored successfully",
    data: transformedData,
  });
});